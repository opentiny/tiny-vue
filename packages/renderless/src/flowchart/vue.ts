import {
  compute,
  computeMf,
  isMf,
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
  antialiasing,
  getNodeDef,
  getNode,
  clickGroup,
  setAdjustY,
  runAdjustYTask
} from './index'
import throttle from '../common/deps/throttle'

export const api = [
  'state',
  'clearHoverAfterLink',
  'clickNode',
  'getVars',
  'omitText',
  'refresh',
  'clearDropdown',
  'clickGroup'
]

export const renderless = (
  props,
  { reactive, markRaw, onMounted, onBeforeUnmount, provide },
  { vm, nextTick, emit, mode },
  { emitter }
) => {
  const state = reactive({
    afterData: null,
    refreshKey: 0,
    wrapperStyle: '',
    dropdowns: {}
  })

  state.temporary = {
    graphWidth: 0,
    adjustX: 0,
    emitter: emitter(),
    customLinks: [],
    lastRowAfterNodes: [],
    adjustY: 0
  }

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
    antialiasing: antialiasing(vm),
    getNodeDef: getNodeDef(props),
    clickGroup: clickGroup(emit)
  }

  Object.assign(api, {
    compute: compute({ api, markRaw, props, state }),
    computeMf: computeMf({ api, markRaw, props, state }),
    drawAfterLink: drawAfterLink({ api, props, state, vm }),
    refresh: refresh({ api, nextTick, state }),
    addListeners: addListeners({ api, state, vm }),
    setListeners: setListeners({ api, emit, props, state, vm }),
    hitTest: hitTest({ api, state, vm }),
    clearHoverAfterLink: throttle(10, clearHoverAfterLink({ api, state, vm })),
    clickNode: clickNode({ api, emit }),
    getNode: getNode(api),
    setAdjustY: setAdjustY({ api, state }),
    runAdjustYTask: runAdjustYTask({ api, state })
  })

  provide('graphEmitter', state.temporary.emitter)
  provide('graphInstance', { setAdjustY: api.setAdjustY })

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
