import type { ExtensionOptions } from '@/types'
import type { SubscriptExtensionOptions } from '@tiptap/extension-subscript'
import TiptapSubscript from '@tiptap/extension-subscript'

const Subscript = TiptapSubscript.extend<ExtensionOptions & SubscriptExtensionOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Subscript
