import { $prefix, $props, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'
import { isDate } from '@opentiny/vue-renderless/common/deps/date-util'

export default {
  name: $prefix + 'DateTable',
  componentName: 'DateTable',
  props: {
    ...$props,
    cellClassName: {},
    date: {},
    defaultValue: {
      validator(val) {
        return val === null || isDate(val) || (Array.isArray(val) && val.every(isDate))
      }
    },
    disabledDate: {},
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: (val) => val >= 1 && val <= 7
    },
    maxDate: {},
    minDate: {},
    rangeState: {
      default: () => ({ endDate: null, selecting: false })
    },
    selectionMode: {
      default: () => 'day'
    },
    showWeekNumber: {
      type: Boolean,
      default: () => false
    },
    value: {},
    formatWeeks: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
