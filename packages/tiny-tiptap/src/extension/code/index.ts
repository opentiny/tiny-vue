import type { ExtensionOptions } from '@/types'
import type { CodeOptions } from '@tiptap/extension-code'
import TiptapCode from '@tiptap/extension-code'

const Code = TiptapCode.extend<ExtensionOptions & CodeOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Code
export { Code, CodeOptions }
