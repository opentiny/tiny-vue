export const optionMethod = (value) => {
  const val = ('0' + value).slice(-2)
  return { id: +val, label: val }
}

export const watchModelValue =
  ({ props, state }) =>
  () => {
    const { modelValue, showSeconds } = props
    const num = showSeconds ? 3 : 2
    if (!showSeconds && modelValue.length === 3) {
      state.seconds = modelValue[2]
    }
    state.dateArr = modelValue && state.dateArr.toString() !== 'NaN,NaN,NaN' ? modelValue.slice(0, num) : []
  }

export const watchVisible =
  ({ api, state }) =>
  (value) => {
    state.visible = value

    value && api.watchModelValue()
  }

export const updateVisible =
  ({ state, emit }) =>
  (value) => {
    state.visible = value
    emit('update:visible', value)
  }

export const confirm =
  ({ emit, state }) =>
  (value) => {
    const dateArr = value.map((item) => ('0' + item).slice(-2))
    state.dateArr = dateArr

    emit('update:modelValue', state.value)
    emit('confirm', state.value)
  }

export const clear =
  ({ state, emit, api, vm, dispatch }) =>
  ($event) => {
    state.dateArr = []

    vm.$refs.cascaderSelect.clear(state.dateArr)
    emit('update:modelValue', state.dateArr)
    emit('clear', state.dateArr)
    dispatch('Picker', 'handle-clear', $event)
    api.updateVisible(false)
  }

export const getTimePeriod =
  ({ state, props }) =>
  (unit, length) => {
    const step = props.step || {}
    const value = step[unit] || 1

    return Array.from({ length })
      .map((v, key) => key)
      .filter((v) => v % value === 0)
      .map((v) => optionMethod(v))
  }

export const computedOptions =
  ({ state, api, props }) =>
  () => {
    const { showSeconds } = props
    const options = []

    options.push(api.getTimePeriod('hour', 24))
    options.push(api.getTimePeriod('minute', 60))
    showSeconds && options.push(api.getTimePeriod('second', 60))

    return options
  }
