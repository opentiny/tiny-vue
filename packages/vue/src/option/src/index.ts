import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const optionsProps = {
  ...$props,
  value: {
    required: true
  },
  label: [String, Number],
  created: Boolean,
  disabled: {
    type: Boolean,
    default: false
  },
  events: {
    type: Object,
    default: () => ({})
  },
  visible: {
    type: Boolean,
    default: true
  },
  highlightClass: String,
  required: {
    type: Boolean,
    default: false
  },
  // tiny 新增
  icon: Object
}

export default defineComponent({
  name: $prefix + 'Option',
  componentName: 'Option',
  props: optionsProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
