import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

const $constants = {
  SCROLL_LOCK_CLASS(mode) {
    const scrollLockClasses = {
      'mobile-first': 'overflow-hidden'
    }
    return scrollLockClasses[mode] || ''
  }
}

export default {
  name: $prefix + 'Drawer',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
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
      default: '500px'
    },
    title: String,
    showClose: {
      type: Boolean,
      default: true
    },
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
    dragable: Boolean,
    lockScroll: {
      type: Boolean,
      default: true
    },
    flex: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 2000
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
