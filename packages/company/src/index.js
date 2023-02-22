import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const template = () => PCTemplate

export default {
  name: $prefix + 'Company',
  props: {
    ...$props,
    clearable: {
      type: Boolean,
      default: () => true
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    fetchCompany: Function,
    fields: Object,
    max: {
      type: Number,
      default: 1000
    },
    modelValue: {},
    placeholder: {
      type: String,
      default: () => ''
    },
    popperAppendToBody: {
      type: Boolean,
      default: () => true
    },
    popperClass: String,
    size: String
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
