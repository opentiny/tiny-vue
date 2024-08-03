import type { ExtensionOptions } from '@/types'
import type { MentionOptions } from '@tiptap/extension-mention'
import TiptapMention from '@tiptap/extension-mention'

const Mention = TiptapMention.extend<ExtensionOptions & MentionOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Mention
export { Mention, MentionOptions }
