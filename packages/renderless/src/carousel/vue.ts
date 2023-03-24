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
  computedHasLable
} from './index'
import { addResizeListener, removeResizeListener } from '@opentiny/vue-renderless/common/deps/resize-event'

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
  'throttledIndicatorHover'
]

const initState = ({ reactive, computed, api }) => {
  const state = reactive({
    items: [],
    timer: null,
    hover: false,
    activeIndex: -1,
    completed: false,
    containerWidth: 0,
    hasLabel: computed(() => api.computedHasLable(state.items))
  })

  return state
}

const initApi = ({ api, state, props, emit }) => {
  Object.assign(api, {
    state,
    computedHasLable,
    playSlides: playSlides({ props, state }),
    pauseTimer: pauseTimer(state),
    onComplete: onComplete({ count: 0, emit, props, state }),
    itemInStage: itemInStage(state),
    resetItemPosition: resetItemPosition(state),
    handleButtonLeave: handleButtonLeave(state),
    handleIndicatorClick: handleIndicatorClick(state),
    handleIndicatorHover: handleIndicatorHover({ props, state }),
    watchItems: watchItems({ api, props }),
    watchActiveIndex: watchActiveIndex({ api, emit }),
    watchAutoplay: watchAutoplay(api),
    startTimer: startTimer({ api, props, state }),
    prev: prev({ api, state }),
    next: next({ api, state }),
    setActiveItem: setActiveItem({ api, props, state }),
    handleMouseEnter: handleMouseEnter({ api, state }),
    handleMouseLeave: handleMouseLeave({ api, state }),
    handleButtonEnter: handleButtonEnter({ api, state }),
    throttledArrowClick: throttledArrowClick(api),
    throttledIndicatorHover: throttledIndicatorHover(api)
  })
}

const initWatch = ({ watch, props, api, state }) => {
  watch(() => props.autoplay, api.watchAutoplay)

  watch(
    () => props.loop,
    () => {
      api.setActiveItem(state.activeIndex)
    }
  )
}

export const useItems = ({ api, onMounted, state, watch, constants, childrenHandler }) => {
  const updateItems = () => {
    const $children = []

    childrenHandler(({ options, vm }) => {
      options.name === constants.CHILD_NAME && $children.push(vm)
    })

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

export const renderless = (props, { computed, onMounted, onBeforeUnmount, reactive, watch }, { vm, parent, constants, emit, childrenHandler }) => {
  const api = {}
  const state = initState({ reactive, computed, api })

  initApi({ api, state, props, emit })

  const { updateItems } = useItems({
    api,
    vm,
    onMounted,
    state,
    watch,
    constants,
    childrenHandler
  })

  api.updateItems = updateItems

  useActiveIndex({ api, parent, props, state, watch })
  useResizeListener({ api, onBeforeUnmount, onMounted, parent })

  initWatch({ watch, props, api, state })

  onMounted(() => {
    api.startTimer()
    api.onComplete(state.items.length)
  })

  parent.$on('updateItems', api.updateItems)

  parent.$on('complete', () => {
    api.onComplete(state.items.length)
  })

  return api
}
