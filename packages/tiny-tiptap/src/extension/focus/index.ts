import type { ExtensionOptions } from '@/types'
import type { FocusOptions } from '@tiptap/extension-focus'
import TiptapFocus from '@tiptap/extension-focus'

const Focus = TiptapFocus.extend<ExtensionOptions, FocusOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Focus
export { Focus, FocusOptions }
