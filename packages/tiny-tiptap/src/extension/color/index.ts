import type { ExtensionOptions } from '@/types'
import type { ColorOptions } from '@tiptap/extension-color'
import type { Editor } from '@tiptap/core'
import TiptapColor from '@tiptap/extension-color'
import { IconEditorTextcolor } from '@opentiny/vue-icon'
import { COMMON_COLORS } from '../common/constant'

const Color = TiptapColor.extend<ExtensionOptions & ColorOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'color',
            title: '字体颜色',
            icon: IconEditorTextcolor(),
            config: {
              withColor: true,
              defaultColor: COMMON_COLORS,
            },
            action: ({ editor }: { editor: Editor }) => {
              return color => {
                editor.chain().focus().setColor(color).run()
              }
            },
          },
        ]
      },
    }
  },
})

export default Color
export { Color, ColorOptions }
