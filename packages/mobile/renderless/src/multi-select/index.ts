/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { cloneDeep } from '../chart-core/deps/utils'

export const initValue =
  ({ props, emit }) =>
  () => {
    const { modelValue, dataSource = [], disabled } = props

    if (disabled) {
      return
    }

    let value = []
    dataSource?.forEach((data, index) => {
      const isArrayVal = Array.isArray(modelValue[index])
      if (data.multiple) {
        value.push(isArrayVal ? modelValue[index] : [])
      } else {
        value.push(isArrayVal ? '' : modelValue[index] || '')
      }
    })

    emit('update:modelValue', value)
  }

export const updateValue =
  ({ state, props, emit }) =>
  (value: string) => {
    const activeIndex = state.headerIndex
    const values = cloneDeep(props.modelValue)
    if (!values) {
      return
    }

    if (Array.isArray(values[state.headerIndex])) {
      const currentVal = values[activeIndex]
      values[activeIndex] = currentVal.includes(value) ? currentVal.filter((i) => i !== value) : [...currentVal, value]
    } else {
      values[activeIndex] = value
    }

    emit('update:modelValue', values)
  }

export const getOption = (options, target) => {
  for (const option of options) {
    if (option.value === target) {
      return option
    }

    if (option.children?.length) {
      const result = getOption(option.children, target)
      if (result) {
        return result
      }
    }
  }

  return null
}

export const updateTitle =
  ({ props, state }) =>
  () => {
    const { modelValue = [], dataSource = [] } = props
    const { headerInfo } = state

    modelValue.forEach((value, index) => {
      if (!dataSource[index].multiple) {
        headerInfo[index].title = getOption(dataSource[index].options, value)?.label || headerInfo[index].title
      }
    })
  }

export const created =
  ({ api, emit, props, state, refs, nextTick }) =>
  () => {
    nextTick(() => {
      state.dataSource = cloneDeep(props.dataSource)
      state.defaultSelectedArray = cloneDeep(props.defaultSelectedArray)
      state.labelLevelsInfo = getLabelLevelsInfo(refs)
      state.labelsStyle = getLabelsStyle(state)
      state.headerInfo = state.dataSource.map((item) => {
        return { isSelected: false, title: item.title, isUP: false }
      })
      api.initValue({ props, emit })

      if (props.type === 'list') {
        state.dataSource.forEach((item, index) => {
          const { flattenData, dataMap } = getFlatOptions(item.options)
          item.options = flattenData
          state.optionMap[index] = dataMap
        })
      }
    })
  }

export const computedCurrentOptions =
  ({ state, props }) =>
  () => {
    const { options = [], multiple } = state.dataSource[state.headerIndex] || {}
    const selectedValue = props.modelValue[state.headerIndex]

    options.forEach((item) => {
      item.show = state.isSearching
        ? item.label.includes(state.searchValue)
        : (item.show ?? parent?.expanded) || item.level === 0

      item.active = multiple ? selectedValue.includes(item.value) : item.value === selectedValue
    })

    return options.filter((i) => i.show)
  }

const getFlatOptions = (options) => {
  const flattenData = []
  const dataMap = {}
  const getChild = (data, level = 0, parent?) => {
    data.forEach((item, index) => {
      const id = parent ? parent.id + index : String(index)
      const parentId = parent?.id || ''
      const expanded = (parent?.expanded && item.children?.length && item.expanded) || false
      const currentData = { ...item, id, level, expanded, parentId }
      flattenData.push(currentData)

      if (item.children?.length) {
        getChild(item.children, level + 1, currentData)
      }
      dataMap[currentData.id] = item
    })
  }

  getChild(options)

  flattenData.forEach((item) => {
    if (item.children) {
      item.hasChild = item.children.length > 0
      delete item.children
    }
  })

  return { flattenData, dataMap }
}

export const handleClick =
  ({ api, props, state }) =>
  (value) => {
    if (props.disabled || props.dataSource[value].disabled) {
      return
    }

    if (props.type === 'wheel') {
      state.wheelData = props.dataSource[value]?.options
    }

    if (state.headerIndex === -1) {
      // 首次点击
      state.showOptions = true
      state.headerIndex = value
      state.headerInfo[value] = getNewHeaderInfo(state.headerInfo, value, true)
      state.defaultSelectedIndexs = state.defaultSelectedArray[value] ?? api.loadDefault(value)
    } else if (state.headerIndex !== value) {
      // 切换
      state.showOptions = true
      state.headerInfo[state.headerIndex] = getNewHeaderInfo(state.headerInfo, state.headerIndex, false) // 上一个
      state.headerIndex = value
      state.headerInfo[value] = getNewHeaderInfo(state.headerInfo, value, true)
      state.defaultSelectedIndexs = state.defaultSelectedArray[value] ?? api.loadDefault(value) // 下一个
    } else {
      // 收起与展开
      state.showOptions = !state.showOptions
      const { isUP } = state.headerInfo[value]
      state.headerInfo[value] = getNewHeaderInfo(state.headerInfo, value, !isUP)
    }
  }

