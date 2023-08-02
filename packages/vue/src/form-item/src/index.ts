import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

const $constants = {
  FORM_NAME: 'Form',
  FORM_ITEM_NAME: 'FormItem'
}

export default defineComponent({
  name: $prefix + 'FormItem',
  componentName: 'FormItem',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    appendToBody: {
      type: Boolean,
      default: undefined
    },
    error: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    label: String,
    labelWidth: String,
    manual: Boolean,
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    tipContent: String,
    validateDebounce: Boolean,
    validatePosition: String,
    validateStatus: String,
    validateType: String,
    validateIcon: {
      type: Object,
      default: null
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
