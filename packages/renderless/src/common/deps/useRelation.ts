import { noop } from '../function'
import { onMountedOrActivated as createHook } from './useEventListener'

/**
 * 处理组件嵌套的组合式 API
 * relationKey 关系树上的父子组件使用同一个关系名称
 * relationContainer 子组件顺序由关系容器确定，由根组件提供，可以不使用，子组件顺序就是组件创建顺序
 * onChange 子组件顺序改变后的回调处理，由根组件提供，可以不使用
 * childrenKey 在组件关系树上的所有实例中定义的子组件引用名称，默认是 instanceChildren
 * delivery 根组件向下分发的内容
 */
export const useRelation =
  ({
    computed,
    getCurrentInstance,
    inject,
    markRaw,
    nextTick,
    onMounted,
    onActivated,
    onUnmounted,
    provide,
    reactive,
    toRef
  }) =>
  ({ relationKey, relationContainer, onChange, childrenKey, delivery } = {}) => {
    if (!relationKey) {
      throw new Error('[TINY Error]<relationKey> must exist.')
    }

    const instance = getCurrentInstance()
    const state = reactive({ children: [], indexInParent: -1 })
    const injectValue = inject(relationKey, null)
    // 收集所有的子组件刷新回调
    let callbacks = []

    if (injectValue) {
      const { link, unlink, callbacks: injectCbs, childrenKey: injectKey, delivery: injectDelivery } = injectValue

      callbacks = injectCbs
      childrenKey = childrenKey || injectKey || 'instanceChildren'
      delivery = injectDelivery

      state.indexInParent = link(instance)

      onUnmounted(() => unlink(instance))
    } else {
      childrenKey = childrenKey || 'instanceChildren'

      const onMountedOrActivated = createHook({ onMounted, onActivated, nextTick })
      const changeHandler = onChange ? () => nextTick(onChange) : noop

      let relationMO

      nextTick(() => {
        // 在 mounted 之后，如果表示子组件关系的 dom 元素存在，就创建 MutationObserver 观察它的子树改变
        const targetNode = typeof relationContainer === 'function' ? relationContainer() : relationContainer

        if (targetNode) {
          relationMO = new MutationObserver((mutationList, observer) => {
            const flattenNodes = []
            // 对关系容器 dom 子树进行平铺处理
            flattenChildNodes(targetNode.childNodes, flattenNodes)
            // 使用平铺的 dom 子树更新子组件顺序
            callbacks.forEach((callback) => callback(flattenNodes, mutationList, observer))
            // 执行后续组件 change 处理
            changeHandler()
          })

          relationMO.observe(targetNode, { attributes: true, childList: true, subtree: true })
        }
      })

      onMountedOrActivated(() => changeHandler())

      onUnmounted(() => {
        if (relationMO) {
          relationMO.disconnect()
          relationMO = null
        }

        callbacks = null
      })
    }

    const link = (child) => {
      const childPublic = child.proxy

      state.children.push(markRaw(childPublic))

      return computed(() => state.children.indexOf(childPublic))
    }

    const unlink = (child) => {
      const index = state.children.indexOf(child.proxy)

      if (index > -1) {
        state.children.splice(index, 1)
      }
    }

    // 刷新子组件顺序
    callbacks.push((flattenNodes) => sortPublicInstances(state.children, flattenNodes))

    provide(relationKey, { link, unlink, callbacks, childrenKey, delivery })

    // 在 Public Instance 上定义子组件数组，并且在组件卸载时移除
    Object.defineProperty(instance.proxy, childrenKey, { configurable: true, get: () => state.children })

    onUnmounted(() => delete instance.proxy[childrenKey])

    // 返回子组件数组 ref、在父级中的位置索引 ref 和接收到的分发内容
    return { children: toRef(state, 'children'), index: toRef(state, 'indexInParent'), delivery }
  }

const flattenChildNodes = (childNodes, result) => {
  if (childNodes.length) {
    childNodes.forEach((childNode) => {
      result.push(childNode)

      if (childNode.childNodes) {
        flattenChildNodes(childNode.childNodes, result)
      }
    })
  }
}

const sortPublicInstances = (instances, flattenNodes) => {
  instances.sort((a, b) => flattenNodes.indexOf(a.$el) - flattenNodes.indexOf(b.$el))
}
