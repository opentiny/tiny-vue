import type { ExtensionOptions } from '@/types'
import TiptapDocument from '@tiptap/extension-document'

const Document = TiptapDocument.extend<ExtensionOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Document
export { Document }
