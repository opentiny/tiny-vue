import type { ExtensionOptions } from '@/types'
import type { UnderlineOptions } from '@tiptap/extension-underline'
import TiptapUnderline from '@tiptap/extension-underline'

const Underline = TiptapUnderline.extend<ExtensionOptions & UnderlineOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Underline
