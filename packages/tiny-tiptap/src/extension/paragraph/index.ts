import type { ExtensionOptions } from '@/types'
import { mergeAttributes } from '@tiptap/core'
import type { Editor, Range } from '@tiptap/core'
import type { ParagraphOptions } from '@tiptap/extension-paragraph'
import TiptapParagraph from '@tiptap/extension-paragraph'
import { iconRichTextParagraph } from '@opentiny/vue-icon'

type CustomParagraphOptions = {
  levels: number[]
  sizes: number[]
}

const Paragraph = TiptapParagraph.extend<ExtensionOptions & ParagraphOptions & CustomParagraphOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      levels: [1, 1.5, 2, 2.5, 3],
      sizes: [12, 14, 16, 18, 20, 24, 30],
      getSlashMenus() {
        return [
          {
            priority: 0,
            icon: iconRichTextParagraph(),
            title: '文本',
            keywords: ['paragraph', 'text', 'wenben'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).setNode('paragraph').run()
            }
          }
        ]
      }
    }
  },
  addAttributes() {
    return {
      level: {
        default: 2
      },
      size: {
        default: 16
      }
    }
  },
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level)
    const hasSize = this.options.sizes.includes(node.attrs.size)
    const level = hasLevel ? node.attrs.level : this.options.levels[0]
    const size = hasSize ? node.attrs.size : this.options.sizes[2]
    return ['p', mergeAttributes({ style: `line-height: ${level};font-size: ${size}px` }, HTMLAttributes), 0]
  },
  addCommands() {
    return {
      ...this.parent?.(),
      setP:
        (attributes) =>
        ({ commands }) => {
          return commands.setNode(this.name, attributes)
        },
      setSize:
        (attributes) =>
        ({ commands }) => {
          return commands.setNode(this.name, attributes)
        }
    }
  }
})

export default Paragraph
export { Paragraph, ParagraphOptions }
