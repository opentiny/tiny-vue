import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const template = () => PCTemplate

export default {
  name: $prefix + 'Dept',
  props: {
    ...$props,
    modelValue: String,
    disabled: {
      type: Boolean,
      default: false
    },
    autoSelect: {
      type: Boolean,
      default: true
    },
    size: String,
    fetchDeptList: Function,
    fetchDeptByValue: Function,
    fetchDept: Function,
    beforeConfirm: Function,
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
