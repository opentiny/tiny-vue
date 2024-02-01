import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

export default {
  name: $prefix + 'FloatingButton',
  props: {
    ...$props,
    position: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    icon: {
      type: [Object, String],
      default: 'icon-plus'
    },
    resetTime: {
      type: [String, Number],
      default: 0
    },
    animated: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
