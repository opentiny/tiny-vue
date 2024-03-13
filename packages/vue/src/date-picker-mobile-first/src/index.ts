import { $prefix, $setup, $props, defineComponent } from '@opentiny/vue-common'
import NormalTemplate from './normal.vue'
import YearMonthTemplate from './year-month-range.vue'
import { t } from '@opentiny/vue-locale'

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
    clearable: {
      type: Boolean,
      default: false
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
    },
    customClass: [String, Object, Array],
    step: {
      type: Object,
      default() {
        return { hour: 1, minute: 1, second: 1 }
      }
    },
    endPlaceholder: {
      type: String,
      default: () => t('ui.datepicker.endTime')
    },
    rangeSeparator: {
      type: [Object, String],
      default: '~'
    },
    showTimeSecond: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
