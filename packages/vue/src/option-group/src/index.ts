import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default {
  name: $prefix + 'OptionGroup',
  componentName: 'OptionGroup',
  props: {
    ...$props,
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
