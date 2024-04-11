import { useEffect, useRef } from './vue-hooks'

export const usePrevious = <T>(value: T, context: any) => {
  const ref = useRef<T | null>(null, context)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
