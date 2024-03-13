import { Svg } from './svg-render.jsx'
import { generateVueHooks, useVueLifeHooks } from './vue-hooks.js'
import { emitEvent } from './event.js'
import { If, Component, Slot, For, Transition } from './virtual-comp.jsx'
import { filterAttrs, vc, getElementCssClass, eventBus, emitter } from './utils.js'
import { useFiber } from './fiber.js'
import { useVm } from './vm.js'
import { twMerge } from 'tailwind-merge'
import { stringifyCssClass } from './csscls.js'
import { useExcuteOnce, useReload, useOnceResult } from './hooks.js'
import { t } from '@opentiny/react-locale'
import { useReactive } from './reactive.js'

// 导入 vue 响应式系统
import { effectScope, nextTick, reactive, watch } from '@vue/runtime-core'
import { useCreateVueInstance } from './vue-instance'

import '@opentiny/vue-theme/base/index.less'

// emitEvent, dispath, broadcast
export const $prefix = 'Tiny'

export const $props = {
  'tiny_mode': '',
  'tiny_mode_root': false,
  'tiny_template': {},
  'tiny_renderless': null,
  'tiny_theme': '',
  'tiny_chart_theme': '',
  'listeners': {}
}
export function handlePrevent(event, fun) {
  event.stopPropagation()
  fun()
}
const onBeforeMount = (instance, refs) => {
  for (let name in instance.$refs) {
    if (Object.prototype.hasOwnProperty.call(instance.$refs, name)) {
      refs[name] = instance.$refs[name]
    }
  }
}

export const mergeClass = (...cssClasses) => twMerge(stringifyCssClass(cssClasses))
const setup = ({ props, renderless, api, extendOptions = {}, classes = {}, constants, vm, $bus }) => {
  const render = typeof props.tiny_renderless === 'function' ? props.tiny_renderless : renderless
  const parent = props.parentProps || {}
  vm.$parent = vm.$parent?.$emit ? vm.$parent : parent
  const { dispatch, broadcast } = emitEvent(vm)

  const defineInstanceProperties = (props) => {
    Object.defineProperties(vm, props)
  }
  const utils = {
    vm,
    parent,
    emit: vm.$emit,
    constants,
    nextTick,
    dispatch,
    broadcast,
    t,
    mergeClass,
    mode: props.tiny_mode,
    emitter,
    refs: {},
    router: vm.$router,
    d: defineInstanceProperties,
    $bus
  }
  props.modelValue = props['v-model'] || props.modelValue
  // 实现v-model双向数据绑定
  watch(
    () => props['v-model'],
    (val) => (props.modelValue = val)
  )
  watch(
    () => props.modelValue,
    (val) => {
      if (props['v-model'] !== val) props['v-model'] = val
      vm.$emit('onChange', val)
    }
  )

  const vueHooks = generateVueHooks({ $bus })
  vueHooks.onMounted(() => {
    onBeforeMount(vm, utils.refs)
  })
  const sdk = render(
    props,
    {
      ...vueHooks
    },
    utils,
    extendOptions
  )
  if (props.children) {
    const children = hanldeChildren(props, props.children, sdk, vm, $bus)
    props.children = null
    props.children = children
  }
  const attrs = {
    a: filterAttrs,
    m: mergeClass,
    d: utils.d,
    vm: utils.vm,
    gcls: (key) => getElementCssClass(classes, key),
    provide: vueHooks.provide,
    inject: vueHooks.inject,
    children: props.children
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
const hanldeChildren = (props, children, sdk, vm, $bus) => {
  if (Array.isArray(children)) {
    let newChildren = children.map((child) => {
      return hanldeChildren(props, child, sdk, vm, $bus)
    })
    return newChildren
  }
  let newChildren: any = {}
  for (const key in children) {
    if (typeof children[key] === 'object') newChildren[key] = { ...children[key] }
    else {
      newChildren[key] = children[key]
    }
    if (key === 'props') {
      newChildren[key] = { parentProps: { ...props, children: null }, ...newChildren[key] }
    }
  }
  if (!newChildren.props) newChildren.props = { parentProps: {} }
  for (const key in sdk) {
    newChildren.props.parentProps[key] = sdk[key]
  }
  Object.assign(newChildren.props.parentProps, vm, $bus)
  return newChildren
}
export const useSetup = ({
  props,
  renderless,
  api,
  extendOptions = {},
  classes = {},
  constants,
  chartHandler,
  doms,
  chartLib,
  ref,
  prepareBoxplotData,
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
  useExcuteOnce(() => {
    $bus.on('hook:onBeforeUnmount', () => scope.stop())
  })

  // 创建响应式 props，每次刷新更新响应式 props
  const reactiveProps = useOnceResult(() => reactive(props))
  Object.assign(reactiveProps, props)
  const { vm } = useCreateVueInstance({
    $bus,
    props,
    doms,
    ref
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
        $bus,
        parent
      })
    })
    return result
  })
  // 触发生命周期
  useVueLifeHooks($bus)
  vm.chartHandler = chartHandler
  chartLib && (vm.chartLib = chartLib)
  prepareBoxplotData && (vm.prepareBoxplotData = prepareBoxplotData)
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

export { Svg, If, Component, Slot, For, Transition, vc, emitEvent, useVm, useFiber, useReactive }
export const parseVnode = (vnode) => vnode

export * from './vue-hooks.js'
export * from './vue-props.js'
export * from './render-stack.js'
export * from './vue-instance.js'
export * from './hooks'
