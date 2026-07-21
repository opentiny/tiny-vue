import {
  check,
  filter,
  getCheckedData,
  getPluginOption,
  getTreeData,
  mounted,
  nodeClick,
  watchValue,
  getChildValue
} from './index'

export const api = ['state', 'check', 'filter', 'nodeClick']

export const renderless = (props, { reactive, computed, watch, onMounted }, { vm, emit }) => {
  const api = {}

  const resolveTreeData = () => {
    if (Array.isArray(props.treeOp)) {
      return props.treeOp
    }
    if (props.treeOp && Array.isArray(props.treeOp.data)) {
      return props.treeOp.data
    }
    return []
  }

  const state = reactive({
    childrenName: computed(() => (props.treeOp.props && props.treeOp.props.children) || 'children'),
    currentKey: props.modelValue,
    defaultCheckedKeys: [],
    remoteData: [],
    treeData: resolveTreeData(),
    modelValue: []
  })

  Object.assign(api, {
    state,
    check: check({ props, vm, emit }),
    filter: filter({ vm }),
    getCheckedData: getCheckedData({ props, state }),
    getPluginOption: getPluginOption({ api, props, state }),
    getTreeData: getTreeData({ props, state }),
    mounted: mounted({ api, state, props, vm }),
    nodeClick: nodeClick({ props, vm, emit }),
    watchValue: watchValue({ api, props, vm, state }),
    getChildValue: getChildValue()
  })

  watch(
    () => (Array.isArray(props.treeOp) ? props.treeOp : props.treeOp?.data),
    (data) => {
      if (Array.isArray(data)) {
        state.treeData = data
      }
    },
    { immediate: true, deep: true }
  )

  watch(
    () => props.modelValue,
    () => {
      if (props.multiple && Array.isArray(props.modelValue)) {
        state.modelValue = [...props.modelValue]
      } else {
        state.modelValue = props.modelValue
      }
    },
    { immediate: true, deep: true }
  )

  watch(() => state.modelValue, api.watchValue)

  onMounted(api.mounted)

  return api
}
