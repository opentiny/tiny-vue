import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default {
  name: $prefix + 'UploadDragger',
  props: {
    ...$props,
    disabled: Boolean,
    customClass: [String, Object, Array]
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
