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
    modelValue: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    threeDimensional: {
      type: Boolean,
      default: false
    },
    swipeDuration: {
      type: [Number, String],
      default: 1000
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 5
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object,
      default: () => ({
        text: 'label',
        value: 'id',
        children: 'children'
      })
    },
    visible: Boolean,
    valueType: { type: String, default: 'number' },
    valueField: { type: String, default: 'id' },
    textField: { type: String, default: 'label' },
    childrenField: { type: String, default: 'children' },
    disabled: Function,
    textColor: { type: Object, default: () => ({ default: '', first: '', second: '', third: '', disabled: '' }) },
    lockScroll: {
      type: Boolean,
      default: true
    },
    customClass: [String, Object, Array],
    panelCustomClass: [String, Object, Array],
    type: {
      type: String,
      validator: (value) => ~['cascade', 'single'].indexOf(value),
      default: 'single'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
