import * as hooks from 'solid-js'
import { onCleanup, onMount, createResource, createEffect, on, mergeProps } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { TransitionGroup, Transition } from 'solid-transition-group'
import '@opentiny/vue-theme/base/index.less'

const EVENTS_PREFIX = 'on'

// 处理solid事件触发机制
export const emit =
  (props) =>
    (evName, ...args) => {
      const eventsName = `${EVENTS_PREFIX}${evName[0].toLocaleUpperCase()}${evName.slice(1)}`
      if (props[eventsName] && typeof props[eventsName] === 'function') {
        props[eventsName](...args)
      }
    }

// nextTick， 等待 dom 更新后触发回调
export const useNextTick = (callback) => {
  queueMicrotask(callback)
}

// emitEvent, dispath, broadcast
export const emitEvent = () => {
  const broadcast = () => {
    return ''
  }

  return {
    dispatch: () => {
      return ''
    },
    broadcast
  }
}

const watch = (valueFn, callback, options) => {
  createEffect(on(valueFn, callback, { defer: !options.immediate }))
}

export const t = (str) => str

const reactive = (state) => {
  const proxy = createMutable(state)
  // 暂时解决嵌套computed导致禁用问题，后期再完善
  if (proxy.formDisabled) {
    proxy.formDisabled = false
  }

  if (proxy.disabled) {
    proxy.disabled = false
  }

  return proxy
}

export const useSetup = ({ props, renderless, extendOptions = { framework: 'Solid' }, constants }) => {
  const render = typeof props.tiny_renderless === 'function' ? props.tiny_renderless : renderless
  const utils = {
    parent: {},
    emit: emit(props),
    constants,
    nextTick: useNextTick,
    t,
    mode: 'pc'
  }
  const sdk = render(
    props,
    {
      ...hooks,
      reactive,
      computed: (callback) => {
        const [computedValue, { mutate }] = createResource(() => {
          return Promise.resolve().then(() => {
            return callback()
          })
        })

        Promise.resolve().then(() => {
          createEffect(() => {
            mutate(callback())
          })
        })

        return computedValue
      },
      inject: () => { },
      watch,
      watchEffect: createEffect,
      onMounted: onMount,
      onBeforeUnmount: onCleanup
    },
    utils,
    extendOptions
  )

  return {
    ...sdk,
    type: props.type ?? 'default'
  }
}

export const getType = (str, type = 'object') => {
  return (
    {
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Boolean]': 'boolean',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Array]': 'array',
      '[object Arguments]': 'arguments',
      '[object Function]': 'function',
      '[object Error]': 'error',
      '[object Date]': 'date',
      '[object RegExp]': 'regexp',
      '[object Object]': 'object'
    }[Object.prototype.toString.call(str)] === type
  )
}

export const getClassList = (cls) => {
  if (getType(cls)) {
    return cls
  }

  if (Array.isArray(cls)) {
    const classList = {}

    cls.forEach((cls) => {
      if (!cls) return
      if (typeof cls === 'string') {
        classList[cls] = true
      } else if (typeof cls === 'object') {
        if (Array.isArray(cls)) {
          Object.assign(classList, getClassList(cls))
        } else {
          Object.assign(classList, cls)
        }
      }
    })

    return classList
  }

  return {
    [cls]: true
  }
}

export const capitalize = function (str) {
  return typeof str === 'string' ? str.slice(0, 1).toUpperCase() + str.slice(1) : str
}

export const capitalizeKebabCase = function (str, splitChar = '-') {
  return typeof str === 'string' ? str.split(splitChar).map(capitalize).join('') : str
}

export const resolveComponent = (component, useComponents) => {
  if (typeof component === 'string' && component.indexOf('icon-') === 0) {
    const componentName = capitalizeKebabCase(component)
    return useComponents[componentName] || componentName
  }
  return component
}

export const $prefix = 'Tiny'

export const withModifiers = function (event, eventCallback, keys) {
  if (typeof eventCallback === 'function') {
    eventCallback(event);
  }
}

export { mergeProps, TransitionGroup, Transition }
