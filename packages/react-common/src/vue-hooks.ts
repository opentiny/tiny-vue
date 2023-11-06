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

// 通用
const inject = () => { }
const provide = () => { }

export function generateVueHooks({
  $bus
}) {
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
            flush: "sync"
          }
        );
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

export * from '@vue/runtime-core'