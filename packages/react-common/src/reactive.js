import { useState, useRef } from 'react'

// 响应式核心
const reactiveMap = new WeakMap()
const reactive = (
  staticObject,
  handler = {},
  path = [],
  rootStaticObject = staticObject
) => {
  reactiveMap.has(staticObject) || reactiveMap.set(staticObject, new Proxy(staticObject, {
    get(
      target,
      property,
      receiver
    ) {
      const targetVal = target[property]
      const _path = [...path, property]
      const res = typeof targetVal === 'object'
        ? reactive(targetVal, handler, _path, rootStaticObject)
        : targetVal

      // 监听访问
      handler.get && handler.get({
        result: res,
        root: rootStaticObject,
        path: _path,
        target,
        property,
        receiver
      })

      if (typeof targetVal === 'object') {
        return reactive(targetVal, handler, path, rootStaticObject)
      }
      return targetVal
    },
    set(
      target,
      property,
      value,
      receiver
    ) {
      const _path = [...path, property]

      // 监听修改
      handler.set && handler.set({
        target,
        property,
        receiver,
        root: rootStaticObject,
        path: _path,
        newVal: value,
        oldVal: target[property]
      })

      target[property] = value
      return true
    }
  }))

  return reactiveMap.get(staticObject)
}

const useReload = () => {
  const setReload = useState(false)[1]
  return () => setReload(pre => !pre)
}

const isObject = (val) => val !== null && typeof val === 'object'

// 用于从 hooks 链表中查找 reactive 生成的 state
export function Reactive(obj) {
  Object.keys(obj).forEach(key => {
    this[key] = obj[key]
  })
}

export const useReactive = (initalObject) => {
  if (!isObject(initalObject)) {
    return initalObject
  }
  const memoried = useRef()
  const proxy = useRef()
  const reload = useReload()
  // 只调用一次
  if (!memoried.current && !proxy.current) {
    memoried.current = new Reactive(initalObject)
    proxy.current = reactive(memoried.current, {
      set() {
        reload()
      }
    })
  }
  return proxy.current
}
