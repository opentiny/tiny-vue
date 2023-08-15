import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'Currency',
  props: {
    ...$props,
    clearable: {
      type: Boolean,
      default: true
    },
    currency: {
      type: String,
      default: 'CNY'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fetchCurrency: Function,
    fields: Object,
    modelValue: {},
    placeholder: {
      type: String,
      default: ''
    },
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    popperClass: String,
    size: String
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
