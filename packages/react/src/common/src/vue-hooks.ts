import {
  // 响应式：核心
  ref,
  computed,
  reactive,
  readonly,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  // 响应式：工具
  isRef,
  unref,
  toRef,
  toValue,
  toRefs,
  isProxy,
  isReactive,
  isReadonly,
  // 响应式：进阶
  shallowRef,
  triggerRef,
  customRef,
  shallowReactive,
  shallowReadonly,
  toRaw,
  markRaw,
  effectScope,
  getCurrentScope,
  onScopeDispose,
  // 通用
  nextTick
} from '@vue/runtime-core'
import { useExcuteOnce } from './hooks'
import { useEffect } from 'react'

const vmContext = new Map()
export const useProvide = (vm, key, value) => {
  useEffect(() => {
    for (const candidateVm of vmContext.keys()) {
      if (vm.$el?.contains(candidateVm.$el)) {
        const context = vmContext.get(candidateVm)
        if (!context) {
          return
        }

        for (const subKey in value) {
          context[key][subKey] = value[subKey]
        }
      }
    }
  }, [key, value])
}

// 通用
const getInject = ({ vm }) => {
  return (key, defaultValue = {}) => {
    if (!vmContext.get(vm)) {
      vmContext.set(vm, reactive({}))
    }
    const context = vmContext.get(vm)

    if (!context[key]) {
      Object.assign(context, { [key]: defaultValue })
    }

    return context[key]
  }
}
const provide = () => {}

export function generateVueHooks({ $bus, vm }) {
  const reload = () => $bus.emit('event:reload')

  function toPageLoad(reactiveHook, reload) {
    return function (...args) {
      const result = reactiveHook(...args)
      nextTick(() => {
        watch(
          result,
          () => {
            typeof reload === 'function' && reload()
          },
          {
            flush: 'sync'
          }
        )
      })
      return result
    }
  }

  return {
    // 响应式：核心
    ref: toPageLoad(ref, reload),
    computed: toPageLoad(computed, reload),
    reactive: toPageLoad(reactive, reload),
    readonly,
    watchEffect,
    watchPostEffect,
    watchSyncEffect,
    watch,
    // 响应式：工具
    isRef,
    unref,
    toRef: toPageLoad(toRef, reload),
    toValue,
    toRefs,
    isProxy,
    isReactive,
    isReadonly,
    // 响应式：进阶
    shallowRef: toPageLoad(shallowRef, reload),
    triggerRef,
    customRef: toPageLoad(customRef, reload),
    shallowReactive: toPageLoad(shallowReactive, reload),
    shallowReadonly,
    toRaw,
    markRaw,
    effectScope,
    getCurrentScope,
    onScopeDispose,
    // 依赖注入
    inject: getInject({ vm }),
    provide,
    // 生命周期函数
    onBeforeUnmount() {
      $bus.on('hook:onBeforeUnmount')
    },
    onMounted() {
      $bus.on('hook:onMounted')
    },
    onUpdated() {
      $bus.on('hook:onUpdated')
    },
    onUnmounted() {
      $bus.on('hook:onUnmounted')
    },
    onBeforeMount() {
      $bus.on('hook:onBeforeMount')
    },
    onBeforeUpdate() {
      $bus.on('hook:onBeforeUpdate')
    },
    onErrorCaptured() {
      $bus.on('hook:onErrorCaptured')
    },
    onRenderTracked() {
      $bus.on('hook:onRenderTracked')
    },
    onRenderTriggered() {
      $bus.on('hook:onRenderTriggered')
    },
    onActivated() {
      $bus.on('hook:onActivated')
    },
    onDeactivated() {
      $bus.on('hook:onDeactivated')
    },
    onServerPrefetch() {
      $bus.on('hook:onServerPrefetch')
    }
  }
}

// 在这里出发生命周期钩子
export function useVueLifeHooks($bus) {
  $bus.emit('hook:onBeforeUpdate')
  nextTick(() => {
    $bus.emit('hook:onUpdated')
  })

  useExcuteOnce(() => {
    $bus.emit('hook:onBeforeMount')
  })

  useEffect(() => {
    $bus.emit('hook:onMounted')

    return () => {
      // 卸载
      $bus.emit('hook:onBeforeUnmount')
      nextTick(() => {
        $bus.emit('hook:onUnmounted')
      })
    }
  }, [])
}

export * from '@vue/runtime-core'
