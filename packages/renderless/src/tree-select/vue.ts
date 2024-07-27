import { filter, nodeClick, check } from './index'

export const api = ['state', 'filter', 'nodeClick', 'check']

export const renderless = (props, { reactive }, { vm }) => {
  const api = {}

  const state = reactive({
    value: props.modelValue,
    treeData: props.treeOp.data
  })

  Object.assign(api, {
    state,
    filter: filter({ vm }),
    nodeClick: nodeClick({ props, vm }),
    check: check({ props })
  })

  return api
}
