import type { ExtensionOptions } from '@/types'
import type { HardBreakOptions } from '@tiptap/extension-hard-break'
import TiptapHardBreak from '@tiptap/extension-hard-break'

const HardBreak = TiptapHardBreak.extend<ExtensionOptions, HardBreakOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default HardBreak
export { HardBreak, HardBreakOptions }
