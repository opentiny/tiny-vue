import {fromMarkdown} from 'mdast-util-from-markdown'
import {OpenAI} from 'openai'
import {visitParents} from 'unist-util-visit-parents'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  ...(process.env.OPENAI_PROXY
    ? {
        baseURL: `${process.env.OPENAI_PROXY}/v1`,
      }
    : {}),
})

export async function chatLLM(
  messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[],
  model: OpenAI.Chat.ChatCompletionCreateParamsNonStreaming['model'],
) {
  const response = await openai.chat.completions.create({
    model,
    messages,
  })

  return response.choices
}

export function extractCode(choices: OpenAI.Chat.Completions.ChatCompletion.Choice[]) {
  const codeBlocks: string[] = []
  const tree = fromMarkdown(choices[0].message.content || '')

  visitParents(tree, 'code', (node) => {
    codeBlocks.push(node.value.trim())
  })

  if (codeBlocks.length !== 1) {
    throw new Error(`invalid code blocks ${JSON.stringify(codeBlocks)}`)
  }

  return codeBlocks[0]
}
