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
import * as hooks from 'vue'
import { capitalize, hyphenate, camelize } from '@opentiny/vue-renderless/common/string'
import { emitter, bindFilter } from './utils'

export { emitter, bindFilter }

export const defineAsyncComponent = hooks.defineAsyncComponent

export const markRaw = hooks.markRaw

const setInstanceEmitter = (instance) => {
  const $emitter = emitter()

  Object.defineProperty(instance, '$emitter', { get: () => $emitter })
}

const regEventPrefix = /^on[A-Z]/

const generateListeners = (attrs) => {
  const $attrs = {}
  const $listeners = {}

  for (let name in attrs) {
    if (Object.prototype.hasOwnProperty.call(attrs, name)) {
      const event = attrs[name]

      if (regEventPrefix.test(name) && typeof event === 'function') {
        $listeners[hyphenate(name.substr(2))] = event
      } else {
        $attrs[name] = event
      }
    }
  }

  return { $attrs, $listeners }
}

const defineProperties = (vm, instance, property, filter) => {
  for (let name in instance[property]) {
    if (!(typeof filter === 'function' && filter(name))) {
      Object.defineProperty(vm, name, {
        configurable: true,
        enumerable: true,
        get: () => instance[property][name],
        set: (value) => {
          instance[property][name] = value
        }
      })
    }
  }

  return vm
}

const filter = (name) => name.indexOf('_') === 0

const defineInstanceVm = (vm, instance) => {
  defineProperties(vm, instance, 'setupState')
  defineProperties(vm, instance, 'props', filter)
  defineProperties(vm, instance, 'ctx', filter)

  return vm
}

const generateChildren = (subTree, createVm) => {
  const children = []
  children.refs = {}

  if (subTree) {
    const arr = subTree.dynamicChildren || subTree.children

    if (Array.isArray(arr)) {
      arr.forEach((child) => {
        if (child.component) {
          const vm = createVm({}, child.component)

          children.push(vm)
          child.props.ref && (children.refs[child.props.ref] = vm)
        }
      })
    } else if (subTree.component) {
      children.push(createVm({}, subTree.component))
    }
  }

  return children
}

const getRealParent = (vm) => {
  if (vm && vm.parent) {
    return vm.parent.type.name === 'AsyncComponentWrapper' && vm.parent.parent ? vm.parent.parent : vm.parent
  }
}

