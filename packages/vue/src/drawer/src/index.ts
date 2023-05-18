import { $props, $prefix, $setup } from '@opentiny/vue-common'
import MobileFirstTemplate from './mobile-first.vue'

const template = () => {
  return MobileFirstTemplate
}

export default {
  name: $prefix + 'Drawer',
  props: {
    ...$props,
    visible: {
      type: Boolean,
      default: false
    },
    customClass: [String, Object, Array],
    placement: {
      type: String,
      default: 'right'
    },
    width: {
      type: String,
      default: '300px'
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
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    dragable: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
