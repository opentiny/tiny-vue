import type { ExtensionOptions } from '@/types'
import type { LinkOptions } from '@tiptap/extension-link'
import TiptapLink from '@tiptap/extension-link'

const Link = TiptapLink.extend<ExtensionOptions & LinkOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default Link
export { Link, LinkOptions }
