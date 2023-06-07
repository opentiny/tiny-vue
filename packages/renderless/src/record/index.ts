class Record {
  constructor(config) {
    this.recorder = null // 录音器
    this.mediaStream = null // 媒体流
    this.recorderFile = null // 录音文件
    this.audioContext = null // 媒体上下文（获取实时媒体信息）
    this.timeId = null
    this.config = config
  }

  start() {
    return this.getUserMedia().then(({ stream }) => {
      if (stream) {
        this.initMideaRecoder(stream)
        this.initAudioContext(stream)
      }
      return !!stream
    })
  }

  getUserMedia() {
    return new Promise((resolve) => {
      navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia ||
        window.getUserMedia

      const containers = { audio: true }

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia(containers)
          .then((stream) => resolve({ stream }))
          .catch(resolve)
      } else if (navigator.getUserMedia) {
        navigator.getUserMedia(containers, (stream) => resolve({ stream }), resolve)
      } else {
        resolve(new Error('Not support userMedia'))
      }
    })
  }

  initMideaRecoder(stream) {
    this.recorder = new MediaRecorder(stream)
    this.mediaStream = stream

    let chunks = []

    this.recorder.onpause = () => {
      // do nothing
    }

    this.recorder.onresume = () => {
      // do nothing
    }

    this.recorder.ondataavailable = (e) => {
      chunks.push(e.data)
    }

    this.recorder.onstop = () => {
      this.recorderFile = new Blob(chunks, { 'type': this.recorder.mimeType })
      chunks = []
      const { onstop } = this.config
      onstop && onstop(this.recorderFile)
    }

    this.recorder.onerror = () => {
      // do nothing
    }

    this.recorder.start()
  }

  stop() {
    if (this.recorder.state !== 'inactive') {
      this.recorder.stop()
      this.closeStream(this.mediaStream)
      this.audioContext.close()
    }
    clearInterval(this.timeId)
    this.timeId = null
  }

  closeStream(stream) {
    if (typeof stream.stop === 'function') {
      stream.stop()
    } else {
      let trackList = [stream.getAudioTracks(), stream.getVideoTracks()]
      trackList.forEach(
        (tracks) => tracks && tracks.forEach((track) => typeof track.stop === 'function' && track.stop())
      )
    }
  }

  pause() {
    this.recorder.pause()
    this.audioContext.suspend()
    clearInterval(this.timeId)
    this.timeId = null
  }

  resume() {
    this.recorder.resume()
    this.audioContext.resume()
    clearInterval(this.timeId)
    this.timeId = setInterval(() => this.getRealTimeAudio(), 100)
  }

  initAudioContext(stream) {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const source = this.audioContext.createMediaStreamSource(stream)

    this.analyser = this.audioContext.createAnalyser()
    source.connect(this.analyser)

    clearInterval(this.timeId)
    this.timeId = setInterval(() => this.getRealTimeAudio(), 100)
  }

  getRealTimeAudio() {
    const { onMediaProgress } = this.config
    onMediaProgress && onMediaProgress(this.analyser, this.audioContext)
  }
}

export const toogleRecord = ({ state, api, emit, constants }) => () => {
  if (state.record.status === constants.STATUS.READY) {
    !state.recorder &&
      (state.recorder = new Record({
        onMediaProgress: api.renderAudioGraph,
        onstop: (file) => emit('confirm', file)
      }))
    state.recorder.start().then((isSuccess) => {
      if (!isSuccess) {
        return emit('error')
      }
      state.record.status = constants.STATUS.RECORDING
    })
  } else if (state.record.status === constants.STATUS.PAUSE) {
    state.record.status = constants.STATUS.RECORDING
    state.recorder.resume()
  } else {
    state.record.status = constants.STATUS.PAUSE
    state.recorder.pause()
  }
}

export const handleConfirm = ({ state, emit }) => () => {
  state.isClickConfirm = true
  emit('update:modelValue', false)
}

export const watchModelValue = ({ api }) => (value) => !value && api.resetRecord()

const calcVoice = (analyser) => {
  const dataArray = new Uint8Array(analyser.fftSize)
  analyser.getByteTimeDomainData(dataArray)

  let highValue = 0
  let lowValue = 0
  for (let i = 0; i < analyser.fftSize; i++) {
    highValue += dataArray[i] > 128 ? dataArray[i] - 128 : 0
    lowValue += dataArray[i] < 128 ? 128 - dataArray[i] : 0
  }

  let voiceNum = 1

  const voiceMatch = [0, 100, 500, 1000, 10000]
  const ismatch = voiceMatch.some((val, idx) => {
    if (highValue <= val) {
      return (voiceNum = idx + 1 + (val === 0 ? lowValue / 1000 : highValue / val))
    }
  })
  !ismatch && (voiceNum = 6)

  const val = voiceNum * 5
  let result = [-val, 2 * val, -3 * val]

  return result.concat(
    result
      .slice()
      .reverse()
      .map((times) => -times)
  )
}

export const renderAudioGraph = ({ vm, state }) => (analyser, audioContext) => {
  state.record.currentTime = audioContext.currentTime

  let canvas = vm.$refs.canvas
  if (canvas) {
    const height = canvas.offsetHeight
    const width = canvas.offsetWidth
    canvas.height = height
    canvas.width = width

    const canvasCtx = canvas.getContext('2d')
    canvasCtx.clearRect(0, 0, width, height)
    canvasCtx.fillStyle = '#fff'
    canvasCtx.fillRect(0, 0, width, height)

    canvasCtx.lineWidth = 1

    const grd = canvasCtx.createLinearGradient(0, 0, width, 0)
    grd.addColorStop(0, 'rgba(0, 103, 209, 0.1)')
    grd.addColorStop(0.5, 'rgba(0, 103, 209, 1)')
    grd.addColorStop(1, 'rgba(0, 103, 209, 0.1)')
    canvasCtx.strokeStyle = grd

    let x = 0

    canvasCtx.beginPath()

    canvasCtx.moveTo(x, height / 2)

    const tops = calcVoice(analyser)

    const space = width / 12

    for (let j = 0; j < 6; j++) {
      canvasCtx.quadraticCurveTo((x += space), height / 2 - tops[j], (x += space), height / 2)
    }

    canvasCtx.lineTo(width, height / 2)
    canvasCtx.stroke()
  }
}

export const resetRecord = ({ state, constants }) => () => {
  state.record.status = constants.STATUS.READY
  state.record.currentTime = 0
  state.isClickConfirm && state.recorder && state.recorder.stop()
  state.isClickConfirm = false
}

export const unmounted = ({ api }) => () => api.resetRecord()
