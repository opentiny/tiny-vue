import type { ExtensionOptions } from '@/types'
import type { ItalicOptions } from '@tiptap/extension-italic'
import TiptapItalic from '@tiptap/extension-italic'

const Italic = TiptapItalic.extend<ExtensionOptions & ItalicOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Italic
export { Italic, ItalicOptions }
