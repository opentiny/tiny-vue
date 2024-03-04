import { $prefix, $props, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default {
  name: $prefix + 'DatePanel',
  componentName: 'DatePanel',
  props: {
    ...$props,
    emitter: Object,
    step: {
      type: Object,
      default() {
        return { hour: 1, minute: 1, second: 1 }
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    formatWeeks: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