const createVm = (vm, instance, context) => {
  const { $attrs, $listeners } = generateListeners(instance.attrs)
  let $emitter = instance.$emitter

  if (!$emitter) {
    setInstanceEmitter(instance)
    $emitter = instance.$emitter
  }

  const emit = (...args) => {
    instance.emit.apply(instance, args)
    $emitter.emit.apply(vm, args)
  }

  const $set = (target, propertyName, value) => (target[propertyName] = value)

  context || defineInstanceVm(vm, instance)

  Object.defineProperties(vm, {
    $attrs: { get: () => $attrs },
    $children: { get: () => generateChildren(instance.subTree, createVm) },
    $constants: { get: () => instance.props._constants },
    $emit: { get: () => emit },
    $el: { get: () => instance.vnode.el },
    $listeners: { get: () => $listeners },
    $mode: { get: () => instance.props.tiny_mode },
    $nextTick: { get: () => hooks.nextTick },
    $off: { get: () => $emitter.off },
    $on: { get: () => $emitter.on },
    $once: { get: () => $emitter.once },
    $options: { get: () => ({ componentName: instance.type.componentName }) },
    $parent: { get: () => instance.parent && createVm({}, getRealParent(instance)) },
    $refs: { get: () => instance.refs },
    $renderless: { get: () => instance.props.tiny_renderless },
    $scopedSlots: { get: () => instance.slots },
    $set: { get: () => $set },
    $slots: { get: () => instance.slots },
    $template: { get: () => instance.props.tiny_template }
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

export const renderComponent =
  ({ view, component, props, context: { attrs, slots }, extend = {} }) =>
  () =>
    hooks.h((view && view.value) || component, { ...props, ...attrs, ...extend }, slots)

export const rootConfig = (context) => {
  const instance = hooks.getCurrentInstance()
  context && setInstanceEmitter(instance)
  return instance.appContext.config.globalProperties
}

export const appContext = () =>
  hooks.getCurrentInstance().appContext.app || {
    component: () => {
      // do nothing
    }
  }

export const appProperties = () => hooks.getCurrentInstance().appContext.config.globalProperties

export const useRouter = (instance = hooks.getCurrentInstance()) => {
  const router = instance.appContext.config.globalProperties.$router
  const route = router && router.currentRoute.value

  return { route, router }
}

const emitEvent = (vm) => {
  const broadcast = (vm, componentName, eventName, params) => {
    const children = (vm.subTree && vm.subTree.children) || vm.children

    Array.isArray(children) &&
      children.forEach((child) => {
        const name = child.type && child.type.componentName
        const component = child.component

        if (name === componentName) {
          component.emit(eventName, params)
          component.$emitter && component.$emitter.emit(eventName, params)
        } else {
          broadcast(child, componentName, eventName, params)
        }
      })
  }

  return {
    dispatch(componentName, eventName, params) {
      let parent = vm.parent || vm.root
      let name = parent.type && parent.type.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.parent
        parent && (name = parent.type && parent.type.componentName)
      }

      if (parent) {
        parent.emit.apply(parent, [eventName].concat(params))
        parent.$emitter && parent.$emitter.emit(eventName, params)
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast(vm, componentName, eventName, params)
    }
  }
}

const parent = (vm) => (handler) => {
  let parent = getRealParent(vm)
  let level = 0

  const parentObject = (parent) => ({
    level,
    vm: createVm({}, parent),
    el: parent.vnode.el,
    options: parent.type
  })

  if (typeof handler !== 'function') {
    return parent ? parentObject(parent) : {}
  }

  level++

  while (parent) {
    if (handler(parentObject(parent))) {
      break
    }
    parent = getRealParent(parent)
    level++
  }
}

const children = (vm) => (handler) => {
  if (typeof handler !== 'function') {
    return generateChildren(vm.subTree)
  }

  let layer = 1
  const broadcast = (subTree) => {
    if (!subTree) {
      return
    }
    const children = subTree.children || subTree.dynamicChildren
    const level = layer++

    if (Array.isArray(children)) {
      if (
        children.some(
          (child) =>
            child.component &&
            handler({
              level,
              vm: createVm({}, child.component),
              el: child.el,
              options: child.type,
              isLevel1: true
            })
        )
      ) {
        return
      }
      children.forEach((child) => broadcast(child))
    }
  }

  broadcast(vm.subTree)
}

const getMode = (instance, parentVm, root) => instance.props.tiny_mode || (parentVm || {}).$mode || (root.tiny_mode ? root.tiny_mode.value : 'pc')

const getParentVm = (grandParent, instance) => (grandParent ? createVm({}, grandParent) : instance.parent ? createVm({}, instance.parent) : null)

const setParentAttribute =
  (grandParent, instance) =>
  ({ name, value }) => {
    const ctx = grandParent ? grandParent.ctx : instance.parent.ctx
    ctx[name] = value
  }

const defineInstanceProperties = (vm, instance) => (props) => {
  Object.defineProperties(vm, props)
  Object.defineProperties(instance.ctx, props)
}

const defineParentInstanceProperties = (parentVm) => (props) => {
  parentVm && Object.defineProperties(parentVm, props)
}

export const tools = (context) => {
  const instance = hooks.getCurrentInstance()
  const root = instance.appContext.config.globalProperties
  const { route, router } = useRouter(instance)
  const i18n = instance.proxy.$root.$i18n
  const { dispatch, broadcast } = emitEvent(instance)
  const parentHandler = parent(instance)
  const childrenHandler = children(instance)
  const vm = createVm({}, instance, context)
  const emit = context.emit
  const refs = {}
  const grandParent = !instance.props.tiny_template && getRealParent(instance)
  const parentVm = getParentVm(grandParent, instance)

  hooks.onBeforeMount(() => defineInstanceVm(vm, instance))
  hooks.onMounted(() => onBeforeMount(instance, refs))

  return {
    vm,
    emit,
    emitter,
    route,
    router,
    dispatch,
    broadcast,
    parentHandler,
    childrenHandler,
    refs,
    i18n,
    slots: instance.slots,
    scopedSlots: instance.slots,
    attrs: context.attrs,
    parent: parentVm,
    nextTick: hooks.nextTick,
    constants: instance.props._constants,
    mode: getMode(instance, parentVm, root),
    service: root.$service,
    getService: () => root.$getService(vm),
    setParentAttribute: setParentAttribute(grandParent, instance),
    defineInstanceProperties: defineInstanceProperties(vm, instance),
    defineParentInstanceProperties: defineParentInstanceProperties(parentVm)
  }
}

const mapping = (content, before, after) => {
  if (typeof content[before] !== 'undefined') {
    const fn = content[before]

    content[after] = (el, binding, vnode) => {
      vnode.context = binding.instance
      fn(el, binding, vnode)
    }

    delete content[before]
  }
}

export const directive = (directives) => {
  for (let name in directives) {
    if (Object.prototype.hasOwnProperty.call(directives, name)) {
      const content = directives[name]

      mapping(content, 'bind', 'beforeMount')
      mapping(content, 'update', 'updated')
      mapping(content, 'unbind', 'unmounted')
    }
  }

  return directives
}

export const parseVnode = (vnode) => vnode

const parseProps = (propsData) => {
  const props = {}

  for (let name in propsData) {
    if (name === 'class' || name === 'style') {
      props[name] = propsData[name]
    } else if (name === 'on' || name === 'nativeOn') {
      const events = propsData[name]

      for (let eventName in events) {
        if (Object.prototype.hasOwnProperty.call(events, eventName)) {
          props['on' + capitalize(camelize(eventName))] = events[eventName]
        }
      }
    } else if (name === 'attrs' || name === 'props' || name === 'domProps') {
      const attrs = propsData[name]

      for (let key in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, key)) {
          props[key] = attrs[key]
        }
      }
    } else {
      props[name] = propsData[name]
    }
  }

  return props
}

const customResolveComponent = (component) => {
  let type = component
  let customElement = false

  if (typeof component === 'string') {
    const el = document.createElement(component)
    const svgTagNames = ['SVG', 'CIRCLE', 'PATH']
    if ((el instanceof HTMLUnknownElement && svgTagNames.indexOf(el.nodeName) === -1) || component.indexOf('-') !== -1) {
      component = component.toLowerCase()
      customElement = true

      if (component === 'transition') {
        type = hooks.Transition
      } else if (component === 'transition-group') {
        type = hooks.TransitionGroup
      } else {
        type = hooks.resolveComponent(component)
      }
    } else {
      type = component
    }
  }

  return { type, component, customElement }
}

export const h = (component, propsData, childData) => {
  let props = {}
  let children = childData
  let ret = customResolveComponent(component)
  let customElement = ret.customElement
  let type = ret.type

  component = ret.component

  if (propsData && typeof propsData === 'object' && !Array.isArray(propsData)) {
    props = parseProps(propsData)
    propsData.scopedSlots && (children = propsData.scopedSlots)
  } else if (typeof propsData === 'string' || Array.isArray(propsData)) {
    childData = propsData
  }

  if (typeof childData === 'string' || Array.isArray(childData)) {
    children = typeof component !== 'string' || customElement ? () => childData : childData
  }

  return hooks.h(type, props, children)
}

export const createComponent = ({ component, propsData, el }) => {
  const vnode = hooks.createVNode(component, propsData)

  hooks.render(vnode, el)

  return createVm({}, vnode.component)
}

export default hooks
