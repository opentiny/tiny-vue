import { cloneDeep } from '../chart-core/deps/utils'

export const isEmpty = (value) => [undefined, null, ''].indexOf(value) !== -1

export const resize = ({ state, vm, props }) => () => {
  const refs = vm.$refs

  if (state.showPanel) {
    const pos = refs.maskPoint.getBoundingClientRect()
    const height = window.innerHeight - pos.top

    refs.panelMask.style.top = pos.top + 'px'
    refs.panelMask.style.height = height + 'px'
    
    if (!props.panelClass) {
      refs.panel.style.maxHeight = (height * 0.7 || 0).toFixed() + 'px'
    }
  }
}

export const panelToggle = ({ state, props, api, emit }) => (index) => {
  const { modelValue } = props

  emit('panel', { index, modelValue })

  if (index === 'filter') {
    state.showPanelIndex = -1
    state.filterPanel.show = !state.filterPanel.show

    if (state.filterPanel.show) {
      state.filterPanel.selected = props.filterValue.slice()

      api.resize()
    }
    return
  }

  state.filterPanel.show = false

  if (state.showPanelIndex === index) {
    state.showPanelIndex = -1
  } else {
    let value = modelValue[index]
    value = isEmpty(value) ? [] : Array.isArray(value) ? value : [value]
    state.showPanelIndex = index
    state.selectPanel.selected = value.slice()

    api.resize()
  }
}

export const selectOption = ({ state, api }) => (value) => {
  const {
    selectPanel: { config }
  } = state

  if (config.type === 'tag' && config.multiple) {
    state.selectPanel.selected = value
  } else if (!config.multiple) {
    state.selectPanel.selected = [value]

    api.confirm()
  }
}

export const filterSelectOption = ({ state, props }) => (value, index) => {
  const { filterGroup } = props

  if (filterGroup[index].type === 'tag' && !filterGroup[index].multiple) {
    state.filterPanel.selected[index] = value
  }
}

export const reset = ({ state, props }) => (isFilterGroup) => {
  const { modelValue, filterValue } = props

  if (isFilterGroup) {
    state.filterPanel.selected = cloneDeep(filterValue)
  } else {
    let value = modelValue[state.showPanelIndex]
    value = isEmpty(value) ? [] : Array.isArray(value) ? value : [value]
    state.selectPanel.selected = value.slice()
  }
}

export const filterConfirm = ({ state, emit }) => () => {
  const filterValue = state.filterPanel.selected.slice()

  state.filterPanel.show = false
  emit('update:filter-value', cloneDeep(filterValue))
}

export const confirm = ({ state, props, emit, api }) => (isFilterGroup) => {
  if (isFilterGroup) {
    api.filterConfirm()
    return
  }

  const {
    showPanelIndex,
    selectPanel: { config }
  } = state
  let modelValue = props.modelValue

  if (config.multiple) {
    modelValue[showPanelIndex] = state.selectPanel.selected
  } else {
    modelValue[showPanelIndex] = state.selectPanel.selected[0]
  }

  state.showPanelIndex = -1
  emit('update:modelValue', modelValue.slice())
}

export const cancel = ({ state, emit }) => () => {
  state.showPanelIndex = -1
  state.filterPanel.show = false

  emit('cancel', state)
}

export const labelListComputed = ({ props }) => () => {
  const { data, modelValue } = props

  return data.map((item, index) => {
    const data = modelValue[index]
    const values = item.options.map((option) => option.value)
    if (item.type === 'tag' && item.multiple) {
      if (data && data.length) {
        return data
          .map((value) => {
            const i = values.indexOf(value)
            return i !== -1 ? item.options[i].label : item.options[i].value
          })
          .join('; ')
      } else {
        return item.placeholder
      }
    } else if (!item.multiple) {
      if (isEmpty(data)) {
        return item.placeholder
      }
      const i = values.indexOf(data)
      return i !== -1 ? item.options[i].label : data
    }
  })
}

export const selectOptionAll = ({ state }) => () => {
  state.selectPanel.selected = []
}
