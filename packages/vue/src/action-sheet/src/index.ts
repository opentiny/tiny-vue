import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile|mobile-first'

export const actionSheetProps = {
  ...$props,
  menus: {
    type: Array,
    default: () => []
  },
  modelValue: [Number, String, Array],
  beforeClose: Function,
  visible: {
    type: Boolean,
    default: false
  },
  ellipsis: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: '100%'
  },
  valueField: {
    type: String,
    default: 'id'
  },
  textField: {
    type: String,
    default: 'label'
  },
  title: String,
  showHeader: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: () => true
  },
  fullscreen: {
    type: Boolean,
    default: () => false
  },
  customClass: [String, Object, Array],
  contentClass: String,
  type: {
    type: String,
    default: 'normal'
  },
  mask: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  flex: {
    type: Boolean,
    default: true
  },
  contentPosition: {
    type: Boolean,
    default: false
  },
  contentStyle: {
    type: Object,
    default: () => ({})
  }
}

export default defineComponent({
  name: $prefix + 'ActionSheet',
  props: actionSheetProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
