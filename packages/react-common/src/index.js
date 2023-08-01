import * as hooks from 'react'
import SvgRender from './SvgRender'
import { filterAttrs } from './utils.ts'
import '@opentiny/vue-theme/base/index.less'

const {
  useState,
  useCallback
} = hooks

function findFiber(dom, ref, traverseUp = 0) {
  const key = Object.keys(dom).find((key) => {
    return (
      key.startsWith("__reactFiber$") || // react 17+
      key.startsWith("__reactInternalInstance$")
    ); // react <17
  });

  const domFiber = dom[key];
  if (domFiber == null) return null;

  // react <16
  if (domFiber._currentElement) {
    let compFiber = domFiber._currentElement._owner;
    for (let i = 0; i < traverseUp; i++) {
      compFiber = compFiber._currentElement._owner;
    }
    return compFiber._instance;
  }

  // react 16+
  const getFibier = (fiber) => {
    let parentFiber = fiber.return;
    while (typeof parentFiber.type == "string") {
      parentFiber = parentFiber.return;
    }
    return parentFiber;
  };
  let compFiber = getFibier(domFiber);
  for (let i = 0; i < traverseUp; i++) {
    if (Object.is(compFiber.child.ref, ref)){
      return getFibier(compFiber);
    }
    compFiber = getFibier(compFiber);
  }
  return compFiber;
}

export const useParent = () => {
  const ref = hooks.useRef();
  const [parent, setParent] = hooks.useState();
  hooks.useEffect(() => {
    if (ref.current) {
      let node = findFiber(ref.current, ref, 1);
      setParent(node);
    }
  }, []);

  return { ref, parent };
}

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

  // todo: 考虑 vue 对某些操作的封装，如 array.push
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
export const nextTick = (callback) => {
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
  api,
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
    { ...hooks, useReactive, nextTick },
    utils,
    extendOptions
  )
  const attrs = {
    a: filterAttrs
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

// react-svg 组件
export const Svg = ({ name = 'Icon', component }) => {
  return (
    props
  ) => {
    return SvgRender(component, props)
  }
}
