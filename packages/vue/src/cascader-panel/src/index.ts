import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export default defineComponent({
  name: $prefix + 'CascaderPanel',
  componentName: 'CascaderPanel',
  props: {
    ...$props,
    modelValue: {},
    options: Array,
    props: Object,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
