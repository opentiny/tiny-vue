import type { ExtensionOptions } from '@/types'
import { Editor, Range } from '@tiptap/core'
import type { OrderedListOptions } from '@tiptap/extension-ordered-list'
import TiptapOrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import { iconRichTextListOrdered } from '@opentiny/vue-icon'

const OrderedList = TiptapOrderedList.extend<ExtensionOptions & OrderedListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getSlashMenus() {
        return [
          {
            priority: 30,
            icon: iconRichTextListOrdered(),
            title: '有序列表',
            keywords: ['orderedlist', 'youxuliebiao'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).toggleOrderedList().run()
            }
          }
        ]
      },
      getFloatMenus() {
        return [
          {
            priority: 20,
            icon: iconRichTextListOrdered(),
            action: ({ editor }: { editor: Editor }) => {
              return () => editor.chain().focus().toggleOrderedList().run()
            }
          }
        ]
      }
    }
  },

  addExtensions() {
    return [ListItem]
  }
})

export default OrderedList

export { OrderedList, OrderedListOptions }
