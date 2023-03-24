import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
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
)
