import {
  compute,
  computeMf,
  isMf,
  drawArrow,
  buildAfterNode,
  buildAfterLink,
  drawAfterLink,
  refresh,
  getAllItem,
  initDropdowns,
  getVars,
  isLinkHover,
  omitText,
  buildHoverState,
  addListeners,
  removeListeners,
  setListeners,
  hitTest,
  clearHoverAfterLink,
  clickNode,
  clearDropdown,
  antialiasing
} from './index'

export const api = ['state', 'clearHoverAfterLink', 'clickNode', 'getVars', 'omitText', 'refresh', 'clearDropdown']

export const renderless = (props, { reactive, markRaw, onMounted, onBeforeUnmount }, { vm, nextTick, emit, mode }) => {
  const state = reactive({
    afterData: null,
    refreshKey: 0,
    wrapperStyle: '',
    dropdowns: {}
  })

  const api = {
    state,
    omitText,
    getVars: getVars(),
    initDropdowns: initDropdowns(),
    buildAfterNode: buildAfterNode(props),
    buildAfterLink: buildAfterLink(),
    isLinkHover: isLinkHover(state),
    clearDropdown: clearDropdown(state),
    getAllItem: getAllItem(props),
    buildHoverState: buildHoverState(props),
    removeListeners: removeListeners({ state, vm }),
    isMf: isMf(mode),
    drawArrow: drawArrow({ state, vm, props }),
    antialiasing: antialiasing(vm)
  }

  Object.assign(api, {
    compute: compute({ api, markRaw, props, state }),
    computeMf: computeMf({ api, markRaw, props, state }),
    drawAfterLink: drawAfterLink({ api, props, state, vm }),
    refresh: refresh({ api, nextTick, state }),
    addListeners: addListeners({ api, state, vm }),
    setListeners: setListeners({ api, emit, props, state, vm }),
    hitTest: hitTest({ api, state, vm }),
    clearHoverAfterLink: clearHoverAfterLink({ api, state, vm }),
    clickNode: clickNode({ api, emit })
  })

  if (api.isMf()) {
    api.computeMf()
  } else {
    api.compute()
  }

  onMounted(() => {
    nextTick(() => {
      api.antialiasing()
      api.drawAfterLink()
      api.addListeners()
    })
  })

  onBeforeUnmount(() => {
    api.removeListeners()
  })

  return api
}
