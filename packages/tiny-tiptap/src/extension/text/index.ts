import { isActive, type Editor } from '@tiptap/core'
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
  IconRichTextFormatClear,
  iconRichTextQuoteText,
  iconRichTextCodeView,
  IconRichTextSubscript,
  IconRichTextSuperscript,
} from '@opentiny/vue-icon'
import TiptapText from '@tiptap/extension-text'
import Bold from '../bold'
import Strike from '../strike'
import Underline from '../underline'
import Italic from '../italic'
import Blockquote from '../blockquote'
import Code from '../code'
import Subscript from '../subscript'
import Supscript from '../supscript'

import CodeBlock from '../code-block'
import Table from '../table'

const IGNORE_BUBBLE_TYPES = [Table.name, CodeBlock.name]

const Text = TiptapText.extend<ExtensionOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'left',
            title: '左对齐',
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
            },
          },
          {
            key: 'center',
            title: '居中对齐',
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
            },
          },
          {
            key: 'right',
            title: '右对齐',
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
            },
          },
          {
            key: 'formatClear',
            title: '清除格式',
            icon: IconRichTextFormatClear(),
            action: ({ editor }: { editor: Editor }) => {
              return () => {
                editor.chain().focus().unsetAllMarks().run()
              }
            },
          },
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

            // 避免其他类型激活时出现气泡菜单
            if (IGNORE_BUBBLE_TYPES.some(type => isActive(state, type))) {
              return false
            }

            return true
          },
          items: [
            {
              icon: iconRichTextBold(),
              priority: 10,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive(Bold.name)
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().toggleBold().run()
              },
            },
            {
              icon: iconRichTextStrikeThrough(),
              priority: 20,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive(Strike.name)
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().toggleStrike().run()
              },
            },
            {
              icon: iconRichTextItalic(),
              priority: 20,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive(Italic.name)
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().toggleItalic().run()
              },
            },
            {
              icon: iconRichTextUnderline(),
              priority: 30,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive(Underline.name)
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().toggleUnderline().run()
              },
            },
            {
              icon: iconRichTextQuoteText(),
              priority: 40,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive(Blockquote.name)
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().toggleBlockquote().run()
              },
            },
            {
              icon: iconRichTextCodeView(),
              priority: 50,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive(Code.name)
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().toggleCode().run()
              },
            },
            {
              icon: IconRichTextSubscript(),
              priority: 60,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive(Subscript.name)
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().toggleSubscript().run()
              },
            },
            {
              icon: IconRichTextSuperscript(),
              priority: 70,
              isActive: ({ editor }: { editor: Editor }) => {
                return () => editor.isActive(Supscript.name)
              },
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().toggleSuperscript().run()
              },
            },
            {
              icon: IconRichTextFormatClear(),
              priority: 0,
              action: ({ editor }: { editor: Editor }) => {
                return () => editor.chain().focus().unsetAllMarks().run()
              },
            },
          ],
        }
      },
    }
  },
})

export default Text
export { Text }
