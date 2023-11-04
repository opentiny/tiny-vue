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
    alpha: Boolean,
    predefine: Array,
    history: Array,
    size: {
      type: String,
      default: '',
      validator(val: string) {
        return ['large', 'medium', 'small', 'mini', ''].includes(val)
      }
    },
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
