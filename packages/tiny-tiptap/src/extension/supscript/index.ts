import type { ExtensionOptions } from '@/types'
import type { SuperscriptExtensionOptions } from '@tiptap/extension-superscript'
import TiptapSupscript from '@tiptap/extension-superscript'

const Supscript = TiptapSupscript.extend<ExtensionOptions & SuperscriptExtensionOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Supscript