export const handleOptionSelect =
  ({ api, state, emit }) =>
  (option) => {
    api.updateValue(option.value)
    emit('item-click', state.optionMap[state.headerIndex][option.id], state.headerIndex)

    if (!state.dataSource[state.headerIndex].multiple) {
      api.handleClose()
    }
  }

export const handleSearchInput =
  ({ state, emit }) =>
  () => {
    const { searchValue } = state
    emit('update:searchValue', searchValue)
  }

const toggleChildExpand = (state, parentId, index) => {
  const { options } = state.dataSource[state.headerIndex]
  for (let i = index + 1; i < options.length; i++) {
    if (options[i].parentId === parentId) {
      options[i].show = !options[i].show
    } else {
      break
    }
  }
}

export const toggleItemExpand =
  ({ state }) =>
  (option) => {
    const index = state.dataSource[state.headerIndex].options.findIndex((i) => i.id === option.id)

    if (index !== -1) {
      const target = state.dataSource[state.headerIndex].options[index]
      target.expanded = !target.expanded
      toggleChildExpand(state, target.id, index)
    }
  }

export const confirm =
  ({ state, emit }) =>
  () => {
    const wheelLevelItems = getWheelLevelItems(state.wheelData, state.defaultSelectedIndexs)
    const { selectedLabels, selectedItems } = getSelected(wheelLevelItems, state.defaultSelectedIndexs)
    state.headerInfo[state.headerIndex] = { isSelected: true, title: selectedLabels, isUP: false }
    state.defaultSelectedArray[state.headerIndex] = state.defaultSelectedIndexs
    emit('confirm', selectedItems, state.headerIndex, state.defaultSelectedIndexs)
    state.showOptions = false
  }

export const reset =
  ({ api, props, state, emit }) =>
  () => {
    state.headerInfo[state.headerIndex] = {
      isSelected: false,
      title: props.dataSource[state.headerIndex].title || '',
      isUP: false
    }
    state.defaultSelectedIndexs = props.defaultSelectedArray[state.headerIndex] ?? api.loadDefault(state.headerIndex)
    state.defaultSelectedArray[state.headerIndex] = state.defaultSelectedIndexs
    emit('reset', [], state.headerIndex, state.defaultSelectedIndexs)
    state.showOptions = false
  }

export const handleClose = (state) => () => {
  state.showOptions = false
  if (state.headerIndex !== -1) {
    state.headerInfo[state.headerIndex].isUP = false
  }
}

export const wheelChange = (state) => (indexs) => {
  state.defaultSelectedIndexs = indexs
}

export const clickWheelItem =
  ({ state, emit }) =>
  (indexs, text, item) => {
    if (indexs.length === 0) {
      // 反选
      state.defaultSelectedIndexs = [-1]
      state.headerInfo[state.headerIndex] = { isSelected: false, title: '', isUP: false }
    } else {
      state.defaultSelectedIndexs = indexs
      state.headerInfo[state.headerIndex] = { isSelected: true, title: text, isUP: false }
    }
    state.defaultSelectedArray[state.headerIndex] = state.defaultSelectedIndexs
    emit('confirm', item, state.headerIndex, indexs)
    state.showOptions = false
  }

export const getWheelLevelItems = (wheelData, newIndexs) => {
  const level_1 = wheelData
  const level_n = getNextLevel([], wheelData, newIndexs, 0)
  let wheelLevelItems = []
  if (level_n.length === 0) {
    // 单列
    wheelLevelItems = [level_1]
  } else {
    // 多列
    wheelLevelItems = [level_1, ...level_n]
  }
  return wheelLevelItems
}

export const getNextLevel = (levelItems, children, nextIndexs, start) => {
  let levelItem = children[nextIndexs[start]]?.children ?? []
  if (start !== nextIndexs.length - 1) {
    levelItems.push(levelItem)
    return getNextLevel(levelItems, levelItem, nextIndexs, ++start)
  } else {
    return levelItems
  }
}

export const getSelected = (wheelLevelItems, selectedIndexs) => {
  const selectedItems = []
  wheelLevelItems.forEach((levelItem, i) => {
    const index = selectedIndexs[i]
    if (levelItem[index]) {
      selectedItems.push(levelItem[index])
    }
  })
  const selectedLabels = selectedItems.map((item) => item?.label).join(' ')
  return { selectedLabels, selectedItems }
}

