/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import Vue from 'vue'
import * as hooks from 'vue'

import type { } from 'vue-router' // https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1270716220
import { emitter, bindFilter, getElementCssClass, getElementStatusClass } from '../utils'
import teleport from '../teleport'

const Teleport = teleport(hooks)

export { emitter, bindFilter, getElementCssClass, getElementStatusClass, Teleport }

export const defineAsyncComponent = hooks.defineAsyncComponent

export const markRaw = (ref) => ref

export const renderComponent = ({ view = null as any, component = null as any, props, context: { attrs, listeners: on, slots }, extend = {} }) => {
  return () =>
    hooks.h((view && view.value) || component, Object.assign({ props, attrs, [extend.isSvg ? 'nativeOn' : 'on']: on, scopedSlots: { ...slots } }, extend))
}

export const rootConfig = () => hooks.getCurrentInstance()?.proxy.$root

export const getComponentName = () => {
  // 此处组件最多为两层组件，所以对多获取到父级组件即可
  const instance = hooks.getCurrentInstance()
  let componentName = instance?.vnode?.componentOptions?.Ctor?.extendOptions?.name
  if (!componentName) {
    componentName = instance?.parent?.vnode?.componentOptions?.Ctor?.extendOptions?.name
  }

  return componentName || ''
}

export const appContext = () => Vue

export const appProperties = () => Vue.prototype

export const useRouter = (instance = hooks.getCurrentInstance()?.proxy) => {
  return {
    route: instance?.$route,
    router: instance?.$router
  }
}

const emitEvent = (vm) => {
  const broadcast = (vm, componentName, eventName, params) => {
    vm.$children.forEach((child) => {
      const name = child.$options.componentName

      if (name === componentName) {
        child.$emit(eventName, params)
      } else {
        broadcast(child, componentName, eventName, params)
      }
    })
  }

  return {
    dispatch(componentName, eventName, params) {
      let parent = vm.$parent || vm.$root
      let name = parent.$options.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast(vm, componentName, eventName, params)
    }
  }
}

const parent = (vm) => (handler) => {
  let parent = vm.$parent
  let level = 0

  const parentObject = (parent) => {
    return {
      level,
      vm: createVm({}, parent),
      el: parent.$el,
      options: parent.$options
    }
  }

  if (typeof handler !== 'function') {
    return parent ? parentObject(parent) : {}
  }

  level++

  while (parent) {
    if (handler(parentObject(parent))) break

    parent = parent.$parent
    level++
  }
}

const children = (vm) => (handler) => {
  if (typeof handler !== 'function') {
    return generateChildren(vm.$children)
  }

  let layer = 1

  const broadcast = ($children) => {
    const level = layer++

    if (
      $children.some((child) => {
        return handler({
          level,
          vm: createVm({}, child),
          el: child.$el,
          options: child.$options,
          isLevel1: level === 1
        })
      })
    ) {
      return
    }

    $children.forEach((child) => broadcast(child.$children))
  }

  broadcast(vm.$children)
}

const generateChildren = ($children) => {
  const children: any = []

  children.refs = {}

  $children.forEach((child) => {
    const vm = createVm({}, child)

    children.push(vm)
    child.$vnode.data.ref && (children.refs[child.$vnode.data.ref] = vm)
  })

  return children
}

const defineProperties = (vm, instance, filter) => {
  for (let name in instance) {
    if (typeof filter === 'function' && filter(name)) continue

    Object.defineProperty(vm, name, {
      configurable: true,
      enumerable: true,
      get: () => instance[name],
      set: (value) => (instance[name] = value)
    })
  }

  return vm
}

const filter = (name) => name.indexOf('$') === 0 || name.indexOf('_') === 0 || name === 'constructor'

const customEmit = (context, emit) => {
  return function () {
    const args = Array.prototype.slice.apply(arguments)

    emit.apply(context, args)

    // vue3 下 emit('update:modelValue') 会同时触发 input 事件，vue2 不会
    if (args[0] === 'update:modelValue') {
      emit.apply(context, ['input'].concat(args.slice(1)))
    }
  }
}

