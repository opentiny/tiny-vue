import { useFiber, getParentFiber, creatFiberCombine } from './fiber.js'
import { getEventByopeninulaProps, getAttrsByopeninulaProps } from './resolve-props.js'
import { Reactive } from './reactive'
import { emit, on, off, once } from './event'

const vmProxy = {
  $parent: ({ fiber }) => {
    const parentFiber = getParentFiber(fiber)
    if (!parentFiber) return null
    return createVmProxy(creatFiberCombine(parentFiber))
  },
  $el: ({ fiber }) => fiber.child?.stateNode,
  $refs: ({ refs, fiber }) => createRefsProxy(refs, fiber.constructor),
  $children: ({ children }) => children.map((fiber) => createVmProxy(creatFiberCombine(getParentFiber(fiber)))),
  $listeners: ({ fiber }) => getEventByopeninulaProps(fiber.memoizedProps),
  $attrs: ({ fiber }) => getAttrsByopeninulaProps(fiber.memoizedProps),
  $slots: ({ fiber }) => fiber.memoizedProps.slots,
  $scopedSlots: ({ fiber }) => fiber.memoizedProps.slots,
  $options: ({ fiber }) => ({ componentName: fiber.type.name }),
  $constants: ({ fiber }) => fiber.memoizedProps._constants,
  $template: ({ fiber }) => fiber.memoizedProps.tiny_template,
  $renderless: ({ fiber }) => fiber.memoizedProps.tiny_renderless,
  $mode: () => 'pc',
  state: ({ fiber }) => findStateInHooks(fiber.memoizedState),
  $type: ({ fiber }) => fiber.type,
  $service: (_, vm) => vm.state?.$service,
  $emit: ({ fiber }) => emit(fiber.memoizedProps),
  $on: ({ fiber }) => on(fiber.memoizedProps),
  $once: ({ fiber }) => once(fiber.memoizedProps),
  $off: ({ fiber }) => off(fiber.memoizedProps),
  $set: () => (target, propName, value) => (target[propName] = value)
}

const vmProxyMap = new WeakMap()
function createVmProxy(fiberCombine) {
  if (!vmProxyMap.has(fiberCombine)) {
    vmProxyMap.set(
      fiberCombine,
      new Proxy(fiberCombine, {
        get(target, property, receiver) {
          if (!vmProxy[property]) {
            return target.fiber.memoizedProps[property]
          }
          return vmProxy[property](target, receiver)
        },
        set() {
          return true
        }
      })
    )
  }
  return vmProxyMap.get(fiberCombine)
}

function createEmptyProxy() {
  return new Proxy(
    {},
    {
      get() {
        return undefined
      },
      set() {
        return true
      }
    }
  )
}

function createRefsProxy(refs, FiberNode) {
  return new Proxy(refs, {
    get(target, property) {
      if (target[property] instanceof FiberNode) {
        return createVmProxy(creatFiberCombine(target[property]))
      } else {
        return target[property]
      }
    }
  })
}

function findStateInHooks(hookStart) {
  let curHook = hookStart
  // find state from hooks chain by Constructor reactive
  while (curHook) {
    const refCurrent = curHook.memoizedState && curHook.memoizedState.current
    if (refCurrent instanceof Reactive) break
    curHook = curHook.next
  }
  return curHook && curHook.memoizedState && curHook.memoizedState.current
}

export function useVm() {
  const { ref, current, parent } = useFiber()
  if (!ref.current) {
    return {
      ref,
      current: createEmptyProxy(),
      parent: createEmptyProxy()
    }
  }
  return {
    ref,
    current: current && createVmProxy(current),
    parent: parent && createVmProxy(parent)
  }
}
