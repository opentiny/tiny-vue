import type { ExtensionOptions } from '@/types'
import type { HighlightOptions } from '@tiptap/extension-highlight'
import TiptapHighlight from '@tiptap/extension-highlight'

const Highlight = TiptapHighlight.extend<ExtensionOptions & HighlightOptions>({
  addAttributes() {
    return {
      bgColor: {
        default: null,
        renderHTML: (attributes) => {
          if (!attributes.bgColor) {
            return {}
          }
          return {
            style: `background: ${attributes.bgColor}`
          }
        }
      }
    }
  },
  addCommands() {
    return {
      ...this.parent?.(),
      // 添加背景颜色 command
      setBackColor:
        (attributes) =>
        ({ chain }) => {
          return chain().setMark(this.name, attributes).run()
        }
    }
  }
})

export default Highlight
export { Highlight, HighlightOptions }
