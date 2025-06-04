import type { ChatCompletionRequest } from '@opentiny/tiny-robot-kit'
import type { AIModelConfig } from '@opentiny/tiny-robot-kit'
import type { ChatCompletionResponse } from '@opentiny/tiny-robot-kit'
import type { StreamHandler } from '@opentiny/tiny-robot-kit'
import { BaseModelProvider } from '@opentiny/tiny-robot-kit'
import { handleSSEStream } from './utils.js'

/**
 * 对接AIClient的自定义 Dify 大模型服务
 *
 * const client = new AIClient({
 *  provider: 'custom',
 *  providerImplementation: new CustomModelProvider( config )
 * });
 */
export class DifyModelProvider extends BaseModelProvider {
  constructor(config: AIModelConfig) {
    super(config)
  }
  /** 同步请示不需要实现 */
  chat(request: ChatCompletionRequest): Promise<ChatCompletionResponse> {
    throw new Error('Method not implemented.')
  }

  /** 异步流式请求 */
  async chatStream(request: ChatCompletionRequest, handler: StreamHandler): Promise<void> {
    const { signal } = request
    this.validateRequest(request)

    try {
      // 验证请求的messages属性，必须是数组，且每个消息必须有role\content属性
      const lastMessage = request.messages[request.messages.length - 1].content

      // 模拟异步流式响应
      const response = await fetch(`${this.config.apiUrl}/chat-messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Accept': 'text/event-stream'
        },
        body: JSON.stringify({
          query: lastMessage,
          user: 'user',
          response_mode: 'streaming',
          inputs: {
            sessionId: window.$sessionId
          }
        })
      })

      await handleSSEStream(response, handler, signal)
    } catch (error) {
      if (signal && signal.aborted) {
        console.warn('Request was aborted:', error)
      } else {
        console.error('Error in chatStream:', error)
        // handler.onError(handleRequestError(error))
      }
    }
  }
}
