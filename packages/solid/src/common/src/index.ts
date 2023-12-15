import * as hooks from 'solid-js'
import { createSignal, onCleanup, createMemo } from 'solid-js'
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

export const useSetState = (initialState) => {
  const [state, setState] = createSignal(initialState, { equals: false })

  return [state, setState]
}

// props 应该不用做处理， props 都是 . 访问。
export const reactive = (staticObject) => {
  const [state, setState] = useSetState(staticObject)

  return new Proxy(state(), {
    get(target, property) {
      if (property === 'solidState') {
        return state
      }
      if (typeof target[property] === 'function') {
        return target[property](target)
      } else {
        return target[property]
      }
    },
    set(target, property, value) {
      Reflect.set(target, property, value)
      setState((val) => val)
      return true
    }
  })
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

const computed = (callback) => {
  try {
    return createMemo(callback)
  } catch (error) {
    return []
  }
}

export const useSetup = ({ props, renderless, extendOptions = { framework: 'Solid' } }) => {
  const render = typeof props.tiny_renderless === 'function' ? props.tiny_renderless : renderless
  const utils = {
    parent: {},
    emit: emit(props)
  }
  const sdk = render(
    props,
    { ...hooks, reactive, computed, useNextTick, inject: () => {}, watch: () => {}, onBeforeUnmount: onCleanup },
    utils,
    extendOptions
  )

  return {
    ...sdk,
    state: sdk.state.solidState,
    type: props.type ?? 'default'
  }
}
