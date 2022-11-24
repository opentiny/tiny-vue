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
import * as hooks from '@vue/composition-api'
import { emitter, bindFilter } from './utils'

export { emitter, bindFilter }

Vue.use(hooks.default)

export const defineAsyncComponent = (promise) => promise

export const markRaw = (ref) => ref

export const renderComponent =
  ({ view, component, props, context: { attrs, listeners: on, slots }, extend = {} }) =>
  () =>
    hooks.h((view && view.value) || component, { props, attrs, on, scopedSlots: { ...slots }, ...extend })

export const rootConfig = () => hooks.getCurrentInstance().proxy.$root

export const appContext = () => Vue

export const appProperties = () => Vue.prototype

export const useRouter = (instance = hooks.getCurrentInstance().proxy) => ({
  route: instance.$route,
  router: instance.$router
})

const defineProperties = (vm, instance, filter) => {
  for (let name in instance) {
    if (!(typeof filter === 'function' && filter(name))) {
      Object.defineProperty(vm, name, {
        configurable: true,
        enumerable: true,
        get: () => instance[name],
        set: (value) => {
          instance[name] = value
        }
      })
    }
  }

  return vm
}

const filter = (name) => name.indexOf('$') === 0 || name.indexOf('_') === 0 || name === 'constructor'

const generateChildren = ($children, createVm) => {
  const children = []
  children.refs = {}

  $children.forEach((child) => {
    const vm = createVm({}, child)

    children.push(vm)
    child.$vnode.data.ref && (children.refs[child.$vnode.data.ref] = vm)
  })

  return children
}

const createVm = (vm, instance, context) => {
  context || defineProperties(vm, instance, filter)

  Object.defineProperties(vm, {
    $attrs: { get: () => instance.$attrs },
    $children: { get: () => generateChildren(instance.$children, createVm) },
    $constants: { get: () => instance._constants },
    $emit: { get: () => instance.$emit.bind(instance) },
    $el: { get: () => instance.$el },
    $listeners: { get: () => instance.$listeners },
    $mode: { get: () => instance.tiny_mode },
    $nextTick: { get: () => hooks.nextTick },
    $off: { get: () => instance.$off.bind(instance) },
    $on: { get: () => instance.$on.bind(instance) },
    $once: { get: () => instance.$once.bind(instance) },
    $options: { get: () => ({ componentName: instance.$options.componentName }) },
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

        parent && (name = parent.$options.componentName)
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

  const parentObject = (parent) => ({
    level,
    vm: createVm({}, parent),
    el: parent.$el,
    options: parent.$options
  })

  if (typeof handler !== 'function') {
    return parent ? parentObject(parent) : {}
  }

  level++

  while (parent) {
    if (handler(parentObject(parent))) {
      break
    }

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
      $children.some((child) =>
        handler({
          level,
          vm: createVm({}, child),
          el: child.$el,
          options: child.$options,
          isLevel1: level === 1
        })
      )
    ) {
      return
    }

    $children.forEach((child) => broadcast(child.$children))
  }

  broadcast(vm.$children)
}

const getMode = (instance, parentVm, root) => instance._props.tiny_mode || (parentVm || {}).$mode || (root.tiny_mode ? root.tiny_mode.value : 'pc')

export const tools = (context) => {
  const instance = hooks.getCurrentInstance().proxy
  const root = instance.$root
  const { route, router } = useRouter(instance)
  const i18n = root.$i18n
  const { dispatch, broadcast } = emitEvent(instance)
  const parentHandler = parent(instance)
  const childrenHandler = children(instance)
  const vm = createVm({}, instance, context)
  const parentVm = instance.$parent ? createVm({}, instance.$parent) : null
  const setParentAttribute = ({ name, value }) => {
    instance.$parent[name] = value
  }
  const defineInstanceProperties = (props) => {
    Object.defineProperties(vm, props)
    Object.defineProperties(instance, props)
  }
  const defineParentInstanceProperties = (props) => {
    parentVm && Object.defineProperties(parentVm, props)
  }
  hooks.onBeforeMount(() => defineProperties(vm, instance, filter))
  return {
    vm,
    emit: context.emit,
    emitter,
    route,
    router,
    dispatch,
    broadcast,
    parentHandler,
    childrenHandler,
    refs: context.refs,
    i18n,
    slots: context.slots,
    scopedSlots: context.slots,
    attrs: context.attrs,
    parent: parentVm,
    nextTick: hooks.nextTick,
    constants: instance._constants,
    mode: getMode(instance, parentVm, root),
    service: instance.$service,
    getService: () => instance.$getService(vm),
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
    if (Object.prototype.hasOwnProperty.call(directives, name)) {
      const content = directives[name]

      mapping(content, 'beforeMount', 'bind')
      mapping(content, 'updated', 'update')
      mapping(content, 'unmounted', 'unbind')
    }
  }

  return directives
}

const bindVnodeData = ({ props, data, name, attr = name }) => {
  Object.defineProperty(props, attr, {
    get: () => data[name],
    set: (value) => {
      data[name] = value
    }
  })
}

export const parseVnode = (vnode) => {
  const props = {}
  const data = (vnode.componentOptions && vnode.componentOptions.propsData) || {}

  for (let name in data) {
    if (Object.prototype.hasOwnProperty.call(data, name)) {
      bindVnodeData({ props, data, name })
    }
  }

  vnode.props = props
  vnode.type = { name: vnode.componentOptions && vnode.componentOptions.tag }

  return vnode
}

export const h = hooks.h

export const createComponent = ({ component, propsData, el }) => new (Vue.extend(component))({ propsData, el }).$mount()

export default hooks
