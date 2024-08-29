import type { ExtensionOptions } from '@/types'
import { Editor, isActive, mergeAttributes } from '@tiptap/core'
import type { ImageOptions } from '@tiptap/extension-image'
import TiptapImage from '@tiptap/extension-image'

import { iconRichTextAlignLeft, iconRichTextAlignCenter, iconRichTextAlignRight } from '@opentiny/vue-icon'

const IGNORE_BUBBLE_TYPES = ['table']

const Image = TiptapImage.extend<ExtensionOptions & ImageOptions>({
  inline() {
    return true
  },
  group() {
    return 'inline'
  },
  addAttributes() {
    return {
      ...this.parent?.(),
      type: {
        default: 'img'
      },
      width: {
        default: 500,
        parseHTML(element) {
          const width = element.style.width || element.getAttribute('width')
          return width
        },
        renderHTML: (attributes) => {
          const { width } = attributes
          return {
            width
          }
        }
      },
      height: {
        default: 500,
        parseHTML(element) {
          const height = element.style.height || element.getAttribute('height')
          return height
        },
        renderHTML: (attributes) => {
          const { height } = attributes
          return {
            height
          }
        }
      }
    }
  },
  addOptions() {
    return {
      ...this.parent?.(),
      getBubbleMenu() {
        return {
          pluginKey: 'imageBubbleMenu',
          shouldShow: ({ state, from, to }) => {
            // 避免其他类型激活时出现气泡菜单
            if (IGNORE_BUBBLE_TYPES.some((type) => isActive(state, type))) {
              return false
            }
            return isActive(state, Image.name)
          },
          items: [
            {
              icon: iconRichTextAlignLeft(),
              priority: 10,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive({ textAlign: 'left' })
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().setTextAlign('left').run()
              }
            },
            {
              icon: iconRichTextAlignCenter(),
              priority: 20,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive({ textAlign: 'center' })
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().setTextAlign('center').run()
              }
            },
            {
              icon: iconRichTextAlignRight(),
              priority: 30,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive({ textAlign: 'right' })
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().setTextAlign('right').run()
              }
            }
          ]
        }
      }
    }
  },
  renderHTML({ node, HTMLAttributes }) {
    if (node.attrs.type === 'video') {
      return ['div', { class: 'img-button' }, ['video', mergeAttributes({ controls: true }, HTMLAttributes)]]
    } else {
      return ['div', { class: 'img-button' }, ['img', HTMLAttributes]]
    }
  },
  parseHTML() {
    return [
      {
        tag: 'img[src]'
      }
    ]
  }
})

export default Image
export { Image, ImageOptions }
