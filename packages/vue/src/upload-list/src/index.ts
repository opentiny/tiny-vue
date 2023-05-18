import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
  name: $prefix + 'UploadList',
  props: {
    ...$props,
    disabled: {
      type: Boolean,
      default: () => false
    },
    display: {
      type: Boolean,
      default: () => true
    },
    files: {
      type: Array,
      default: () => []
    },
    filesIcon: {
      type: Array,
      default: () => []
    },
    handlePreview: Function,
    isEdm: {
      type: Boolean,
      default: () => false
    },
    isFolder: {
      type: Boolean,
      default: () => false
    },
    listType: String,
    openDownloadFile: {
      type: Boolean,
      default: () => false
    },
    srcList: {
      type: Array,
      default: () => []
    },
    isFolderTitle: {
      type: Boolean,
      default: false
    },
    listOption: {
      type: Object,
      default: () => ({
        showUpdate: true,
        showDel: true
      })
    },
    maxNameLength: {
      type: Number,
      default: 20
    },
    scale: {
      type: [Number, String],
      default: 1
    },
    showName: {
      type: Boolean,
      default: false
    },
    sourceType: {
      type: String,
      default: 'picture',
      validator(val) {
        return ~['picture', 'video', 'audio'].indexOf(val)
      }
    },
    displayOnly: {
      type: Boolean,
      default: false
    },
    handleDownloadFile: Function,
    handleReUpload: Function,
    isDragover: Boolean,
    selected: Object
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
