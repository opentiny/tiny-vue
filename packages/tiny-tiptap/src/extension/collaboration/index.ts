import type { ExtensionOptions } from '@/types'
import type { CollaborationOptions } from '@tiptap/extension-collaboration'
import TiptapCollaboration from '@tiptap/extension-collaboration'

const Collaboration = TiptapCollaboration.extend<ExtensionOptions, CollaborationOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Collaboration
export { Collaboration, CollaborationOptions }
