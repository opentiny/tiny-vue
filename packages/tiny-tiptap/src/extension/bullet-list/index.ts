import type { ExtensionOptions } from '@/types'
import type { Editor, Range } from '@tiptap/core'
import type { BulletListOptions } from '@tiptap/extension-bullet-list'
import TiptapBulletList from '@tiptap/extension-bullet-list'
import { iconRichTextListUnordered } from '@opentiny/vue-icon'

const BulletList = TiptapBulletList.extend<ExtensionOptions & BulletListOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'unorderedlist',
            icon: iconRichTextListUnordered(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().toggleBulletList().run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive(BulletList.name)
              }
            }
          }
        ]
      },
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
  }
})

export default BulletList
export { BulletList, BulletListOptions }
