import Vue from 'vue'
import * as compositionHooks from '@vue/composition-api'
import * as vueHooks from 'vue'
import { bindFilter, emitter, getElementCssClass, getElementStatusClass } from '../utils'
import teleport from '../teleport'

// vue2.7有version字段
const isVueHooks = Boolean(Vue.version?.includes('2.7'))

const hooks = isVueHooks ? vueHooks : compositionHooks

const Teleport = teleport(hooks)

export { emitter, bindFilter, getElementCssClass, getElementStatusClass, Teleport }

// 只有在vue的版本小于2.7并且composition-api没有注册的情况下才去注册hooks
if (!hooks.default['__composition_api_installed__'] && !isVueHooks) {
  Vue.use(hooks.default)
}

export const defineAsyncComponent = ({ loader, loadingComponent, errorComponent, delay, timeout }) => {
  return () => ({
    component: loader(),
    loading: loadingComponent,
    error: errorComponent,
    delay,
    timeout
  })
}

export const markRaw = (ref) => ref

export const renderComponent = ({
  view = null as any,
  component = null as any,
  props,
  context: { attrs, listeners: on, slots },
  extend = {}
}) => {
  return () =>
    hooks.h(
      (view && view.value) || component,
      Object.assign({ props, attrs, [extend.isSvg ? 'nativeOn' : 'on']: on, scopedSlots: { ...slots } }, extend)
    )
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

      if (name === componentName) child.$emit(eventName, params)
      else broadcast(child, componentName, eventName, params)
    })
  }

  return {
    dispatch(componentName, eventName, params) {
      let parent = vm.$parent || vm.$root
      let name = parent.$options.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) name = parent.$options.componentName
      }

      if (parent) parent.$emit(...[eventName].concat(params))
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

  if (typeof handler !== 'function') return parent ? parentObject(parent) : {}

  level++

  while (parent) {
    if (handler(parentObject(parent))) break

    parent = parent.$parent
    level++
  }
}

const children = (vm) => (handler) => {
  if (typeof handler !== 'function') return generateChildren(vm.$children)

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
    )
      return

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
  for (const name in instance) {
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
  return function (...args) {
    emit.apply(context, args)

    // vue3 下 emit('update:modelValue') 会同时触发 input 事件，vue2 不会
    if (args[0] === 'update:modelValue') emit.apply(context, ['input'].concat(args.slice(1)))
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
  Object.keys(instance.$refs).forEach((key) => {
    refs[key] = instance.$refs[key]
  })
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

  if (vueHooks) {
    hooks.onMounted(() => onBeforeMount(instance, refs))
  }

  return {
    framework: 'vue2',
    vm,
    emit: customEmit(context, emit),
    emitter,
    route,
    router,
    dispatch,
    broadcast,
    parentHandler,
    childrenHandler,
    // 因为vue2.6版本context.refs是有值的，但是vue2.7版本是undefined所以这里需要做个兼容
    refs: vueHooks ? refs : context.refs,
    i18n,
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
  for (const name in directives) {
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

  for (const name in data) bindVnodeData({ props, data, name })

  vnode.props = props
  vnode.type = { name: vnode.componentOptions && vnode.componentOptions.tag }

  return vnode
}

export const isEmptyVnode = (vnode) => !vnode || !vnode.tag

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

export type {
  PropType,
  ExtractPropTypes,
  ComponentPublicInstance,
  SetupContext,
  ComputedRef
} from '@vue/composition-api'

export type DefineComponent = typeof defineComponent
