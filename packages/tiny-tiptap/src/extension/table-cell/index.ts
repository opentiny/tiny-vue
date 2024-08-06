import type { ExtensionOptions } from '@/types'
import type { TableCellOptions } from '@tiptap/extension-table-cell'
import TiptapTableCell from '@tiptap/extension-table-cell'

const TableCell = TiptapTableCell.extend<ExtensionOptions & TableCellOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default TableCell
export { TableCell, TableCellOptions }
