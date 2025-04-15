import { noop } from '@opentiny/utils'
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
    // 检查必需的 relationKey 参数是否存在
    if (!relationKey) {
      throw new Error('[TINY Error]<relationKey> must exist.')
    }

    // 获取当前组件实例
    const instance = getCurrentInstance()
    // 创建响应式状态对象,包含子组件数组和在父组件中的索引
    const state = reactive({ children: [], indexInParent: -1 })
    // 注入父组件提供的关系值
    const injectValue = inject(relationKey, null)
    // 收集所有子组件的刷新回调函数
    let callbacks = []

    if (injectValue) {
      // 如果存在父组件注入的关系值,说明当前组件是子组件
      const { link, unlink, callbacks: injectCbs, childrenKey: injectKey, delivery: injectDelivery } = injectValue

      // 使用父组件的回调数组
      callbacks = injectCbs
      // 设置子组件引用名称,优先使用传入的,否则使用父组件的,默认为 instanceChildren
      childrenKey = childrenKey || injectKey || 'instanceChildren'
      // 使用父组件分发的内容
      delivery = injectDelivery

      // 将当前组件链接到父组件,并获取在父组件中的索引
      state.indexInParent = link(instance)

      // 组件卸载时从父组件解除链接
      onUnmounted(() => unlink(instance))
    } else {
      // 如果不存在父组件注入的关系值,说明当前组件是根组件
      childrenKey = childrenKey || 'instanceChildren'

      // 创建 mounted 和 activated 钩子
      const onMountedOrActivated = createHook({ onMounted, onActivated, nextTick })
      // 创建子组件顺序变化的处理函数
      const changeHandler = onChange ? () => nextTick(onChange) : noop

      // MutationObserver 实例
      let relationMO

      nextTick(() => {
        // 获取关系容器 DOM 节点
        const targetNode = typeof relationContainer === 'function' ? relationContainer() : relationContainer

        if (targetNode) {
          // 创建 MutationObserver 监听容器节点变化
          relationMO = new MutationObserver((mutationList, observer) => {
            const flattenNodes = []
            // 将容器的子树 DOM 节点扁平化处理
            flattenChildNodes(targetNode.childNodes, flattenNodes)
            // 执行所有回调,更新子组件顺序
            callbacks.forEach((callback) => callback(flattenNodes, mutationList, observer))
            // 执行变化后的回调
            changeHandler()
          })

          // 开始观察容器节点
          relationMO.observe(targetNode, { attributes: true, childList: true, subtree: true })
        }
      })

      // 在 mounted 和 activated 时执行变化处理
      onMountedOrActivated(() => changeHandler())

      // 组件卸载时清理
      onUnmounted(() => {
        if (relationMO) {
          relationMO.disconnect()
          relationMO = null
        }

        callbacks = null
      })
    }

    // 链接子组件的方法
    const link = (child) => {
      const childPublic = child.proxy
      // 将子组件添加到数组
      state.children.push(markRaw(childPublic))
      // 返回子组件在数组中的索引
      return computed(() => state.children.indexOf(childPublic))
    }

    // 解除子组件链接的方法
    const unlink = (child) => {
      const index = state.children.indexOf(child.proxy)
      // 从数组中移除子组件
      if (index > -1) {
        state.children.splice(index, 1)
      }
    }

    // 添加刷新子组件顺序的回调
    callbacks.push((flattenNodes) => sortPublicInstances(state.children, flattenNodes))

    // 向子组件提供关系值
    provide(relationKey, { link, unlink, callbacks, childrenKey, delivery })

    // 在组件实例上定义子组件数组的访问器属性
    Object.defineProperty(instance.proxy, childrenKey, { configurable: true, get: () => state.children })

    // 组件卸载时删除子组件数组属性
    onUnmounted(() => delete instance.proxy[childrenKey])

    // 返回子组件数组引用、索引引用和分发内容
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
