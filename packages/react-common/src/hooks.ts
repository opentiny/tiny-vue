import { useState, useRef, useEffect } from "react"
import { nextTick } from '@vue/runtime-core'

export function useExcuteOnce(cb, ...args) {
  const isExcuted = useRef(false)
  const result = useRef()
  if (!isExcuted.current) {
    isExcuted.current = true
    result.current = cb(...args)
  }
  return result.current
}

export function useReload() {
  const [_, reload] = useState(0)
  return () => reload(pre => pre + 1)
}

export function useOnceResult(func, ...args) {
  const result = useRef()
  if (!result.current) {
    result.current = func(...args)
  }
  return result.current
}

// 在这里出发生命周期钩子
export function useVueLifeHooks($bus) {
  $bus.emit('hook:onBeforeUpdate')
  nextTick(() => {
    $bus.emit('hook:onUpdated')
  })

  useExcuteOnce(() => {
    $bus.emit('hook:onBeforeMount')
  })

  useEffect(() => {
    $bus.emit('hook:onMounted')

    return () => {
      // 卸载
      $bus.emit('hook:onBeforeUnmount')
      nextTick(() => {
        $bus.emit('hook:onUnmounted')
      })
    }
  }, [])
}
