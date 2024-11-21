import { check, filter, getCheckedData, getPluginOption, getTreeData, mounted, nodeClick } from './index'

export const api = ['state', 'check', 'filter', 'nodeClick']

export const renderless = (props, { reactive, computed, watch, onMounted }, { vm, emit }) => {
  const api = {}

  const state = reactive({
    childrenName: computed(() => (props.treeOp.props && props.treeOp.props.children) || 'children'),
    currentKey: props.modelValue,
    defaultCheckedKeys: [],
    remoteData: [],
    treeData: props.treeOp.data,
    value: computed(() => props.modelValue)
  })

  Object.assign(api, {
    state,
    check: check({ props, vm, emit }),
    filter: filter({ vm }),
    getCheckedData: getCheckedData({ props, state }),
    getPluginOption: getPluginOption({ api, props, state }),
    getTreeData: getTreeData({ props, state }),
    mounted: mounted({ api, state, props, vm }),
    nodeClick: nodeClick({ props, vm, emit })
  })

  watch(
    () => props.treeOp.data,
    (data) => data && (state.treeData = data),
    { immediate: true, deep: true }
  )

  onMounted(api.mounted)

  return api
}
