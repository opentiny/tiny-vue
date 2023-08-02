export const hide = ({ state, emit }) => () => {
  state.isLock = true
  setTimeout(() => {
    state.isLock = false
  }, 300)

  state.showPopover = false
  emit('hide', state)
}

export const show = ({ state, emit, props }) => (trigger) => {
  if ((trigger && props.trigger !== trigger) || state.isLock || state.showPopover) {
    return
  }

  state.showPopover = true
  emit('show', state)
}

export const confirm = ({ state, emit }) => () => {
  state.showPopover = false
  emit('confirm', state)
  emit('hide', state)
}
