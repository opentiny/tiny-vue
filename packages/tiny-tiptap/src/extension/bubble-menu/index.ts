import type { ExtensionOptions } from '@/types'
import type { BubbleMenuOptions } from '@tiptap/extension-bubble-menu'
import TiptapBubbleMenu from '@tiptap/extension-bubble-menu'

const BubbleMenu = TiptapBubbleMenu.extend<ExtensionOptions, BubbleMenuOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default BubbleMenu
export { BubbleMenu, BubbleMenuOptions }
