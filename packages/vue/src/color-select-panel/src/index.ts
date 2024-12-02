import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

const $constants = {}

export default defineComponent({
  name: $prefix + 'ColorSelectPanel',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String,
    visible: Boolean,
    alpha: Boolean,
    history: Array,
    predefine: Array,
    enableHistory: {
      type: Boolean,
      default: false
    },
    enablePredefineColor: {
      type: Boolean,
      default: false
    },
    format: {
      type: Array,
      default: () => [],
      validator(formats: string[]) {
        // if is hexa, rgba, hsva, hsl will throw warning message
        // Becuase should use `alpha` prop if want enable alpha
        formats.forEach((formatValue) => {
          if (formatValue[formatValue.length - 1] === 'a') {
            console.warn('If you want enable alpha, You should set `alpha` prop to true')
          }
        })
        return formats.every((formatValue) => {
          return ['hsv', 'hsl', 'rgb', 'hex'].includes(formatValue)
        })
      }
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
