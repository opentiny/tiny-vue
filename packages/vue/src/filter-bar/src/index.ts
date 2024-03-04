import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

export default defineComponent({
  name: $prefix + 'FilterBar',
  props: {
    ...$props,
    modelValue: Number,
    data: Array
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
