import { useEffect } from 'react'
import { Svg } from './svg-render'
import { generateVueHooks, useVueLifeHooks } from './vue-hooks.js'
import { emitEvent } from './event.js'
import { If, Component, Slot, For, Transition } from './virtual-comp'
import { filterAttrs, vc, getElementCssClass, eventBus } from './utils.js'
import { useFiber } from './fiber.js'
import { useVm } from './vm.js'
import { twMerge } from 'tailwind-merge'
import { stringifyCssClass } from './csscls.js'
import { useExcuteOnce, useReload, useOnceResult } from './hooks.js'
// 导入 vue 响应式系统
import { effectScope, nextTick, reactive } from '@vue/runtime-core'
import { useCreateVueInstance } from './vue-instance'

import '@opentiny/vue-theme/base/index.less'

// emitEvent, dispath, broadcast
export const $prefix = 'Tiny'

export const $props = {
  'tiny_mode': String,
  'tiny_mode_root': Boolean,
  'tiny_template': [Function, Object],
  'tiny_renderless': Function,
  'tiny_theme': String,
  'tiny_chart_theme': Object
}

export const mergeClass = (...cssClasses) => twMerge(stringifyCssClass(cssClasses))

const setup = ({
  props,
  renderless,
  api,
  extendOptions = {},
  classes = {},
  constants,
  vm,
  parent,
  $bus
}) => {
  const render = typeof props.tiny_renderless === 'function' ? props.tiny_renderless : renderless
  const { dispatch, broadcast } = emitEvent(vm)

  const utils = {
    vm,
    parent,
    emit: vm.$emit,
    constants,
    nextTick,
    dispatch,
    broadcast,
    t() { },
    mergeClass,
    mode: props.tiny_mode
  }

  const sdk = render(
    props,
    {
      ...generateVueHooks({
        $bus
      })
    },
    utils,
    extendOptions
  )

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
}

export const useSetup = ({
  props,
  renderless,
  api,
  extendOptions = {},
  classes = {},
  constants
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
  useExcuteOnce(() => {
    $bus.on('hook:onBeforeUnmount', () => scope.stop())
  })

  // 创建响应式 props，每次刷新更新响应式 props
  const reactiveProps = useOnceResult(() => reactive(props))
  Object.assign(reactiveProps, props)

  const { ref, vm } = useCreateVueInstance({
    $bus,
    props
  })

  // 执行一次 renderless
  // renderless 作为 setup 的结果，最后要将结果挂在 vm 上
  let setupResult = useExcuteOnce(() => {
    let result
    // 在 effectScope 里运行 renderless
    scope.run(() => {
      result = setup({
        props: reactiveProps,
        renderless,
        api,
        constants,
        extendOptions,
        classes,
        vm,
        parent,
        $bus
      })
    })
    return result
  })

  // 触发生命周期
  useVueLifeHooks($bus)

  Object.keys(setupResult).forEach((key) => {
    vm[key] = setupResult[key]
  })

  return {
    ...setupResult,
    _: {
      ref,
      vm
    }
  }
}

export {
  Svg,
  If,
  Component,
  Slot,
  For,
  Transition,
  vc,
  emitEvent,
  useVm,
  useFiber,
}

export * from './vue-hooks.js'
export * from './vue-props.js'
export * from './render-stack.js'
export * from './vue-instance.js'
export * from './hooks'