import { VueNodeViewRenderer } from '@tiptap/vue'
import TiptapImage from '@tiptap/extension-image'
import ImageView from '../image-view.vue'

const Image = TiptapImage.extend({
  inline() {
    return true
  },
  group() {
    return 'inline'
  },
  addAttributes() {
    return {
      ...this.parent?.(),
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
  addNodeView() {
    return VueNodeViewRenderer(ImageView)
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
