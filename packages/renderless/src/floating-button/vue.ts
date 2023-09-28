import { getClientWidth, handleClick, clearTimer, useTouchEvent, onScroll, computedStyle } from './index'

export const api = ['state', 'handleClick']

export const renderless = (props, { computed, reactive, onMounted, onBeforeUnmount }, { vm, emit }) => {
  const state = reactive({
    centerSpace: 0,
    disabled: false,
    initTimer: null,
    scrolling: false,
    commHiddenSpace: '',
    specialHiddenSpace: '',
    stayTime: null,
    lastScrollTop: 0,
    style: computed(() => api.computedStyle())
  })

  const api = {}

  Object.assign(api, {
    state,
    getClientWidth: getClientWidth({ state, vm }),
    handleClick: handleClick({ props, state, emit }),
    clearTimer: clearTimer(state),
    useTouchEvent: useTouchEvent({ state, vm, props }),
    onScroll: onScroll({ state, api }),
    computedStyle: computedStyle({ props, state })
  })

  onMounted(() => {
    api.getClientWidth(), api.onScroll()
  })

  onBeforeUnmount(api.clearTimer)

  return api
}
