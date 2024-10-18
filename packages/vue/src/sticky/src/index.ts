import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
  name: $prefix + 'Sticky',
  props: {
    ...$props,
    zIndex: {
      type: [Number, String],
      default: () => 100
    },
    target: String,
    offset: {
      type: [Number, String],
      default: () => 0
    },
    position: {
      type: String,
      values: ['top', 'bottom'],
      default: () => 'top'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
