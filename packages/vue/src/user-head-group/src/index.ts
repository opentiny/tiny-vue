import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

export default {
  name: $prefix + 'UserHeadGroup',
  componentName: 'TinyUserHeadGroup',
  props: {
    ...$props,
    groupSize: {
      type: Number,
      default: 40
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
