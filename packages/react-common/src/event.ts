import { eventBus } from './utils'

const $busMap = new Map()

export const emit = (props) => (evName, ...args) => {
  const reactEvName = 'on'
    + evName.substr(0, 1).toUpperCase()
    + evName.substr(1)

  if (props[reactEvName] && typeof props[reactEvName] === 'function') {
    props[reactEvName](...args)
  }
  else {
    const $bus = $busMap.get(props)
    if ($bus) {
      $bus.emit(evName, ...args)
    }
  }
}
export const on = (props) => (evName, callback) => {
  if ($busMap.get(props)) {
    const $bus = $busMap.get(props)
    $bus.on(evName, callback)
  }
  else {
    const $bus = eventBus()
    $bus.on(evName, callback)
    $busMap.set(props, $bus)
  }
}
export const off = (props) => (evName, callback) => {
  const $bus = $busMap.get(props)
  if (!$bus) return
  $bus.off(evName, callback)
}
export const once = (props) => (evName, callback) => {
  let $bus = null
  const onceCallback = (...args) => {
    callback(...args)
    $bus && $bus.off(evName, onceCallback)
  }

  if ($busMap.get(props)) {
    $bus = $busMap.get(props)
    $bus.on(evName, onceCallback)
  }
  else {
    $bus = eventBus()
    $bus.on(evName, onceCallback)
    $busMap.set(props, $bus)
  }
}
export const emitEvent = (vm) => {
  const broadcast = (vm, componentName, eventName, ...args) => {
    const children = vm.$children

    Array.isArray(children)
      && children.forEach((child) => {
        const name = child.$options && child.$options.componentName
        const component = child

        if (name === componentName) {
          component.emit(eventName, ...args)
          // todo: 调研 component.$emitter
          // component.$emitter && component.$emitter.emit(eventName, params)
        }
        else {
          broadcast(child, componentName, eventName, ...args)
        }
      })
  }

  return {
    dispatch(componentName, eventName, ...args) {
      let parent = vm.$parent
      if (parent.type === null) return
      let name = parent.$options && parent.$options.componentName
      while (parent && parent.type && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent)
          name = parent.$options && parent.$options.componentName
      }

      if (parent) {
        parent.emit(eventName, ...args)
        // fix: VUE3下事件参数为数组，VUE2下事件参数不是数组，这里修改为和VUE2兼容
        // parent.$emitter && parent.$emitter.emit(...[eventName].concat(params))
      }
    },
    broadcast(componentName, eventName, ...args) {
      broadcast(vm, componentName, eventName, ...args)
    }
  }
}
