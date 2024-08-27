import type { ExtensionOptions } from '@/types'
import { Editor, Range } from '@tiptap/core'
import type { HeadingOptions } from '@tiptap/extension-heading'
import TiptapHeading from '@tiptap/extension-heading'
import {
  IconRichTextParagraph,
  iconRichTextHeading,
  iconRichTextH1,
  iconRichTextH2,
  iconRichTextH3,
  iconRichTextH4,
  iconRichTextH5,
  iconRichTextH6
} from '@opentiny/vue-icon'

const HeadingList = [
  {
    icon: iconRichTextH1(),
    title: '一级标题',
    keywords: ['heading', 'biaoti', 'h1', '1', 'header1', 'yiji'],
    level: 1
  },
  {
    icon: iconRichTextH2(),
    title: '二级标题',
    keywords: ['heading', 'biaoti', 'h2', '2', 'header2', 'erji'],
    level: 2
  },
  {
    icon: iconRichTextH3(),
    title: '三级标题',
    keywords: ['heading', 'biaoti', 'h3', '3', 'header3', 'sanji'],
    level: 3
  },
  {
    icon: iconRichTextH4(),
    title: '四级标题',
    keywords: ['heading', 'biaoti', 'h4', '4', 'header4', 'siji'],
    level: 4
  },
  {
    icon: iconRichTextH5(),
    title: '五级标题',
    keywords: ['heading', 'biaoti', 'h5', '5', 'header5', 'wuji'],
    level: 5
  },
  {
    icon: iconRichTextH6(),
    title: '六级标题',
    keywords: ['heading', 'biaoti', 'h6', '6', 'header6', 'liuji'],
    level: 6
  }
]

const Heading = TiptapHeading.extend<ExtensionOptions & HeadingOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      getToolbarMenus() {
        return [
          {
            key: 'h-box',
            icon: iconRichTextHeading(),
            submenu: ({ editor }) => [
              {
                icon: IconRichTextParagraph(),
                action: () => editor.chain().focus().setParagraph().run()
              },
              ...HeadingList.map((item) => ({
                icon: item.icon,
                action: () => editor.chain().focus().toggleHeading({ level: item.level }).run()
              }))
            ]
          }
        ]
      },
      getSlashMenus() {
        const priority = 10
        const getCommand =
          (level) =>
          ({ editor, range }: { editor: Editor; range: Range }) => {
            editor.chain().focus().deleteRange(range).setNode('heading', { level }).run()
          }
        return HeadingList.map((menu) => ({
          priority,
          icon: menu.icon,
          title: menu.title,
          keywords: menu.keywords,
          command: getCommand(menu.level)
        }))
      }
    }
  }
})

export default Heading
export { Heading, HeadingOptions }
