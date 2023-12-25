import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'
import MobileTemplate from './mobile.vue'

const $constants = {}

const template = (mode) => {
  return (process.env.TINY_MODE || mode) === 'mobile-first' ? MobileTemplate : PCTemplate
}

export const MindMapProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: Object,
  options: Object
}

export default defineComponent({
  name: $prefix + 'MindMap',
  props: MindMapProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
