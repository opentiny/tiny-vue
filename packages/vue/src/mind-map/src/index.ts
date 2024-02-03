import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

const $constants = {}

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
