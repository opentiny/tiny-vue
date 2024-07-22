import type { ExtensionOptions } from '@/types'
import { mergeAttributes } from '@tiptap/core'
import type { ImageOptions } from '@tiptap/extension-image'
import TiptapImage from '@tiptap/extension-image'

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
