import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import { isDate } from '@opentiny/vue-renderless/common/deps/date-util'
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
  name: $prefix + 'YearTable',
  props: {
    ...$props,
    disabledDate: {},
    value: {},
    defaultValue: {
      validator(val) {
        // null or valid Date Object
        return val === null || (val instanceof Date && isDate(val))
      }
    },
    date: [Date, Array],
    selectionMode: String,
    startYear: Number,
    maxDate: {},
    minDate: {},
    rangeState: {
      default: () => ({ endDate: null, selecting: false })
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
