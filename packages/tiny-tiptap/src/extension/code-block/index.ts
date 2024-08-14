import type { ExtensionOptions } from '@/types'
import { Editor, Range } from '@tiptap/core'
import type { CodeBlockLowlightOptions } from '@tiptap/extension-code-block-lowlight'
import TiptapCodeBlock from '@tiptap/extension-code-block-lowlight'
import { iconRichTextCodeBlock } from '@opentiny/vue-icon'

const CodeBlock = TiptapCodeBlock.extend<ExtensionOptions & CodeBlockLowlightOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getSlashMenus() {
        return [
          {
            priority: 60,
            icon: iconRichTextCodeBlock(),
            title: '代码块',
            keywords: ['codeblock', 'daimakuai'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).toggleCodeBlock().run()
            }
          }
        ]
      }
    }
  }
})

export default CodeBlock
export { CodeBlock, CodeBlockLowlightOptions }