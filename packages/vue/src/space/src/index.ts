import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import type { PropType, SlotsType } from 'vue'
import template from 'virtual-template?pc|mobile-first'

export const spaceProps = {
  ...$props,
  /** 设置空间尺寸，可为字符串、数字或 [水平, 垂直] 数组 */
  size: {
    type: [String, Number, Array] as PropType<string | number | [string | number, string | number]>,
    default: 'small'
  },
  /** 主轴方向，row 或 column */
  direction: {
    type: String as PropType<'row' | 'column'>,
    default: 'row'
  },
  /** 对齐方式，start/center/end */
  align: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'start'
  },
  /** 主轴上的排列方式 */
  justify: {
    type: String as PropType<'start' | 'center' | 'end' | 'space-between' | 'space-around'>,
    default: 'start'
  },
  /** 是否自动换行 */
  wrap: {
    type: Boolean,
    default: false
  },
  /** 是否显示边框 */
  border: {
    type: Boolean,
    default: true
  },
  /** 自定义类名（仅 mobile-first 模板有效） */
  customClass: {
    type: String,
    default: ''
  },
  order: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  /** 自定义样式 */
  customStyle: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  },
  /** 提供内部使用的常量（保留扩展能力） */
  _constants: {
    type: Object,
    default: () => ({})
  }
}

// 组件定义
export default defineComponent({
  name: $prefix + 'Space',
  props: spaceProps,
  slots: Object as SlotsType<{
    default: {} // 默认插槽
  }>,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
