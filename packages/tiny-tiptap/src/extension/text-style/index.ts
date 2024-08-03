import type { ExtensionOptions } from '@/types'
import type { TextStyleOptions } from '@tiptap/extension-text-style'
import TiptapTextStyle from '@tiptap/extension-text-style'

const TextStyle = TiptapTextStyle.extend<ExtensionOptions & TextStyleOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default TextStyle
export { TextStyle, TextStyleOptions }
