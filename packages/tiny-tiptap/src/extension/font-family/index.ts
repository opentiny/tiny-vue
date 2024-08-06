import type { ExtensionOptions } from '@/types'
import type { FontFamilyOptions } from '@tiptap/extension-font-family'
import TiptapFontFamily from '@tiptap/extension-font-family'

const FontFamily = TiptapFontFamily.extend<ExtensionOptions, FontFamilyOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default FontFamily
export { FontFamily, FontFamilyOptions }
