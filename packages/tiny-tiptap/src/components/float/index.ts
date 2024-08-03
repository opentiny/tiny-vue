import { FloatMenuItem } from '@/types'
import type { Editor, AnyExtension } from '@tiptap/core'
import { FloatingMenuPlugin, FloatingMenuPluginProps } from '@tiptap/extension-floating-menu'

export const registerFloatMenuExtension = (editor: Editor, Renderer, view) => {
  const menuItems = getFloatMenuItemsFromExtensions(editor).map((item) => ({
    ...item,
    action: item.action({ editor })
  }))

  const viewComponent = new Renderer(view, {
    props: {
      items: menuItems
    },
    editor
  })

  const props = {
    pluginKey: 'floatingMenu',
    editor,
    tippyOptions: {},
    element: viewComponent.element
  }

  editor.registerPlugin(FloatingMenuPlugin(props))
}

function getFloatMenuItemsFromExtensions(editor: Editor) {
  const extensionManager = editor.extensionManager
  return (extensionManager?.extensions ?? [])
    .reduce((prev: FloatMenuItem[], curr: AnyExtension) => {
      const { getFloatMenus } = curr.options

      if (!getFloatMenus) return prev

      const menus = getFloatMenus()

      prev.push(...menus)
      return prev
    }, [])
    .sort((a, b) => a.priority - b.priority)
}
