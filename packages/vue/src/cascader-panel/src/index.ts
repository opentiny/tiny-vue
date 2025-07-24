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
    renderLabel: Function,
    // 面板是直接使用，还是在级联组件中被使用， 先仅影响pc模板
    // 私有属性，无需体现在api 文档
    onlyUsePanel: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
