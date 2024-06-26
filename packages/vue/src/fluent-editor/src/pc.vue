<template>
  <div class="tiny-editor-wrapper" :class="{ 'fullscreen': state.isFullscreen }" :style="{ 'z-index': state.zIndex }">
    <div ref="editor" id="editor" class="tiny-editor" @dblclick="handleDblclick"></div>
    <tiny-image-viewer v-if="state.showPreview" v-bind="state.previewOptions"></tiny-image-viewer>
    <div class="toolbar-icon" ref="editor-toolbar-icon">
      <div v-for="icon in state.icons" :key="icon" :ref="icon">
        <component :is="icon"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/fluent-editor/vue'
import '@opentiny/fluent-editor/dist/style.css'
import '@opentiny/vue-theme/fluent-editor/index.less'
import FluentEditor from '@opentiny/fluent-editor'
import {
  IconEditorAlignCenter,
  IconEditorAlignLeft,
  IconEditorAlignRight,
  IconEditorBackground,
  IconEditorBold,
  IconEditorCode,
  IconEditorDeleteline,
  IconEditorEraser,
  IconEditorItalic,
  IconEditorLeftBorder,
  IconEditorList,
  IconEditorListDot,
  IconEditorListNum,
  IconEditorMenuLeft,
  IconEditorMenuRight,
  IconEditorQuote,
  IconEditorRedo,
  IconEditorRightBorder,
  IconEditorSub,
  IconEditorSubtitle,
  IconEditorSuper,
  IconEditorTable,
  IconEditorTextcolor,
  IconEditorTitle,
  IconEditorUnderline,
  IconEditorUndo,
  IconEditorVideo,
  IconLink,
  IconPicture,
  IconCloudUpload,
  IconFullscreen
} from '@opentiny/vue-icon'
import ImageViewer from '@opentiny/vue-image-viewer'

const $constants = {
  PIC_PREVIEW_OPTIONS: {
    zIndex: Number.POSITIVE_INFINITY,
    urlList: null
  },
  EDITOR_FULLSCREEN_OPTIONS: Number.POSITIVE_INFINITY
}

export default defineComponent({
  name: $prefix + 'FluentEditor',
  components: {
    TinyImageViewer: ImageViewer,
    IconEditorAlignCenter: IconEditorAlignCenter(),
    IconEditorAlignLeft: IconEditorAlignLeft(),
    IconEditorAlignRight: IconEditorAlignRight(),
    IconEditorBackground: IconEditorBackground(),
    IconEditorBold: IconEditorBold(),
    IconEditorCode: IconEditorCode(),
    IconEditorDeleteline: IconEditorDeleteline(),
    IconEditorEraser: IconEditorEraser(),
    IconEditorItalic: IconEditorItalic(),
    IconEditorLeftBorder: IconEditorLeftBorder(),
    IconEditorList: IconEditorList(),
    IconEditorListDot: IconEditorListDot(),
    IconEditorListNum: IconEditorListNum(),
    IconEditorMenuLeft: IconEditorMenuLeft(),
    IconEditorMenuRight: IconEditorMenuRight(),
    IconEditorQuote: IconEditorQuote(),
    IconEditorRedo: IconEditorRedo(),
    IconEditorRightBorder: IconEditorRightBorder(),
    IconEditorSub: IconEditorSub(),
    IconEditorSubtitle: IconEditorSubtitle(),
    IconEditorSuper: IconEditorSuper(),
    IconEditorTable: IconEditorTable(),
    IconEditorTextcolor: IconEditorTextcolor(),
    IconEditorTitle: IconEditorTitle(),
    IconEditorUnderline: IconEditorUnderline(),
    IconEditorUndo: IconEditorUndo(),
    IconEditorVideo: IconEditorVideo(),
    IconLink: IconLink(),
    IconPicture: IconPicture(),
    IconCloudUpload: IconCloudUpload(),
    IconFullscreen: IconFullscreen()
  },
  emits: ['ready', 'blur', 'focus', 'update:modelValue', 'change'],
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    content: String,
    disabled: {
      type: Boolean,
      default: false
    },
    fileUpload: Object,
    globalOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    imageUpload: Object,
    mentionObj: {
      type: Object,
      required: false,
      default: () => ({})
    },
    modelValue: String,
    options: {
      type: Object,
      required: false,
      default: () => ({})
    },
    picPreview: [Object, Boolean],
    dataType: {
      type: Boolean,
      default: true
    },
    dataUpgrade: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: $constants.EDITOR_FULLSCREEN_OPTIONS
    },
    imagePasteFailCallback: {
      type: Function,
      default: () => {}
    }
  },
  setup(props, context): any {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true,
      extendOptions: {
        FluentEditor
      }
    })
  }
})
</script>
