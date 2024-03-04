import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

const $constants = {
  SLIDER_BUTTON_GROUP: 'SliderButtonGroup'
}

export default defineComponent({
  name: $prefix + 'SliderButton',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    text: [Number, String],
    events: {
      type: Object,
      default: () => ({})
    },
    label: [Number, String],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
