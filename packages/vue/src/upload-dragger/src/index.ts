import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const UploadDraggerProps = {
  ...$props,
  disabled: Boolean,
  customClass: [String, Object, Array]
}

export default defineComponent({
  name: $prefix + 'UploadDragger',
  props: UploadDraggerProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
