/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import {
  onComplete,
  handleMouseEnter,
  handleMouseLeave,
  itemInStage,
  handleButtonEnter,
  handleButtonLeave,
  resetItemPosition,
  playSlides,
  pauseTimer,
  startTimer,
  setActiveItem,
  prev,
  next,
  handleIndicatorClick,
  handleIndicatorHover,
  watchItems,
  watchActiveIndex,
  watchAutoplay,
  throttledArrowClick,
  throttledIndicatorHover,
  computedHasLabel,
  touchstart,
  touchmove,
  touchend,
  computedStyle
} from './index'
import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'

export const api = [
  'state',
  'items',
  'activeIndex',
  'containerWidth',
  'hover',
  'hasLabel',
  'onComplete',
  'handleMouseEnter',
  'handleMouseLeave',
  'itemInStage',
  'handleButtonEnter',
  'handleButtonLeave',
  'updateItems',
  'resetItemPosition',
  'playSlides',
  'pauseTimer',
  'startTimer',
  'setActiveItem',
  'prev',
  'next',
  'handleIndicatorClick',
  'handleIndicatorHover',
  'throttledArrowClick',
  'throttledIndicatorHover',
  'touchstart',
  'touchmove',
  'touchend'
]

const initState = ({ reactive, computed, api }) => {
  const state = reactive({
    itemsTranslate: [],
    items: [],
    timer: null,
    hover: false,
    activeIndex: -1,
    completed: false,
    delta: 0,
    containerWidth: 0,
    deltaPos: {
      X: 0,
      Y: 0
    },
    startPos: {
      X: 0,
      Y: 0
    },
    offsetPos: {
      X: 0,
      Y: 0
    },
    touchTime: 0,
    size: 0,
    direction: '',
    moving: false,
    isCorrectDirection: false,
    moveDisable: false,
    noTouchNode: ['svg', 'BUTTON', 'path', 'g'],
    style: computed(() => api.computedStyle()),
    hasLabel: computed(() => api.computedHasLabel(state.items))
  })

  return state
}

const initApi = ({ vm, api, state, props, emit }) => {
  Object.assign(api, {
    state,
    computedHasLabel,
    touchend: touchend({ state, api }),
    touchstart: touchstart({ state, api }),
    touchmove: touchmove({ props, state, vm }),
    playSlides: playSlides({ props, state }),
    onComplete: onComplete({ count: 0, emit, props, state }),
    pauseTimer: pauseTimer(state),
    itemInStage: itemInStage(state),
    resetItemPosition: resetItemPosition(state),
    watchItems: watchItems({ api, props }),
    handleButtonLeave: handleButtonLeave(state),
    handleIndicatorClick: handleIndicatorClick(state),
    handleIndicatorHover: handleIndicatorHover({ props, state }),
    watchActiveIndex: watchActiveIndex({ api, emit }),
    watchAutoplay: watchAutoplay(api),
    startTimer: startTimer({ api, props, state }),
    prev: prev({ api, state }),
    next: next({ api, state }),
    throttledArrowClick: throttledArrowClick(api),
    setActiveItem: setActiveItem({ api, props, state }),
    handleMouseEnter: handleMouseEnter({ api, state }),
    handleMouseLeave: handleMouseLeave({ api, state }),
    throttledIndicatorHover: throttledIndicatorHover(api),
    handleButtonEnter: handleButtonEnter({ api, state }),
    computedStyle: computedStyle({ props })
  })
}

const initWatch = ({ watch, props, api, state }) => {
  watch(() => props.autoplay, api.watchAutoplay)

  watch(
    () => props.loop,
    () => api.setActiveItem(state.activeIndex)
  )
}

export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, reactive, watch },
  { vm, parent, emit, constants, childrenHandler }
) => {
  const api = {}
  const state = initState({ reactive, computed, api })

  initApi({ vm, api, state, props, emit })

  const { updateItems } = useItems({ api, vm, onMounted, state, watch, constants, childrenHandler, parent })

  api.updateItems = updateItems

  useActiveIndex({ api, parent, props, state, watch })
  useResizeListener({ api, onBeforeUnmount, onMounted, parent })

  initWatch({ watch, props, api, state })

  onMounted(() => {
    api.startTimer()
    api.onComplete(state.items.length)
  })

  // 监听子组件 CarouselItem 提交的 complete 事件
  parent.$on('updateItems', api.updateItems)

  parent.$on('complete', () => {
    api.onComplete(state.items.length)
  })

  return api
}

export const useItems = ({ api, onMounted, state, watch, constants, childrenHandler, parent }) => {
  const updateItems = () => {
    let $children = []

    $children =
      parent.$children &&
      parent.$children[0].$children.filter((child) => {
        return child.$el.classList && Array.from(child.$el.classList).includes('tiny-carousel__item')
      })
    if (!$children.length) {
      childrenHandler(({ options, vm }) => {
        options.name === constants.CHILD_NAME && $children.push(vm)
      })
    }
    state.items = $children
  }

  watch(
    () => state.items,
    (value) => state.completed && api.watchItems(value)
  )

  onMounted(updateItems)

  return {
    updateItems
  }
}

export const useActiveIndex = ({ api, state, watch }) => {
  watch(
    () => state.activeIndex,
    (value, oldValue) => api.watchActiveIndex({ value, oldValue }),
    { immediate: true }
  )
}

export const useResizeListener = ({ api, onBeforeUnmount, onMounted, parent }) => {
  onMounted(() => {
    addResizeListener(parent.$el, api.resetItemPosition)
  })

  onBeforeUnmount(() => {
    if (parent.$el) {
      removeResizeListener(parent.$el, api.resetItemPosition)
    }
  })
}
