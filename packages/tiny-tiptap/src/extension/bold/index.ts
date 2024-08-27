import type { ExtensionOptions } from '@/types'
import type { BoldOptions } from '@tiptap/extension-bold'
import type { Editor } from '@tiptap/core'
import TiptapBold from '@tiptap/extension-bold'
import { iconRichTextBold } from '@opentiny/vue-icon'

const Bold = TiptapBold.extend<ExtensionOptions & BoldOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'bold',
            icon: iconRichTextBold(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleBold().run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive(Bold.name)
              }
            }
          }
        ]
      }
    }
  }
})

export default Bold
export { Bold, BoldOptions }
