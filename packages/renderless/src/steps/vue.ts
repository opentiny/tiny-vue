import {
  updateStartIndex,
  isVisibleHandler,
  computedRightNodePos,
  computedSpace,
  handleMouseenter,
  handleMouseleave
} from './index'
import type {
  ISharedRenderlessParamHooks,
  IStepsRenderlessParamUtils,
  IStepsApi,
  IStepsProps,
  IStepsState
} from '@/types'

export const api = ['state', 'isVisibleHandler', 'handleMouseenter', 'handleMouseleave']

export const renderless = (
  props: IStepsProps,
  { reactive, watch, computed }: ISharedRenderlessParamHooks,
  { vm }: IStepsRenderlessParamUtils
) => {
  const state: IStepsState = reactive({
    startIndex: 0,
    popoverVisible: false,
    popoverContent: '',
    popoverPlacement: 'top',
    endIndex: computed(() => state.startIndex + props.visibleNum),
    rightNodePositions: computed(() => api.computedRightNodePos()),
    computedSpace: computed(() => computedSpace({ props }))
  })

  const api: IStepsApi = {
    state,
    updateStartIndex: updateStartIndex({ state, props }),
    isVisibleHandler: isVisibleHandler({ state, props }),
    handleMouseenter: handleMouseenter({ state, vm }),
    handleMouseleave: handleMouseleave(state),
    computedRightNodePos: computedRightNodePos({ state, props })
  }

  watch(() => props.active, api.updateStartIndex, { immediate: true })

  return api
}
