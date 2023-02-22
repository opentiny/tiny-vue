import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const template = () => PCTemplate

export default {
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
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
