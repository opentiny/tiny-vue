import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import { numericProp, makeNumericProp, unknownProp } from '@opentiny/vue-renderless/common/prop-util'

import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'VirtualTree',
  props: {
    ...$props,
    width: numericProp,
    height: numericProp,
    rowHeight: makeNumericProp(36),
    scrollbarSize: makeNumericProp(6),
    treeOp: unknownProp
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
