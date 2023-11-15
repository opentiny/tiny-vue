export const hide =
  ({ state, emit }) =>
  () => {
    state.search.show = false
    emit('update:visible', false)
    emit('close', false)
  }

export const watchVisible =
  ({ emit, state, props, api }) =>
  (bool) => {
    const { multiple, modelValue } = props
    if (bool && multiple) {
      api.watchModelValue(modelValue)
    }
    setTimeout(() => {
      state.toggle = bool
    }, 0)
    emit('update:visible', bool)
  }

export const watchModelValue =
  ({ api }) =>
  () =>
    api.setSelected()

export const includeOptionIndex = (props) => (list, option) => {
  const { valueField } = props
  let index = -1

  list.some((item, i) => {
    const isEqual = item[valueField] === option[valueField]
    isEqual && (index = i)

    return isEqual
  })

  return index
}

export const selectOption =
  ({ emit, state, props, api }) =>
  (option) => {
    const { valueField, multiple } = props

    if (multiple) {
      const index = api.includeOptionIndex(state.checkList, option)
      index > -1 ? state.checkList.splice(index, 1) : state.checkList.push(option)
    } else {
      emit('update:visible', false)
      emit('update:modelValue', option[valueField])
      emit('confirm', option[valueField])
    }

    emit('click', option)
  }

export const confirm =
  ({ emit, state, props, api }) =>
  () => {
    if (state.search.show) {
      api.searchBoxToggle(false)
    } else {
      emit('confirm', state)
      emit('update:visible', false)
      props.multiple && emit('update:modelValue', state.checkIds)
    }
  }

export const searchMethod =
  ({ state, props }) =>
  () => {
    const { searchConfig, textField } = props
    const { input, options } = state.search
    let list

    if (searchConfig && searchConfig.searchMethod) {
      list = searchConfig.searchMethod({ input, options }) || []
    } else {
      list = options.filter((item) => item[textField].indexOf(input) > -1)
    }

    if (typeof list.then === 'function') {
      list.then((data) => (state.search.filterOptions = data))
    } else {
      state.search.filterOptions = list
    }
  }

export const searchBoxToggle =
  ({ state, props, api }) =>
  (bool) => {
    const { menus, searchConfig } = props
    state.search.show = bool
    state.search.input = ''

    if (bool) {
      state.search.options = !searchConfig.options || !searchConfig.options.length ? menus : searchConfig.options
      api.searchMethod()
    }
  }

export const allCheckHandler =
  ({ state, props }) =>
  () => {
    if (state.checkList.length === props.menus.length) {
      state.checkList = []
    } else {
      state.checkList = props.menus.slice()
    }
  }

export const searchSelectHandler =
  ({ state, emit, api, props }) =>
  (option) => {
    const { valueField, multiple } = props

    if (multiple) {
      const index = api.includeOptionIndex(state.checkList, option)
      index > -1 ? state.checkList.splice(index, 1) : state.checkList.push(option)
    } else {
      api.searchBoxToggle(false)
      emit('update:modelValue', option[valueField])
    }

    emit('search-click', option)
  }

export const isSelected =
  ({ state, api, props }) =>
  (option) => {
    const { valueField, multiple, modelValue } = props

    return multiple ? api.includeOptionIndex(state.checkList, option) > -1 : option[valueField] === modelValue
  }

export const watchPropsOption =
  ({ api }) =>
  () =>
    api.setSelected()

export const setSelected =
  ({ props, state, emit }) =>
  () => {
    const { multiple, menus, valueField, textField, textSplit, modelValue } = props

    if (!menus.length) return

    if (multiple) {
      const ids = menus.map((option) => option[valueField])
      state.checkList = (modelValue || []).map((id) => {
        return ids.indexOf(id) > -1 ? menus[ids.indexOf(id)] : { [valueField]: id, [textField]: id }
      })
    }

    const text = multiple
      ? state.checkList.map((item) => item[textField])
      : menus.filter((item) => item[valueField] === modelValue).map((item) => item[textField])

    state.selectedLabel = text.join(textSplit)
    emit('update:text', state.selectedLabel)
  }
