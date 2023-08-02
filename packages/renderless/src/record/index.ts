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

export const calcRecordTime = ({ state }) => (recording = false) => {
  state.record.now = Date.now()
  if (!state.record.fn) {
    state.record.fn = () => {
      const cur = Date.now()
      state.record.currentTime += (cur - state.record.now) / 1000
      state.record.now = cur
    }
  }
  if (!recording) {
    state.record.timer = setInterval(state.record.fn, 1000)
  } else {
    clearInterval(state.record.timer)
    state.record.timer = null
    state.record.fn()
  }
}

export const toogleRecord = ({ state, api, emit, constants, props }) => ($event) => {
  const { READY, RECORDING, PAUSE } = constants.STATUS
  if (props.isHwh5) {
    if (state.record.status === READY) {
      api.triggerClick($event, constants.HWH5_STATUS.START, () => state.record.status = RECORDING)
    } else if (state.record.status === PAUSE) {
      api.triggerClick($event, constants.HWH5_STATUS.CONTINUE, () => state.record.status = RECORDING)
    } else {
      api.triggerClick($event, constants.HWH5_STATUS.PAUSE, () => state.record.status = PAUSE)
    }
  } else {
    if (state.record.status === READY) {
      !state.recorder &&
        (state.recorder = new Record({
          onMediaProgress: (analyser, audioContext) => {
            state.record.currentTime = audioContext.currentTime
            state.voiceNum = calcVoice(analyser)
          },
          onstop: (file) => emit('confirm', file)
        }))
      state.recorder.start().then((isSuccess) => {
        if (!isSuccess) {
          return emit('error')
        }
        state.record.status = RECORDING
      })
    } else if (state.record.status === PAUSE) {
      state.record.status = RECORDING
      state.recorder.resume()
    } else {
      state.record.status = PAUSE
      state.recorder.pause()
    }
  }
}

export const handleConfirm = ({ state, emit, props, constants, api }) => ($event) => {
  if (props.isHwh5) {
    api.triggerClick($event, constants.HWH5_STATUS.CANCEL, () => emit('update:modelValue', false))
  } else {
    state.isClickConfirm = true
    emit('update:modelValue', false)
  }
}

export const handleCancel = ({ emit, props, constants, api, state }) => ($event) => {
  if (props.isHwh5) {
    api.triggerClick($event, constants.HWH5_STATUS.CANCEL, () => emit('update:modelValue', false))
  } else {
    state.isClickConfirm = true
    emit('update:modelValue', false)
  }
}

export const triggerClick = ({ state }) => ($event, type, cb) => {
  const res = state.listeners['trigger-click'] && state.listeners['trigger-click']($event, type)
  if (res && res.then) {
    res.then(() => cb && cb())
  } else {
    cb && cb()
  }
}

export const watchModelValue = ({ api }) => (value) => !value && api.resetRecord()

export const watchRecordStatus = ({ api, props, constants, state }) => (val) => {
  if (val === constants.STATUS.RECORDING) {
    props.isHwh5 && api.calcRecordTime()
    api.renderAudioGraph()
  } else if (val === constants.STATUS.PAUSE) {
    props.isHwh5 && api.calcRecordTime(true)
  }
  cancelAnimationFrame(state.handlerId)
}

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

  const voiceMatch = [0, 500, 1000, 5000, 10000]
  const ismatch = voiceMatch.some((val, idx) => {
    if (highValue <= val) {
      return (voiceNum = idx + 1 + (val === 0 ? lowValue / 1000 : highValue / val))
    }
  })
  !ismatch && (voiceNum = 6)

  return voiceNum
}

const getOptions = ({ canvasCtx, width }) => {
  const createStrokeStyle = ({ canvasCtx, width, colors = [] }) => {
    const grd = canvasCtx.createLinearGradient(0, 0, width, 0)
    colors.forEach(({ n, color }) => grd.addColorStop(n, color))
    return grd
  }

  const optionList = [
    { q: 0, a: 8, w: 1 / 35, speed: -0.05 },
    { q: 4, a: 7, w: 1 / 35, speed: -0.1 },
    { q: 10, a: 6, w: 1 / 35, speed: -0.3 }
  ]

  const colorOptions = [
    [
      { n: 0, color: 'rgba(0, 109, 213, 0)' },
      { n: 0.5, color: 'rgba(0, 109, 213, 0.8)' },
      { n: 1, color: 'rgba(0, 109, 213, 0)' }
    ],
    [
      { n: 0, color: 'rgba(0, 14, 215, 0)' },
      { n: 0.5, color: 'rgba(0, 14, 215, 0.4)' },
      { n: 1, color: 'rgba(0, 14, 215, 0)' }
    ],
    [
      { n: 0, color: 'rgba(0, 109, 213, 0)' },
      { n: 0.5, color: 'rgba(0, 109, 213, 0.3)' },
      { n: 1, color: 'rgba(0, 109, 213, 0)' }
    ]
  ]

  optionList.forEach((option, i) => {
    option.strokeStyle = createStrokeStyle({
      canvasCtx,
      width,
      colors: colorOptions[i]
    })
  })

  return optionList
}

export const renderAudioGraph = ({ vm, nextTick, state, props }) => () => {
  nextTick(() => {
    let canvas = vm.$refs.canvas
    if (canvas) {
      const height = canvas.offsetHeight
      const width = canvas.offsetWidth
      canvas.height = height
      canvas.width = width
      const canvasCtx = canvas.getContext('2d')
      const optionList = getOptions({ canvasCtx, width })

      const draw = () => {
        state.handlerId = requestAnimationFrame(draw)
        let voiceNum = 1
        if (!props.isHwh5 && state.voiceNum) {
          voiceNum = state.voiceNum.toFixed(1)
        }
        canvasCtx.clearRect(0, 0, width, height)
        canvasCtx.fillStyle = '#fff'
        canvasCtx.fillRect(0, 0, width, height)

        optionList.forEach((option) => {
          const { a, w, speed, strokeStyle } = option
          canvasCtx.lineWidth = 1
          canvasCtx.strokeStyle = strokeStyle
          let x = 0
          canvasCtx.beginPath()
          canvasCtx.moveTo(x, height / 2)
          option.q += speed
          for (let x = 0; x <= width; x++) {
            const y = a * voiceNum * Math.sin(w * x + option.q) + height / 2
            canvasCtx.lineTo(x, y)
          }
          canvasCtx.stroke()
        })
      }

      draw()
    }
  })
}

export const resetRecord = ({ state, constants }) => () => {
  state.record.status = constants.STATUS.READY
  state.record.currentTime = 0
  state.isClickConfirm && state.recorder && state.recorder.recorder && state.recorder.stop()
  state.isClickConfirm = false

  clearInterval(state.record.timer)
  state.record.timer = null
}

export const unmounted = ({ api }) => () => api.resetRecord()
