import type { ExtensionOptions } from '@/types'
import TiptapGapcursor from '@tiptap/extension-gapcursor'

const Gapcursor = TiptapGapcursor.extend<ExtensionOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Gapcursor
export { Gapcursor }
