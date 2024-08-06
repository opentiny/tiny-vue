import type { ExtensionOptions } from '@/types'
import { Editor, Range } from '@tiptap/core'
import type { TableOptions } from '@tiptap/extension-table'
import TiptapTable from '@tiptap/extension-table'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import { iconRichTextTable } from '@opentiny/vue-icon'

const Table = TiptapTable.extend<ExtensionOptions & TableOptions>({
  addExtensions() {
    return [TableHeader, TableRow, TableCell]
  },
  addOptions() {
    return {
      ...this.parent?.(),
      getSlashMenus() {
        return [
          {
            priority: 70,
            icon: iconRichTextTable(),
            title: '表格',
            keywords: ['table', 'biaoge'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).insertTable({ rows: 3, cols: 3 }).run()
            }
          }
        ]
      }
    }
  }
})

export default Table
export { Table, TableOptions }
