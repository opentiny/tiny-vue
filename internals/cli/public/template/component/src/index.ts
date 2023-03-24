import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'
import MobileTemplate from './mobile.vue'

const $constants = {}

const template = (mode) => {
  return 'mobile-first' === (process.env.TINY_MODE || mode) ? MobileTemplate : PCTemplate
}

export default defineComponent({
  name: $prefix + '[[UNAME]]',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
