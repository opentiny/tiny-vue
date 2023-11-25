import { useState, useRef } from 'react'

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
  return () => reload((pre) => pre + 1)
}

export function useOnceResult(func, ...args) {
  const result = useRef()
  if (!result.current) {
    result.current = func(...args)
  }
  return result.current
}
