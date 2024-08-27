import { BubbleMenuPlugin } from '@tiptap/extension-bubble-menu'
import type { Editor } from '@tiptap/core'
import type { BubbleMenuInstance } from '@/types'

export const registerBubbleMenuExtension = (editor: Editor, Renderer, view) => {
  const installBubbleMenuPlugin = (instance, view) => {
    const viewComponent = new Renderer(view, {
      props: {
        items: instance.items
      },
      editor
    })
    const props = {
      pluginKey: instance.pluginKey,
      editor,
      element: viewComponent.element,
      updateDelay: 100,
      shouldShow: instance.shouldShow,
      tippyOptions: {}
    }

    editor.registerPlugin(BubbleMenuPlugin(props))
  }

  // 注册多个 BubbleMenu
  const bubbleMenuList = getBubbleMenuInstances(editor)

  bubbleMenuList.forEach((instance) => {
    installBubbleMenuPlugin(instance, view)
  })
}

const getBubbleMenuInstances = (editor: Editor) => {
  const extensionManager = editor.extensionManager
  const instances: BubbleMenuInstance[] = []
  extensionManager.extensions.forEach((extension) => {
    const { getBubbleMenu } = extension.options
    if (getBubbleMenu) {
      const menuInstance = getBubbleMenu(editor)
      menuInstance.items = menuInstance.items.map((item) => ({
        ...item,
        isActive: item.isActive?.({ editor }),
        isDisabled: item.isDisabled?.({ editor }),
        action: item.action({ editor })
      }))
      instances.push(menuInstance)
    }
  })
  return instances
}
