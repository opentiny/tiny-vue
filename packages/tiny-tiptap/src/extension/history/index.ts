import type { ExtensionOptions } from '@/types'
import type { HistoryOptions } from '@tiptap/extension-history'
import type { Editor } from '@tiptap/core'
import TiptapHistory from '@tiptap/extension-history'
import { iconRichTextUndo, iconRichTextRedo } from '@opentiny/vue-icon'

const History = TiptapHistory.extend<ExtensionOptions & HistoryOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'undo',
            title: '撤销',
            icon: iconRichTextUndo(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().undo().run()
              }
            },
          },
          {
            key: 'redo',
            title: '重做',
            icon: iconRichTextRedo(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().redo().run()
              }
            },
          },
        ]
      },
    }
  },
})

export default History
export { History, HistoryOptions }
