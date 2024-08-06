import type { ExtensionOptions } from '@/types'
import type { CollaborationCursorOptions } from '@tiptap/extension-collaboration-cursor'
import TiptapCollaborationCursor from '@tiptap/extension-collaboration-cursor'

const CollaborationCursor = TiptapCollaborationCursor.extend<ExtensionOptions, CollaborationCursorOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default CollaborationCursor
export { CollaborationCursor, CollaborationCursorOptions }
