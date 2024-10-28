import type { ExtensionOptions } from '@/types'
import type { HighlightOptions } from '@tiptap/extension-highlight'
import type { Editor } from '@tiptap/core'
import TiptapHighlight from '@tiptap/extension-highlight'
import { IconRichTextHighLight, IconEditorBackground } from '@opentiny/vue-icon'
import { COMMON_COLORS } from '../common/constant'

const Highlight = TiptapHighlight.extend<ExtensionOptions & HighlightOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'highight',
            title: '高亮',
            icon: IconRichTextHighLight(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleHighlight().run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive(Highlight.name)
              }
            },
          },
          {
            key: 'backgroundColor',
            title: '背景色',
            icon: IconEditorBackground(),
            config: {
              withColor: true,
              defaultColor: COMMON_COLORS,
            },
            action: ({ editor }: { editor: Editor }) => {
              return color => {
                editor.chain().focus().setBackColor({ bgColor: color }).run()
              }
            },
          },
        ]
      },
    }
  },
  addAttributes() {
    return {
      bgColor: {
        default: null,
        renderHTML: attributes => {
          if (!attributes.bgColor) {
            return {}
          }
          return {
            style: `background: ${attributes.bgColor}`,
          }
        },
      },
    }
  },
  addCommands() {
    return {
      ...this.parent?.(),
      // 添加背景颜色 command
      setBackColor:
        attributes =>
        ({ chain }) => {
          return chain().setMark(this.name, attributes).run()
        },
    }
  },
})

export default Highlight
export { Highlight, HighlightOptions }
