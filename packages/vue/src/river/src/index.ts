import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

const $constants = {}

export default defineComponent({
  name: $prefix + 'River',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    data: {
      type: Object
    },
    config: {
      type: Object
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
