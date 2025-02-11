import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default {
  name: $prefix + 'YearRange',
  props: {
    ...$props,
    emitter: Object,
    modelValue: {
      type: Array,
      default: () => []
    },
    format: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    disabledDate: {
      type: Function,
      default: null
    },
    popperClass: {
      type: String
    },
    unlinkPanels: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
