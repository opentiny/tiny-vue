import type { ExtensionOptions } from '@/types'
import { mergeAttributes } from '@tiptap/core'
import type { Editor, Range } from '@tiptap/core'
import type { ParagraphOptions } from '@tiptap/extension-paragraph'
import TiptapParagraph from '@tiptap/extension-paragraph'
import {
  iconRichTextParagraph,
  iconRichTextLineHeight,
} from '@opentiny/vue-icon'

type CustomParagraphOptions = {
  levels: number[]
}

const levels = [1, 1.5, 2, 2.5, 3]

const Paragraph = TiptapParagraph.extend<
  ExtensionOptions & ParagraphOptions & CustomParagraphOptions
>({
  addOptions() {
    return {
      ...this.parent?.(),
      levels,
      getToolbarMenus() {
        return [
          {
            key: 'line-height',
            title: '行高',
            icon: iconRichTextLineHeight(),
            submenu: ({ editor }: { editor: Editor }) =>
              levels.map(level => ({
                text: `${level.toFixed(1)}`,
                action: () => {
                  editor.chain().focus().setP({ level }).run()
                },
              })),
          },
        ]
      },
      getSlashMenus() {
        return [
          {
            priority: 0,
            icon: iconRichTextParagraph(),
            title: '文本',
            keywords: ['paragraph', 'text', 'wenben'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode('paragraph')
                .run()
            },
          },
        ]
      },
    }
  },
  addAttributes() {
    return {
      level: {
        default: 2,
      },
    }
  },
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level)
    const level = hasLevel ? node.attrs.level : this.options.levels[0]
    return [
      'p',
      mergeAttributes({ style: `line-height: ${level};` }, HTMLAttributes),
      0,
    ]
  },
  addCommands() {
    return {
      ...this.parent?.(),
      setP:
        attributes =>
        ({ commands }) => {
          return commands.setNode(this.name, attributes)
        },
    }
  },
})

export default Paragraph
export { Paragraph, ParagraphOptions }
