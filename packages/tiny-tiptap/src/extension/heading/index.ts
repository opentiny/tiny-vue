import type { ExtensionOptions } from '@/types'
import { Editor, Range } from '@tiptap/core'
import type { HeadingOptions } from '@tiptap/extension-heading'
import TiptapHeading from '@tiptap/extension-heading'
import {
  iconRichTextH1,
  iconRichTextH2,
  iconRichTextH3,
  iconRichTextH4,
  iconRichTextH5,
  iconRichTextH6
} from '@opentiny/vue-icon'

const Heading = TiptapHeading.extend<ExtensionOptions & HeadingOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getSlashMenus() {
        return [
          {
            priority: 10,
            icon: iconRichTextH1(),
            title: '一级标题',
            keywords: ['heading', 'biaoti', 'h1', '1', 'header1', 'yiji'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run()
            }
          },
          {
            priority: 10,
            icon: iconRichTextH2(),
            title: '二级标题',
            keywords: ['heading', 'biaoti', 'h2', '2', 'header2', 'erji'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run()
            }
          },
          {
            priority: 10,
            icon: iconRichTextH3(),
            title: '三级标题',
            keywords: ['heading', 'biaoti', 'h3', '3', 'header3', 'sanji'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run()
            }
          },
          {
            priority: 10,
            icon: iconRichTextH4(),
            title: '四级标题',
            keywords: ['heading', 'biaoti', 'h4', '4', 'header4', 'siji'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).setNode('heading', { level: 4 }).run()
            }
          },
          {
            priority: 10,
            icon: iconRichTextH5(),
            title: '五级标题',
            keywords: ['heading', 'biaoti', 'h5', '5', 'header5', 'wuji'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).setNode('heading', { level: 5 }).run()
            }
          },
          {
            priority: 10,
            icon: iconRichTextH6(),
            title: '六级标题',
            keywords: ['heading', 'biaoti', 'h6', '6', 'header6', 'liuji'],
            command: ({ editor, range }: { editor: Editor; range: Range }) => {
              editor.chain().focus().deleteRange(range).setNode('heading', { level: 6 }).run()
            }
          }
        ]
      }
    }
  }
})

export default Heading
