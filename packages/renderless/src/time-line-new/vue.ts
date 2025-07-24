import {
  handleClick,
  changeStatus,
  getStatusCls,
  getStatus,
  computedData,
  getDate,
  computedCurrent,
  computedIsReverse,
  computedStackNodes
} from './index'

export const api = ['state', 'handleClick', 'getStatusCls', 'getStatus', 'getDate', 'changeStatus']

export const renderless = (props, { computed, reactive }, { t, emit, constants }) => {
  const api = {}
  const state = reactive({
    nodes: computed(() => api.computedData()),
    stackNodes: computed(() => (state.showAll ? state.nodes : api.computedStackNodes())),
    current: computed(() => api.computedCurrent()),
    isReverse: computed(() => api.computedIsReverse()),
    showData: false,
    showAll: false
  })

  Object.assign(api, {
    state,
    getDate,
    computedData: computedData({ props, state }),
    computedCurrent: computedCurrent({ props, state }),
    computedIsReverse: computedIsReverse(props),
    getStatus: getStatus({ state, t }),
    handleClick: handleClick({ emit, state, api }),
    getStatusCls: getStatusCls({ constants, props, state }),
    computedStackNodes: computedStackNodes({ state, props }),
    changeStatus: changeStatus({ state })
  })

  return api
}