export const loadDefault =
  ({ props, state }) =>
  (value) => {
    const current = props.defaultSelectedArray[value] ?? []
    let defaultSelectedIndexs = []
    if (state.dataSource[state.headerIndex]?.hasFooter) {
      // 有确认，重置按钮。此情况不可点击，可滚动，且初始化默认选中每列第一个
      const defaultL = current.length
      const dataSL = getMaxFloor(state.wheelData)
      if (defaultL <= dataSL) {
        defaultSelectedIndexs = current.concat(new Array(dataSL - defaultL).fill(0))
      } else {
        defaultSelectedIndexs = current.slice(0, dataSL)
      }
    } else {
      // 无确认，重置按钮。此情况默认为单列，可点击，且初始化默认不选中
      defaultSelectedIndexs = current.length > 0 ? current : [-1]
    }
    return defaultSelectedIndexs
  }

export const getMaxFloor = (treeData) => {
  let maxFloor = 0
  const loop = (data, level) => {
    data.forEach((item) => {
      item.level = level
      if (level > maxFloor) {
        maxFloor = level
      }
      if (item?.children?.length > 0) {
        loop(item.children, level + 1)
      }
    })
  }
  loop(treeData, 1)
  return maxFloor
}

export const getNewHeaderInfo = (headerInfo, index, isUP) => {
  return { isSelected: headerInfo[index]?.isSelected, title: headerInfo[index]?.title, isUP }
}

export const getLabelLevelsInfo = (refs) => {
  const { headerBox, label } = refs
  if (!headerBox || !label) return []
  const totalWidth = getRect(getEl(headerBox)).width
  const labelWidth = label.map((node) => getRect(getEl(node))).map((rect) => rect.width)
  return labelWidth.map((labelWidth, idx) => {
    const isOver25 = totalWidth * 0.25 < labelWidth
    return {
      idx,
      labelWidth,
      totalWidth,
      isOver25
    }
  })
}

export const getRect = (el) => {
  return {
    top: el.offsetTop,
    left: el.offsetLeft,
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}

export const getEl = (node) => {
  return node.$el || node
}

export const getLabelsStyle = (state) => {
  const len = state.dataSource.length
  if (len === 1) {
    return [
      {
        flex: 1,
        justifyContent: 'space-between'
      }
    ]
  }

  const over25Labels = state.labelLevelsInfo.filter((i) => i && !i.isOver25)

  // 不超过总宽度25%的头部下拉项
  let widthInfo = over25Labels
  if (len >= 4) {
    return getStyleConfig(state.labelLevelsInfo, { width: `${((1 / len) * 100).toFixed(2)}%` })
  }
  if (!widthInfo.length || widthInfo.length === state.labelLevelsInfo.length) {
    // 所有下拉项同时不超过或者超过25%宽度
    return getStyleConfig(state.labelLevelsInfo, { maxWidth: `${((1 / len) * 100).toFixed(2)}%` })
  }
  let fillArr
  if (widthInfo.length === 1) {
    // 一个不超出25%
    fillArr = getFillArray(state, widthInfo, '37.5%')
  } else if (widthInfo.length === 2) {
    // 两个不超出25%
    fillArr = getFillArray(state, widthInfo, '50%')
  }
  widthInfo = widthInfo.concat(fillArr)
  return widthInfo.reduce((styles, item) => {
    styles[item.idx] = item.maxWidth ? { maxWidth: item.maxWidth } : { maxWidth: '25%' }
    return styles
  }, {})
}

export const getStyleConfig = (data, style) => {
  return data.reduce((styleConfig, _, idx) => {
    styleConfig[idx] = style
    return styleConfig
  }, {})
}

export const getFillArray = (state, widthInfo, maxWidth) => {
  // 头部下拉项索引集合
  const labelIndexArr = state.labelLevelsInfo.map((_, idx) => idx)

  // 头部下拉项宽度超过25%索引集合
  const mapWidthInfoArr = widthInfo.map((i) => i.idx)
  return labelIndexArr
    .filter((i) => !mapWidthInfoArr.includes(i))
    .map((i) => {
      return {
        idx: i,
        maxWidth
      }
    })
}

export const handleSearchBtnClick =
  ({ props, state, nextTick, vm }) =>
  () => {
    if (props.disabled) {
      return
    }

    state.isSearching = !state.isSearching
    nextTick(() => {
      if (state.isSearching) {
        vm.$refs.searchInput.focus()
      }
    })
  }
