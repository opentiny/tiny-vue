import { $props, $setup, $prefix } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default {
  name: $prefix + 'SelectedBox',
  props: {
    ...$props,
    inverse: Boolean,
    total: { type: Number, default: 0 },
    select: { type: Array, default: () => [] },
    config: { type: Object, default: () => ({}) }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
