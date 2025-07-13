import { computed } from 'vue'
import { $prefix, $props, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

// Props 定义
export const spaceProps = {
  ...$props,
  size: [String, Number, Array],
  align: String,
  justify: String,
  direction: String,
  wrap: Boolean,
  order: {
    type: Array,
    default: () => []
  }
}

// 封装 style logic（也可放 renderless 中）
export function useSpace(props: any) {
  const spaceStyle = computed(() => {
    const gap = typeof props.size === 'number' ? `${props.size}px` : typeof props.size === 'string' ? props.size : '8px'
    return { gap }
  })

  return { spaceStyle }
}

// 最终导出组件
export default defineComponent({
  name: $prefix + 'Space',
  props: spaceProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
