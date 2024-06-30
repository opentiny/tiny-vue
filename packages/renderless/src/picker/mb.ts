export const dateMobileToggle =
  ({ state, props }) =>
  (visible) => {
    if (props.readonly || state.pickerDisabled || state.dateMobileOption.visible === visible) return

    if (visible) {
      state.dateMobileOption.value = props.modelValue
    }

    state.dateMobileOption.visible = visible
  }

export const timeMobileToggle =
  ({ state, props, api }) =>
  (visible) => {
    if (props.readonly || state.pickerDisabled || state.timeMobileOption.visible === visible) return

    if (visible) {
      state.timeMobileOption.value = api.dateToTimeArray(props.modelValue)
      state.timeMobileOption.defaultValue = api.dateToTimeArray(props.defaultValue)
    }

    state.timeMobileOption.visible = visible
  }

export const timeMobileConfirm =
  ({ state, api }) =>
  () => {
    api.emitInput(api.timeArrayToDate(state.timeMobileOption.value))
  }

export const dateToTimeArray = (value) => {
  const date = new Date(value)

  if (isNaN(date.getTime())) {
    return []
  } else {
    return [date.getHours(), date.getMinutes(), date.getSeconds()]
  }
}

export const timeArrayToDate =
  ({ props }) =>
  (value) => {
    const timeArr = value
    let date = new Date(props.modelValue)
    if (isNaN(date.getTime())) {
      date = new Date()
    }
    date.setHours(timeArr[0])
    date.setMinutes(timeArr[1])
    date.setSeconds(timeArr[2])

    return date
  }
