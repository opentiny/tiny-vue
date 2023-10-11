import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const $constants = {
  DAY_START_TIME: '00:00:00',
  DAY_END_TIME: '23:59:59',
  DAY_START_HOUR: 8,
  DAY_END_HOUR: 18,
  CELL_HEIGHT: 20,
  WEDNESDAY: 3
}

export const calendarViewProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: {},
  showMark: {},
  showNewSchedule: {},
  setDayBgColor: {},
  disabled: {},
  mode: {
    type: String,
    default: 'month',
    validator: (value) => ~['month', 'timeline', 'schedule'].indexOf(value)
  },
  modes: {
    type: Array,
    default() {
      return ['month', 'timeline', 'schedule']
    }
  },
  year: {
    type: Number,
    default() {
      return new Date().getFullYear()
    }
  },
  month: {
    type: Number,
    default() {
      return new Date().getMonth() + 1
    }
  },
  dayTimes: {
    type: Array,
    default() {
      return [8, 18]
    },
    validator: (value) => {
      return (
        value.length === 2 &&
        value[0] >= 0 &&
        value[1] <= 23 &&
        Number.isInteger(value[0]) &&
        Number.isInteger(value[1])
      )
    }
  },
  events: {
    type: Array,
    default() {
      return []
    }
  },
  height: {
    type: String,
    default: ''
  },
  markColor: {
    type: String,
    default: 'blue'
  },
  multiSelect: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'CalendarView',
  props: calendarViewProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
