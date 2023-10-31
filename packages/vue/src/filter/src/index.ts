import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

export default defineComponent({
  name: $prefix + 'Filter',
  props: {
    ...$props,
    data: Array,
    modelValue: Array,
    columnNum: {
      type: Number,
      default: 3
    },
    filterGroup: Array,
    filterValue: Array,
    panelClass: String,
    manual: Boolean,
    customClass: String
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
