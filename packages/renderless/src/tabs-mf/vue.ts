import { random } from '../common/string'
import { useRelation } from '../common/deps/useRelation'
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
  unobserveTabSwipeSize,
  sortItem,
  onRelationChange
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

let uniqueId = 0

export const renderless = (props, hooks, { vm, emit, nextTick }) => {
  const { onMounted, onBeforeUnmount, provide, reactive, watch, computed, getCurrentInstance } = hooks
  const instance = getCurrentInstance().proxy
  const state = reactive({
    items: [],
    navs: [],
    currentItem: computed(() => state.items.find((item) => item.selected)),
    key: computed(() => (state.currentItem ? state.currentItem.name : random())),
    separator: props.separator,
    swipeable: computed(() => api.computedSwipeable()),
    maxTabSwipeHeight: 0,
    itemOrderKey: '',
    tabsId: ++uniqueId
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
    unobserveTabSwipeSize: unobserveTabSwipeSize({ state, vm }),
    sortItem: sortItem(state),
    useRelation: useRelation(hooks),
    onRelationChange: onRelationChange({ api, instance, nextTick, state })
  })

  provide('tabs', vm)
  provide('tabsId', state.tabsId)

  api.useRelation({
    relationKey: `tabs-${state.tabsId}`,
    childrenKey: 'childTabs',
    relationContainer: () => vm.$el.querySelector('[data-tag=tiny-tabs-hidden]'),
    onChange: () => api.onRelationChange()
  })

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
