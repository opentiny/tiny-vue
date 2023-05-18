import { $props, $setup, $prefix } from '@opentiny/vue-common'
import MobileFirstTemplate from './mobile-first.vue'

const $constants = {}

const template = () => {
  return MobileFirstTemplate
}

export default {
  name: $prefix + 'CascaderSelect',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: Array,
    options: Array,
    visible: Boolean,
    cycleRoll: Boolean,
    valueType: { type: String, default: 'number' },
    valueField: { type: String, default: 'id' },
    textField: { type: String, default: 'label' },
    disabled: Function,
    textColor: { type: Object, default: () => ({}) }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
