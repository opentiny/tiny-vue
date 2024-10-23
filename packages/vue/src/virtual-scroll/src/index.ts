import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const $constants = {}
const template = (mode) => {
  return (process.env.TINY_MODE || mode) === 'mobile-first' ? null : PCTemplate
}

export default defineComponent({
  name: $prefix + 'VirtualScroll',
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
    itemSize: {
      // 每条数据高度
      type: Number
    },
    itemIndex: {
      // 数组的唯一标识字段
      type: String,
      default: 'id',
      require: true
    },
    estimatedItemSize: {
      // 预估每项的高度
      type: Number
    },
    direction: {
      // 滚动方向
      type: String,
      default: 'vertical',
      validator: (value) => ['vertical', 'horizontal'].includes(value)
    },
    buffer: {
      // 缓冲区
      type: Number,
      default: 1
    },
    prerender: {
      // 预渲染条数
      type: Number,
      default: 0
    },
    visibleSize: {
      type: Number,
      default: 400,
      require: true
    }
  },

  setup(props, context) {
    return $setup({ props, context, template })
  }
})
