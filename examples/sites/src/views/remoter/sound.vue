<template>
  <div class="sound-container">
    <div class="messages-container" ref="messagesContainer">
      <template v-if="messages && messages.length > 0">
        <message-card
          v-for="(msg, index) in messages"
          :key="index"
          :role="msg.role === 'system' ? 'assistant' : msg.role"
          :message="msg.content"
          :timestamp="messageTimestamps[index]"
        />
      </template>
      <div v-else class="empty-message">
        <p>暂无对话记录</p>
      </div>
    </div>
    <div class="sound-box">
      <div class="recording-status" v-show="isTalk">
        <div class="wave-animation"></div>
        <span>{{ recordingTime }}s</span>
      </div>
      <tiny-button
        @touchstart.prevent="handleStart"
        @touchend.prevent="handleEnd"
        @touchcancel.prevent="handleEnd"
        :type="isTalk ? 'danger' : 'info'"
        class="talk-button"
        size="large"
        :reset-time="0"
        :disabled="!isSupported"
      >
        {{ buttonText }}
      </tiny-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, watch, nextTick } from 'vue'
import { TinyButton, TinyNotify } from '@opentiny/vue'
import { useTinyRobot } from '../../composable/useTinyRobot'
import MessageCard from '../../components/MessageCard.vue'

// 类型定义
interface SpeechRecognitionResult {
  [index: number]: {
    transcript: string
    confidence: number
  }
  isFinal?: boolean
  length: number
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult
  length: number
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string
  message: string
}

// 获取SpeechRecognition构造函数
const getSpeechRecognition = () => {
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition ||
    (window as any).mozSpeechRecognition ||
    (window as any).msSpeechRecognition
  return SpeechRecognition
}

// 状态管理
const isTalk = ref(false)
const isSupported = ref(false)
const recordingTime = ref(0)
const maxRecordingTime = 60
let recognition: any = null
let recordingTimer: number | null = null
const messagesContainer = ref<HTMLElement | null>(null)
const messageTimestamps = ref<number[]>([])
const { sendMessage, messages } = useTinyRobot()
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

// 计算属性
const buttonText = computed(() => {
  if (!isSupported.value) return '当前浏览器不支持语音识别'
  if (isTalk.value) return `录音中 ${recordingTime.value}s`
  return '长按说话'
})

// 监听消息变化，更新时间戳和自动滚动
watch(
  () => messages.value,
  async (newMessages) => {
    if (!newMessages) return

    // 更新时间戳
    if (messageTimestamps.value.length < newMessages.length) {
      const timestamp = Date.now()
      messageTimestamps.value = newMessages.map((_, index) => messageTimestamps.value[index] || timestamp)
    }

    // 自动滚动到底部
    await nextTick()
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  },
  { deep: true }
)

// 初始化语音识别
const initSpeechRecognition = () => {
  const SpeechRecognition = getSpeechRecognition()

  if (SpeechRecognition) {
    isSupported.value = true
    recognition = new SpeechRecognition()
    recognition.lang = 'zh-CN'
    recognition.continuous = false
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    // Safari 需要特殊处理
    if (isSafari) {
      recognition.interimResults = true
    }

    let finalTranscript = ''

    recognition.addEventListener('result', (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript
      if (transcript.trim()) {
        finalTranscript = transcript
      }
    })

    recognition.addEventListener('end', () => {
      stopRecording()
      // 确保在录音结束时发送消息
      if (finalTranscript.trim()) {
        sendMessage(finalTranscript)
        finalTranscript = ''
      }
    })

    recognition.addEventListener('error', (event: SpeechRecognitionErrorEvent) => {
      handleRecognitionError(event)
      finalTranscript = ''
    })
  } else {
    isSupported.value = false
    TinyNotify({
      type: 'error',
      title: '提示',
      message: '您的浏览器不支持语音识别，请使用Chrome、Safari或Edge浏览器',
      position: 'top-right',
      duration: 5000
    })
  }
}

// 错误处理
const handleRecognitionError = (event: SpeechRecognitionErrorEvent) => {
  stopRecording()
  let errorMessage = '语音识别出错'

  switch (event.error) {
    case 'not-allowed':
      errorMessage = '请允许浏览器使用麦克风'
      break
    case 'no-speech':
      errorMessage = '未检测到语音，请重试'
      break
    case 'network':
      errorMessage = '网络连接出错，请检查网络后重试'
      break
    case 'aborted':
      return // 用户主动取消，不显示错误
    default:
      errorMessage = `语音识别失败: ${event.message || '未知错误'}`
  }

  TinyNotify({
    type: 'error',
    title: '语音识别出错',
    message: errorMessage,
    position: 'top-right',
    duration: 3000
  })
}

// 开始录音
const handleStart = async (event: TouchEvent) => {
  event.preventDefault()
  event.stopPropagation()

  if (!isSupported.value) {
    TinyNotify({
      type: 'error',
      title: '提示',
      message: '当前浏览器不支持语音识别',
      position: 'top-right',
      duration: 3000
    })
    return
  }

  if (isTalk.value) return

  try {
    recognition.start()
    isTalk.value = true
    recordingTime.value = 0
    startRecordingTimer()
  } catch (error) {
    handleRecognitionError({
      error: 'start_error',
      message: '启动语音识别失败，请重试'
    } as SpeechRecognitionErrorEvent)
  }
}

// 结束录音
const handleEnd = () => {
  if (!isTalk.value) return
  try {
    recognition.stop()
  } catch (error) {
    console.error('停止录音失败:', error)
  }
  stopRecording()
}

// 开始计时
const startRecordingTimer = () => {
  recordingTimer = window.setInterval(() => {
    recordingTime.value++
    if (recordingTime.value >= maxRecordingTime) {
      handleEnd()
      TinyNotify({
        type: 'warning',
        title: '提示',
        message: '已达到最大录音时长',
        position: 'top-right',
        duration: 3000
      })
    }
  }, 1000)
}

// 停止录音
const stopRecording = () => {
  isTalk.value = false
  if (recordingTimer) {
    clearInterval(recordingTimer)
    recordingTimer = null
  }
}

// 初始化
initSpeechRecognition()

// 组件卸载时清理
onUnmounted(() => {
  if (recordingTimer) {
    clearInterval(recordingTimer)
  }
  if (recognition) {
    try {
      recognition.abort()
    } catch (error) {
      console.error('清理语音识别失败:', error)
    }
  }
})
</script>

<style scoped lang="less">
.sound-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;

  .messages-container {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    margin-bottom: 120px;

    .empty-message {
      text-align: center;
      color: #999;
      padding: 20px;
    }
  }

  .sound-box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 10px;
    background: white;
    padding: 10px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

    .recording-status {
      text-align: center;
      margin-bottom: 10px;

      .wave-animation {
        width: 100px;
        height: 20px;
        margin: 0 auto 5px;
        background: linear-gradient(90deg, #ff4d4f 25%, #ff7875 50%, #ff4d4f 75%);
        background-size: 200% 100%;
        animation: wave 2s linear infinite;
      }
    }

    .talk-button {
      width: 100%;
      margin: 20px 0;
      transition: all 0.3s;

      &:active {
        transform: scale(0.98);
      }
    }
  }
}

@keyframes wave {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
