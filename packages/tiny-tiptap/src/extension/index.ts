import ExtensionBlockquote from './blockquote'
import ExtensionBold from './bold'
import ExtensionBubbleMenu from './bubble-menu'
import ExtensionBulletList from './bullet-list'
import ExtensionCharacterCount from './character-count'
import ExtensionCode from './code'
import ExtensionCodeBlock from './code-block'
import ExtensionCollaboration from './collaboration'
import ExtensionCollaborationCursor from './collaboration-cursor'
import ExtensionColor from './color'
import ExtensionDocument from './document'
import ExtensionDropCursor from './dropcursor'
import ExtensionFloatingMenu from './floating-menu'
import ExtensionFocus from './focus'
import ExtensionFontFamily from './font-family'
import ExtensionGapcursor from './gapcursor'
import ExtensionHardBreak from './hard-break'
import ExtensionHeading from './heading'
import ExtensionHighlight from './highlight'
import ExtensionHistory from './history'
import ExtensionHorizontalRule from './horizontal-rule'
import ExtensionImage from './image'
import ExtensionItalic from './italic'
import ExtensionLink from './link'
import ExtensionListItem from './list-item'
import ExtensionListKeymap from './list-keymap'
import ExtensionMention from './mention'
import ExtensionOrderedList from './ordered-list'
import ExtensionParagraph from './paragraph'
import ExtensionPlaceholder from './placeholder'
import ExtensionStrike from './strike'
import ExtensionSubscript from './subscript'
import ExtensionSupscript from './supscript'
import ExtensionTable from './table'
import ExtensionTableCell from './table-cell'
import ExtensionTableHeader from './table-header'
import ExtensionTaskList from './task-list'
import ExtensionTaskItem from './task-item'
import ExtensionText from './text'
import ExtensionTextAlign from './text-align'
import ExtensionTextStyle from './text-style'
import ExtensionTypography from './typography'
import ExtensionUnderline from './underline'
import ExtensionYoutube from './youtube'

import lowlight from './code-block/lowlight'

export const extensions = [
  ExtensionDocument,
  ExtensionBold,
  ExtensionItalic,
  ExtensionUnderline,
  ExtensionParagraph,
  ExtensionText,
  ExtensionTable.configure({
    resizable: true
  }),
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

export {
  ExtensionBlockquote,
  ExtensionBold,
  ExtensionBubbleMenu,
  ExtensionBulletList,
  ExtensionCharacterCount,
  ExtensionCode,
  ExtensionCodeBlock,
  ExtensionCollaboration,
  ExtensionCollaborationCursor,
  ExtensionColor,
  ExtensionDocument,
  ExtensionDropCursor,
  ExtensionFloatingMenu,
  ExtensionFocus,
  ExtensionFontFamily,
  ExtensionGapcursor,
  ExtensionHardBreak,
  ExtensionHeading,
  ExtensionHighlight,
  ExtensionHistory,
  ExtensionHorizontalRule,
  ExtensionImage,
  ExtensionItalic,
  ExtensionLink,
  ExtensionListItem,
  ExtensionListKeymap,
  ExtensionMention,
  ExtensionOrderedList,
  ExtensionParagraph,
  ExtensionPlaceholder,
  ExtensionStrike,
  ExtensionSubscript,
  ExtensionSupscript,
  ExtensionTable,
  ExtensionTableCell,
  ExtensionTableHeader,
  ExtensionTaskList,
  ExtensionTaskItem,
  ExtensionText,
  ExtensionTextAlign,
  ExtensionTextStyle,
  ExtensionTypography,
  ExtensionUnderline,
  ExtensionYoutube
}
