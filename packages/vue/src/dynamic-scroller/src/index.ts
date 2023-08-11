import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'DynamicScroller',
  props: {
    ...$props,
    items: { type: Array, required: true },
    keyField: { type: String, default: 'id' },
    direction: {
      type: String,
      default: 'vertical',
      validator: (value) => ['vertical', 'horizontal'].includes(value)
    },
    listTag: { type: String, default: 'div' },
    itemTag: { type: String, default: 'div' },
    minItemSize: { type: [Number, String], required: true }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
