// @opentiny/vue-renderless/space/vue/index.ts
import type { ISpaceProps } from '@/types'
import { getGapStyle } from './index'

export const api = ['state', 'orderedChildren']

function isVNodeFn(node: any): boolean {
  return !!(node && (node.__v_isVNode || node.componentOptions))
}

export const renderless = (props: ISpaceProps, hooks, { slots }) => {
  const { reactive, computed } = hooks

  const state = reactive({
    gapStyle: computed(() => getGapStyle(props))
  })

  // 排序逻辑
  const orderedChildren = computed(() => {
    const children = slots.default?.() || []

    // 过滤掉非 VNode 或注释节点
    const validChildren = children.filter((v) => {
      if (!isVNodeFn(v)) return false
      const type = (v as any).type
      return type !== 'Comment' && type !== Symbol.for('v-comment')
    })

    if (!props.order?.length) return validChildren

    // 根据 key 或 class 建立索引
    const map: Record<string, any> = {}
    validChildren.forEach((child) => {
      const key = child.key ?? (Array.isArray(child.props?.class) ? child.props.class.join(' ') : child.props?.class)
      if (key) map[String(key)] = child
    })

    // 按 order 排序
    const sorted = props.order.map((k) => map[k]).filter(Boolean)

    // 剩余没有在 order 里的保持原顺序
    const rest = validChildren.filter((v) => !props.order.includes(String(v.key)))

    return [...sorted, ...rest]
  })

  return { state, orderedChildren }
}
