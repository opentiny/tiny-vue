import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

const $constants = {}

export default defineComponent({
  name: $prefix + 'CalendarBar',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String,
    config: { type: Object, default: () => ({}) }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
