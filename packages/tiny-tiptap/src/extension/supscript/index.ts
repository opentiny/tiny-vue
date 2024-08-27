import type { ExtensionOptions } from '@/types'
import type { SuperscriptExtensionOptions } from '@tiptap/extension-superscript'
import type { Editor } from '@tiptap/core'
import TiptapSupscript from '@tiptap/extension-superscript'
import { IconRichTextSuperscript } from '@opentiny/vue-icon'

const Supscript = TiptapSupscript.extend<ExtensionOptions & SuperscriptExtensionOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'superscript',
            icon: IconRichTextSuperscript(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleSuperscript().run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive(Supscript.name)
              }
            }
          }
        ]
      }
    }
  }
})

export default Supscript
export { Supscript, SuperscriptExtensionOptions }
