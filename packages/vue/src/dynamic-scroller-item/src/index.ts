import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'DynamicScrollerItem',
  props: {
    ...$props,
    // eslint-disable-next-line vue/require-prop-types
    item: { required: true },
    watchData: { type: Boolean, default: false },
    // Indicates if the view is actively used to display an item.
    active: { type: Boolean, required: true },
    index: { type: Number, default: undefined },
    sizeDependencies: { type: [Array, Object], default: null },
    emitResize: { type: Boolean, default: false },
    tag: { type: String, default: 'div' }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
