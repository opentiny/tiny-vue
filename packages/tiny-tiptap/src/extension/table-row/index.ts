import type { ExtensionOptions } from '@/types'
import type { TableRowOptions } from '@tiptap/extension-table-row'
import TiptapTableRow from '@tiptap/extension-table-row'

const TableRow = TiptapTableRow.extend<ExtensionOptions & TableRowOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default TableRow
export { TableRow, TableRowOptions }
