import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'
import MobileTemplate from './mobile.vue'

const $constants = {}

const template = (mode) => {
  return (process.env.TINY_MODE || mode) === 'mobile-first' ? MobileTemplate : PCTemplate
}

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
