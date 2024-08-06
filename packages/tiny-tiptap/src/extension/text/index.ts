import type { ExtensionOptions } from '@/types'
import TiptapText from '@tiptap/extension-text'

const Text = TiptapText.extend<ExtensionOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Text
export { Text }
