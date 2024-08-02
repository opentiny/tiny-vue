import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

export const dropdownProps = {
  ...$props,
  modelValue: [String, Number],
  type: String,
  trigger: String, // 默认主题为 'hover'
  size: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  splitButton: Boolean,
  singleButton: {
    type: Boolean,
    default: false
  },
  showTimeout: {
    type: Number,
    default: 250
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  hideOnClick: {
    type: Boolean,
    default: true
  },
  tabindex: {
    type: Number,
    default: 0
  },
  border: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  showSelfIcon: {
    type: Boolean,
    default: false
  },
  // tiny新增
  menuOptions: {
    type: Object,
    default: () => ({
      options: [],
      textField: 'label',
      popperClass: '',
      placement: 'bottom-end'
    })
  },
  title: {
    type: String,
    default: '下拉菜单'
  },
  inheritWidth: {
    type: Boolean,
    default: false
  },
  suffixIcon: Object,
  lazyShowPopper: {
    type: Boolean,
    default: false
  }
}
export default defineComponent({
  name: $prefix + 'Dropdown',
  componentName: 'TinyDropdown',
  props: dropdownProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
