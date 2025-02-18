import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'

import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'VirtualTree',
  props: {
    ...$props,
    width: [Number, String],
    height: [Number, String],
    rowHeight: {
      type: Number,
      default: 36
    },
    scrollbarSize: {
      type: Number,
      default: 6
    },
    treeOp: null
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
