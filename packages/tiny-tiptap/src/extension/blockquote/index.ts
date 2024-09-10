import type { ExtensionOptions } from '@/types'
import type { Editor, Range } from '@tiptap/core'
import type { BlockquoteOptions } from '@tiptap/extension-blockquote'
import TiptapBlockquote from '@tiptap/extension-blockquote'
import { iconRichTextQuoteText } from '@opentiny/vue-icon'

const Blockquote = TiptapBlockquote.extend<ExtensionOptions & BlockquoteOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'quote',
            icon: iconRichTextQuoteText(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleBlockquote().run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive(Blockquote.name)
              }
            }
          }
        ]
      },
      getSlashMenus() {
        return [
          {
            priority: 50,
            icon: iconRichTextQuoteText(),
            title: '内容引用',
            keywords: ['quote', 'neirongyinyong'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).toggleBlockquote().run()
            }
          }
        ]
      }
    }
  }
})

export default Blockquote
export { Blockquote, BlockquoteOptions }
