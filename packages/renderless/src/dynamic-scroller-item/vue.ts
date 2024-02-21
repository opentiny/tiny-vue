import {
  computedId,
  computedSize,
  computedFinalActive,
  updateWatchData,
  watchId,
  onDataUpdate,
  updateSize,
  computeSize,
  applyWidthHeight,
  applySize,
  watchFinalActive,
  observeSize,
  onResize,
  unobserveSize,
  onVscrollUpdate
} from './index'

export const api = ['state']

const addWatchers = ({ watch, props, api, state }) => {
  watch(
    () => props.watchData,
    () => api.updateWatchData()
  )

  watch(
    () => state.id,
    (value, oldValue) => api.watchId(value, oldValue)
  )

  watch(
    () => state.finalActive,
    (value) => api.watchFinalActive(value)
  )
}

export const renderless = (
  props,
  { reactive, computed, onMounted, onBeforeUnmount, watch, inject, markRaw },
  { vm, nextTick, emit }
) => {
  const vscrollData = inject('vscrollData')
  const vscrollParent = inject('vscrollParent')
  const vscrollResizeObserver = markRaw(inject('vscrollResizeObserver'))

  const state = reactive({
    id: computed(() => api.computedId()),
    size: computed(() => api.computedSize()),
    finalActive: computed(() => api.computedFinalActive()),
    vscrollData,
    vscrollParent: { props: { ...vscrollParent.props }, state: { ...vscrollParent.state } },
    vscrollResizeObserver
  })

  const api = {
    state,
    computedId: computedId({ props, state }),
    computedSize: computedSize(state),
    computedFinalActive: computedFinalActive({ props, state }),
    applySize: applySize({ emit, props, state, vm }),
    unobserveSize: unobserveSize({ state, vm })
  }

  Object.assign(api, {
    updateWatchData: updateWatchData({ api, props, state, watch }),
    watchId: watchId({ api, state, vm }),
    onDataUpdate: onDataUpdate(api),
    updateSize: updateSize({ api, state }),
    computeSize: computeSize({ api, nextTick, state, vm }),
    applyWidthHeight: applyWidthHeight({ api, state }),
    watchFinalActive: watchFinalActive({ api, state }),
    observeSize: observeSize({ api, state, vm }),
    onResize: onResize({ api, state }),
    onVscrollUpdate: onVscrollUpdate({ api, state })
  })

  state.temporary = {
    forceNextVScrollUpdate: null
  }

  api.updateWatchData()

  for (const k in props.sizeDependencies) {
    watch(() => props.sizeDependencies[k], api.onDataUpdate)
  }

  state.vscrollParent.state.temporary.events.on('vscroll:update', api.onVscrollUpdate)

  onMounted(() => {
    if (state.finalActive) {
      api.updateSize()
      api.observeSize()
    }
  })

  onBeforeUnmount(() => {
    state.vscrollParent.state.temporary.events.off('vscroll:update', api.onVscrollUpdate)
    api.unobserveSize()
  })

  addWatchers({ watch, props, api, state })

  return api
}
