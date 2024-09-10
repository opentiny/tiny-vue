import type { ExtensionOptions } from '@/types'
import type { SubscriptExtensionOptions } from '@tiptap/extension-subscript'
import type { Editor } from '@tiptap/core'
import TiptapSubscript from '@tiptap/extension-subscript'
import { IconRichTextSubscript } from '@opentiny/vue-icon'

const Subscript = TiptapSubscript.extend<ExtensionOptions & SubscriptExtensionOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'subscript',
            icon: IconRichTextSubscript(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleSubscript().run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive(Subscript.name)
              }
            }
          }
        ]
      }
    }
  }
})

export default Subscript
export { Subscript, SubscriptExtensionOptions }
