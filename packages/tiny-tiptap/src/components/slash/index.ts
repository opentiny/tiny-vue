import { AnyExtension, Editor, Extension, Range } from '@tiptap/core'
import Suggestion from '@tiptap/suggestion'
import { SlashMenuItem } from '@/types'
import type { Instance } from 'tippy.js'
import tippy from 'tippy.js'

export const generateSlashMenuExtension = (Renderer, view) => {
  return Extension.create({
    name: 'slashMenu',

    addProseMirrorPlugins() {
      const slashMenuItems = getSlashMenuItemsFromExtensions(this.editor)

      return [
        Suggestion({
          editor: this.editor,
          char: '/',
          command: ({ editor, range, props }: { editor: Editor; range: Range; props: SlashMenuItem }) => {
            props.command({ editor, range })
          },
          items: ({ query }: { query: string }) => {
            return slashMenuItems.filter((item) =>
              [...item.keywords, item.title].some((keyword) => keyword.includes(query.toLocaleLowerCase()))
            )
          },
          render: () => {
            let popup: Instance[]
            let viewComponent

            return {
              onStart: (props: Record<string, any>) => {
                viewComponent = new Renderer(view, {
                  props,
                  editor: props.editor
                })

                if (!props.clientRect) return

                popup = tippy('body', {
                  getReferenceClientRect: props.clientRect,
                  appendTo: () => document.body,
                  content: viewComponent.element,
                  showOnCreate: true,
                  interactive: true,
                  trigger: 'manual',
                  placement: 'bottom-start'
                })
              },

              onUpdate: (props: Record<string, any>) => {
                viewComponent.updateProps(props)

                if (!props.clientRect) return

                popup[0].setProps({
                  getReferenceClientRect: props.clientRect
                })
              },

              onKeyDown: (props: Record<string, any>) => {
                if (props.event.key === 'Escape') {
                  popup[0].hide()

                  return true
                }

                return viewComponent.ref?.onKeyDown(props)
              },

              onExit() {
                popup[0].destroy()
                viewComponent.destroy()
              }
            }
          }
        })
      ]
    }
  })
}

function getSlashMenuItemsFromExtensions(editor: Editor) {
  const extensionManager = editor.extensionManager
  return (extensionManager?.extensions ?? [])
    .reduce((prev: SlashMenuItem[], curr: AnyExtension) => {
      const { getSlashMenus } = curr.options

      if (!getSlashMenus) return prev

      const menus = getSlashMenus()

      prev.push(...menus)
      return prev
    }, [])
    .sort((a, b) => a.priority - b.priority)
}
