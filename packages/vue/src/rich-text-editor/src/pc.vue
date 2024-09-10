<template>
  <div class="tiny-rich-text-editor">
    <toolbar-menu v-if="state.toolbarMenu" :items="state.toolbarMenu" />
    <div v-if="state.editor" class="tiny-rich-text-editor__toolbar">
      <!-- starter-kit功能区 -->
      <template v-for="item in state.toolbar">
        <button
          :key="'fz' + item"
          v-if="item === 'font-size'"
          :title="t('ui.richTextEditor.fontSize')"
          class="font-size-box"
        >
          <TinyIconRichTextFontSize></TinyIconRichTextFontSize>
          <div class="font-size-options">
            <button @click="state.editor.chain().focus().setSize({ size: 12 }).run()">12px</button>
            <button @click="state.editor.chain().focus().setSize({ size: 14 }).run()">14px</button>
            <button @click="state.editor.chain().focus().setSize({ size: 16 }).run()">16px</button>
            <button @click="state.editor.chain().focus().setSize({ size: 18 }).run()">18px</button>
            <button @click="state.editor.chain().focus().setSize({ size: 20 }).run()">20px</button>
            <button @click="state.editor.chain().focus().setSize({ size: 24 }).run()">24px</button>
            <button @click="state.editor.chain().focus().setSize({ size: 30 }).run()">30px</button>
          </div>
        </button>
        <button
          :key="'lh' + item"
          v-else-if="item === 'line-height'"
          class="line-height-button"
          :title="t('ui.richTextEditor.lineHeight')"
        >
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
        <button :key="'h-box' + item" v-else-if="item === 'h-box'" :title="t('ui.richTextEditor.hBox')" class="h-box">
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
        <button :key="'img' + item" v-else-if="item === 'img'" :title="t('ui.richTextEditor.img')" class="image-button">
          <TinyIconRichTextImage></TinyIconRichTextImage>
          <div class="img-option">
            <div class="img-item">
              <input @change="handleChange" id="img-btn" type="file" accept="image/*, video/*" />
              <label for="img-btn">本地资源</label>
            </div>
            <div @click.stop="handleChange(null)" class="img-item">
              <div>资源链接</div>
            </div>
          </div>
        </button>
        <button
          :key="'color' + item"
          v-else-if="item === 'color'"
          :title="t('ui.richTextEditor.color')"
          class="color-button"
        >
          <label for="tiny-color">
            <TinyIconRichTextColor></TinyIconRichTextColor>
          </label>
          <input
            id="tiny-color"
            type="color"
            @input="state.editor.chain().focus().setColor($event.target.value).run()"
          />
        </button>
        <button
          :key="'bg' + item"
          v-else-if="item === 'backgroundColor'"
          :title="t('ui.richTextEditor.backgroundColor')"
          class="color-button"
        >
          <label for="tiny--back-color">
            <TinyIconRichbackgroundColor></TinyIconRichbackgroundColor>
          </label>
          <input
            id="tiny-back-color"
            type="color"
            @input="state.editor.chain().focus().setBackColor({ bgColor: $event.target.value }).run()"
          />
        </button>
        <button
          :key="'table' + item"
          v-else-if="item === 'table'"
          :title="t('ui.richTextEditor.table')"
          class="table-button"
        >
          <div class="table-box" v-clickoutside="closeTablePanel" @click="toggleTablePanel">
            <div class="table-icon">
              <TinyIconRichTextTable></TinyIconRichTextTable>
            </div>
            <div
              class="table-panel"
              ref="tablePanelRef"
              v-if="state.isShowTable"
              @mousemove="tableMouseMove"
              @click.stop="tableChoose"
            >
              <div class="table-row">
                <div class="item" :class="{ isActive: 1 <= state.flagX && 1 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 2 <= state.flagX && 1 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 3 <= state.flagX && 1 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 4 <= state.flagX && 1 <= state.flagY }"></div>
              </div>
              <div class="table-row">
                <div class="item" :class="{ isActive: 1 <= state.flagX && 2 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 2 <= state.flagX && 2 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 3 <= state.flagX && 2 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 4 <= state.flagX && 2 <= state.flagY }"></div>
              </div>
              <div class="table-row">
                <div class="item" :class="{ isActive: 1 <= state.flagX && 3 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 2 <= state.flagX && 3 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 3 <= state.flagX && 3 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 4 <= state.flagX && 3 <= state.flagY }"></div>
              </div>
              <div class="table-row">
                <div class="item" :class="{ isActive: 1 <= state.flagX && 4 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 2 <= state.flagX && 4 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 3 <= state.flagX && 4 <= state.flagY }"></div>
                <div class="item" :class="{ isActive: 4 <= state.flagX && 4 <= state.flagY }"></div>
              </div>
            </div>
          </div>
        </button>
        <button
          :key="'unlink' + item"
          v-else-if="item === 'unlink'"
          :title="t('ui.richTextEditor.unlink')"
          @click="eventClick(state.editor, item)"
          :disabled="!state.editor?.isActive(Active(item))"
        >
          <img v-if="item.img" :src="eventImg(item)" alt="" srcset="" />
          <component v-else :is="eventImg(item)"></component>
        </button>
        <button
          :key="'editor' + item"
          v-else
          :title="t(`ui.richTextEditor.${item}`)"
          @click="eventClick(state.editor, item)"
          :class="{ 'is-active': state.editor?.isActive(Active(item)) }"
        >
          <img v-if="item.img" :src="eventImg(item)" alt="" srcset="" />
          <component v-else :is="eventImg(item)"></component>
        </button>
      </template>
      <!-- 插槽传出editor实例 -->
      <slot name="toolBar" :option="state.editor"></slot>
    </div>
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
