import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

export const floatingButtonProps = {
  ...$props,
  position: {
    type: String,
    default: 'right'
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
  },
  expandList: {
    type: Array,
    default: () => []
  },
  isExpand: {
    type: Boolean,
    default: false
  },
  vague: {
    type: Boolean,
    default: false
  },
  mask: {
    type: Boolean,
    default: false
  },
  elementSelector: {
    type: String,
    default: ''
  }
}

export default defineComponent({
  name: $prefix + 'FloatingButton',
  props: floatingButtonProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
