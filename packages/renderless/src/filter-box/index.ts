export const handleClear = ({ dispatch, emit }) => ($event) => {
  dispatch('Picker', 'handle-clear', $event)
  dispatch('Select', 'handle-clear', $event)
  dispatch('Cascader', 'handle-clear', $event)

  emit('handle-clear')
}

export const handeClick = ({ props, emit }) => ($event) => {
  if (props.disabled) return
  $event.stopPropagation()
  emit('click', $event)
}
