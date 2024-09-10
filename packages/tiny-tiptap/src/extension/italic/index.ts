import type { ExtensionOptions } from '@/types'
import type { ItalicOptions } from '@tiptap/extension-italic'
import type { Editor } from '@tiptap/core'
import TiptapItalic from '@tiptap/extension-italic'
import { iconRichTextItalic } from '@opentiny/vue-icon'

const Italic = TiptapItalic.extend<ExtensionOptions & ItalicOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'italic',
            icon: iconRichTextItalic(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleItalic().run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive(Italic.name)
              }
            }
          }
        ]
      }
    }
  }
})

export default Italic
export { Italic, ItalicOptions }
