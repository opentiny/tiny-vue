import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

const $constants = {
  FILTER_OPTION: [
    'ui.amount.equalTo',
    'ui.amount.notEqualTo',
    'ui.amount.moreThan',
    'ui.amount.moreThanOrEqualTo',
    'ui.amount.lessThan',
    'ui.amount.lessThanOrEqualTo',
    'ui.amount.empty',
    'ui.amount.nonEmpty'
  ]
}

export const amountProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: {
    type: [Number, String]
  },
  tabindex: { type: String, default: '1' },
  size: String,
  placeholder: {
    type: String,
    default: ''
  },
  currency: {
    type: String,
    default: 'CNY'
  },
  date: [String, Date],
  dateAllowEmpty: {
    type: Boolean,
    default: false
  },
  digits: {
    type: Number,
    default: 2
  },
  stringMode: {
    type: Boolean,
    default: false
  },
  rounding: {
    type: Boolean,
    default: true
  },
  maxLen: {
    type: Number,
    default: 15
  },
  negative: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fetchCurrency: Function,
  fields: Object,
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  format: Object,
  type: {
    type: String,
    default: 'amount'
  },
  holdZero: {
    type: Boolean,
    default: true
  },
  modelTruncation: {
    type: Boolean,
    default: true
  },
  strictInput: {
    type: Boolean,
    default: false
  },
  plugin: Function,
  popUp: {
    type: Boolean,
    default: true
  },
  hideCurrency: {
    type: Boolean,
    default: false
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  hideIcon: {
    type: Boolean,
    default: false
  },
  numAllowEmpty: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  tip: String,
  shape: String,
  clearable: {
    type: Boolean,
    default: false
  },
  filter: {
    type: Boolean,
    default: false
  },
  blank: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Amount',
  componentName: 'Amount',
  props: amountProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
