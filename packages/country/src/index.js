import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const template = () => PCTemplate

export default {
  name: $prefix + 'Country',
  props: {
    ...$props,
    disabled: {
      type: Boolean,
      default: () => false
    },
    clearable: {
      type: Boolean,
      default: () => true
    },
    fetchCountry: Function,
    fields: Object,
    placeholder: {
      type: String,
      default: () => ''
    },
    modelValue: {},
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: () => true
    },
    size: String
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
