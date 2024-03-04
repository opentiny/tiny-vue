import {
  setIsCurrent,
  filterNodes,
  getExpandedKeysPath,
  getActivedKeysPath,
  setNodeHidden,
  setAllNodeVisible,
  filterInput,
  computeData
} from './index'
import debounce from '../common/deps/debounce'

export const api = ['state', 'setIsCurrent', 'filterNodes', 'filterInput']
const initState = ({ reactive, computed, props, api }) => {
  const state = reactive({
    isEmpty: computed(() => props.data.length !== 0 && state.filterValue && state.filterData.length === 0),
    activedNodeId: null,
    filterValue: '',
    currentPaths: [],
    filterData: [],
    data: computed(() => api.computeData())
  })
  return state
}
export const renderless = (props, { reactive, watch, onMounted, computed }, { vm, emit, nextTick }) => {
  const api = {}

  const state = initState({ reactive, computed, props, api })

  Object.assign(api, {
    state,
    setIsCurrent: setIsCurrent({ props, vm, state, emit, nextTick }),
    filterNodes: debounce(100, filterNodes({ vm, state, api, nextTick })),
    setNodeHidden: setNodeHidden({ props, vm, state }),
    getActivedKeysPath: getActivedKeysPath({ state }),
    getExpandedKeysPath: getExpandedKeysPath({ state }),
    setAllNodeVisible: setAllNodeVisible({ vm, state }),
    filterInput: filterInput({ state }),
    computeData: computeData({ props, vm })
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
    (val) => {
      if (val || val === 0) {
        state.activedKeys = props.activedKeys
        api.getActivedKeysPath(props.activedKeys)
        api.setIsCurrent(props.data, { id: props.activedKeys })
      }
    },
    { immediate: true }
  )

  watch(
    () => props.data,
    (val) => {
      nextTick(() => {
        api.setIsCurrent(val, { id: props.activedKeys })
      })
    }
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
