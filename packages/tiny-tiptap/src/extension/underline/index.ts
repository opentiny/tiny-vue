import type { ExtensionOptions } from '@/types'
import type { UnderlineOptions } from '@tiptap/extension-underline'
import type { Editor } from '@tiptap/core'
import TiptapUnderline from '@tiptap/extension-underline'
import { iconRichTextUnderline } from '@opentiny/vue-icon'

const Underline = TiptapUnderline.extend<ExtensionOptions & UnderlineOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'underline',
            icon: iconRichTextUnderline(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleUnderline().run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive(Underline.name)
              }
            }
          }
        ]
      }
    }
  }
})

export default Underline
export { Underline, UnderlineOptions }
