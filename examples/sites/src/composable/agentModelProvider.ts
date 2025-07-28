import { createClient, createInMemoryTransport, createMCPHost } from '@opentiny/next-sdk'
import type { ChatCompletionResponse } from '@opentiny/tiny-robot-kit'
import type { ChatCompletionRequest } from '@opentiny/tiny-robot-kit'
import type { StreamHandler } from '@opentiny/tiny-robot-kit'
import { BaseModelProvider } from '@opentiny/tiny-robot-kit'
import type { AIModelConfig } from '@opentiny/tiny-robot-kit'
import { reactive } from 'vue'
import { $local, isEnvLLMDefined } from './utils'

// 创建nextClient
const nextClient = createClient(
  {
    name: 'next-sdk',
    version: '1.0.0'
  },
  {
    capabilities: {
      roots: { listChanged: true },
      sampling: { createMessage: true },
      elicitation: { elicit: true }
    }
  }
)

nextClient.use(createInMemoryTransport())

nextClient.connectTransport()

let lastContent: any
let lastToolCall: any

const onToolCallChain = (extra: any, handler: StreamHandler) => {
  lastContent = null
  const { delta } = extra
  const infoItem = reactive({
    id: delta.toolCall.id,
    title: delta.toolCall.function.name,
    content: delta.toolCall.callToolContent
      ? '工具调用结果：' + delta.toolCall.callToolContent
      : `\n正在调用工具${delta.toolCall.function.name}...`
  })
  if (!lastToolCall || lastToolCall.items?.[0]?.id !== infoItem.id) {
    lastToolCall = {
      type: 'chain',
      items: [infoItem]
    }

    handler.onMessage(lastToolCall)
  } else {
    const find = lastToolCall.items.find((item: any) => item.id === infoItem.id)
    if (find) {
      find.content = infoItem.content
    } else {
      lastToolCall.items.push(infoItem)
    }
  }
}

const mcpHost = createMCPHost({
  llmOption: {
    url: isEnvLLMDefined ? import.meta.env.VITE_LLM_URL : $local.llmUrl || '',
    apiKey: isEnvLLMDefined ? import.meta.env.VITE_LLM_API_KEY : $local.llmApiKey || '',
    dangerouslyAllowBrowser: true,
    model: 'deepseek-chat',
    llm: 'deepseek'
  },
  mcpClients: [nextClient]
})

export class AgentModelProvider extends BaseModelProvider {
  constructor(config: AIModelConfig) {
    super(config)
  }

  /** 同步请示不需要实现 */
  chat(request: ChatCompletionRequest): Promise<ChatCompletionResponse> {
    throw new Error('Method not implemented.')
  }

  async chatStream(request: ChatCompletionRequest, handler: StreamHandler): Promise<void> {
    // 验证请求的messages属性，必须是数组，且每个消息必须有role\content属性
    const lastMessage = request.messages[request.messages.length - 1].content
    lastToolCall = null
    await mcpHost.chatStream(lastMessage, {
      onData: (data: any) => {
        if (data.delta.role === 'tool') {
          onToolCallChain(data, handler)
        } else {
          if (!lastContent) {
            lastContent = reactive({
              type: 'markdown',
              content: data.delta.content
            })
            handler.onMessage(lastContent)
          } else {
            lastContent.content += data.delta.content
          }
        }
      },
      onDone: () => {
        lastContent = null
        lastToolCall = null
        handler.onDone()
      },
      onError: (error: any) => {
        lastContent = null
        lastToolCall = null
        handler.onError(error)
      }
    })
  }
}
