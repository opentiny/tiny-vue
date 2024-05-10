import {
  // 响应式：核心
  ref,
  computed,
  readonly,
  watch,
  watchEffect,
  watchPostEffect,
  reactive,
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

// 通用
const commonData = {}
const inject = (key, defaultValue) => {
  return commonData[key] || defaultValue
}
const provide = (key, value) => {
  commonData[key] = value
}

export function generateVueHooks({ $bus }) {
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
    inject,
    provide,
    nextTick,
    // 生命周期函数
    onBeforeUnmount(fn) {
      $bus.on('hook:onBeforeUnmount', fn)
    },
    onMounted(fn) {
      $bus.on('hook:onMounted', fn)
    },
    onUpdated(fn) {
      $bus.on('hook:onUpdated', fn)
    },
    onUnmounted(fn) {
      $bus.on('hook:onUnmounted', fn)
    },
    onBeforeMount(fn) {
      $bus.on('hook:onBeforeMount', fn)
    },
    onBeforeUpdate(fn) {
      $bus.on('hook:onBeforeUpdate', fn)
    },
    onErrorCaptured(fn) {
      $bus.on('hook:onErrorCaptured', fn)
    },
    onRenderTracked(fn) {
      $bus.on('hook:onRenderTracked', fn)
    },
    onRenderTriggered(fn) {
      $bus.on('hook:onRenderTriggered', fn)
    },
    onActivated(fn) {
      $bus.on('hook:onActivated', fn)
    },
    onDeactivated(fn) {
      $bus.on('hook:onDeactivated', fn)
    },
    onServerPrefetch(fn) {
      $bus.on('hook:onServerPrefetch', fn)
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
