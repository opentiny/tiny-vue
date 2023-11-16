import { useRef, useEffect, useState } from 'react'
import { compWhiteList } from './virtual-comp'

function getFiberByDom(dom) {
  const key = Object.keys(dom).find((key) => {
    return (
      key.startsWith('__reactFiber$') || // react 17+
      key.startsWith('__reactInternalInstance$')
    ) // react <17
  })

  return dom[key]
}

function defaultBreaker({ type }) {
  if (type && typeof type !== 'string') {
    return !compWhiteList.includes(type.name)
  }
}

function traverseFiber(fiber, handler, breaker = defaultBreaker) {
  if (!fiber) return
  typeof handler === 'function' && handler(fiber)
  Array.isArray(handler) && handler.forEach(task => {
    typeof task === 'function' && task(fiber)
  })
  traverseFiber(fiber.sibling, handler, breaker)
  breaker(fiber) || traverseFiber(fiber.child, handler, breaker)
}

const parentMap = new WeakMap()
export function getParentFiber(fiber, isFirst = true, child = fiber) {
  if (!fiber || !fiber.return) return null
  if (parentMap.has(child)) return parentMap.get(child)
  if (fiber.type && typeof fiber.type !== 'string' && !isFirst) {
    parentMap.set(child, fiber)
    return fiber
  }
  return getParentFiber(fiber.return, false, fiber)
}

export function creatFiberCombine(fiber) {
  if(!fiber) return 
  const refs = {};
  const children = [];

  traverseFiber(fiber.child, [
    (fiber) => {
      if (typeof fiber.type === 'string' && fiber.stateNode.getAttribute('v_ref')) {
        refs[fiber.stateNode.getAttribute('v_ref')] = fiber.stateNode;
      }
      else if (fiber.memoizedProps.v_ref) {
        refs[fiber.memoizedProps.v_ref] = fiber;
      }
    },
    (fiber) => {
      if (fiber.type && typeof fiber.type !== 'string') {
        children.push(fiber);
      }
    }
  ])

  return {
    fiber,
    refs,
    children
  }
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
    parent: creatFiberCombine(parent),
    current: creatFiberCombine(current)
  }
}
