/**
 * 工具函数模块
 * 提供一些实用的辅助函数
 */

import type { ChatMessage, ChatCompletionResponse, StreamHandler } from '@opentiny/tiny-robot-kit'
import type { ChatCompletionRequest } from '@opentiny/tiny-robot-kit'
import type { Ref } from 'vue'

export const globalConversation = {
  id: ''
}
/**
 * 处理SSE流式响应
 * @param response fetch响应对象
 * @param handler 流处理器
 */
export async function handleSSEStream(
  response: Response,
  handler: StreamHandler,
  message: Ref<ChatCompletionRequest['messages']>,
  signal?: AbortSignal
): Promise<void> {
  // 获取ReadableStream
  const reader = response.body?.getReader()
  if (!reader) {
    throw new Error('Response body is null')
  }

  // 处理流式数据
  const decoder = new TextDecoder()
  let buffer = ''

  if (signal) {
    signal.addEventListener(
      'abort',
      () => {
        reader.cancel().catch((err) => console.error('Error cancelling reader:', err))
      },
      { once: true }
    )
  }

  let messageIndex = 0
  function printMessage(data, str: string, endln = false) {
    handler.onData({
      id: '',
      created: data.created_at,
      choices: [
        {
          index: messageIndex++,
          delta: {
            role: 'assistant',
            content: str + (endln ? '\n\n' : '')
          },
          finish_reason: null
        }
      ],
      object: '',
      model: ''
    })
  }
  try {
    while (true) {
      if (signal?.aborted) {
        await reader.cancel()
        break
      }

      const { done, value } = await reader.read()
      if (done) break

      // 解码二进制数据
      const chunk = decoder.decode(value, { stream: true })
      buffer += chunk

      // 处理完整的SSE消息
      const lines = buffer.split('\n\n')
      buffer = lines.pop() || ''

      for (const line of lines) {
        if (line.trim() === '') continue
        if (line.trim() === 'data: [DONE]') {
          handler.onDone()
          continue
        }

        try {
          // 解析SSE消息
          const dataMatch = line.match(/^data: (.+)$/m)
          if (!dataMatch) continue

          const data = JSON.parse(dataMatch[1])
          // console.log('SSE data:', data)
          if (data?.event === 'node_started') {
            printMessage(data, `${data.data.title} 节点运行...`, true)
          }
          if (data?.event === 'node_finished') {
            printMessage(
              data,
              `${data.data.title} 节点结束\n\n` +
                (data.data.node_type === 'answer' ? `${data.data.outputs.answer}` : '')
            )
          }
          if (data?.event === 'agent_log' && data.data.status === 'success' && data.data.label.startsWith('CALL')) {
            printMessage(data, `--${data.data.label}(${JSON.stringify(data.data.data.output.tool_call_input)})`, true)
          }
        } catch (error) {
          console.error('Error parsing SSE message:', error)
        }
      }
    }

    if (buffer.trim() === 'data: [DONE]' || signal?.aborted) {
      handler.onDone()
    }
  } catch (error) {
    if (signal?.aborted) return
    throw error
  }
}

/**
 * 格式化消息
 * 将各种格式的消息转换为标准的ChatMessage格式
 * @param messages 消息数组
 * @returns 标准格式的消息数组
 */
export function formatMessages(messages: Array<ChatMessage | string>): ChatMessage[] {
  return messages.map((msg) => {
    // 如果已经是标准格式，直接返回
    if (typeof msg === 'object' && 'role' in msg && 'content' in msg) {
      return {
        role: msg.role,
        content: String(msg.content),
        ...(msg.name ? { name: msg.name } : {})
      }
    }

    // 如果是字符串，默认为用户消息
    if (typeof msg === 'string') {
      return {
        role: 'user',
        content: msg
      }
    }

    // 其他情况，尝试转换为字符串
    return {
      role: 'user',
      content: String(msg)
    }
  })
}

/**
 * 从响应中提取文本内容
 * @param response 聊天完成响应
 * @returns 文本内容
 */
export function extractTextFromResponse(response: ChatCompletionResponse): string {
  if (!response.choices || !response.choices.length) {
    return ''
  }

  return response.choices[0].message?.content || ''
}
