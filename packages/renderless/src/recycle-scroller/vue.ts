import {
  handleVisibilityChange,
  updateVisibleItems,
  computedSizes,
  computedItemIndexByKey,
  getScroll,
  unuseView,
  addView,
  sortViews,
  handleScroll,
  handleResize,
  applyPageMode,
  addListeners,
  removeListeners,
  getListenerTarget,
  scrollToPosition,
  scrollToItem,
  computeViewStyle,
  computeViewEvent
} from './index'
import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'

export const api = [
  'state',
  'handleVisibilityChange',
  'handleScroll',
  'scrollToItem',
  'computeViewStyle',
  'computeViewEvent'
]

const addWatchers = ({ watch, props, api, state }) => {
  watch(
    () => props.items,
    () => api.updateVisibleItems(true)
  )

  watch(
    () => props.pageMode,
    () => {
      api.applyPageMode()
      api.updateVisibleItems(false)
    }
  )

  watch(
    () => state.sizes,
    () => api.updateVisibleItems(false),
    { deep: true }
  )

  watch(
    () => props.gridItems,
    () => api.updateVisibleItems(true)
  )

  watch(
    () => props.itemSecondarySize,
    () => api.updateVisibleItems(true)
  )
}

const checkProps = (props) => {
  if (props.gridItems && !props.itemSize) {
    throw new Error('[TINY Error][RecycleScroller] You must provide an itemSize when using gridItems')
  }
}

export const renderless = (
  props,
  { reactive, computed, onBeforeUnmount, onMounted, onActivated, watch, markRaw, shallowReactive },
  { vm, nextTick, emit }
) => {
  const state = reactive({
    pool: [],
    totalSize: 0,
    ready: false,
    hoverKey: null,
    simpleArray: computed(() => props.items.length && typeof props.items[0] !== 'object'),
    sizes: computed(() => api.computedSizes()),
    itemIndexByKey: computed(() => api.computedItemIndexByKey())
  })
  const api = {
    state,
    computedSizes: computedSizes({ props, state }),
    computedItemIndexByKey: computedItemIndexByKey(props),
    getScroll: getScroll({ props, vm }),
    unuseView: unuseView(state),
    addView: addView({ markRaw, shallowReactive }),
    sortViews: sortViews(state),
    getListenerTarget: getListenerTarget({ props, vm }),
    scrollToPosition: scrollToPosition({ props, vm }),
    computeViewStyle: computeViewStyle({ props, state }),
    computeViewEvent: computeViewEvent({ props, state })
  }

  Object.assign(api, {
    handleVisibilityChange: handleVisibilityChange({ api, emit, state }),
    updateVisibleItems: updateVisibleItems({ api, emit, props, state, vm }),
    handleScroll: handleScroll({ api, props, state }),
    handleResize: handleResize({ api, emit, state }),
    applyPageMode: applyPageMode({ api, props }),
    addListeners: addListeners({ api, state }),
    removeListeners: removeListeners({ api, state }),
    scrollToItem: scrollToItem({ api, props, state })
  })

  state.temporary = {
    startIndex: 0,
    endIndex: 0,
    views: new Map(),
    unusedViews: new Map(),
    scrollDirty: false,
    lastUpdateScrollPosition: 0
  }

  if (props.prerender) {
    state.temporary.prerender = true
    api.updateVisibleItems(false)
  }

  checkProps(props)

  onActivated(() => {
    const lastPosition = state.temporary.lastUpdateScrollPosition

    if (typeof lastPosition === 'number') {
      nextTick(() => {
        api.scrollToPosition(lastPosition)
      })
    }
  })

  onMounted(() => {
    addResizeListener(vm.$el, api.handleResize)
    api.applyPageMode()
    nextTick(() => {
      state.temporary.prerender = false
      api.updateVisibleItems(true)
      state.ready = true
    })
  })

  onBeforeUnmount(() => {
    removeResizeListener(vm.$el, api.handleResize)
    api.removeListeners()
  })

  addWatchers({ watch, props, api, state })

  return api
}
