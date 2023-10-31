import {
  setIsCurrent,
  filterNodes,
  getExpandedKeysPath,
  getActivedKeysPath,
  setNodeHidden,
  setAllNodeVisible,
  filterInput
} from './index'
import debounce from '../common/deps/debounce'

export const api = ['state', 'setIsCurrent', 'filterNodes', 'filterInput']

export const renderless = (props, { reactive, watch, onMounted, computed }, { vm, emit, nextTick }) => {
  const api = {}

  const state = reactive({
    isEmpty: computed(() => props.data.length !== 0 && state.filterValue && state.filterData.length === 0),
    activedNodeId: null,
    filterCheckedId: null,
    activedKeys: props.activedKeys,
    expandedKeysPath: [],
    activedKeysPath: [],
    filterText: '',
    filterValue: '',
    currentPaths: [],
    filterData: [],
    data: props.data
  })

  Object.assign(api, {
    state,
    setIsCurrent: setIsCurrent({ props, vm, state, emit, nextTick }),
    filterNodes: debounce(100, filterNodes({ vm, state, api, nextTick })),
    setNodeHidden: setNodeHidden({ props, vm, state }),
    getActivedKeysPath: getActivedKeysPath({ state }),
    getExpandedKeysPath: getExpandedKeysPath({ state }),
    setAllNodeVisible: setAllNodeVisible({ vm, state }),
    filterInput: filterInput({ state })
  })

  watch(
    () => props.expandAll,
    () => {
      props.expandAll && api.setAllNodeVisible()
    },
    { immediate: true }
  )

  watch(
    () => state.filterValue,
    () => {
      api.filterNodes(state.filterValue)
    }
  )
  watch(
    () => props.expandedKeys,
    () => {
      if (props.expandedKeys && props.expandedKeys.length) {
        api.getExpandedKeysPath(props.expandedKeys)
      }
    },
    { deep: true, immediate: true }
  )
  watch(
    () => props.activedKeys,
    () => {
      state.activedKeys = props.activedKeys
      api.getActivedKeysPath(props.activedKeys)
    },
    { immediate: true }
  )
  watch(
    () => props.data,
    () => {
      state.data = props.data
    },
    { deep: true, immediate: true }
  )

  onMounted(() => {
    vm.$on('node-clicked', (param) => {
      api.setNodeHidden(param.id)
      vm.$emit('node-click', param)
    })
    vm.$on('node-changed', (param) => {
      vm.$emit('current-change', param)
      api.setIsCurrent(state.data, param)
    })
  })

  return api
}
