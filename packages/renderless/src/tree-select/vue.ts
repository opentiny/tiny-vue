import { filter, nodeClick, check } from './index'

export const api = ['state', 'filter', 'nodeClick', 'check']

export const renderless = (props, { reactive, computed }, { vm, emit }) => {
  const api = {}

  const state = reactive({
    value: computed(() => props.modelValue),
    treeData: props.treeOp.data
  })

  Object.assign(api, {
    state,
    filter: filter({ vm }),
    nodeClick: nodeClick({ props, vm, emit }),
    check: check({ props, vm, emit })
  })

  return api
}
