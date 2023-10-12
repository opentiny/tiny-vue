import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const $constants = {}

export const tabItemProps = {
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
}

export default defineComponent({
  name: $prefix + 'TabItem',
  componentName: 'TabItem',
  props: tabItemProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
