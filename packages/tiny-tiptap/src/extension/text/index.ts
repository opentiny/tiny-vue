import type { Editor } from '@tiptap/core'
import type { ExtensionOptions } from '@/types'
import type { EditorState } from '@tiptap/pm/state'
import {
  iconRichTextBold,
  iconRichTextItalic,
  iconRichTextStrikeThrough,
  iconRichTextUnderline,
  IconRichTextAlignLeft,
  IconRichTextAlignCenter,
  IconRichTextAlignRight,
  IconRichTextFormatClear
} from '@opentiny/vue-icon'
import TiptapText from '@tiptap/extension-text'

const Text = TiptapText.extend<ExtensionOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'left',
            icon: IconRichTextAlignLeft(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().setTextAlign('left').run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive({ textAlign: 'left' })
              }
            }
          },
          {
            key: 'center',
            icon: IconRichTextAlignCenter(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().setTextAlign('center').run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive({ textAlign: 'center' })
              }
            }
          },
          {
            key: 'right',
            icon: IconRichTextAlignRight(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().setTextAlign('right').run()
              }
            },
            isActive: ({ editor }: { editor: Editor }) => {
              return () => {
                return editor.isActive({ textAlign: 'right' })
              }
            }
          },
          {
            key: 'formatClear',
            icon: IconRichTextFormatClear(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().unsetAllMarks().run()
              }
            }
          }
        ]
      },
      getBubbleMenu() {
        return {
          pluginKey: 'textBubbleMenu',
          shouldShow: ({ state, from, to }) => {
            const { doc, selection } = state as EditorState
            const { empty: isSelectionEmpty } = selection
            const isTextEmpty = doc.textBetween(from ?? 0, to ?? 0).length === 0

            // 选择内容为空时不显示
            if (isSelectionEmpty || isTextEmpty) {
              return false
            }

            return true
          },
          items: [
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
      }
    }
  }
})

export default Text
export { Text }
