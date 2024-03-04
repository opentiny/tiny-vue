import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
  name: $prefix + 'TimePanel',
  componentName: 'TimePanel',
  props: {
    ...$props,
    emitter: Object
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
