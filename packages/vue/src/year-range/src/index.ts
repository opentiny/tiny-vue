import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default {
  name: $prefix + 'YearRange',
  props: {
    ...$props,
    emitter: Object
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
