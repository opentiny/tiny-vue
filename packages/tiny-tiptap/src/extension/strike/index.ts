import type { ExtensionOptions } from '@/types'
import type { StrikeOptions } from '@tiptap/extension-strike'
import TiptapStrike from '@tiptap/extension-strike'

const Strike = TiptapStrike.extend<ExtensionOptions & StrikeOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Strike
export { Strike, StrikeOptions }
