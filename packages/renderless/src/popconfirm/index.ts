export const hide =
  ({ state, emit }) =>
  () => {
    state.isLock = true
    setTimeout(() => {
      state.isLock = false
    }, 300)

    state.showPopover = false
    emit('hide', state)
  }

export const show =
  ({ state, props, emit }) =>
  (trigger) => {
    if ((trigger ? props.trigger !== trigger : !props.reference) || state.isLock || state.showPopover) {
      return
    }

    state.showPopover = true
    emit('show', state)
  }

export const confirm =
  ({ state, emit }) =>
  () => {
    state.showPopover = false
    emit('confirm', state)
    emit('hide', state)
  }

export const handleEmit =
  ({ state, emit, vm }) =>
  (type) => {
    let { events = {} } = vm

    if (events[type]) {
      events[type].call(vm, { $modal: vm, type })
    } else {
      emit(type, state)
    }
  }
