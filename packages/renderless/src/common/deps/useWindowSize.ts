import { dom } from '@opentiny/utils'

let width
let height

export const useWindowSize = (ref) => () => {
  if (!width) {
    width = ref(0)
    height = ref(0)

    if (!dom.isServer) {
      const update = () => {
        width.value = window.innerWidth
        height.value = window.innerHeight
      }

      update()

      dom.on(window, 'resize', update, { passive: true })
      dom.on(window, 'orientationchange', update, { passive: true })
    }
  }

  return { width, height }
}
