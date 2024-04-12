<template>
  <div class="quill-editor" :class="{ 'is-display-only': state.isDisplayOnly }">
    <slot name="toolbar"></slot>
    <div ref="editor" @paste="handlePaste"></div>
    <div class="toolbar-icon">
      <icon-fileupload ref="iconFile"></icon-fileupload>
    </div>
  </div>
</template>

<script>
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import Quill from 'quill'
import ImageDrop from '@opentiny/vue-renderless/rich-text/module/image-drop'
import ImageUpload from '@opentiny/vue-renderless/rich-text/module/image-upload'
import FileUpload from '@opentiny/vue-renderless/rich-text/module/file-upload'
import Modal from '@opentiny/vue-modal'
import { IconFileupload } from '@opentiny/vue-icon'
import { renderless, api } from '@opentiny/vue-renderless/rich-text/vue'

const $constants = {
  MAX_LENGTH: Number.MAX_SAFE_INTEGER
}

export default defineComponent({
  name: $prefix + 'RichText',
  components: {
    IconFileupload: IconFileupload()
  },
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
    imageDrop: {
      type: Boolean,
      default: true
    },
    imageUpload: Object,
    keepClass: [String, Array],
    modelValue: String,
    options: {
      type: Object,
      required: false,
      default: () => ({})
    },
    tableModule: {
      type: Boolean,
      default: true
    },
    maxLength: {
      type: Number
    },
    displayOnly: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true,
      extendOptions: {
        Quill,
        ImageDrop,
        ImageUpload,
        FileUpload,
        Modal
      }
    })
  }
})
</script>
