import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'Espace',
  props: {
    ...$props,
    data: Array,
    isNewImMode: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
