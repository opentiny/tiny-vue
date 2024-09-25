import type { ExtensionOptions } from '@/types'
import type { TableCellOptions } from '@tiptap/extension-table-cell'
import TiptapTableCell from '@tiptap/extension-table-cell'

const TableCell = TiptapTableCell.extend<ExtensionOptions & TableCellOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  },
  addAttributes() {
    return {
      ...this.parent?.(),
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.getAttribute('data-background-color'),
        renderHTML: (attributes) => {
          return {
            'data-background-color': attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`
          }
        }
      }
    }
  }
})

export default TableCell
export { TableCell, TableCellOptions }
