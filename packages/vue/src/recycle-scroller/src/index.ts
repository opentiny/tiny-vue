import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'RecycleScroller',
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
    itemSize: { type: Number, default: null },
    gridItems: { type: Number, default: undefined },
    itemSecondarySize: { type: Number, default: undefined },
    minItemSize: { type: [Number, String], default: null },
    sizeField: { type: String, default: 'size' },
    typeField: { type: String, default: 'type' },
    buffer: { type: Number, default: 200 },
    pageMode: { type: Boolean, default: false },
    prerender: { type: Number, default: 0 },
    emitUpdate: { type: Boolean, default: false },
    updateInterval: { type: Number, default: 0 },
    skipHover: { type: Boolean, default: false },
    listClass: { type: [String, Object, Array], default: '' },
    itemClass: { type: [String, Object, Array], default: '' },
    itemsLimit: { type: Number, default: 1000 }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
