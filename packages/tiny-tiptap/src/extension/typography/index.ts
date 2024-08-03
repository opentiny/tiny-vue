import type { ExtensionOptions } from '@/types'
import type { TypographyOptions } from '@tiptap/extension-typography'
import TiptapTypography from '@tiptap/extension-typography'

const Typography = TiptapTypography.extend<ExtensionOptions & TypographyOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Typography
export { Typography, TypographyOptions }
