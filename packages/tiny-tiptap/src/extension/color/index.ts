import type { ExtensionOptions } from '@/types'
import type { ColorOptions } from '@tiptap/extension-color'
import TiptapColor from '@tiptap/extension-color'
import TiptapTextStyle from '@tiptap/extension-text-style'

const Color = TiptapColor.extend<ExtensionOptions & ColorOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  },
  addExtensions() {
    return [TiptapTextStyle]
  }
})

export default Color
