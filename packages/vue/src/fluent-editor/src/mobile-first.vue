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
import { renderless, api } from '@opentiny/vue-renderless/fluent-editor/vue'
import { props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import FluentEditor from '@opentiny/fluent-editor'
import '@opentiny/fluent-editor/dist/style.css'
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
  props: [
    ...props,
    '_constants',
    'content',
    'disabled',
    'fileUpload',
    'globalOptions',
    'imageUpload',
    'mentionObj',
    'modelValue',
    'options',
    'picPreview',
    'dataType',
    'dataUpgrade',
    'zIndex',
    'imagePasteFailCallback'
  ],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: {
        FluentEditor
      }
    })
  }
})
</script>
