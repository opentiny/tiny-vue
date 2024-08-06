import type { ExtensionOptions } from '@/types'
import type { TableHeaderOptions } from '@tiptap/extension-table-header'
import TiptapTableHeader from '@tiptap/extension-table-header'

const TableHeader = TiptapTableHeader.extend<ExtensionOptions & TableHeaderOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default TableHeader
export { TableHeader, TableHeaderOptions }
