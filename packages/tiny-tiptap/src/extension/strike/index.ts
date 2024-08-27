import type { ExtensionOptions } from '@/types'
import type { StrikeOptions } from '@tiptap/extension-strike'
import type { Editor } from '@tiptap/core'
import TiptapStrike from '@tiptap/extension-strike'
import { iconRichTextStrikeThrough } from '@opentiny/vue-icon'

const Strike = TiptapStrike.extend<ExtensionOptions & StrikeOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'strike',
            icon: iconRichTextStrikeThrough(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleStrike().run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive(Strike.name)
              }
            }
          }
        ]
      }
    }
  }
})

export default Strike
export { Strike, StrikeOptions }
