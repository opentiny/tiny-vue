import type { ExtensionOptions } from '@/types'
import type { ListKeymapOptions } from '@tiptap/extension-list-keymap'
import TiptapListKeymap from '@tiptap/extension-list-keymap'

const ListKeymap = TiptapListKeymap.extend<ExtensionOptions & ListKeymapOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default ListKeymap
export { ListKeymap, ListKeymapOptions }
