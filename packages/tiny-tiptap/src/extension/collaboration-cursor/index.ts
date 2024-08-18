import type { ExtensionOptions } from '@/types'
import type { CollaborationCursorOptions } from '@tiptap/extension-collaboration-cursor'
import TiptapCollaborationCursor from '@tiptap/extension-collaboration-cursor'

const CURSOR_CLASS = 'tiny-collaboration-cursor'

const CollaborationCursor = TiptapCollaborationCursor.extend<ExtensionOptions, CollaborationCursorOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      render(user: { name: string; color: string }) {
        const { name, color } = user

        const cursor = document.createElement('span')
        cursor.classList.add(`${CURSOR_CLASS}__caret`)
        cursor.setAttribute('style', `border-color: ${color}`)

        const label = document.createElement('div')

        label.classList.add(`${CURSOR_CLASS}__label`)
        label.setAttribute('style', `background-color: ${color}`)
        label.insertBefore(document.createTextNode(name), null)

        cursor.insertBefore(label, null)

        return cursor
      }
    }
  }
})

export default CollaborationCursor
export { CollaborationCursor, CollaborationCursorOptions }
