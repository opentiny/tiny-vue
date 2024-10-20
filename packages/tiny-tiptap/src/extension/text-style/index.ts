import type { ExtensionOptions } from '@/types'
import type { TextStyleOptions } from '@tiptap/extension-text-style'
import TiptapTextStyle from '@tiptap/extension-text-style'
import { iconRichTextFontSize } from '@opentiny/vue-icon'

const sizes = [12, 14, 16, 18, 20, 24, 30]

const TextStyle = TiptapTextStyle.extend<ExtensionOptions & TextStyleOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ['textStyle'],
      getToolbarMenus() {
        return [
          {
            key: 'font-size',
            title: '字体大小',
            icon: iconRichTextFontSize(),
            submenu: ({ editor }: { editor: Editor }) =>
              sizes.map(size => ({
                text: `${size}px`,
                action: () => editor.chain().focus().setFontSize(size).run(),
              })),
          },
        ]
      },
    }
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: element => element.style.fontSize.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.fontSize) {
                return {}
              }
              return {
                style: `font-size: ${attributes.fontSize}`,
              }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setFontSize:
        fontSize =>
        ({ chain }) => {
          return chain()
            .setMark('textStyle', { fontSize: fontSize + 'px' })
            .run()
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain()
            .setMark('textStyle', { fontSize: null })
            .removeEmptyTextStyle()
            .run()
        },
    }
  },
})

export default TextStyle
export { TextStyle, TextStyleOptions }
