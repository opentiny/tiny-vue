import { $props, $prefix, $setup } from '@opentiny/vue-common'
import template from 'virtual-template?mobile|mobile-first'

export default {
  name: $prefix + 'TabbarItem',
  componentName: 'TabbarItem',
  props: {
    ...$props,
    url: String,
    replace: Boolean,
    to: [String, Object],
    dot: Boolean,
    icon: Object,
    name: [Number, String],
    text: String,
    info: [Number, String],
    badge: [Number, String]
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
