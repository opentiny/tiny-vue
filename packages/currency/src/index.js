import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const template = () => PCTemplate

export default {
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
}
