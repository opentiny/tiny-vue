import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const $constants = {
  FORM_NAME: 'Form',
  FORM_ITEM_NAME: 'FormItem'
}

export const formItemProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  appendToBody: {
    type: Boolean,
    default: undefined
  },
  error: {
    type: String,
    default: ''
  },
  for: String,
  inlineMessage: {
    type: Boolean,
    default: undefined
  },
  messageType: String,
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
    default: false
  },
  rules: [Object, Array],
  showMessage: {
    type: Boolean,
    default: true
  },
  size: String,
  tipContent: String,
  validateDisabled: Boolean,
  validateDebounce: Boolean,
  validatePosition: String,
  validateStatus: String,
  validateType: String,
  validateIcon: Object,
  ellipsis: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'FormItem',
  componentName: 'FormItem',
  props: formItemProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
