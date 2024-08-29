import type { ExtensionOptions } from '@/types'
import { isActive, mergeAttributes } from '@tiptap/core'
import type { ImageOptions } from '@tiptap/extension-image'
import type { Editor } from '@tiptap/core'
import TiptapImage from '@tiptap/extension-image'

import {
  iconRichTextAlignLeft,
  iconRichTextAlignCenter,
  iconRichTextAlignRight,
  IconRichTextImage
} from '@opentiny/vue-icon'

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
      getToolbarMenus() {
        return [
          {
            key: 'img',
            icon: IconRichTextImage(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleBold().run()
              }
            },
            submenu: ({ editor }) => [
              {
                text: '本地资源',
                action: () => {
                  const input = document.createElement('input')
                  input.setAttribute('type', 'file')
                  input.setAttribute('accept', 'image/*, video/*')
                  input.onchange = handleFileChange(editor, () => input.remove())
                  input.click()
                }
              },
              {
                text: '资源链接',
                action: () => {
                  handleFileChange(editor)(null)
                }
              }
            ]
          }
        ]
      },
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

function handleFileChange(editor: Editor, effectFn?: () => void) {
  return (event) => {
    if (!event) {
      // TODO 优化输入形式
      const url = window.prompt('URL')
      let type = 'image'
      const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg']
      const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'mpeg', '3gp', 'mkv']

      const imageRegex = new RegExp(`\\.(${imageExtensions.join('|')})$`, 'i')
      const videoRegex = new RegExp(`\\.(${videoExtensions.join('|')})$`, 'i')

      if (imageRegex.test(url)) {
        type = 'image'
      } else if (videoRegex.test(url)) {
        type = 'video'
      }
      if (url) {
        editor.chain().focus().setImage({ src: url, type }).run()
      }
      return
    }

    const file = event.target.files[0]
    if (!file) return
    let type = 'image'
    if (file?.type.match('image.*')) {
      type = 'image'
    } else if (file?.type.match('video.*')) {
      type = 'video'
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      editor.chain().focus().setImage({ src: e.target?.result, type }).run()
    }
    reader.readAsDataURL(file)

    effectFn?.()
  }
}

export default Image
export { Image, ImageOptions }
