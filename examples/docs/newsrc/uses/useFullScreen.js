import { hooks } from '@opentiny/vue-common'

export function useFullScreen(selector) {
  let el = null
  const fn = {
    toggle: () => (document.fullscreenElement ? fn.exit() : fn.enter()),
    enter: () => el && el.requestFullscreen(),
    exit: () => document.exitFullscreen()
  }

  hooks.onMounted(() => {
    el = document.querySelector(selector)
  })

  return fn
}
