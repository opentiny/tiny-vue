import ResizeObserver from '../common/deps/ResizeObserver'

export const observeContainerSize =
  ({ nextTick, vm, state }) =>
  () => {
    nextTick(() => {
      const observedElement = vm.$el

      if (observedElement) {
        state.temporary.observer = new ResizeObserver(() => {
          window.requestAnimationFrame(() => {
            if (vm.$refs.chart) {
              vm.$refs.chart.refresh({
                graphWidth: observedElement.offsetWidth,
                adjustX: -state.config.nodeWrapperSize / 2
              })
            }
          })
        })

        state.temporary.observer.observe(observedElement)
        state.temporary.observed = observedElement
      }
    })
  }

export const unobserveContainerSize = (state) => () => {
  if (state.temporary.observer) {
    state.temporary.observer.unobserve(state.temporary.observed)
    state.temporary.observer.disconnect()
    state.temporary.observer = null
    state.temporary.observed = null
  }
}

export const fetchData =
  ({ Loading, props, state, vm, markRaw, api, nextTick }) =>
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

export const handleClickNode = (emit) => (afterNode, e) => emit('click-node', afterNode, e)

export const handleClickLink = (emit) => (afterLink, e) => emit('click-link', afterLink, e)

export const handleClickBlank = (emit) => (param, e) => emit('click-blank', param, e)

export const handleClickGroup = (emit) => (afterGroup, e) => emit('click-group', afterGroup, e)

export const refresh = (api) => () => api.fetchData()
