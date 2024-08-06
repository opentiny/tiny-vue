import type { ExtensionOptions } from '@/types'
import type { ListItemOptions } from '@tiptap/extension-list-item'
import TiptapListItem from '@tiptap/extension-list-item'

const ListItem = TiptapListItem.extend<ExtensionOptions & ListItemOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default ListItem
export { ListItem, ListItemOptions }
