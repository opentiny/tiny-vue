import type { ExtensionOptions } from '@/types'
import type { FloatingMenuOptions } from '@tiptap/extension-floating-menu'
import TiptapFloatingMenu from '@tiptap/extension-floating-menu'

const FloatingMenu = TiptapFloatingMenu.extend<ExtensionOptions, FloatingMenuOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default FloatingMenu
export { FloatingMenu, FloatingMenuOptions }
