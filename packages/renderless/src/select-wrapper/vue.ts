export const api = [
  'state',
  'resolvedComponent',
  'mergedProps',
  'listeners',
  'slotNames',
  'hasScopedDefault',
  'focus',
  'blur'
]

export const renderless = (props, { reactive, computed, useAttrs }, { constants, vm, components }) => {
  const api = {}

  const resolvedComponent = computed(() => computedResolvedComponent({ props, constants, vm, components }))

  const mergedProps = computed(() => {
    const runtimeAttrs = typeof useAttrs === 'function' ? useAttrs() : null
    const attrs = runtimeAttrs || vm.$attrs || {}
    const className = attrs.class
    const classArray = Array.isArray(className)
      ? ['tiny-select', ...className]
      : className
        ? ['tiny-select', className]
        : ['tiny-select']

    const { class: _omitClass, ...restAttrs } = attrs
    return {
      ...props,
      ...restAttrs,
      class: Array.from(new Set(classArray)),
      dataTag: 'tiny-select'
    }
  })

  const slotNames = computed(() => Object.keys(vm.$slots || {}).filter((name) => name && name !== 'default'))

  const hasScopedDefault = computed(() => {
    const scoped = vm.$scopedSlots?.default
    if (scoped && scoped.length) {
      return true
    }
    const slot = vm.$slots?.default
    return typeof slot === 'function' && slot.length > 0
  })

  const listeners = computed(() => {
    if (vm.$listeners) {
      return vm.$listeners
    }
    return {}
  })

  const getChildComponent = () => vm.$refs?.childComponent

  // 暴露子组件的 state，让用户可以通过 ref.state 访问子组件的状态（如 cachedOptions）
  // 使用 Proxy 代理子组件的 state，实现动态访问
  const state = new Proxy(
    {},
    {
      get(target, prop) {
        const child = getChildComponent()
        return child?.state?.[prop]
      },
      set(target, prop, value) {
        const child = getChildComponent()
        if (child?.state) {
          child.state[prop] = value
          return true
        }
        return false
      },
      has(target, prop) {
        const child = getChildComponent()
        return prop in (child?.state || {})
      },
      ownKeys(target) {
        const child = getChildComponent()
        return Object.keys(child?.state || {})
      },
      getOwnPropertyDescriptor(target, prop) {
        const child = getChildComponent()
        const childState = child?.state || {}
        if (prop in childState) {
          return {
            enumerable: true,
            configurable: true,
            value: childState[prop]
          }
        }
        return undefined
      }
    }
  )

  const focus = () => {
    const child = getChildComponent()
    child && typeof child.focus === 'function' && child.focus()
  }

  const blur = () => {
    const child = getChildComponent()
    child && typeof child.blur === 'function' && child.blur()
  }

  const hasData = (value: any) => {
    if (!value) {
      return false
    }
    if (Array.isArray(value)) {
      return value.length > 0
    }
    if (typeof value === 'object') {
      return Object.keys(value).length > 0
    }
    return true
  }

  const computedResolvedComponent = ({ props, constants, vm, components }) => {
    // 优先使用传入的 components，否则从 vm.$options.components 获取
    const comps = components || vm.$options?.components || {}

    if (props.renderType === constants.TYPE.Tree || hasData(props.treeOp)) {
      return comps.TinyTreeSelect || 'TinyTreeSelect'
    }
    if (props.renderType === constants.TYPE.Grid || hasData(props.gridOp)) {
      return comps.TinyGridSelect || 'TinyGridSelect'
    }
    return comps.TinyBaseSelect || 'TinyBaseSelect'
  }
  Object.assign(api, {
    state,
    resolvedComponent,
    mergedProps,
    listeners,
    slotNames,
    hasScopedDefault,
    focus,
    blur
  })

  return api
}
