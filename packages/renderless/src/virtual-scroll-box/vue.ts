import { computedBarSize, analyzeScrolling, createVirtualScroll, onScroll, refresh } from './index'

export const api = ['state', 'onScroll', 'refresh']

export const renderless = (props, { reactive, computed, onMounted }, { emit, vm, nextTick }) => {
  const api = {}

  const state = reactive({
    scrollbarSize: computed(() => api.computedBarSize()),
    vs: null,
    scrollLeft: -1,
    scrollTop: -1,
    slicedCols: [],
    slicedRows: [],
    ctx: {},
    isReady: false,
    maxLeft: 0,
    maxTop: 0,
    isTop: true,
    isBottom: false,
    isLeft: true,
    isRight: false,
    slotParams: {}
  })

  Object.assign(api, {
    state,
    computedBarSize: computedBarSize(props),
    analyzeScrolling: analyzeScrolling({ props, state }),
    createVirtualScroll: createVirtualScroll({ api, props, state }),
    onScroll: onScroll({ emit, state }),
    refresh: refresh({ api, state, vm, nextTick })
  })

  state.vs = api.createVirtualScroll()

  api.onScroll()

  onMounted(() => {
    state.maxTop = vm.$el.scrollHeight - vm.$el.offsetHeight
    state.maxLeft = vm.$el.scrollWidth - vm.$el.offsetWidth
    state.isReady = true
  })

  return api
}
