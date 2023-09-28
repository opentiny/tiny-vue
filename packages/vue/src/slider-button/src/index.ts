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
    name: String,
    text: String,
    events: {
      type: Object,
      default: () => ({})
    },
    label: [Number, String]
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
