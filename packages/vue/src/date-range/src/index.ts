import { $prefix, $props, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

const $constants = {
  startDate: new Date('1970-01-01'),
  endDate: new Date('2099-12-31')
}

export default {
  name: $prefix + 'DateRange',
  componentName: 'DateRange',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
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
    formatWeeks: Function,
    timeEditable: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
