<template>
  <div class="tiny-rich-text-editor">
    <div class="button-area">
      <!-- starter-kit功能区 -->
      <button
        title="bold"
        @click="state.editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': state.editor?.isActive('bold') }"
      >
        <TinyIconRichTextBold></TinyIconRichTextBold>
      </button>
      <button title="link" @click="setLink" :class="{ 'is-active': state.editor?.isActive('link') }">
        <TinyIconRichTextLink></TinyIconRichTextLink>
      </button>
      <button
        title="unlink"
        @click="state.editor.chain().focus().unsetLink().run()"
        :disabled="!state.editor?.isActive('link')"
      >
        <TinyIconRichTextLinkUnlink></TinyIconRichTextLinkUnlink>
      </button>
      <button
        title="high light"
        @click="state.editor.chain().focus().toggleHighlight().run()"
        :class="{ 'is-active': state.editor?.isActive('highlight') }"
      >
        <TinyIconRichTextHighLight></TinyIconRichTextHighLight>
      </button>
      <button class="line-height-button" title="line height" @click="state.editor.chain().focus().toggleHeight().run()">
        <div class="line-height-icon">
          <TinyIconRichTextLineHeight></TinyIconRichTextLineHeight>
        </div>
        <div class="line-height-options">
          <button class="line-1.0" @click.stop="state.editor.chain().focus().setP({ level: 1 }).run()">1.0</button>
          <button class="line-1.5" @click.stop="state.editor.chain().focus().setP({ level: 1.5 }).run()">1.5</button>
          <button class="line-2.0" @click.stop="state.editor.chain().focus().setP({ level: 2 }).run()">2.0</button>
          <button class="line-2.5" @click.stop="state.editor.chain().focus().setP({ level: 2.5 }).run()">2.5</button>
        </div>
      </button>
      <button
        @click="state.editor.chain().focus().toggleUnderline().run()"
        :class="{ 'is-active': state.editor?.isActive('underline') }"
      >
        <TinyIconRichTextUnderline></TinyIconRichTextUnderline>
      </button>
      <button
        title="strike through"
        @click="state.editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': state.editor?.isActive('strike') }"
      >
        <TinyIconRichTextStrikeThrough></TinyIconRichTextStrikeThrough>
      </button>
      <button title="italic" @click="state.editor.chain().focus().toggleItalic().run()">
        <TinyIconRichTextItalic></TinyIconRichTextItalic>
      </button>
      <button class="h-box">
        <div class="h-ico">
          <TinyIconRichTextHeading></TinyIconRichTextHeading>
        </div>
        <div class="h-options">
          <button title="paragraph" @click="state.editor.chain().focus().setParagraph().run()">
            <TinyIconRichTextParagraph></TinyIconRichTextParagraph>
          </button>
          <button title="h1" @click="state.editor.chain().focus().toggleHeading({ level: 1 }).run()">
            <TinyIconRichTextH1></TinyIconRichTextH1>
          </button>
          <button title="h2" @click="state.editor.chain().focus().toggleHeading({ level: 2 }).run()">
            <TinyIconRichTextH2></TinyIconRichTextH2>
          </button>
          <button title="h3" @click="state.editor.chain().focus().toggleHeading({ level: 3 }).run()">
            <TinyIconRichTextH3></TinyIconRichTextH3>
          </button>
          <button title="h4" @click="state.editor.chain().focus().toggleHeading({ level: 4 }).run()">
            <TinyIconRichTextH4></TinyIconRichTextH4>
          </button>
          <button title="h5" @click="state.editor.chain().focus().toggleHeading({ level: 5 }).run()">
            <TinyIconRichTextH5></TinyIconRichTextH5>
          </button>
          <button title="h6" @click="state.editor.chain().focus().toggleHeading({ level: 6 }).run()">
            <TinyIconRichTextH6></TinyIconRichTextH6>
          </button>
        </div>
      </button>
      <button
        title="subscript"
        @click="state.editor.chain().focus().toggleSubscript().run()"
        :class="{ 'is-active': state.editor?.isActive('subscript') }"
      >
        <TinyIconRichTextSubscript></TinyIconRichTextSubscript>
      </button>
      <button
        title="superscript"
        @click="state.editor.chain().focus().toggleSuperscript().run()"
        :class="{ 'is-active': state.editor?.isActive('superscript') }"
      >
        <TinyIconRichTextSuperscript></TinyIconRichTextSuperscript>
      </button>
      <!-- 无序列表 -->
      <button title="code" @click="state.editor.chain().focus().toggleCode().run()">
        <TinyIconRichTextCodeView></TinyIconRichTextCodeView>
      </button>
      <button title="unordered list" @click.stop="state.editor.chain().focus().toggleBulletList().run()">
        <TinyIconRichTextListUnordered></TinyIconRichTextListUnordered>
      </button>
      <button title="ordered list" @click="state.editor.chain().focus().toggleOrderedList().run()">
        <TinyIconRichTextListOrdered></TinyIconRichTextListOrdered>
      </button>
      <button
        @click="state.editor.chain().focus().toggleTaskList().run()"
        :class="{ 'is-active': state.editor?.isActive('taskList') }"
      >
        <TinyIconRichTextTaskList></TinyIconRichTextTaskList>
      </button>
      <button title="quote" @click="state.editor.chain().focus().toggleBlockquote().run()">
        <TinyIconRichTextQuoteText></TinyIconRichTextQuoteText>
      </button>
      <button title="code block" @click="state.editor.chain().focus().toggleCodeBlock().run()">
        <TinyIconRichTextCodeBlock></TinyIconRichTextCodeBlock>
      </button>
      <button title="format clear" @click="state.editor.chain().focus().unsetAllMarks().run()">
        <TinyIconRichTextFormatClear></TinyIconRichTextFormatClear>
      </button>
      <button title="node delete" @click="state.editor.chain().focus().clearNodes().run()">
        <TinyIconRichTextNodeDelete></TinyIconRichTextNodeDelete>
      </button>
      <button title="undo" @click="state.editor.chain().focus().undo().run()">
        <TinyIconRichTextUndo></TinyIconRichTextUndo>
      </button>
      <button title="redo" @click="state.editor.chain().focus().redo().run()">
        <TinyIconRichTextRedo></TinyIconRichTextRedo>
      </button>
      <!-- 图片 -->
      <button title="img" class="image-button">
        <input @change="handleChange" id="img-btn" :placeholder="'啊飒飒'" type="file" accept="image/*" />
        <label for="img-btn">
          <TinyIconRichTextImage></TinyIconRichTextImage>
        </label>
      </button>
      <!-- 文本对齐 -->
      <button
        @click="state.editor.chain().focus().setTextAlign('left').run()"
        :class="{ 'is-active': state.editor?.isActive({ textAlign: 'left' }) }"
      >
        <TinyIconRichTextAlignLeft></TinyIconRichTextAlignLeft>
      </button>
      <button
        @click="state.editor.chain().focus().setTextAlign('center').run()"
        :class="{ 'is-active': state.editor?.isActive({ textAlign: 'center' }) }"
      >
        <TinyIconRichTextAlignCenter></TinyIconRichTextAlignCenter>
      </button>
      <button
        @click="state.editor.chain().focus().setTextAlign('right').run()"
        :class="{ 'is-active': state.editor?.isActive({ textAlign: 'right' }) }"
      >
        <TinyIconRichTextAlignRight></TinyIconRichTextAlignRight>
      </button>
      <!-- 颜色 -->
      <button title="color" class="color-button">
        <label for="tiny-color">
          <TinyIconRichTextColor></TinyIconRichTextColor>
        </label>
        <input
          id="tiny-color"
          type="color"
          @input="state.editor.chain().focus().setColor($event.target.value).run()"
          :value="state.editor?.getAttributes('textStyle').color"
        />
      </button>
      <!-- 表格功能按钮 -->
      <button title="table" class="table-button">
        <div class="table-box" @click="handleClick">
          <div class="table-icon">
            <TinyIconRichTextTable></TinyIconRichTextTable>
          </div>
          <div class="table-option" ref="box" v-if="state.isShow" @mousemove="handleMove">
            <div class="item" :class="{ isActive: 1 <= state.flagX && 1 <= state.flagY }"></div>
            <div class="item" :class="{ isActive: 2 <= state.flagX && 1 <= state.flagY }"></div>
            <div class="item" :class="{ isActive: 3 <= state.flagX && 1 <= state.flagY }"></div>
            <div class="item" :class="{ isActive: 1 <= state.flagX && 2 <= state.flagY }"></div>
            <div class="item" :class="{ isActive: 2 <= state.flagX && 2 <= state.flagY }"></div>
            <div class="item" :class="{ isActive: 3 <= state.flagX && 2 <= state.flagY }"></div>
            <div class="item" :class="{ isActive: 1 <= state.flagX && 3 <= state.flagY }"></div>
            <div class="item" :class="{ isActive: 2 <= state.flagX && 3 <= state.flagY }"></div>
            <div class="item" :class="{ isActive: 3 <= state.flagX && 3 <= state.flagY }"></div>
          </div>
        </div>
      </button>
      <BubbleMenu
        :editor="state.editor"
        :tippy-options="{ duration: 100 }"
        v-if="state.editor"
        :should-show="shouldShow"
        class="bubble-menu"
      >
        <button
          title="add column before"
          @click="state.editor.chain().focus().addColumnBefore().run()"
          :disabled="!state.editor?.can().addColumnBefore()"
        >
          <TinyIconRichTextAddColumnBefore></TinyIconRichTextAddColumnBefore>
        </button>
        <button
          title="add column after"
          @click="state.editor.chain().focus().addColumnAfter().run()"
          :disabled="!state.editor?.can().addColumnAfter()"
        >
          <TinyIconRichTextAddColumnAfter></TinyIconRichTextAddColumnAfter>
        </button>
        <button
          title="delete column"
          @click="state.editor.chain().focus().deleteColumn().run()"
          :disabled="!state.editor?.can().deleteColumn()"
        >
          <TinyIconRichTextDeleteColumn></TinyIconRichTextDeleteColumn>
        </button>
        <button
          title="add row before"
          @click="state.editor.chain().focus().addRowBefore().run()"
          :disabled="!state.editor?.can().addRowBefore()"
        >
          <TinyIconRichTextAddRowBefore></TinyIconRichTextAddRowBefore>
        </button>
        <button
          title="add row after"
          @click="state.editor.chain().focus().addRowAfter().run()"
          :disabled="!state.editor?.can().addRowAfter()"
        >
          <TinyIconRichTextAddRowAfter></TinyIconRichTextAddRowAfter>
        </button>
        <button
          title="delete row"
          @click="state.editor.chain().focus().deleteRow().run()"
          :disabled="!state.editor?.can().deleteRow()"
        >
          <TinyIconRichTextDeleteRow></TinyIconRichTextDeleteRow>
        </button>
        <button
          title="delete table"
          @click="state.editor.chain().focus().deleteTable().run()"
          :disabled="!state.editor?.can().deleteTable()"
        >
          <TinyIconRichTextDeleteTable></TinyIconRichTextDeleteTable>
        </button>
        <button
          title="toggle header cell"
          @click="state.editor.chain().focus().toggleHeaderCell().run()"
          :disabled="!state.editor?.can().toggleHeaderCell()"
        >
          <TinyIconRichTextHeading></TinyIconRichTextHeading>
        </button>
        <button
          title="merge Or split"
          @click="state.editor.chain().focus().mergeOrSplit().run()"
          :disabled="!state.editor?.can().mergeOrSplit()"
        >
          <TinyIconRichTextMergeCells></TinyIconRichTextMergeCells>
        </button>
      </BubbleMenu>
    </div>
    <div class="small-box">
      <EditorContent :editor="state.editor"></EditorContent>
    </div>
  </div>
