import type { ExtensionOptions } from '@/types'
import type { TextAlignOptions } from '@tiptap/extension-text-align'
import TiptapTextAlign from '@tiptap/extension-text-align'

const TextAlign = TiptapTextAlign.extend<ExtensionOptions & TextAlignOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default TextAlign
