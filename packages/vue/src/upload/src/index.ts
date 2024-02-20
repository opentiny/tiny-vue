import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import uploadAjax from '@opentiny/vue-renderless/common/deps/upload-ajax'
import template from 'virtual-template?pc|mobile-first'

export const uploadProps = {
  ...$props,
  accept: String,
  action: {
    type: String,
    default: ''
  },
  autoUpload: Boolean,
  beforeUpload: Function,
  pasteUpload: Boolean,
  data: Object,
  disabled: Boolean,
  drag: Boolean,
  edmToken: {
    type: Object,
    default: () => ({})
  },
  fileList: {
    type: Array,
    default: () => []
  },
  headers: Object,
  httpRequest: {
    type: Function,
    default: uploadAjax
  },
  isFolder: {
    type: Boolean,
    default: false
  },
  limit: Number,
  listType: String,
  multiple: Boolean,
  name: {
    type: String,
    default: 'file'
  },
  onError: Function,
  onExceed: Function,
  onPreview: {
    type: Function,
    default: () => {}
  },
  onProgress: Function,
  onRemove: {
    type: Function,
    default: () => {}
  },
  onStart: Function,
  onSuccess: Function,
  type: String,
  withCredentials: Boolean,
  isHidden: {
    type: Boolean,
    default: false
  },
  scale: {
    type: [Number, String],
    default: 1
  },
  sourceType: {
    type: String,
    default: 'picture',
    validator(val: string) {
      return val.split('/').every((type) => ['picture', 'video', 'audio'].includes(type))
    }
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  customClass: [String, Object, Array],
  handleTriggerClick: {
    type: Function,
    default: () => {}
  },
  mode: String,
  showTitle: Boolean,
  isHwh5: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Upload',
  props: uploadProps,
  setup(props, context) {
    return $setup({ props, context, template, extend: { ref: 'upload-inner-template' } })
  }
})
