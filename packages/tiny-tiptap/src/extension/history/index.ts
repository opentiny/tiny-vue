import type { ExtensionOptions } from '@/types'
import type { HistoryOptions } from '@tiptap/extension-history'
import TiptapHistory from '@tiptap/extension-history'

const History = TiptapHistory.extend<ExtensionOptions & HistoryOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default History
