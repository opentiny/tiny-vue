import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?mobile-first'

export default defineComponent({
  name: $prefix + 'UserHeadGroup',
  componentName: 'TinyUserHeadGroup',
  props: {
    ...$props,
    groupSize: {
      type: Number,
      default: 40
    },
    list: {
      type: Array,
      default: () => []
    },
    showMax: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    color: String,
    backgroundColor: String
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
