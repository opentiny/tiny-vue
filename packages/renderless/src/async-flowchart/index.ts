import ResizeObserver from '../common/deps/ResizeObserver'
import type {
  IAsyncFlowchartState,
  IAsyncFlowchartProps,
  IAsyncFlowchartApi,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from '@/types'

export const observeContainerSize =
  ({
    nextTick,
    vm,
    state
  }: {
    nextTick: ISharedRenderlessParamHooks['nextTick']
    vm: ISharedRenderlessParamUtils['vm']
    state: IAsyncFlowchartState
  }) =>
  () => {
    nextTick(() => {
      const observedElement = vm.$el

      if (observedElement) {
        state.temporary.observer = new ResizeObserver(() => {
          window.requestAnimationFrame(() => {
            if (vm.$refs.chart) {
              vm.$refs.chart.refresh({
                graphWidth: observedElement.offsetWidth,
                adjustX: -(state?.config?.nodeWrapperSize || 0) / 2
              })
            }
          })
        })

        state.temporary.observer.observe(observedElement)
        state.temporary.observed = observedElement
      }
    })
  }

export const unobserveContainerSize = (state: IAsyncFlowchartState) => () => {
  if (state.temporary.observer) {
    state.temporary.observer.unobserve(state.temporary.observed)
    state.temporary.observer.disconnect()
    state.temporary.observer = null
    state.temporary.observed = null
  }
}

export const fetchData =
  ({
    Loading,
    props,
    state,
    vm,
    markRaw,
    api,
    nextTick
  }: {
    Loading: any
    props: IAsyncFlowchartProps
    state: IAsyncFlowchartState
    vm: ISharedRenderlessParamUtils['vm']
    markRaw: ISharedRenderlessParamHooks['markRaw']
    api: IAsyncFlowchartApi
    nextTick: ISharedRenderlessParamHooks['nextTick']
  }) =>
  () => {
    if (typeof props.fetch === 'function') {
      api.unobserveContainerSize()
      state.loading = true
      state.temporary.loadingInstance = Loading.service({ target: vm.$el })
      state.temporary.final = true

      const onFinally = () => {
        if (state.temporary.final) {
          state.temporary.final = false
          state.temporary.loadingInstance.close()
          state.loading = false
          nextTick(() => api.observeContainerSize())
        }
      }

      props
        .fetch()
        .then(({ data, config }) => {
          if (data) {
            state.data = markRaw(data)
            state.config = markRaw(config)
          }
        })
        .then(onFinally)
        .catch(onFinally)
    }
  }

export const handleClickNode = (emit: ISharedRenderlessParamUtils['emit']) => (afterNode, e) =>
  emit('click-node', afterNode, e)

export const handleClickLink = (emit: ISharedRenderlessParamUtils['emit']) => (afterLink, e) =>
  emit('click-link', afterLink, e)

export const handleClickBlank = (emit: ISharedRenderlessParamUtils['emit']) => (param, e) =>
  emit('click-blank', param, e)

export const handleClickGroup = (emit: ISharedRenderlessParamUtils['emit']) => (afterGroup, e) =>
  emit('click-group', afterGroup, e)

export const refresh = (api: IAsyncFlowchartApi) => () => api.fetchData()
