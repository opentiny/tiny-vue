import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export const gridHeaderProps = {
  ...$props,
  collectColumn: Array,
  fixedColumn: Array,
  size: String,
  isGroup: {
    type: Boolean,
    default: false
  },
  tableColumn: Array,
  tableData: Array,
  visibleColumn: Array
}

export default defineComponent({
  name: $prefix + 'GridHeader',
  props: gridHeaderProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
