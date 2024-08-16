import emulate from '../common/deps/touch-emulator'
import { onTouchstart, onTouchmove, clearScroll } from './index'

emulate()

export const api = ['state', 'onTouchstart', 'onTouchmove', 'clearScroll']

export const renderless = (props, { reactive }, { vm }) => {
  const api = {}
  const state = reactive({ last: -1 })

  Object.assign(api, {
    state,
    onTouchstart: onTouchstart(state),
    onTouchmove: onTouchmove({ props, state, vm }),
    clearScroll: clearScroll(vm)
  })

  return api
}
