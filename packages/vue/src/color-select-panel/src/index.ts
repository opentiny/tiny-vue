import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile'

const $constants = {}

export default defineComponent({
  name: $prefix + 'ColorSelectPanel',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String,
    visible: Boolean,
    alpha: Boolean,
    history: Array,
    predefine: Array,
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