const createVm = (vm, instance, context = undefined) => {
  context || defineProperties(vm, instance, filter)

  Object.defineProperties(vm, {
    $attrs: { get: () => instance.$attrs },
    $children: { get: () => generateChildren(instance.$children) },
    $constants: { get: () => instance._constants },
    $emit: { get: () => customEmit(instance, instance.$emit) },
    $el: { get: () => instance.$el },
    $listeners: { get: () => instance.$listeners },
    $mode: { get: () => instance._tiny_mode },
    $nextTick: { get: () => hooks.nextTick },
    $off: { get: () => instance.$off.bind(instance) },
    $on: { get: () => instance.$on.bind(instance) },
    $once: { get: () => instance.$once.bind(instance) },
    $options: {
      get: () => ({ componentName: instance.$options.componentName })
    },
    $parent: { get: () => instance.$parent && createVm({}, instance.$parent) },
    $refs: { get: () => instance.$refs },
    $renderless: { get: () => instance.tiny_renderless },
    $scopedSlots: { get: () => instance.$scopedSlots },
    $set: { get: () => instance.$set },
    $slots: { get: () => instance.$scopedSlots },
    $template: { get: () => instance.tiny_template }
  })

  return vm
}

const onBeforeMount = (instance, refs) => {
  for (let name in instance.refs) {
    if (Object.prototype.hasOwnProperty.call(instance.refs, name)) {
      refs[name] = instance.refs[name]
    }
  }
}

export const tools = (context, mode) => {
  const instance = hooks.getCurrentInstance()?.proxy as any
  const root = instance?.$root
  const { route, router } = useRouter(instance)
  const i18n = root?.$i18n
  const { dispatch, broadcast } = emitEvent(instance)
  const parentHandler = parent(instance)
  const childrenHandler = children(instance)
  const vm = createVm({}, instance, context)
  const emit = context.emit
  const refs = {}
  const parentVm = instance.$parent ? createVm({}, instance.$parent) : null

  const setParentAttribute = ({ name, value }) => {
    instance.$parent[name] = value
    parentVm[name] = value
  }

  const defineInstanceProperties = (props) => {
    Object.defineProperties(vm, props)
    Object.defineProperties(instance, props)
  }

  const defineParentInstanceProperties = (props) => {
    parentVm && Object.defineProperties(parentVm, props)
  }

  hooks.onBeforeMount(() => defineProperties(vm, instance, filter))
  hooks.onMounted(() => onBeforeMount(instance, refs))

  return {
    vm,
    emit: customEmit(context, emit),
    emitter,
    route,
    router,
    dispatch,
    broadcast,
    parentHandler,
    childrenHandler,
    i18n,
    refs,
    slots: context.slots,
    scopedSlots: context.slots,
    attrs: context.attrs,
    parent: parentVm,
    nextTick: hooks.nextTick,
    constants: instance?._constants,
    mode,
    isPCMode: mode === 'pc',
    isMobileMode: mode === 'mobile',
    service: instance?.$service,
    getService: () => instance?.$getService(vm),
    setParentAttribute,
    defineInstanceProperties,
    defineParentInstanceProperties
  }
}

const mapping = (content, before, after) => {
  if (typeof content[before] !== 'undefined') {
    const fn = content[before]

    content[after] = (el, binding, vnode) => {
      binding.instance = vnode.context
      fn(el, binding, vnode)
    }

    delete content[before]
  }
}

export const directive = (directives) => {
  for (let name in directives) {
    const content = directives[name]

    mapping(content, 'beforeMount', 'bind')
    mapping(content, 'updated', 'update')
    mapping(content, 'unmounted', 'unbind')
  }

  return directives
}

const bindVnodeData = ({ props, data, name, attr = name }) => {
  Object.defineProperty(props, attr, {
    get: () => data[name],
    set: (value) => (data[name] = value)
  })
}

export const parseVnode = (vnode) => {
  const props = {}
  const data = (vnode.componentOptions && vnode.componentOptions.propsData) || {}

  for (let name in data) {
    bindVnodeData({ props, data, name })
  }

  vnode.props = props
  vnode.type = { name: vnode.componentOptions && vnode.componentOptions.tag }

  return vnode
}

export const h = hooks.h

export const createComponentFn = (design) => {
  return ({ component, propsData, el }) => {
    const comp = Object.assign(component, { provide: { [design.configKey]: design.configInstance } })
    return new (Vue.extend(comp))({ propsData, el }).$mount()
  }
}

export const defineComponent = hooks.defineComponent

export default hooks

export const isVue2 = true

export const isVue3 = false

export type { PropType, ExtractPropTypes, DefineComponent } from 'vue'
