import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile'

const $constants = {}

export default defineComponent({
  name: $prefix + 'ColorPicker',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String,
    visible: Boolean,
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
