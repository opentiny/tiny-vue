import { useRef } from 'react'
import { useReload } from './reactive'

function Create(target) {
  Object.keys(target).forEach(key => {
    this[key] = target[key]
  })
}
function Readonly(target) {
  Create.call(this, target)
}

const useDepChange = (dependencies) => {
  let isDepChange = false
  const pre_dep = useRef()
  if (!pre_dep.current) {
    isDepChange = true
  }
  else {
    for (let i in dependencies) {
      if (pre_dep.current[i] !== dependencies[i]) {
        isDepChange = true
        break
      }
    }
  }
  pre_dep.current = dependencies
  return isDepChange
}

export const nextTick = (callback) => {
  queueMicrotask(callback)
}

export const ref = (value) => {
  const reload = useReload()
  const proxy = useRef()
  if (!proxy.current) {
    proxy.current = new Proxy({
      value
    }, {
      get(target, property) {
        if (property !== 'value') return
        return target[property]
      },
      set(target, property, newVal) {
        if (property !== 'value') return true
        target[property] = newVal
        reload()
        return true
      }
    })
  }
  return proxy.current
}

export const computed = (getter, dependencies) => {
  if (typeof getter !== 'function') return
  const memoried = useRef()
  const isDepChange = useDepChange(dependencies)
  if (isDepChange) {
    memoried.current = getter()
  }
  return memoried.current
}

export const readonly = (target) => {
  const proxy = useRef()
  if (!proxy.current) {
    proxy.current = new Proxy(new Readonly(target), {
      get: (target, property) => target[property],
      set: () => true
    })
  }
  return proxy.current
}

export const watchEffect = (effect, dependencies, options) => {
  const cache = useRef()
  const isDepChange = useDepChange(dependencies)
  if (!cache.current) cache.current = { effect: true }
  const { flush } = options || { flust: 'pre' }
  const onCleanUp = (callback) => cache.current.clean = callback
  if (cache.current.effect && isDepChange) {
    const clean = cache.current.clean
    typeof clean === 'function' && clean()
    if (flush === 'pre') {
      effect(onCleanUp)
    }
    else if (flush === 'sync') {
      effect(onCleanUp)
    }
    else {
      nextTick(() => {
        effect(onCleanUp)
      })
    }
  }
  return () => cache.current.effect = false
}

export const watchPostEffect = (effect, dependencies) => watchEffect(effect, dependencies, { flush: 'post' })

export const watch = (source, callback) => {
  const cache = useRef()
  let source_value
  if (Array.isArray(source)) {
    source_value = source.map((item) => typeof item === 'function' && item())
  }
  else {
    source_value = [(typeof source === 'function' && source())]
  }
  const isDepChange = useDepChange(source_value)
  if (!cache.current) cache.current = { clear: false }
  if (isDepChange && cache.current.clear) callback(source_value, cache.current.pre)
  cache.current.pre = source_value
  return () => cache.current.clear = true
}
