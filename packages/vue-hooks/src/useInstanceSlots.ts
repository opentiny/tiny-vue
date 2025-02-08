export const useInstanceSlots =
  ({ getCurrentInstance, isVue2, nextTick, onUnmounted }) =>
  () => {
    const publicInstance = getCurrentInstance().proxy

    /**
     * 在 Vue2，$scopedSlots 内容是插槽方法，$slots 内容是执行后的虚拟节点，使用 $slots 实践中发现会导致插槽丢失响应性，应该使用 $scopedSlots
     * 在 Vue3，$scopedSlots 是 undefined，$slots 内容是插槽方法，在渲染函数中使用 undefined 的 $scopedSlots 会出现警告提示
     * 为了兼容 Vue2 和 Vue3，以及消除警告提示，这里在 Vue3 实例上定义 $scopedSlots 为 null
     */
    if (!isVue2) {
      Object.defineProperty(publicInstance, '$scopedSlots', { configurable: true, value: null })
    }

    Object.defineProperty(publicInstance, 'instanceSlots', {
      configurable: true,
      get: () => publicInstance.$scopedSlots || publicInstance.$slots
    })

    onUnmounted(() => {
      nextTick(() => {
        if (!isVue2) {
          delete publicInstance.$scopedSlots
        }

        delete publicInstance.instanceSlots
      })
    })
  }
