import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

const $constants = {
  POSITON: {
    START: 'start',
    CENTER: 'center',
    END: 'end'
  }
}

export default defineComponent({
  name: $prefix + 'CalendarBar',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String,
    config: { type: Object, default: () => ({}) },
    cascaderPosition: {
      type: String,
      default: 'center',
      validator: (value: string) => {
        return Boolean(~Object.values($constants.POSITON).indexOf(value))
      }
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
