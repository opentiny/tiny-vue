import { useExcuteOnce, useOnceResult } from './hooks'
import { reactive, nextTick, watch, computed } from '@vue/runtime-core'
import { getPropByPath } from './utils'
import { getParent, getRoot } from './render-stack'
import { getFiberByDom, traverseFiber } from './fiber'
import { useEffect } from 'react'

const collectRefs = (rootEl, dom, $children) => {
  const refs = {}
  if (!rootEl && !dom) return refs
  let rootFiber
  let domFiber

  rootEl && (rootFiber = getFiberByDom(rootEl))
  dom && (domFiber = getFiberByDom(dom))
  // 收集普通元素 ref
  traverseFiber(rootFiber, (fiber) => {
    if (typeof fiber.type === 'string' && fiber.stateNode.getAttribute('v-ref')) {
      refs[fiber.stateNode.getAttribute('v-ref')] = fiber.stateNode
    }
  })
  traverseFiber(domFiber, (fiber) => {
    if (
      typeof fiber.type === 'string' &&
      (fiber.stateNode.getAttribute('v-ref') || fiber.stateNode.getAttribute('id'))
    ) {
      refs[fiber.stateNode.getAttribute('v-ref') || fiber.stateNode.getAttribute('id')] = fiber.stateNode
    }
  })
  // 收集组件元素 ref
  $children.forEach((child) => {
    if (child.$props['v-ref']) {
      refs[child.$props['v-ref']] = child
    }
  })
  return refs
}

export function useCreateVueInstance({ $bus, props, dom, ref }) {
  const vm = useOnceResult(() =>
    reactive({
      $el: undefined,
      $options: props.$options || {},
      $props: props,
      $parent: getParent().vm || {},
      $root: getRoot().vm || {},
      $slots: props.slots,
      $scopedSlots: props.slots,
      $listeners: props.$listeners,
      $attrs: props.$attrs,
      // 通过 fiber 计算
      $children: [],
      $refs: computed(() => {
        return collectRefs(vm.$el, dom.current, vm.$children)
      }),
      // 方法
      $set: (target, property, value) => (target[property] = value),
      $delete: (target, property) => delete target[property],
      $watch: (expression, callback, options) => {
        if (typeof expression === 'string') {
          watch(() => getPropByPath(vm, expression), callback, options)
        } else if (typeof expression === 'function') {
          watch(expression, callback, options)
        }
      },
      $on: (event, callback) => $bus.on(event, callback),
      $once: (event, callback) => $bus.once(event, callback),
      $off: (event, callback) => $bus.off(event, callback),
      $emit: (type, ...args) => {
        if (props.listeners) {
          const callback = type in props.listeners ? props.listeners[type] : () => { }
          callback.apply(null, args)
        }
      },
      $forceUpdate: () => $bus.emit('event:reload'),
      $nextTick: nextTick,
      $destroy: () => { },
      $mount: () => { }
    })
  )

  useExcuteOnce(() => {
    const { $listeners } = props

    if ($listeners) {
      Object.keys($listeners).forEach((eventName) => {
        $bus.on(eventName, $listeners[eventName])
      })
    }

    // 给父的 $children 里 push 当前的 vm
    const parent = vm.$parent
    if (Array.isArray(parent.$children)) {
      parent.$children.push(vm)
    }
  })
  useEffect(() => {
    vm.$el = ref?.current
  }, [ref])
  return {
    ref,
    vm
  }
}
