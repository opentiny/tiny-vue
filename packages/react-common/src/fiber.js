import { useRef, useEffect, useState } from 'react'

function getFiberByDom(dom) {
  const key = Object.keys(dom).find((key) => {
    return (
      key.startsWith('__reactFiber$') || // react 17+
      key.startsWith('__reactInternalInstance$')
    ) // react <17
  })

  return dom[key]
}

function traverseFiber(fiber, breaker, handler) {
  if (!fiber) return
  typeof handler === 'function' && handler(fiber)
  if (typeof breaker !== 'function') {
    breaker = () => { }
  }
  traverseFiber(fiber.sibling, breaker, handler)
  breaker(fiber) || traverseFiber(fiber.child, breaker, handler)
}

function collectFiber(fiber, collector, mapper) {
  const collect = []
  traverseFiber(
    fiber,
    ({ type }) => typeof type !== 'string',
    (fiber) => {
      if (typeof collector === 'function' && collector(fiber)) {
        collect.push(fiber)
      }
    }
  )
  return typeof mapper === 'function'
    ? collect.map(mapper)
    : collect
}

function collectChildren(fiber) {
  return collectFiber(fiber, (fiber) => {
    return fiber.type && typeof fiber.type !== 'string'
  })
}

function collectRefs(fiber) {
  return collectFiber(
    fiber,
    (fiber) => {
      if (typeof fiber.type === 'string') {
        return fiber.stateNode.getAttribute('v_ref')
      }
      else {
        return fiber.memoizedProps.v_ref
      }
    },
    (fiber) => {
      if (typeof fiber.type === 'string') {
        return {
          [fiber.stateNode.getAttribute('v_ref')]: fiber.stateNode
        }
      }
      else {
        return {
          [fiber.memoizedProps.v_ref]: fiber
        }
      }
    }
  ).reduce((pre, cur) => {
    Object.assign(pre, cur)
    return pre
  }, {})
}

function getParentFiber(fiber, isFirst = true) {
  if (typeof fiber.type !== 'string' && !isFirst) return fiber
  return getParentFiber(fiber.return, false)
}

export function useFiber() {
  const ref = useRef()
  const [parent, setParent] = useState()
  const [current, setCurrent] = useState()
  useEffect(() => {
    if (ref.current) {
      const current_fiber = getFiberByDom(ref.current)
      setParent(
        getParentFiber(
          current_fiber.return
        )
      )
      setCurrent(current_fiber.return)
    }
  }, [])

  return {
    ref,
    parent: {
      fiber: parent,
      refs: parent && collectRefs(parent.child),
      children: parent && collectChildren(parent.child),
    },
    current: {
      fiber: current,
      refs: current && collectRefs(current.child),
      children: current && collectChildren(current.child),
    }
  }
}
