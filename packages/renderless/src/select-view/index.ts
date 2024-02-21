export const close =
  ({ state, emit, vm }) =>
  () => {
    state.search.input = ''
    vm.$refs.actionSheet.close()
    emit('close', false)
  }

export const watchVisible =
  ({ emit, state, props, api }) =>
  (bool) => {
    const { multiple, modelValue, menus } = props

    if (bool) {
      if (!state.lazy) {
        state.search.options = menus
      }

      api.searchMethod()
      multiple && api.watchModelValue(modelValue)
    }

    emit('update:visible', bool)
    setTimeout(() => {
      state.toggle = bool
    }, 0)
  }

export const watchModelValue =
  ({ props, state, emit }) =>
  (value) => {
    const { multiple, menus, valueField, textField, textSplit } = props

    if (multiple) {
      const ids = menus.map((option) => option[valueField])
      state.checkList = (value || []).map((id) => {
        return ids.includes(id) ? menus[ids.indexOf(id)] : { [valueField]: id, [textField]: id }
      })
    }

    const textStr = multiple
      ? state.checkList.map((data) => data[textField])
      : menus.filter((data) => data[valueField] === value).map((data) => data[textField])

    emit('update:text', textStr.join(textSplit))
  }

export const includeOptionIndex = (props) => (list, option) => {
  const { valueField } = props
  let OptionIndex = -1

  list.some((data, i) => {
    const isEqual = data[valueField] === option[valueField]
    isEqual && (OptionIndex = i)

    return isEqual
  })

  return OptionIndex
}

export const confirm =
  ({ state, props, api, emit }) =>
  () => {
    const { search, checkIds } = state

    if (!search.show) {
      emit('confirm', state)
      emit('update:visible', false)
      props.multiple && emit('update:modelValue', checkIds)
    } else {
      api.searchBoxToggle(false)
    }
  }

export const searchMethod =
  ({ state, props }) =>
  () => {
    const { input, options } = state.search
    const { searchConfig, textField, valueField, topConfig } = props
    const topOptionIds = (topConfig.options || []).map((item) => item[valueField])
    let list

    if (searchConfig && searchConfig.searchMethod) {
      list = searchConfig.searchMethod({ input, options }) || []
    } else {
      list = options.filter((item) => item[textField].includes(input) && !topOptionIds.includes(item[valueField]))
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
    const { menus } = props

    state.search.input = ''

    if (bool) {
      if (!state.lazy) {
        state.search.options = menus
      }
      api.searchMethod()
    } else {
      api.close()
    }
  }

export const allCheckHandler =
  ({ state, props }) =>
  () => {
    state.checkList = state.checkList.length === props.menus.length ? [] : props.menus.slice()
  }

export const searchSelectHandler =
  ({ state, emit, api, props }) =>
  (option) => {
    const { valueField, multiple, requiredSelectedList } = props

    if (multiple) {
      const index = api.includeOptionIndex(state.checkList, option)

      if (index > -1 && requiredSelectedList.includes(option[valueField])) {
        emit('search-click', option, false)
        return
      }

      index > -1 ? state.checkList.splice(index, 1) : state.checkList.push(option)
    } else {
      api.searchBoxToggle(false)
      emit('update:modelValue', option[valueField])
      emit('confirm', option[valueField], option)
    }

    emit('search-click', option, true)
  }

export const toggleCheckList =
  ({ state }) =>
  (value) => {
    if (!state.checkList.length) {
      return
    }

    state.selected.show = value

    if (value) {
      state.selected.options = state.checkList.slice()
    } else {
      state.checkList = state.selected.options.slice()
    }
  }

export const clean =
  ({ state, props }) =>
  () => {
    const { valueField, requiredSelectedList } = props

    state.selected.options = state.selected.options.filter((item) => requiredSelectedList.includes(item[valueField]))
  }

export const selectedOptionHandler =
  ({ state, api }) =>
  (option) => {
    const index = api.includeOptionIndex(state.selected.options, option)

    if (index > -1) {
      state.selected.options.splice(index, 1)
    }
  }

export const load =
  ({ state, props, api }) =>
  () => {
    const { infiniteScroll } = props
    const { search } = state

    if (!infiniteScroll.load || state.search.loading) {
      return
    }

    const list = infiniteScroll.load({ input: search.input, options: search.options })

    if (!list) {
      return
    }

    if (typeof list.then === 'function') {
      state.search.loading = true
      list.then((data) => {
        state.search.loading = false
        state.search.options = search.options.concat(data)
        api.searchMethod()
      })
    } else {
      state.search.options = search.options.concat(list)
      api.searchMethod()
    }
  }
