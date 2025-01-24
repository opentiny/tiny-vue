import { on, isServer } from './dom'

let width
let height

export const useWindowSize = (ref) => () => {
  if (!width) {
    width = ref(0)
    height = ref(0)

    if (!isServer) {
      const update = () => {
        width.value = window.innerWidth
        height.value = window.innerHeight
      }

      update()

      on(window, 'resize', update, { passive: true })
      on(window, 'orientationchange', update, { passive: true })
    }
  }

  return { width, height }
}
