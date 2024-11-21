import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?mobile'

export default {
  name: $prefix + 'Tabbar',
  componentName: 'Tabbar',
  props: {
    ...$props,
    activeColor: String,
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    inactiveColor: String,
    modelValue: {
      type: [Number, String],
      default: 0
    },
    placeholder: Boolean,
    route: Boolean,
    safeAreaInsetBottom: Boolean,
    zIndex: [Number, String],
    showNumber: {
      type: Number,
      default: 5
    },
    itemList: {
      type: Array,
      default: () => []
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
