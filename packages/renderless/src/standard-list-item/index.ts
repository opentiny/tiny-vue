export const handleEnterDesc =
  ({ state, props }) =>
  ($event) => {
    const target = $event.target
    if (target && target.scrollHeight > target.offsetHeight) {
      state.descTooltip = props.data.desc
    } else {
      state.descTooltip = ''
    }
  }

export const handelIconClick =
  ({ emit }) =>
  (item, index, event) => {
    if (item.disabled) return
    emit('icon-click', item, index, event)
  }

export const handleTitleClick =
  ({ props }) =>
  () => {
    if (!props.titleOption.click) return

    props.titleOption.click()
  }
