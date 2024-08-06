import type { ExtensionOptions } from '@/types'
import type { DropcursorOptions } from '@tiptap/extension-dropcursor'
import TiptapDropCursor from '@tiptap/extension-dropcursor'

const DropCursor = TiptapDropCursor.extend<ExtensionOptions, DropcursorOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default DropCursor
export { DropCursor, DropcursorOptions }
