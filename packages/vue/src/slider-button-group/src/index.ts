import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

export default defineComponent({
  name: $prefix + 'SliderButtonGroup',
  componentName: 'SliderButtonGroup',
  props: {
    ...$props,
    modelValue: {},
    size: {
      type: String,
      default: 'small'
    },
    options: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'text'
    },
    pageTurn: {
      type: Boolean,
      default: false
    },
    nameField: {
      type: String,
      default: 'label'
    },
    iconField: {
      type: String,
      default: 'customIcon'
    },
    noArrow: Boolean,
    flex: Boolean,
    duration: {
      type: Number,
      default: 300
    },
    delay: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
