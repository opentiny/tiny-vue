import type { ExtensionOptions } from '@/types'
import type { CodeOptions } from '@tiptap/extension-code'
import type { Editor } from '@tiptap/core'
import TiptapCode from '@tiptap/extension-code'
import { iconRichTextCodeView } from '@opentiny/vue-icon'

const Code = TiptapCode.extend<ExtensionOptions & CodeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'code',
            icon: iconRichTextCodeView(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleCode().run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive(Code.name)
              }
            }
          }
        ]
      }
    }
  }
})

export default Code
export { Code, CodeOptions }
