import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

const $constants = {
  startDate: new Date('1970-01-01'),
  endDate: new Date('2099-12-31')
}

export default defineComponent({
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
    },
    type: {
      type: String,
      default: 'daterange'
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    format: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    disabledDate: {
      type: Function,
      default: null
    },
    popperClass: {
      type: String,
      default: ''
    },
    unlinkPanels: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
