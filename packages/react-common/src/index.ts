import { useEffect } from 'react'
import { Svg } from './svg-render'
import { generateVueHooks } from './vue-hooks.js'
import { emit, on, off, once, emitEvent } from './event.js'
import { If, Component, Slot, For, Transition } from './virtual-comp'
import { filterAttrs, vc, getElementCssClass, eventBus } from './utils.js'
import { useFiber } from './fiber.js'
import { useVm } from './vm.js'
import { twMerge } from 'tailwind-merge'
import { stringifyCssClass } from './csscls.js'
import { useExcuteOnce, useReload, useOnceResult, useVueLifeHooks } from './hooks.js'
// 导入 vue 响应式系统
import { effectScope, nextTick, reactive } from '@vue/runtime-core'

import '@opentiny/vue-theme/base/index.less'

// emitEvent, dispath, broadcast
export const $prefix = 'Tiny'

export const mergeClass = (...cssClasses) => twMerge(stringifyCssClass(cssClasses))

export const useSetup = ({
  props,
  // context,
  renderless,
  api,
  extendOptions = {},
  // mono = false,
  classes = {},
  constants,
  vm,
  parent
}) => {
  const $bus = useOnceResult(() => eventBus())

  // 刷新逻辑
  const reload = useReload()
  useExcuteOnce(() => {
    // 1. 响应式触发 $bus 的事件
    // 2. 事件响应触发组件更新
    $bus.on('event:reload', reload)
  })

  // 收集副作用，组件卸载自动清除副作用
  const scope = useOnceResult(() => effectScope())
  useEffect(() => {
    return () => scope.stop()
  }, [])

  // 创建响应式 props，每次刷新更新响应式 props
  const reactiveProps = useOnceResult(() => reactive(props))
  Object.assign(reactiveProps, props) 

  // 执行一次 renderless
  // renderless 作为 setup 的结果，最后要将结果挂在 vm 上
  let setupResult = useExcuteOnce(() => {
    const render = typeof reactiveProps.tiny_renderless === 'function' ? reactiveProps.tiny_renderless : renderless
    const { dispatch, broadcast } = emitEvent(vm)

    const utils = {
      vm,
      parent,
      emit: emit(reactiveProps),
      constants,
      nextTick,
      dispatch,
      broadcast,
      t() { },
      mergeClass,
      mode: reactiveProps.tiny_mode
    }

    let sdk
    scope.run(() => {
      sdk = render(
        reactiveProps,
        {
          ...generateVueHooks({
            $bus
          })
        },
        utils,
        extendOptions
      )
    })

    const attrs = {
      a: filterAttrs,
      m: mergeClass,
      vm: utils.vm,
      gcls: (key) => getElementCssClass(classes, key),
    }

    if (Array.isArray(api)) {
      api.forEach((name) => {
        const value = sdk[name]

        if (typeof value !== 'undefined') {
          attrs[name] = value
        }
      })
    }

    return attrs
  })

  useVueLifeHooks($bus)

  return setupResult
}

export {
  Svg,
  If,
  Component,
  Slot,
  For,
  Transition,
  vc,
  emit,
  on,
  off,
  once,
  emitEvent,
  useVm,
  useFiber,
}

export * from './vue-hooks.js'