import {
  observeContainerSize,
  unobserveContainerSize,
  fetchData,
  handleClickNode,
  handleClickLink,
  handleClickBlank,
  handleClickGroup,
  refresh
} from './index'

export const api = ['state', 'handleClickNode', 'handleClickLink', 'handleClickBlank', 'handleClickGroup', 'refresh']

export const renderless = (
  props,
  { reactive, onMounted, onBeforeUnmount, markRaw },
  { nextTick, vm, emit },
  { Loading }
) => {
  const state = reactive({
    loading: true,
    data: null,
    config: null
  })

  state.temporary = {}

  const api = {
    state,
    observeContainerSize: observeContainerSize({ nextTick, vm, state }),
    unobserveContainerSize: unobserveContainerSize(state),
    handleClickNode: handleClickNode(emit),
    handleClickLink: handleClickLink(emit),
    handleClickBlank: handleClickBlank(emit),
    handleClickGroup: handleClickGroup(emit)
  }

  Object.assign(api, {
    fetchData: fetchData({ Loading, props, state, vm, markRaw, api, nextTick }),
    refresh: refresh(api)
  })

  onMounted(api.fetchData)
  onBeforeUnmount(() => api.unobserveContainerSize())

  return api
}
