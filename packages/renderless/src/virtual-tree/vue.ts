import {
  computeState,
  shouldRender,
  onVsBoxChange,
  onTreeChange,
  getTreeInstance,
  keepExpandStatus,
  keepScrollTop,
  refresh
} from './index'

export const api = [
  'state',
  'onVsBoxChange',
  'onTreeChange',
  'getTreeInstance',
  'keepExpandStatus',
  'keepScrollTop',
  'refresh'
]

export const renderless = (props, { reactive, watch, provide }, { nextTick, vm }) => {
  const api = {}
  const state = reactive({
    expandeds: [],
    treeOptions: {},
    treeEvents: {},
    vsBoxOptions: {},
    renderRows: [],
    treeStyle: {}
  })

  Object.assign(api, {
    state,
    computeState: computeState({ props, state }),
    shouldRender: shouldRender(state),
    onVsBoxChange: onVsBoxChange({ props, state }),
    onTreeChange: onTreeChange({ nextTick, props, state, vm }),
    getTreeInstance: getTreeInstance(vm),
    keepExpandStatus: keepExpandStatus(state),
    keepScrollTop: keepScrollTop(state),
    refresh: refresh({ api, state, vm })
  })

  provide('TreeAdapter', { shouldRender: api.shouldRender })

  watch(
    () => props.treeOp.data,
    () => api.refresh(),
    { immediate: true }
  )

  return api
}
