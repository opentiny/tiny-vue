import type { AIModelConfig } from '@opentiny/tiny-robot-kit'
import { AIClient, useConversation } from '@opentiny/tiny-robot-kit'
import { IconAi, IconUser } from '@opentiny/tiny-robot-svgs'
import { h, nextTick, onMounted, reactive, ref, toRaw, watch } from 'vue'
import { DifyModelProvider } from './DifyModelProvider.js'
import type { SuggestionItem } from '@opentiny/tiny-robot'

const difyConfig: AIModelConfig = {
  provider: 'custom',
  apiUrl: 'https://api.dify.ai/v1',
  apiKey: 'app-H0VJI4LqZ4KskdcA5a07pjXf'
}
export function useTinyRobot() {
  const client = new AIClient({
    providerImplementation: new DifyModelProvider(difyConfig),
    ...difyConfig
  })

  const fullscreen = ref(false)
  const show = ref(true)

  const aiAvatar = h(IconAi, { style: { fontSize: '32px' } })
  const userAvatar = h(IconUser, { style: { fontSize: '32px' } })
  const welcomeIcon = h(IconAi, { style: { fontSize: '48px' } })

  const promptItems = [
    {
      label: '识别网页的内容',
      description: '公司人员表有多少列，有多少行数据，帮我统计一下！',
      icon: h('span', { style: { fontSize: '18px' } }, '🧠')
    },
    {
      label: '智能操作网页',
      description: '请勾选公司人员表最后一行”！',
      icon: h('span', { style: { fontSize: '18px' } }, '🤔')
    }
  ]
  const handlePromptItemClick = (ev, item) => {
    sendMessage(item.description)
  }

  const { messageManager, createConversation } = useConversation({ client })

  const randomId = () => Math.random().toString(36).substring(2, 15)

  const currentMessageId = ref('')

  const { messages, messageState, inputMessage, sendMessage, abortRequest } = messageManager

  const roles = {
    assistant: {
      type: 'markdown',
      placement: 'start',
      avatar: aiAvatar,
      maxWidth: '80%'
    },
    user: {
      placement: 'end',
      avatar: userAvatar,
      maxWidth: '80%'
    }
  }

  const showHistory = ref(false)
  const historyData = reactive([])

  // 建议按钮组，设置对话的模板
  const suggestionPillItems = [
    {
      id: '1',
      text: '公司人员表',
      icon: h('span', { style: { fontSize: '18px' } }, '🔍')
    },
    {
      id: '2',
      text: '城市下拉框',
      icon: h('span', { style: { fontSize: '18px' } }, '🛠️')
    }
  ]

  function handleSuggestionPillItemClick(item: SuggestionItem) {
    let templateText = `请对 [目标组件] ,执行 [操作]`
    let currentInitialValue = { 目标组件: item.text, 操作: '' }

    if (senderRef.value) {
      senderRef.value.setTemplate(templateText, currentInitialValue)
    }
  }
  watch(
    () => messages.value[messages.value.length - 1]?.content,
    () => {
      if (!messages.value.length) {
        return
      }

      if (messages.value.length === 1) {
        currentMessageId.value = randomId()
      }

      const allSessions = historyData.flatMap((item) => item.items)
      const currentSession = allSessions.find((item) => item.id === currentMessageId.value)

      const data = toRaw(messages.value)
      if (!currentSession) {
        const today = historyData.find((item) => item.group === '今天')
        if (today) {
          today.items.unshift({ title: messages.value[0].content, id: currentMessageId.value, data })
        } else {
          historyData.unshift({
            group: '今天',
            items: [{ title: messages.value[0].content, id: currentMessageId.value, data }]
          })
        }
      } else {
        currentSession.data = data
      }
    }
  )

  const handleHistorySelect = (item) => {
    currentMessageId.value = item.id
    messages.value = item.data
    showHistory.value = false
  }

  const senderRef = ref(null)
  const currentTemplate = ref('')
  const suggestionOpen = ref(false)

  // 设置指令
  const handleFillTemplate = (templateText) => {
    setTimeout(() => {
      currentTemplate.value = templateText
      inputMessage.value = ''

      // 等待DOM更新后激活第一个字段
      setTimeout(() => {
        senderRef.value?.activateTemplateFirstField()
      }, 100)
    }, 300)
  }

  // 清除当前指令
  const clearTemplate = () => {
    // 清空指令相关状态
    currentTemplate.value = ''

    // 确保重新聚焦到输入框
    nextTick(() => {
      senderRef.value?.focus()
    })
  }

  // 发送消息
  const handleSendMessage = () => {
    sendMessage(inputMessage.value)

    clearTemplate()
  }

  const handleMessageKeydown = (event, triggerFn, suggestionKeyDown) => {
    // 如果指令面板已打开，交给 suggestion 组件处理键盘事件
    if (suggestionOpen.value) {
      suggestionKeyDown(event)
      return
    }

    // 如果按下斜杠键并且不在指令编辑模式，触发指令面板
    if (event.key === '/' && !currentTemplate.value) {
      triggerFn({
        text: '',
        position: 0
      })
    }

    // ESC 键清除当前指令
    if (event.key === 'Escape' && currentTemplate.value) {
      event.preventDefault()
      clearTemplate()
    }
  }

  watch(
    () => inputMessage.value,
    (value) => {
      // 如果指令面板已打开，并且指令为空，关闭指令面板
      if (suggestionOpen.value && value === '') {
        suggestionOpen.value = false
      }
    }
  )

  // 页面加载完成后自动聚焦输入框
  onMounted(() => {
    setTimeout(() => {
      senderRef.value?.focus()
    }, 500)
  })

  return {
    client,
    fullscreen,
    show,
    aiAvatar,
    userAvatar,
    welcomeIcon,
    promptItems,

    messageManager,
    createConversation,
    messages,
    messageState,
    inputMessage,
    sendMessage,
    abortRequest,
    roles,
    showHistory,
    historyData,
    currentMessageId,
    handlePromptItemClick,
    handleHistorySelect,

    senderRef,
    currentTemplate,
    suggestionOpen,
    handleFillTemplate,
    clearTemplate,
    handleSendMessage,
    handleMessageKeydown,
    suggestionPillItems,
    handleSuggestionPillItemClick
  }
}
