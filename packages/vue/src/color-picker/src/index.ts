import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile'

const $constants = {}

export default defineComponent({
  name: $prefix + 'ColorPicker',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String,
    visible: Boolean,
    alpha: Boolean,
    predefine: Array,
    history: Array,
    size: {
      type: String,
      default: '',
      validator(val: string) {
        return [' large', 'medium', 'small', 'mini', ''].includes(val)
      }
    },
    format: {
      type: Array,
      default: () => [],
      validator(val: string[]) {
        if (!val.length) {
          return true
        }
        // if is hexa, rgba, hsva, hsl will throw warning message
        // Becuase should use `alpha` prop if want enable alpha
        if (val[val.length - 1] === 'a') {
          console.warn('If you want enable alpha, You should set `alpha` prop to true')
        }
        return ['hsv', 'hsl', 'rgb', 'hex'].includes(val)
      }
    },
    enableHistory: {
      type: Boolean,
      default: false
    },
    enablePredefineColor: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
