import type { ExtensionOptions } from '@/types'
import type { PlaceholderOptions } from '@tiptap/extension-placeholder'
import TiptapPlaceholder from '@tiptap/extension-placeholder'

const Placeholder = TiptapPlaceholder.extend<ExtensionOptions & PlaceholderOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Placeholder
