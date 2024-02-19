import { iconClose } from '@opentiny/vue-icon'

export const pickerProps = {
  type: {
    type: String,
    default: 'date'
  },
  tabindex: {
    type: String,
    default: '1'
  },
  timeArrowControl: Boolean,
  timeEditable: {
    type: Boolean,
    default: true
  },
  size: String,
  format: String,
  valueFormat: String,
  timeFormat: String,
  readonly: Boolean,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  prefixIcon: Object,
  suffixIcon: Object,
  label: String,
  shape: String,
  tip: String,
  clearIcon: {
    type: Object,
    default() {
      return iconClose()
    }
  },
  name: {
    default: '',
    validator(value) {
      return (
        value === null ||
        value === undefined ||
        typeof value === 'string' ||
        value instanceof String ||
        (Array.isArray(value) &&
          value.length === 2 &&
          value.every((item) => typeof item === 'string' || item instanceof String))
      )
    }
  },
  clearable: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  id: {
    default: '',
    validator(value) {
      return (
        value === null ||
        value === undefined ||
        typeof value === 'string' ||
        value instanceof String ||
        (Array.isArray(value) &&
          value.length === 2 &&
          value.every((item) => typeof item === 'string' || item instanceof String))
      )
    }
  },
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  align: {
    type: String,
    default: 'left'
  },
  editable: {
    type: Boolean,
    default: true
  },
  modelValue: {},
  defaultValue: {},
  defaultTime: {},
  rangeSeparator: {
    type: [Object, String],
    default: '-'
  },
  unlinkPanels: Boolean,
  pickerOptions: {},
  validateEvent: {
    type: Boolean,
    default: true
  },
  isRange: Boolean,
  arrowControl: Boolean,
  timezoneData: {},
  showTimezone: {
    type: Boolean,
    default: false
  },
  defaultTimezone: String,
  isutc8: {
    type: Boolean,
    default: false
  },
  dbTimezone: Number,
  timezone: Number,
  iso8601: Boolean,
  displayOnly: {
    type: Boolean,
    default: false
  },
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
}
