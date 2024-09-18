<template>
  <div class="tiny-rich-text-editor">
    <toolbar-menu v-if="state.toolbarMenu" :items="state.toolbarMenu" />
    <div class="tiny-rich-text-editor__container">
      <EditorContent :editor="state.editor"></EditorContent>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/rich-text-editor/vue'
import {
  iconRichTextAddColumnAfter,
  iconRichTextAddColumnBefore,
  iconRichTextAddRowAfter,
  iconRichTextAddRowBefore,
  iconRichTextAlignCenter,
  iconRichTextAlignLeft,
  iconRichTextAlignRight,
  iconRichTextBold,
  iconRichTextCodeBlock,
  iconRichTextCodeView,
  IconEditorTextcolor,
  IconEditorBackground,
  iconRichTextDeleteColumn,
  iconRichTextDeleteRow,
  iconRichTextDeleteTable,
  iconRichTextFontSize,
  iconRichTextFormatClear,
  iconRichTextH1,
  iconRichTextH2,
  iconRichTextH3,
  iconRichTextH4,
  iconRichTextH5,
  iconRichTextH6,
  iconRichTextHeading,
  iconRichTextHighLight,
  iconRichTextItalic,
  IconRichTextImage,
  iconRichTextLineHeight,
  iconRichTextLink,
  iconRichTextLinkUnlink,
  iconRichTextListOrdered,
  iconRichTextListUnordered,
  iconRichTextMergeCells,
  iconRichTextMergeCellsVertical,
  iconRichTextNodeDelete,
  iconRichTextParagraph,
  iconRichTextQuoteText,
  iconRichTextRedo,
  iconRichTextSplitCellsHorizontal,
  iconRichTextSplitCellsVertical,
  iconRichTextStrikeThrough,
  iconRichTextSubscript,
  iconRichTextSuperscript,
  iconRichTextTable,
  iconRichTextTaskList,
  iconRichTextUnderline,
  iconRichTextUndo
} from '@opentiny/vue-icon'
import { Editor, EditorContent, BubbleMenu, VueNodeViewRenderer, VueRenderer } from '@opentiny/tiny-tiptap/vue'
import TinyTiptap from '@opentiny/tiny-tiptap'

import { extensionViewMap } from './extensions'
import toolbarMenuView from './components/toolbar-menu'
import slashMenuView from './components/slash-menu'
import floatMenuView from './components/float-menu'
import bubbleMenuView from './components/bubble-menu'

import { $props, setup, defineComponent, $prefix, directive } from '@opentiny/vue-common'
import '@opentiny/vue-theme/rich-text-editor/index.less'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'

export const richTextEditorProps = {
  ...$props,
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  customToolBar: {
    type: Array,
    default: () => []
  },
  options: {
    type: Object,
    default: () => ({})
  },
  viewMap: {
    type: [Map, Boolean],
    default: true
  },
  slashMenuView: {
    type: [Object, Boolean],
    default: false
  },
  floatMenuView: {
    type: [Object, Boolean],
    default: false
  },
  collaboration: {
    type: [Object, Boolean],
    default: false
  },
  bubbleMenuView: {
    type: [Object, Boolean],
    default: true
  }
}

export default defineComponent({
  name: $prefix + 'RichTextEditor',
  emits: [
    'beforeCreate',
    'create',
    'update:modelValue',
    'focus',
    'blur',
    'selectionUpdate',
    'transaction',
    'destroy',
    'update'
  ],
  directives: directive({ Clickoutside }),
  props: richTextEditorProps,
  components: {
    EditorContent,
    BubbleMenu,
    ToolbarMenu: toolbarMenuView,
    TinyIconRichTextAddColumnAfter: iconRichTextAddColumnAfter(),
    TinyIconRichTextAddColumnBefore: iconRichTextAddColumnBefore(),
    TinyIconRichTextAddRowAfter: iconRichTextAddRowAfter(),
    TinyIconRichTextAddRowBefore: iconRichTextAddRowBefore(),
    TinyIconRichTextAlignCenter: iconRichTextAlignCenter(),
    TinyIconRichTextAlignLeft: iconRichTextAlignLeft(),
    TinyIconRichTextAlignRight: iconRichTextAlignRight(),
    TinyIconRichTextBold: iconRichTextBold(),
    TinyIconRichTextCodeBlock: iconRichTextCodeBlock(),
    TinyIconRichTextCodeView: iconRichTextCodeView(),
    TinyIconRichTextColor: IconEditorTextcolor(),
    TinyIconRichbackgroundColor: IconEditorBackground(),
    TinyIconRichTextDeleteColumn: iconRichTextDeleteColumn(),
    TinyIconRichTextDeleteRow: iconRichTextDeleteRow(),
    TinyIconRichTextDeleteTable: iconRichTextDeleteTable(),
    TinyIconRichTextFontSize: iconRichTextFontSize(),
    TinyIconRichTextFormatClear: iconRichTextFormatClear(),
    TinyIconRichTextH1: iconRichTextH1(),
    TinyIconRichTextH2: iconRichTextH2(),
    TinyIconRichTextH3: iconRichTextH3(),
    TinyIconRichTextH4: iconRichTextH4(),
    TinyIconRichTextH5: iconRichTextH5(),
    TinyIconRichTextH6: iconRichTextH6(),
    TinyIconRichTextHeading: iconRichTextHeading(),
    TinyIconRichTextHighLight: iconRichTextHighLight(),
    TinyIconRichTextItalic: iconRichTextItalic(),
    TinyIconRichTextImage: IconRichTextImage(),
    TinyIconRichTextLineHeight: iconRichTextLineHeight(),
    TinyIconRichTextLink: iconRichTextLink(),
    TinyIconRichTextLinkUnlink: iconRichTextLinkUnlink(),
    TinyIconRichTextListOrdered: iconRichTextListOrdered(),
    TinyIconRichTextListUnordered: iconRichTextListUnordered(),
    TinyIconRichTextMergeCells: iconRichTextMergeCells(),
    TinyIconRichTextMergeCellsVertical: iconRichTextMergeCellsVertical(),
    TinyIconRichTextNodeDelete: iconRichTextNodeDelete(),
    TinyIconRichTextParagraph: iconRichTextParagraph(),
    TinyIconRichTextQuoteText: iconRichTextQuoteText(),
    TinyIconRichTextRedo: iconRichTextRedo(),
    TinyIconRichTextSplitCellsHorizontal: iconRichTextSplitCellsHorizontal(),
    TinyIconRichTextSplitCellsVertical: iconRichTextSplitCellsVertical(),
    TinyIconRichTextStrikeThrough: iconRichTextStrikeThrough(),
    TinyIconRichTextSubscript: iconRichTextSubscript(),
    TinyIconRichTextSuperscript: iconRichTextSuperscript(),
    TinyIconRichTextTable: iconRichTextTable(),
    TinyIconRichTextTaskList: iconRichTextTaskList(),
    TinyIconRichTextUnderline: iconRichTextUnderline(),
    TinyIconRichTextUndo: iconRichTextUndo()
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true,
      extendOptions: {
        TinyTiptap,
        Editor,
        VueRenderer,
        VueNodeViewRenderer,
        viewMap: extensionViewMap,
        slashMenuView,
        floatMenuView,
        bubbleMenuView
      }
    })
  }
})
</script>
