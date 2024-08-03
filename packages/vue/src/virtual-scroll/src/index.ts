import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

// import MobileTemplate from './mobile.vue'
// 基本配置和属性
const $constants = {}
// template是对于不同模板的传入进行选择模式
const template = (mode) => {
  return (process.env.TINY_MODE || mode) === 'mobile-first' ? null : PCTemplate
}

export default defineComponent({
  name: $prefix + 'VirtualScroll',
  // 定义虚拟滚动的外部接口
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    // 渲染数据
    data: {
      type: Array,
      default: () => {
        return []
      },
      require: true
    },
    viewSize: {
      // 可视区域高度
      type: Number,
      default: 600
    },
    itemSize: {
      // 每条数据高度
      type: Number,
      default: 30
    },
    itemIndex: {
      // 数组的唯一标识字段，可以很大程度提升性能
      type: String,
      default: 'id',
      require: true
    },
    direction: {
      // 滚动方向
      type: String,
      default: 'vertical', // 可选值：'vertical' | 'horizontal'
      validator: (value) => ['vertical', 'horizontal'].includes(value)
    }
  },
  // 初始化组件，传入props和context以及模板内容，props传给pc.vue
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
