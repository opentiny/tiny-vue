import { VueNodeViewRenderer } from '@tiptap/vue-3'
import TiptapImage from '@tiptap/extension-image'
import ImageView from '../image-view.vue'

const Image = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      dataType: 'image',
      width: {
        default: 200,
        parseHTML(element) {
          const width = element.style.width || element.getAttribute('width')
          return width
        },
        renderHTML: (attributes) => {
          const { width } = attributes
          return {
            width: `${width}px`
          }
        }
      },
      height: {
        default: 200,
        parseHTML(element) {
          const height = element.style.height || element.getAttribute('height')
          return height
        },
        renderHTML: (attributes) => {
          const { height } = attributes
          return {
            height: `${height}px`
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
