import type { AnyExtension, Editor } from '@tiptap/core'

export const registerToolbarMenuExtension = (editor: Editor) => {
  const menusItems = getToolbarItemsFromExtensions(editor)

  editor.storage.toolbar = menusItems
}

function getToolbarItemsFromExtensions(editor: Editor) {
  const extensionManager = editor.extensionManager
  return (extensionManager?.extensions ?? [])
    .reduce((prev: any[], curr: AnyExtension) => {
      const { getToolbarMenus } = curr.options

      if (!getToolbarMenus) return prev

      const menuItems = getToolbarMenus().map((item) => ({
        ...item,
        isActive: item.isActive?.({ editor }),
        action: item.action?.({ editor }),
        submenu: item.submenu?.({ editor }) ?? []
      }))

      prev.push(...menuItems)
      return prev
    }, [])
    .sort((a, b) => a.priority - b.priority)
}
