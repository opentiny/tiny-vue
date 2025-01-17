import hooks from './adapter'

export function useDefer(maxCount = 100) {
  const frameCount = hooks.ref(0)
  let rafId: number

  function updateFrameCount() {
    rafId = requestAnimationFrame(() => {
      frameCount.value++

      if (frameCount.value >= maxCount) {
        return
      }

      updateFrameCount()
    })
  }

  function cancel() {
    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = 0
    }
  }

  updateFrameCount()

  hooks.onBeforeUnmount(() => cancel())

  return {
    defer(n: number) {
      return frameCount.value >= n
    },
    reset() {
      cancel()
      frameCount.value = 0
      updateFrameCount()
    },
    cancel
  }
}
