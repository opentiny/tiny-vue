import {
  useState,
  useCallback,
  useEffect
} from 'react'
import * as hooks from 'react'
import SvgRender from './SvgRender'
import '@opentiny/vue-theme/base/index.less'

export const emit = (props) => (evName, ...args) => {
  if (props[evName] && typeof props[evName] === 'function') {
    props[evName](...args)
  }
}

export const useSetState = (
  initialState
) => {
  const [state, setState] = useState(initialState)

  const setMergeState = useCallback((patch) => {
    setState((prevState) => { // 参数取之前的对象，用 展开运算符合并 新旧属性
      const newState = typeof patch === 'function' ? patch(prevState) : patch
      return newState ? { ...prevState, ...newState } : prevState
    })
  }, [])

  return [state, setMergeState]
}

// props 应该不用做处理， props 都是 . 访问。
export const useReactive = (staticObject) => {
  const [state, setMergeState] = useSetState(staticObject)

  return new Proxy(state, {
    get(
      target,
      property,
    ) {
      if (typeof target[property] === 'function') {
        // 模拟 computed
        return target[property](target)
      }
      else {
        return target[property]
      }
    },
    set(
      target,
      property,
      value
    ) {
      setMergeState({
        [property]: value
      })
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

export const useSetup = ({
  props,
  // context,
  renderless,
  // api,
  extendOptions = {},
  // mono = false,
  // classes = {}
}) => {
  const render = typeof props.tiny_renderless === 'function' ? props.tiny_renderless : renderless
  const utils = {
    parent: {},
    emit: emit(props)
  }
  const sdk = render(
    props,
    { ...hooks, useReactive, useNextTick },
    utils,
    extendOptions
  )
  return {
    ...sdk,
    type: props.type ?? 'default'
  }
}

// react-svg 组件
export const Svg = ({ name = 'Icon', component }) => {
  return (
    props
  ) => {
    return SvgRender(component, props)
  }
}
