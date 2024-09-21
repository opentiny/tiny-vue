import type { ExtensionOptions } from '@/types'
import type { TableHeaderOptions } from '@tiptap/extension-table-header'
import TiptapTableHeader from '@tiptap/extension-table-header'

const TableHeader = TiptapTableHeader.extend<ExtensionOptions & TableHeaderOptions>({
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

export default TableHeader
export { TableHeader, TableHeaderOptions }
