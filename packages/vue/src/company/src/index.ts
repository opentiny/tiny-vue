import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
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
)
