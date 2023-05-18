export const optionMethod = (value) => {
  const val = ('0' + value).slice(-2)
  return { id: val, label: val }
}

export const watchModelValue = ({ props, state }) => () => {
  const { modelValue } = props

  state.dateArr = modelValue ? modelValue.slice() : []
}

export const watchVisible = ({ api, state }) => (value) => {
  state.visible = value

  value && api.watchModelValue()
}

export const updateVisible = ({  state, emit }) => (value) => {
  state.visible = value
  emit('update:visible', value)
}

export const confirm = ({ emit, state }) => (value) => {
  const dateArr = value.map((item) => ('0' + item).slice(-2))
  state.dateArr = dateArr

  emit('update:modelValue', dateArr)
  emit('confirm', dateArr)
}
