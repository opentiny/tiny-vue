export const doDestroy =
  ({ vm }) =>
  () => {
    vm.$refs.popper && vm.$refs.popper.doDestroy()
  }

export const show =
  ({ state }) =>
  () => {
    state.visible = true
  }

export const hide =
  ({ state }) =>
  () => {
    state.visible = false
  }

export const togglePanel =
  ({ props, state }) =>
  () => {
    if (props.disabled) return
    state.visible = !state.visible
  }

export const popoverShow =
  ({ state, emit }) =>
  () => {
    emit('visible-change', state.visible)
  }

export const popoverHide =
  ({ state, emit }) =>
  () => {
    emit('visible-change', state.visible)
  }

export const handleClear =
  ({ emit }) =>
  () => {
    emit('handle-clear')
  }

/* istanbul ignore next */
export const handleDocumentClick =
  ({ state, vm }) =>
  (event) => {
    const filterBox = vm.$refs.filterBox.$el
    const popper = document.querySelector('.tiny-filter-panel__popover')

    if (!filterBox || !popper || filterBox.contains(event.target) || popper.contains(event.target)) {
      return
    }

    state.visible = false
  }
