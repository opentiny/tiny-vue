import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

const $constants = {}

export default defineComponent({
  name: $prefix + 'TabItem',
  componentName: 'TabItem',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    title: String,
    labelContent: Function,
    name: String,
    withClose: Boolean,
    disabled: Boolean,
    lazy: Boolean,
    selected: Boolean,
    renderTitle: Function,
    renderSetting: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
