import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

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
    size: String,
    setDefault: {
      type: Boolean,
      default: false
    },
    fetchDefaultCurrency: Function,
    setDefaultCurrency: Function,
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    mode: String,
    multiple: {
      type: Boolean,
      default: false
    },
    searchConfig: Object,
    dropStyle: {
      type: Object,
      default: () => ({})
    },
    label: {
      type: String,
      default: ''
    },
    tip: String,
    shape: String
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
