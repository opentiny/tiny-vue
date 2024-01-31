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
import type {
  IAsyncFlowchartProps,
  IAsyncFlowchartState,
  IAsyncFlowchartApi,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from '@/types'

export const api = ['state', 'handleClickNode', 'handleClickLink', 'handleClickBlank', 'handleClickGroup', 'refresh']

export const renderless = (
  props: IAsyncFlowchartProps,
  { reactive, onMounted, onBeforeUnmount, markRaw }: ISharedRenderlessParamHooks,
  { nextTick, vm, emit }: ISharedRenderlessParamUtils,
  { Loading }
) => {
  const state = reactive<IAsyncFlowchartState>({
    loading: true,
    data: null,
    config: null
  })

  state.temporary = {}

  const api: Partial<IAsyncFlowchartApi> = {
    state,
    observeContainerSize: observeContainerSize({ nextTick, vm, state }),
    unobserveContainerSize: unobserveContainerSize(state),
    handleClickNode: handleClickNode(emit),
    handleClickLink: handleClickLink(emit),
    handleClickBlank: handleClickBlank(emit),
    handleClickGroup: handleClickGroup(emit)
  }

  Object.assign(api, {
    fetchData: fetchData({ Loading, props, state, vm, markRaw, api: api as IAsyncFlowchartApi, nextTick }),
    refresh: refresh(api as IAsyncFlowchartApi)
  })

  onMounted((api as IAsyncFlowchartApi).fetchData)
  onBeforeUnmount(() => (api as IAsyncFlowchartApi).unobserveContainerSize())

  return api
}
