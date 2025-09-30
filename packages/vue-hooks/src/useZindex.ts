import { hooks as Vue } from '@opentiny/vue-common'
import { isNumber, isServer } from '@opentiny/utils'

const { computed, getCurrentInstance, inject, ref, unref } = Vue
let getNuxtApp: any = () => undefined
try {
  getNuxtApp = (await import('#app')).useNuxtApp
} catch (error) {
  // empty
}

export interface GlobalZIndexState {
  current: number
}

/**
 * 全局 Z-index 注入键。
 */
export const ZINDEX_INJECTION_KEY: Vue.InjectionKey<GlobalZIndexState> = Symbol('tiny-vue-zIndex-injection')

export const INITIAL_ZINDEX_KEY: Vue.InjectionKey<Vue.Ref<number | undefined>> = Symbol('tiny-vue-initial-zIndex')

const defaultGlobalZIndexState: GlobalZIndexState = {
  current: 0
}
// z-index 偏移量，由全局计数器控制。
const zIndexOffset = ref(0)
const step = 2
const defaultInitialZIndex = 2000

export const useZIndexInjection = (): GlobalZIndexState => {
  if (isServer && !inject(ZINDEX_INJECTION_KEY)) {
    const requestEvent = getNuxtApp()
    if (requestEvent && !requestEvent.context.zIndexState) {
      requestEvent.context.zIndexState = { ...defaultGlobalZIndexState }
    }
    return requestEvent?.context?.zIndexState || defaultGlobalZIndexState
  }
  return getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, defaultGlobalZIndexState) : defaultGlobalZIndexState
}

export const useZIndex = (zIndexOverrides?: Vue.Ref<number>) => {
  if (isServer && !inject(ZINDEX_INJECTION_KEY)) {
    console.warn(
      'ZIndexInjection',
      `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
  usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`
    )
  }

  const globalZIndexState = useZIndexInjection()
  // 优先使用 zIndexOverrides，其次从上下文注入。
  const contextualInitialZIndex =
    zIndexOverrides || (getCurrentInstance() ? inject(INITIAL_ZINDEX_KEY, undefined) : undefined)

  // 计算 z-index 的起始值，若无则使用默认值。
  const initialZIndex = computed(() => {
    const zIndexContextValue = unref(contextualInitialZIndex)
    return isNumber(zIndexContextValue) ? zIndexContextValue : defaultInitialZIndex
  })

  // 当前 z-index = 起始值 + 全局偏移量。
  const currentZIndex = computed(() => {
    return (initialZIndex.value || defaultInitialZIndex) + zIndexOffset.value
  })

  const nextZIndex = () => {
    globalZIndexState.current += step
    zIndexOffset.value = globalZIndexState.current
    return currentZIndex.value
  }
  return {
    nextZIndex,
    currentZIndex
  }
}