</template> 

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/rich-text-edtior/vue'
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
  iconRichTextColor,
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
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  VueNodeViewRenderer,
  NodeViewContent,
  nodeViewProps,
  NodeViewWrapper
} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
// 段落包
import Paragraph from '@tiptap/extension-paragraph'
import { mergeAttributes } from '@tiptap/core'
// image 包
import Image from '@tiptap/extension-image'
// -- HeighLight
import Highlight from '@tiptap/extension-highlight'
// color 包
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
// -- link
import Link from '@tiptap/extension-link'
// underline
import Underline from '@tiptap/extension-underline'
// subScript
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
// table 包
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
// task list
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
// textalign
import TextAlign from '@tiptap/extension-text-align'
// code high light
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import { lowlight } from 'lowlight'
lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)
// collaboration 包
import Collaboration from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'

import { props, setup, defineComponent } from '@opentiny/vue-common'
import '@opentiny/vue-theme/rich-text-editor/index.less'

export default defineComponent({
  //   emits: ['click', 'hook-updated'],
  //   props: [...props, 'type', 'text', 'size', 'icon', 'resetTime', 'nativeType', 'loading', 'disabled', 'plain', 'autofocus', 'round', 'circle', 'tabindex'],
  components: {
    EditorContent,
    BubbleMenu,
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
    TinyIconRichTextColor: iconRichTextColor(),
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
      extendOptions: {
        useEditor,
        Collaboration,
        StarterKit,
        Y,
        WebrtcProvider,
        Table,
        TableCell,
        TableHeader,
        TableRow,
        Color,
        TextStyle,
        Image,
        Highlight,
        Link,
        Underline,
        Subscript,
        Superscript,
        TaskItem,
        TaskList,
        TextAlign,
        Paragraph,
        mergeAttributes,
        CodeBlockLowlight,
        lowlight,
        VueNodeViewRenderer,
        NodeViewContent,
        nodeViewProps,
        NodeViewWrapper
      }
    })
  }
})
</script>
