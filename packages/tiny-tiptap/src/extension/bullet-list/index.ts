import type { ExtensionOptions } from '@/types'
import type { Editor, Range } from '@tiptap/core'
import type { BulletListOptions } from '@tiptap/extension-bullet-list'
import TiptapBulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import { iconRichTextListUnordered } from '@opentiny/vue-icon'

const BulletList = TiptapBulletList.extend<ExtensionOptions & BulletListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getSlashMenus() {
        return [
          {
            priority: 20,
            icon: iconRichTextListUnordered(),
            title: '无序列表',
            keywords: ['bulletlist', 'wuxuliebiao'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).toggleBulletList().run()
            }
          }
        ]
      },
      getFloatMenus() {
        return [
          {
            priority: 10,
            icon: iconRichTextListUnordered(),
            action: ({ editor }: { editor: Editor }) => {
              return () => editor.chain().focus().toggleBulletList().run()
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

export default BulletList
export { BulletList, BulletListOptions }
