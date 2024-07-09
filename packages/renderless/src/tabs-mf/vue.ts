import { random } from '../common/string'
import {
  setActive,
  addItem,
  addNav,
  scrollTo,
  clickMore,
  removeItem,
  changeCurrentName,
  beforeCarouselSwipe,
  canLeave,
  clearOtherTabSwipeScroll,
  computedSwipeable,
  observeTabSwipeSize,
  unobserveTabSwipeSize
} from './index'

export const api = [
  'state',
  'setActive',
  'addItem',
  'addNav',
  'scrollTo',
  'clickMore',
  'removeItem',
  'beforeCarouselSwipe',
  'canLeave',
  'clearOtherTabSwipeScroll'
]

export const renderless = (
  props,
  { onMounted, onBeforeUnmount, provide, reactive, watch, computed, nextTick },
  { vm, emit }
) => {
  const state = reactive({
    items: [],
    navs: [],
    currentItem: computed(() => state.items.find((item) => item.selected)),
    key: computed(() => (state.currentItem ? state.currentItem.name : random())),
    separator: props.separator,
    swipeable: computed(() => api.computedSwipeable()),
    maxTabSwipeHeight: 0
  })

  const api = {}

  Object.assign(api, {
    state,
    setActive: setActive({ state, api }),
    addItem: addItem(state),
    addNav: addNav(state),
    scrollTo: scrollTo({ vm, state }),
    removeItem: removeItem({ props, state, emit }),
    changeCurrentName: changeCurrentName({ state, emit }),
    clickMore: clickMore(api),
    beforeCarouselSwipe: beforeCarouselSwipe({ api, state, vm }),
    canLeave: canLeave(props),
    clearOtherTabSwipeScroll: clearOtherTabSwipeScroll({ state, vm }),
    computedSwipeable: computedSwipeable({ props, state }),
    observeTabSwipeSize: observeTabSwipeSize({ state, vm }),
    unobserveTabSwipeSize: unobserveTabSwipeSize({ state, vm })
  })

  provide('tabs', vm)

  watch(
    () => props.activeName,
    (name) => name && api.setActive(name)
  )

  watch(
    () => props.modelValue,
    (name) => name && api.setActive(name)
  )

  onMounted(() => {
    // 在 vue2 类似 tabSwipe0 这些动态的 ref 只能在 nextTick 中拿到
    nextTick(() => api.observeTabSwipeSize())
    props.activeName && api.scrollTo(props.activeName)
    props.modelValue && api.scrollTo(props.modelValue)
  })

  onBeforeUnmount(() => {
    api.unobserveTabSwipeSize()
    state.navs.forEach((n, i) => (state.navs[i] = null))
    state.navs.length = 0
  })

  provide('separator', state.separator)

  return api
}
