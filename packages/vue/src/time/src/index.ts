import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
  name: $prefix + 'Time',
  componentName: 'Time',
  props: {
    ...$props,
    show: Boolean,
    timeArrowControl: Boolean,
    emitter: Object,
    value: Date,
    step: {
      type: Object,
      default() {
        return { hour: 1, minute: 1, second: 1 }
      }
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
