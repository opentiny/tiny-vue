import type { ExtensionOptions } from '@/types'
import type { ColorOptions } from '@tiptap/extension-color'
import type { Editor } from '@tiptap/core'
import TiptapColor from '@tiptap/extension-color'
import TiptapTextStyle from '@tiptap/extension-text-style'
import { IconEditorTextcolor } from '@opentiny/vue-icon'

const Color = TiptapColor.extend<ExtensionOptions & ColorOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'color',
            icon: IconEditorTextcolor(),
            config: {
              withColor: true
            },
            action: ({ editor }: { editor: Editor }) => {
              return (color) => {
                editor.chain().focus().setColor(color).run()
              }
            }
          }
        ]
      }
    }
  },
  addExtensions() {
    return [TiptapTextStyle]
  }
})

export default Color
export { Color, ColorOptions }
