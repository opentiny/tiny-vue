import { $prefix, $props, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'
import { pickerProps } from './type'

export default {
  name: $prefix + 'Picker',
  componentName: 'Picker',
  props: {
    ...$props,
    ...pickerProps
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
