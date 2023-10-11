import { $prefix, $setup, $props, defineComponent } from '@opentiny/vue-common'
import NormalTemplate from './normal.vue'
import YearMonthTemplate from './year-month-range.vue'

const $constants = {
  TYPE: {
    DATE: 'date',
    DATE_TIME: 'datetime',
    DATE_RANGE: 'daterange',
    DATE_TIME_RANGE: 'datetimerange',
    YEAR_MONTH_RANGE: 'year-month-range',
    YEAR_MONTH: 'year-month'
  }
}

const template = (mode, props) => {
  const { YEAR_MONTH_RANGE, YEAR_MONTH } = $constants.TYPE

  return [YEAR_MONTH_RANGE, YEAR_MONTH].includes(props.type) ? YearMonthTemplate : NormalTemplate
}

export default defineComponent({
  name: $prefix + 'DatePickerMobile',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: [Number, String, Array, Date],
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    type: {
      type: String,
      default: 'date',
      validator: (value) => !value || ~Object.values($constants.TYPE).indexOf(value)
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    pickerOptions: {
      type: Object,
      default: () => ({
        disabledDate: null
      })
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
