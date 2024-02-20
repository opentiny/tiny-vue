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

export const computedOptions =
  ({ props }) =>
  () => {
    return props.options
      .filter((item) => {
        const hidden = typeof item.hidden === 'function' ? item.hidden(props.data) : item.hidden
        return !hidden
      })
      .map((op) => {
        return {
          ...op,
          disabled: typeof op.disabled === 'function' ? op.disabled(props.data) : op.disabled
        }
      })
  }
