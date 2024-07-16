import ExtensionDocument from '@tiptap/extension-document'
import ExtensionTextStyle from '@tiptap/extension-text-style'
import ExtensionBold from './bold'
import ExtensionCode from './code'
import ExtensionCodeBlock from './code-block'
import ExtensionItalic from './italic'
import ExtensionUnderline from './underline'
import ExtensionStrike from './strike'
import ExtensionParagraph from './paragraph'
import ExtensionText from './text'
import ExtensionTable from './table'
import ExtensionSubscript from './subscript'
import ExtensionSupscript from './supscript'
import ExtensionOrderedList from './ordered-list'
import ExtensionPlaceholder from './placeholder'
import ExtensionBulletList from './bullet-list'
import ExtensionTaskList from './task-list'
import ExtensionTextAlign from './text-align'
import ExtensionLink from './link'
import ExtensionColor from './color'
import ExtensionHighlight from './highlight'
import ExtensionHeading from './heading'
import ExtensionBlockquote from './blockquote'
import ExtensionHistory from './history'
import ExtensionImage from './image'
import lowlight from './code-block/lowlight'

export const extensions = [
  ExtensionDocument,
  ExtensionPlaceholder,
  ExtensionTextStyle,
  ExtensionBold,
  ExtensionItalic,
  ExtensionUnderline,
  ExtensionParagraph,
  ExtensionText,
  ExtensionTable,
  ExtensionStrike,
  ExtensionCode,
  ExtensionCodeBlock.configure({
    lowlight
  }),
  ExtensionSubscript,
  ExtensionSupscript,
  ExtensionOrderedList,
  ExtensionPlaceholder.configure({
    placeholder: '输入 / 来使用斜杠菜单'
  }),
  ExtensionBulletList,
  ExtensionTaskList,
  ExtensionTextAlign.configure({
    types: ['heading', 'paragraph']
  }),
  ExtensionLink,
  ExtensionColor,
  ExtensionHighlight,
  ExtensionHeading,
  ExtensionBlockquote,
  ExtensionHistory,
  ExtensionImage
]
