export const hide =
  ({ state, emit }) =>
  () => {
    state.isLock = true
    setTimeout(() => {
      state.isLock = false
    }, 300)

    state.showPopover = false
    emit('hide', state.showPopover)
  }

export const show =
  ({ state, props, emit }) =>
  (trigger) => {
    if ((trigger ? props.trigger !== trigger : !props.reference) || state.isLock || state.showPopover) {
      return
    }

    state.showPopover = true
    emit('show', state.showPopover)
  }

export const confirm =
  ({ state, emit }) =>
  () => {
    state.showPopover = false
    emit('confirm', state.showPopover)
    emit('hide', state.showPopover)
  }

export const handleEmit =
  ({ state, emit, vm }) =>
  (type) => {
    let { events = {} } = vm

    if (events[type]) {
      events[type].call(vm, { $modal: vm, type })
    } else {
      emit(type, state.showPopover)
    }
  }
