import {
  getClientWidth,
  handleClick,
  clearTimer,
  useTouchEvent,
  onScroll,
  computedStyle,
  getExpandList,
  mounted,
  getScrollListener
} from './index'

export const api = ['state', 'handleClick']

export const renderless = (
  props,
  { computed, reactive, onMounted, onBeforeUnmount, watch },
  { vm, emit, nextTick }
) => {
  const state = reactive({
    centerSpace: 0,
    disabled: false,
    initTimer: null,
    scrolling: false,
    commHiddenSpace: '',
    specialHiddenSpace: '',
    stayTime: null,
    lastScrollTop: 0,
    style: computed(() => api.computedStyle()),
    expandList: null,
    itemTitle: '',
    isExpand: false,
    scrollElement: '',
    elementHeight: 0,
    screenHeight: 0
  })

  const api = {}

  Object.assign(api, {
    state,
    getClientWidth: getClientWidth({ state, vm }),
    handleClick: handleClick({ props, state, emit }),
    clearTimer: clearTimer({ state, api }),
    useTouchEvent: useTouchEvent({ state, props, nextTick, api }),
    onScroll: onScroll({ state, api }),
    computedStyle: computedStyle({ props, state }),
    getExpandList: getExpandList({ state, props }),
    mounted: mounted(api),
    getScrollListener: getScrollListener({ vm, props, state })
  })

  onMounted(api.mounted)

  onBeforeUnmount(api.clearTimer)

  watch(() => props.expandList, api.getExpandList)

  return api
}
