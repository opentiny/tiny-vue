import { BubbleMenuPlugin } from '@tiptap/extension-bubble-menu'
import {
  iconRichTextBold,
  iconRichTextItalic,
  iconRichTextStrikeThrough,
  iconRichTextUnderline
} from '@opentiny/vue-icon'
import type { Editor } from '@tiptap/core'

export const registerBubbleMenuExtension = (editor: Editor, Renderer, view) => {
  const menuItems = getBubbleMenuItems().map((item) => ({
    ...item,
    isActive: item.isActive({ editor }),
    action: item.action({ editor })
  }))

  const viewComponent = new Renderer(view, {
    props: {
      items: menuItems
    },
    editor
  })

  installBubbleMenuPlugin(editor, viewComponent)

  let prevState = null
  let prevNodes = new Set()

  editor.on('selectionUpdate', () => {
    // 监听 node type 改变
    const currState = editor.state
    const { doc, selection } = currState
    if (prevState && prevState.doc.eq(doc) && prevState.selection.eq(selection)) {
      return
    }
    const from = selection.from
    const to = selection.to
    const currNodes = new Set()

    doc.nodesBetween(from, to, (node) => {
      const nodeName = node.type.name
      if (nodeName) {
        currNodes.add(nodeName)
      }
    })

    // 如果之前的 node 与当前 node 类型一致 无需更改视图
    if (prevNodes.size === currNodes.size) {
      Array.from(currNodes).every((node) => prevNodes.has(node))
      return
    } else {
      prevState = currState
      prevNodes = currNodes

      viewComponent.updateProps({
        items: []
      })

      // TODO 更新视图
      // editor.unregisterPlugin('bubbleMenu')
      // installBubbleMenuPlugin(editor, viewComponent)
    }
  })
}

const installBubbleMenuPlugin = (editor, viewComponent) => {
  const props = {
    pluginKey: 'bubbleMenu',
    editor,
    element: viewComponent.element,
    updateDelay: 100,
    shouldShow: null,
    tippyOptions: {}
  }

  editor.registerPlugin(BubbleMenuPlugin(props))
}

export const getBubbleMenuItems = () => {
  return [
    {
      icon: iconRichTextBold(),
      priority: 10,
      isActive: ({ editor }: { editor: Editor }) => {
        return () => editor.isActive('bold')
      },
      action: ({ editor }: { editor: Editor }) => {
        return () => editor.chain().focus().toggleBold().run()
      }
    },
    {
      icon: iconRichTextStrikeThrough(),
      priority: 20,
      isActive: ({ editor }: { editor: Editor }) => {
        return () => editor.isActive('strike')
      },
      action: ({ editor }: { editor: Editor }) => {
        return () => editor.chain().focus().toggleStrike().run()
      }
    },
    {
      icon: iconRichTextItalic(),
      priority: 20,
      isActive: ({ editor }: { editor: Editor }) => {
        return () => editor.isActive('italic')
      },
      action: ({ editor }: { editor: Editor }) => {
        return () => editor.chain().focus().toggleItalic().run()
      }
    },
    {
      icon: iconRichTextUnderline(),
      priority: 30,
      isActive: ({ editor }: { editor: Editor }) => {
        return () => editor.isActive('underline')
      },
      action: ({ editor }: { editor: Editor }) => {
        return () => editor.chain().focus().toggleUnderline().run()
      }
    }
  ]
}
