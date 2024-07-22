import type { ExtensionOptions } from '@/types'
import type { BoldOptions } from '@tiptap/extension-bold'
import TiptapBold from '@tiptap/extension-bold'

const Bold = TiptapBold.extend<ExtensionOptions & BoldOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Bold
