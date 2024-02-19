import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'Hrapprover',
  props: {
    ...$props,
    modelValue: String,
    approvalPerson: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    category: {
      type: String,
      default: '0303'
    },
    title: String,
    fetchHrapprover: Function,
    fetchDeptList: Function,
    fetchDeptByValue: Function,
    fetchDept: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
