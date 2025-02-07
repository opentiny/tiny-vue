import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
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
    formatWeeks: Function,
    firstDayOfWeek: {
      type: Number,
      default: 7
    },
    nowClick: {
      type: Function
    },
    modelValue: {
      type: [Date, String, Number],
      default: ''
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
      default: () => null
    },
    popperClass: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
