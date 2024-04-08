import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

const $constants = {
  ANIMATIONNAME: 'tiny-transition-timepicker'
}

export default defineComponent({
  name: $prefix + 'TimeSpinner',
  componentName: 'TimeSpinner',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    date: {},
    defaultValue: {},
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: '' // 'a': am/pm; 'A': AM/PM
    },
    step: {
      type: Object,
      default() {
        return { hour: 1, minute: 1, second: 1 }
      },
      validator: ({ hour, minute, second }) => {
        const validateArray = [
          { value: hour, range: 24 },
          { value: minute, range: 60 },
          { value: second, range: 60 }
        ]
        return validateArray.every(({ value, range }) =>
          value || value === 0 ? Math.floor(value) === value && value > 0 && value <= range : true
        )
      }
    },
    startDate: {
      type: Object,
      default: () => ({})
    },
    endDate: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
