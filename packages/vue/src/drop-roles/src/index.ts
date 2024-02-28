import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'DropRoles',
  props: {
    ...$props,
    modelValue: {},
    placeholder: {
      type: String,
      default: ''
    },
    size: String,
    fetchRole: Function,
    fetchCurrentRole: Function,
    fields: Object,
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    displayOnly: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
