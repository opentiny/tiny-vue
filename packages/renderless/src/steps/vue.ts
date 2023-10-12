import { updateStartIndex, isVisibleHandler, computedRightNodePos, computedSpace } from './index'
import { ISharedRenderlessParamHooks, IStepsApi, IStepsProps, IStepsState } from '@/types'

export const api = ['state', 'isVisibleHandler']

export const renderless = (props: IStepsProps, { reactive, watch, computed }: ISharedRenderlessParamHooks) => {
  const state: IStepsState = reactive({
    startIndex: 0,
    endIndex: computed(() => state.startIndex + props.visibleNum),
    rightNodePositions: computed(() => api.computedRightNodePos()),
    computedSpace: computed(() => computedSpace({ props }))
  })

  const api: IStepsApi = {
    state,
    updateStartIndex: updateStartIndex({ state, props }),
    isVisibleHandler: isVisibleHandler({ state, props }),
    computedRightNodePos: computedRightNodePos({ state, props })
  }

  watch(() => props.active, api.updateStartIndex, { immediate: true })

  return api
}
