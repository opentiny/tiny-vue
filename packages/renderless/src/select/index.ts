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

import { find } from '../common/array'
import { getObj, isEqual } from '../common/object'
import { hasClass } from '../common/deps/dom'
import { isKorean } from '../common/string'
import scrollIntoView from '../common/deps/scroll-into-view'
import PopupManager from '../common/deps/popup-manager'
import debounce from '../common/deps/debounce'
import { getDataset } from '../common/dataset'
import Memorize from '../common/deps/memorize'
import { isEmptyObject } from '../common/type'
import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'
import { extend } from '../common/object'

export const handleComposition =
  ({ api, nextTick, state }) =>
    (event) => {
      const text = event.target.value

      if (event.type === 'compositionend') {
        state.isOnComposition = false

        nextTick(() => api.handleQueryChange(text))
      } else {
        const lastCharacter = text[text.length - 1] || ''

        state.isOnComposition = !isKorean(lastCharacter)
      }
    }

export const showTip =
  ({ props, state, refs }) =>
    (show) => {
      if (!props.showOverflowTooltip) {
        return
      }

      let overflow

      if (!show) {
        clearTimeout(state.tipTimer)

        state.tipTimer = setTimeout(() => {
          state.showTip = state.tipHover
        }, refs.popover.closeDelay)
      } else {
        if (!props.multiple) {
          const reference = refs.reference.$el
          overflow = reference.querySelector('input').scrollWidth > reference.scrollWidth
        } else {
          overflow = refs.tags.scrollHeight > refs.tags.getBoundingClientRect().height
        }

        state.showTip = show && overflow && !!state.tips && !state.visible
      }
    }

export const gridOnQueryChange =
  ({ props, refs, constants, state }) =>
    (value) => {
      const { multiple, valueField, filterMethod, filterable, remote, remoteMethod } = props

      if (filterable && typeof filterMethod === 'function') {
        const table = refs.selectGrid.$refs.tinyTable
        const fullData = table.afterFullData

        refs.selectGrid.scrollTo(null, 0)

        table.afterFullData = filterMethod(value, fullData) || []

        refs.selectGrid.handleTableData(!value).then(() => state.selectEmitter.emit(constants.EVENT_NAME.updatePopper))

        state.previousQuery = value
      } else if (remote && typeof remoteMethod === 'function') {
        state.previousQuery = value
        remoteMethod(value).then((data) => {
        // 多选时取远端数据与当前已选数据的并集
          if (multiple) {
            const selectedIds = state.selected.map((sel) => sel[valueField])
            refs.selectGrid.clearSelection()
            refs.selectGrid.setSelection(
              data.filter((row) => ~selectedIds.indexOf(row[valueField])),
              true
            )
            state.remoteData = data.filter((row) => !~selectedIds.indexOf(row[valueField])).concat(state.selected)
          } else {
            refs.selectGrid.clearRadioRow()
            refs.selectGrid.setRadioRow(find(data, (item) => props.modelValue == item[props.valueField]))
            state.remoteData = data
          }

          refs.selectGrid.$refs.tinyTable.lastScrollTop = 0
          refs.selectGrid.loadData(data)
          refs.selectGrid.handleTableData(!value).then(() => state.selectEmitter.emit(constants.EVENT_NAME.updatePopper))
        })
      }
    }

export const defaultOnQueryChange =
  ({ props, state, constants, api }) =>
    (value) => {
      if (props.remote && typeof props.remoteMethod === 'function') {
        state.hoverIndex = -1
        props.remoteMethod(value)
      } else if (typeof props.filterMethod === 'function') {
        props.filterMethod(value)
        state.selectEmitter.emit(constants.COMPONENT_NAME.OptionGroup, constants.EVENT_NAME.queryChange)
      } else {
        state.filteredOptionsCount = state.optionsCount
        state.selectEmitter.emit(constants.EVENT_NAME.queryChange, value)
      }

      if (props.defaultFirstOption && (props.filterable || props.remote) && state.filteredOptionsCount) {
        api.checkDefaultFirstOption()
      }
    }

export const handleQueryChange =
  ({ api, constants, nextTick, props, vm, state }) =>
    (value) => {
      const refs = vm.$refs

      if (state.previousQuery === value || state.isOnComposition) {
        return
      }

      if (
        state.previousQuery === null &&
      (typeof props.filterMethod === 'function' || typeof props.remoteMethod === 'function')
      ) {
        state.previousQuery = value
        return
      }

      if (props.renderType === constants.TYPE.Grid) {
        api.gridOnQueryChange(value)
        return
      }

      if (props.renderType === constants.TYPE.Tree) {
        state.previousQuery = value

        if (state.filterOrSearch && typeof props.filterMethod === 'function') {
          refs.selectTree && refs.selectTree.filter(value)
        }
      }

      state.previousQuery = value

      nextTick(() => {
        if (state.visible) {
          state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
          state.showWarper = true
        }
      })
      state.hoverIndex = -1

      if (props.multiple && props.filterable) {
        nextTick(() => {
          if (refs.input) {
            const length = refs.input.value.length * 15 + 20
            state.inputLength = state.collapseTags ? Math.min(50, length) : length
            api.managePlaceholder()
            api.resetInputHeight()
          }
        })
      }

      if (props.renderType === constants.TYPE.Tree) {
        return
      }

      api.defaultOnQueryChange(value)
    }

export const scrollToOption =
  ({ refs, constants }) =>
    (option) => {
      const target = Array.isArray(option) && option[0] ? option[0].el : option.el

      if (refs.popper && target) {
        const menu = refs.popper.$el.querySelector(constants.CLASS.SelectDropdownWrap)

        scrollIntoView(menu, target)
      }

      refs.scrollbar && refs.scrollbar.handleScroll()
    }

export const handleMenuEnter =
  ({ api, nextTick, state }) =>
    () => {
      nextTick(() => api.scrollToOption(state.selected))
    }

export const emitChange =
  ({ emit, props, state, constants }) =>
    (value) => {
      const seekItem = (val, arr, items, flag) => {
        if (constants.TYPE.Tree === flag) {
          const recurNode = (node) => {
            val === node[props.valueField] && items.push(node)
            val !== node[props.valueField] && Array.isArray(node.children) && node.children.forEach(recurNode)
          }

          arr.forEach(recurNode)
        } else if (constants.TYPE.Grid === flag) {
          for (let i = 0; i < arr.length; i++) {
            if (val === arr[i][props.valueField]) {
              items.push(arr[i])
              break
            }
          }
        }
      }

      if (!isEqual(props.modelValue, value)) {
        if (props.renderType === constants.TYPE.Grid && props.multiple) {
          value = value || []

          const gridData = state.gridData || []
          const items = []

          value.forEach((valueItem) => {
            seekItem(valueItem, gridData, items, constants.TYPE.Grid)
          })

          emit('change', value, items)
        } else if (props.renderType === constants.TYPE.Tree && props.multiple) {
          value = value || []

          const treeData = state.treeData || []
          const items = []

          value.forEach((valueItem) => {
            seekItem(valueItem, treeData, items, constants.TYPE.Tree)
          })

          emit('change', value, items)
        } else {
          emit('change', value)
        }
      }
    }

export const getOption =
  ({ props, state }) =>
    (value) => {
      let option
      const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
      const isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]'
      const isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]'

      for (let i = state.cachedOptions.length - 1; i >= 0; i--) {
        const cachedOption = state.cachedOptions[i]
        const isEqual = isObject
          ? getObj(cachedOption.value, props.valueKey) === getObj(value, props.valueKey)
          : cachedOption.value === value

        if (isEqual) {
          option = cachedOption
          break
        }
      }

      if (option) {
        return option
      }

      const label = !isObject && !isNull && !isUndefined ? value : ''
      let newOption = { value, currentLabel: label }

      if (props.multiple) {
        newOption.hitState = false
      }

      return newOption
    }

const getOptionOfSetSelected = ({ api, props }) => {
  const option = api.getOption(props.modelValue) || {}

  if (!option.state) {
    option.state = {}
  }

  if (option.created) {
    option.createdLabel = option.state.currentLabel
    option.createdSelected = true
  } else {
    option.createdSelected = false
  }

  return option
}

const getResultOfSetSelected = ({ props, isGrid, isTree, api }) => {
  let result = []

  if (Array.isArray(props.modelValue)) {
    props.modelValue.forEach((value) => {
      if (isGrid || isTree) {
        const option = api.getPluginOption(value, isTree)

        result = result.concat(option)
      } else {
        result.push(api.getOption(value))
      }
    })
  }

  return result
}

export const setGridOrTreeSelected = ({ props, state, vm, isTree, api }) => () => {
  if (!props.modelValue) {
    state.selectedLabel = ''
    state.selected = {}
    state.currentKey = ''
    vm.$refs.selectGrid && vm.$refs.selectGrid.clearRadioRow()
    vm.$refs.selectTree && vm.$refs.selectTree.setCurrentKey && vm.$refs.selectTree.setCurrentKey(null)
    return
  }

  const isRemote = state.filterOrSearch && props.remote && typeof props.remoteMethod === 'function'
  const nestdata = isRemote ? state.remoteData : isTree ? api.getTreeData(state.treeData) : state.gridData
  const data = find(nestdata, (item) => props.modelValue == item[props.valueField])

  if (isEmptyObject(data)) {
    return
  }

  const obj = { ...data }
  const label = data[props.textField]

  obj.currentLabel = label
  state.selectedLabel = label
  state.selected = obj
  state.currentKey = data[props.valueField]
}

export const setSelected =
  ({ api, constants, nextTick, props, vm, state }) =>
    () => {
      const isTree = props.renderType === constants.TYPE.Tree
      const isGrid = props.renderType === constants.TYPE.Grid

      if (!props.multiple) {
        if (isGrid || isTree) {
          setGridOrTreeSelected({ props, state, vm, isTree, api })
        } else {
          const option = getOptionOfSetSelected({ api, props })
          nextTick(() => {
            state.selected = option
            state.selectedLabel = option.state.currentLabel || option.currentLabel
            if (state.filterOrSearch && !props.shape && !props.allowCreate) {
              state.query = state.selectedLabel
            }
          })
        }

        return
      }

      const result = getResultOfSetSelected({ props, isGrid, isTree, api })

      state.selectCls = result.length ? (result.length === state.options.length ? 'checked-sur' : 'halfselect') : 'check'
      state.selected = result
      vm.$refs.selectTree && vm.$refs.selectTree.setCheckedNodes && vm.$refs.selectTree.setCheckedNodes(state.selected)
      state.tips = state.selected.map((item) => (item.state ? item.state.currentLabel : item.currentLabel)).join(',')

      nextTick(api.resetInputHeight)
    }

export const getPluginOption =
  ({ api, props, state }) =>
    (value, isTree) => {
      const isRemote = state.filterOrSearch && props.remote && typeof props.remoteMethod === 'function'
      const { textField, valueField } = props
      const sourceData = isRemote ? state.remoteData : isTree ? api.getTreeData(state.treeData) : state.gridData
      const selNode = find(sourceData, (item) => item[valueField] == value)
      const items = []

      if (selNode) {
        selNode.currentLabel = selNode[textField]
        items.push(selNode)
      }

      return items
    }

export const toggleCheckAll =
  ({ api, emit, state }) =>
    () => {
      const getEnabledValues = (options) => {
        let values = []

        for (let i = 0; i < options.length; i++) {
          if (!options[i].state.disabled && !options[i].state.groupDisabled) {
            values.push(options[i].value)
          }
        }

        return values
      }

      let value

      if (state.selectCls === 'check') {
        value = getEnabledValues(state.options)
      } else if (state.selectCls === 'halfselect') {
        const unchecked = state.options.filter((item) => !item.disabled && item.state.selectCls === 'check')

        unchecked.length ? (value = getEnabledValues(state.options)) : (value = [])
      } else if (state.selectCls === 'checked-sur') {
        value = []
      }

      api.setSoftFocus()

      emit('update:modelValue', value)
      emit('change', value)
    }

export const resetFilter =
  ({ state, api }) =>
    () => {
      state.query = ''
      state.previousQuery = undefined
      api.handleQueryChange(state.query)
    }

export const handleFocus =
  ({ emit, props, state, api }) =>
    (event) => {
      if (!state.softFocus) {
        if (props.automaticDropdown || props.filterable) {
          state.visible = true
          state.softFocus = true
        }

        emit('focus', event)
      } else {
        state.softFocus = false
      }

      if (props.remote && state.filterOrSearch && state.firstAutoSeach) {
        state.firstAutoSeach = false
        api.resetFilter()
      }
    }

export const focus =
  ({ refs, state }) =>
    () => {
      if (!state.softFocus) {
        refs.reference?.focus()
      }
    }

export const blur =
  ({ refs, state }) =>
    () => {
      state.visible = false
      refs.reference?.blur()
    }

export const handleBlur =
  ({ constants, dispatch, emit, state }) =>
    (event) => {
      setTimeout(() => {
        if (state.isSilentBlur) {
          state.isSilentBlur = false
        } else {
          emit('blur', event)
        }

        dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.formBlur, event?.target?.value)
      }, 100)

      state.softFocus = false
    }

export const handleClearClick = (api) => (event) => {
  api.deleteSelected(event)
}

export const doDestroy = (refs) => () => {
  refs.popper && refs.popper.doDestroy()
}

export const handleClose = (state) => () => {
  state.visible = false
}

export const toggleLastOptionHitState =
  ({ state }) =>
    (hit) => {
      if (!Array.isArray(state.selected)) {
        return
      }

      const option = state.selected[state.selected.length - 1]

      if (!option) {
        return
      }

      const hitTarget = option.state || option

      if (hit === true || hit === false) {
        hitTarget.hitState = hit

        return hit
      }

      hitTarget.hitState = !hitTarget.hitState

      return hitTarget.hitState
    }

export const deletePrevTag =
  ({ api, constants, emit, props, state, vm }) =>
    (event) => {
      const refs = vm.$refs

      if (event.target.value.length <= 0 && !api.toggleLastOptionHitState()) {
        const value = props.modelValue.slice()

        value.pop()

        emit('update:modelValue', value)

        api.emitChange(value)

        if (props.renderType === constants.TYPE.Grid) {
          const rows = state.selected.slice().filter((item) => value.includes(item[props.valueField]))

          refs.selectGrid.clearSelection()
          refs.selectGrid.setSelection(rows, true)
        }
      }
    }

export const managePlaceholder =
  ({ refs, state }) =>
    () => {
      if (state.currentPlaceholder !== '') {
        state.currentPlaceholder = refs.input.value ? '' : state.cachedPlaceHolder
      }
    }

export const resetInputState =
  ({ api, refs, state }) =>
    (event) => {
      if (event.keyCode !== 8) {
        api.toggleLastOptionHitState(false)
      }

      state.inputLength = refs.input.value.length * 15 + 20
      api.resetInputHeight()
    }

export const resetInputHeight =
  ({ constants, nextTick, props, refs, state }) =>
    () => {
      if (state.collapseTags && (!props.filterable || !props.searchable)) {
        return
      }

      nextTick(() => {
        if (!refs.reference) {
          return
        }

        const inputChildNodes = refs.reference.$el.childNodes
        const inputContainer = [].filter.call(inputChildNodes, (item) => hasClass(item, 'tiny-input-display-only'))[0]
        const input = inputContainer && inputContainer.querySelector('input')
        const tags = refs.tags

        if (!input) {
          return
        }

        const sizeInMap = state.initialInputHeight || 30
        const noSelected = state.selected.length === 0
        const borderHeight = 2

        input.style.height = noSelected
          ? sizeInMap + 'px'
          : Math.max(tags ? tags.clientHeight + (tags.clientHeight > sizeInMap ? borderHeight : 0) : 0, sizeInMap) + 'px'

        if (state.visible && state.emptyText !== false) {
          state.selectEmitter.emit(constants.EVENT_NAME.updatePopper, true)
        }
      })
    }

export const resetHoverIndex =
  ({ props, state }) =>
    () => {
      if (!props.showOverflowTooltip) {
        state.hoverIndex = -1
      } else if (!props.multiple) {
        state.hoverIndex = state.options.indexOf(state.selected)
      } else {
        if (state.selected.length > 0) {
          state.hoverIndex = Math.min.apply(
            null,
            state.selected.map((item) => state.options.indexOf(item))
          )
        } else {
          state.hoverIndex = -1
        }
      }
    }

export const handleOptionSelect =
  ({ api, emit, nextTick, props, refs, state }) =>
    (option, byClick) => {
      state.memorize && state.memorize.updateByKey(option[state.memorize._dataKey] || option.value)

      if (props.multiple) {
        const value = (props.modelValue || []).slice()
        const optionIndex = api.getValueIndex(value, option.value)

        if (optionIndex > -1) {
          value.splice(optionIndex, 1)
        } else if (state.multipleLimit <= 0 || value.length < state.multipleLimit) {
          value.push(option.value)
        }

        emit('update:modelValue', value)
        api.emitChange(value)

        if (option.created) {
          state.query = ''
          api.handleQueryChange('')
          state.inputLength = 20
        }
        if (props.filterable) {
          refs.input?.focus()
        }
        if (props.searchable) {
          refs.reference?.focus()
        }
        if (props.autoClose) {
          state.visible = false
        }
      } else {
        emit('update:modelValue', option.value)
        api.emitChange(option.value)
        if (option.created) {
          state.createdSelected = true
          state.createdLabel = option.value
        }
        state.visible = false
      }

      state.isSilentBlur = byClick
      api.setSoftFocus()
      if (state.visible) {
        return
      }

      nextTick(() => {
        api.scrollToOption(option)
      })
    }

export const setSoftFocus =
  ({ refs, state }) =>
    () => {
      state.softFocus = true

      const input = refs.input || refs.reference

      input?.focus()
    }

export const getValueIndex =
  (props) =>
    (arr = [], value = null) => {
      const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'

      if (!isObject) {
        return arr.indexOf(value)
      } else {
        const valueKey = props.valueKey
        let index = -1

        arr.some((item, i) => {
          if (getObj(item, valueKey) === getObj(value, valueKey)) {
            index = i
            return true
          }
          return false
        })

        return index
      }
    }

export const toggleMenu =
  ({ refs, state, props }) =>
    () => {
      if (!state.selectDisabled) {
        !props.ignoreEnter && (state.visible = !state.visible)

        // 如果用户自定义触发源插槽则不需要执行以下代码
        if (state.softFocus && refs.reference) {
          !props.ignoreEnter && (state.visible = !state.visible)
          state.softFocus = false
        }

        if (state.visible) {
          const dom = refs.input || refs.reference
          dom?.focus()
        }
      }
    }

export const selectOption =
  ({ api, state, props }) =>
    () => {
      if (!state.visible || props.hideDrop) {
        api.toggleMenu()
      } else {
        if (state.options[state.hoverIndex]) {
          api.handleOptionSelect(state.options[state.hoverIndex])
        }
      }
    }

export const deleteSelected =
  ({ api, constants, emit, props, vm, state }) =>
    (event) => {
      event.stopPropagation()

      const value = props.multiple ? [] : ''
      const refs = vm.$refs

      if (props.renderType === constants.TYPE.Tree) {
        state.selected = {}
        state.selectedLabel = ''
        refs.selectTree.setCurrentKey(null)
      } else if (props.renderType === constants.TYPE.Grid) {
        state.selected = {}
        state.selectedLabel = ''
        refs.selectGrid.clearRadioRow()
      }

      state.showTip = false

      emit('update:modelValue', value)

      api.emitChange(value)

      state.visible = false

      emit('clear')
    }

export const deleteTag =
  ({ api, constants, emit, props, state, vm }) =>
    (event, tag) => {
      const refs = vm.$refs
      const isTree = props.renderType === constants.TYPE.Tree
      const index = state.selected.indexOf(tag)
      const treeValue = []
      const treeIds = [tag[props.valueField]]

      if (isTree && !props.treeOp.checkStrictly) {
        let node = refs.selectTree.getNode(tag[props.valueField])

        if (!node.isLeaf) {
          treeIds.push(...api.getChildValue(node.childNodes, props.valueField))
        }

        while (node.parent && !Array.isArray(node.parent.data)) {
          treeIds.push(node.parent.data[props.valueField])
          node = node.parent
        }

        state.selected
          .slice()
          .map((node) => !treeIds.includes(node[props.valueField]) && treeValue.push(node[props.valueField]))
      }

      if (index > -1 && !state.selectDisabled) {
        const value = props.modelValue.slice()
        value.splice(index, 1)

        if (props.renderType === constants.TYPE.Tree) {
          props.treeOp.checkStrictly && treeValue.push(...value)
          refs.selectTree.setCheckedKeys(treeValue)
        } else if (props.renderType === constants.TYPE.Grid) {
          const rows = state.selected.slice().filter((item) => value.includes(item[props.valueField]))

          refs.selectGrid.clearSelection()
          refs.selectGrid.setSelection(rows, true)
        }

        emit('update:modelValue', isTree ? treeValue : value)

        api.emitChange(value)

        emit(constants.EVENT_NAME.removeTag, tag[props.valueField])
      }

      event.stopPropagation()
    }

export const onInputChange =
  ({ api, props, state, constants, nextTick }) =>
    () => {
      if (!props.delay) {
        if (props.filterable && state.query !== state.selectedLabel) {
          state.query = state.selectedLabel

          api.handleQueryChange(state.query)

          nextTick(() => {
            state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
          })
        }
      } else {
        api.debouncRquest()
      }

      nextTick(() => {
        state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
      })
    }

export const onOptionDestroy = (state) => (index) => {
  if (index > -1) {
    state.optionsCount--
    state.filteredOptionsCount--
    state.options.splice(index, 1)
  }
}

export const resetInputWidth =
  ({ refs, state }) =>
    () => {
      state.inputWidth = refs.reference?.$el?.getBoundingClientRect()?.width || 0
    }

export const handleResize =
  ({ api, props }) =>
    () => {
      api.resetInputWidth()

      if (props.multiple) {
        api.resetInputHeight()
      }
    }

export const checkDefaultFirstOption = (state) => () => {
  state.hoverIndex = -1

  let hasCreated = false

  for (let i = state.options.length - 1; i >= 0; i--) {
    if (state.options[i].created) {
      hasCreated = true
      state.hoverIndex = i
      break
    }
  }

  if (hasCreated) {
    return
  }

  for (let i = 0; i !== state.options.length; ++i) {
    const option = state.options[i]

    if (state.query) {
      if (!option.disabled && !option.groupDisabled && option.visible) {
        state.hoverIndex = i
        break
      }
    } else {
      if (option.itemSelected) {
        state.hoverIndex = i
        break
      }
    }
  }
}

export const getValueKey = (props) => (item) => {
  if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
    return item.value
  }

  return getObj(item.value, props.valueKey)
}

export const navigateOptions =
  ({ api, nextTick, state }) =>
    (direction) => {
      const len = state.options.length

      if (!state.visible) {
        state.visible = true
        return
      }

      if (len === 0 || state.filteredOptionsCount === 0) {
        return
      }

      if (!state.optionsAllDisabled) {
        if (direction === 'next') {
          state.hoverIndex++

          if (state.hoverIndex === len) {
            state.hoverIndex = 0
          }
        } else if (direction === 'prev') {
          state.hoverIndex--

          if (state.hoverIndex < 0) {
            state.hoverIndex = len - 1
          }
        }

        const option = state.options[state.hoverIndex]

        if (option.disabled === true || option.groupDisabled === true || !option.visible) {
          api.navigateOptions(direction)
        }

        nextTick(() => api.scrollToOption(state.hoverOption))
      }
    }

export const emptyText =
  ({ I18N, props, state, t }) =>
    () => {
      if (props.loading) {
        return props.loadingText || t(I18N.loading)
      } else {
        if (props.remote && state.query === '' && props.renderType) {
          if (props.multiple) {
            return state.selected.length > 0 || state.remoteData.length > 0
          }

          return state.selected[props.valueField] || state.remoteData.length > 0
        }

        if (props.remote && state.query === '' && state.options.length === 0) {
          return false
        }

        if (state.filterOrSearch && state.query && state.options.length > 0 && state.filteredOptionsCount === 0) {
          return props.noMatchText || t(I18N.noMatch)
        }

        if (!state.options.some((option) => option.visible)) {
          return props.noDataText || t(I18N.noData)
        }
      }

      return null
    }

const optmzApis = {
  exist: (val, multiple) => (multiple ? Array.isArray(val) && val.length : val),
  getValueIndex: (props) => {
    const { options, valueField, modelValue, multiple } = props
    const contain = (val, arr) => Array.isArray(arr) && ~arr.indexOf(val)
    const equal = (val, opt) => (multiple ? contain(opt[valueField], [val]) : opt[valueField] === val)
    let start = 0

    if (optmzApis.exist(modelValue, multiple)) {
      const lastVal = multiple ? modelValue[modelValue.length - 1] : modelValue

      for (let i = 0; i < options.length; i++) {
        if (!equal(lastVal, options[i])) {
          continue
        }

        return i
      }
    }

    return start
  },
  getStartIndex: ({ props, state }) => {
    const { options } = props
    const { optimizeOpts, optimizeStore } = state
    const { rSize } = optimizeOpts
    const { valueIndex } = optimizeStore

    return valueIndex + rSize > options.length ? options.length - rSize : valueIndex
  },
  getViewStyle: ({ props, state }) => {
    const { options } = props
    const { optimizeOpts } = state
    const { optionHeight } = optimizeOpts

    return `height:${optionHeight * options.length}px`
  },
  getStoreDatas: ({ props, state }) => {
    const { options, valueField, modelValue, multiple } = props
    const { datas, optimizeOpts, optimizeStore } = state
    const { startIndex } = optimizeStore
    const { rSize } = optimizeOpts
    const sliced = datas.slice(startIndex, startIndex + rSize)
    const hiddenOptions = (optimizeStore.hiddenOptions = [])
    const findPush = (val) => {
      const opt = options.find((option) => option[valueField] === val)

      if (opt && !~sliced.indexOf(opt)) {
        sliced.push(opt)
        hiddenOptions.push(opt)
      }
    }

    if (optmzApis.exist(modelValue, multiple)) {
      if (multiple) {
        modelValue.forEach(findPush)
      } else {
        findPush(modelValue)
      }
    }

    return sliced
  },
  queryWrap: (refs) => refs.scrollbar.$el.querySelector('.tiny-scrollbar__wrap.virtual'),
  queryItems: (refs) => refs.scrollbar.$el.querySelectorAll('.tiny-option.virtual'),
  createMacro: (cb) => setTimeout(cb),
  setScrollTop: ({ refs, state }) => {
    const { optimizeOpts, optimizeStore } = state
    const { optionHeight } = optimizeOpts
    const wrap = optmzApis.queryWrap(refs)

    wrap.scrollTop = optionHeight * optimizeStore.valueIndex
  },
  setValueIndex: ({ props, state }) => (state.optimizeStore.valueIndex = optmzApis.getValueIndex(props)),
  addScrollListener: ({ api, refs, state }) => {
    const { optimizeStore } = state
    const wrap = optmzApis.queryWrap(refs)

    !optimizeStore.bind && wrap.addEventListener('scroll', api.getScrollListener) && (optimizeStore.bind = true)
  },
  removeScrollListener: ({ api, refs, state }) => {
    const { optimizeStore } = state
    const wrap = optmzApis.queryWrap(refs)

    optimizeStore.bind && wrap.removeEventListener('scroll', api.getScrollListener) && (optimizeStore.bind = false)
  },
  isFirstPage: ({ props, state }) => {
    const { optimizeStore } = state
    const { datas } = optimizeStore
    const { options } = props

    return Array.isArray(datas) && Array.isArray(options) && datas[0] === options[0]
  },
  natural: (val) => (val < 0 ? 0 : val),
  updateItems: ({ refs, state, itemFn }) => {
    const { optimizeOpts } = state
    const { optionHeight } = optimizeOpts
    const items = optmzApis.queryItems(refs)

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const flag = item.classList.contains('virtual-hidden')

      item.style.top = flag ? `-${optionHeight}px` : `${itemFn(i)}px`
    }
  },
  process: ({ props, start, state }) => {
    const { optimizeStore } = state

    optimizeStore.startIndex = typeof start !== 'undefined' ? start : optmzApis.getStartIndex({ props, state })
    optimizeStore.datas = optmzApis.getStoreDatas({ props, state })
    optimizeStore.firstPage = optmzApis.isFirstPage({ props, state })
  }
}

export const watchValue =
  ({ api, constants, dispatch, props, refs, state }) =>
    (value, oldValue) => {
      if (props.multiple) {
        api.resetInputHeight()

        if ((value && value.length > 0) || (refs.input && state.query !== '')) {
          state.currentPlaceholder = ''
        } else {
          state.currentPlaceholder = state.cachedPlaceHolder
        }

        if (state.filterOrSearch && !props.reserveKeyword) {
          props.renderType !== constants.TYPE.Grid && (state.query = '')
          api.handleQueryChange(state.query)
        }
      }

      api.setSelected()

      if (props.filterable && !props.multiple) {
        state.inputLength = 20
      }

      if (state.completed && !isEqual(value, oldValue)) {
        dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.formChange, value)
      }

      state.optimizeStore.flag && optmzApis.setValueIndex({ props, state })
    }

export const calcOverFlow =
  ({ refs, props, state }) =>
    (height) => {
      if (!props.multiple || !props.showOverflowTooltip) {
        return
      }
      state.overflow = false

      const tagDom = refs.tags
      const tags = tagDom.querySelectorAll('.tiny-tag')

      if (tags.length) {
        tagDom.scrollTo && tagDom.scrollTo({ top: 0 })
        let { x, width } = tags[0].getBoundingClientRect()

        if (width >= tagDom.getBoundingClientRect().width) {
          state.overflow = 0
        } else {
          for (let i = 1; i < tags.length; i++) {
            let tx = tags[i].getBoundingClientRect().x

            if (tx == x) {
              state.overflow = i - 1
              break
            }
          }
        }
      }

      refs.select.style.height = refs.select.style.height || height
      refs.reference.$el.style.position = 'absolute'

      const inputWidth = refs.select.getBoundingClientRect().width
      const position = state.visible ? 'absolute' : ''

      state.selectFiexd = {
        height,
        position,
        width: inputWidth + 'px',
        zIndex: PopupManager.nextZIndex()
      }

      state.inputWidth = inputWidth
    }

const postOperOfToVisible = ({ props, state, constants }) => {
  if (props.multiple) {
    return
  }

  if (state.selected) {
    if (props.renderType === constants.TYPE.Grid || props.renderType === constants.TYPE.Tree) {
      state.selectedLabel = state.selected.currentLabel
    } else {
      if (props.filterable && props.allowCreate && state.createdSelected && state.createdLabel) {
        state.selectedLabel = state.createdLabel
      } else {
        state.selectedLabel = state.selected.state.currentLabel || state.selected.currentLabel
      }

      if (props.filterable) {
        state.query = state.selectedLabel
      }
    }

    if (state.filterOrSearch) {
      state.currentPlaceholder = state.cachedPlaceHolder
    }
  }
}

export const toVisible =
  ({ constants, state, props, vm, api, nextTick }) =>
    () => {
      const refs = vm.$refs

      state.selectEmitter.emit(constants.EVENT_NAME.destroyPopper)
      props.remote && props.dropOnlySearch && (state.showWarper = false)

      refs.input?.blur()
      state.query = ''
      state.selectedLabel = ''
      state.inputLength = 20

      if (props.renderType !== constants.TYPE.Tree) {
        state.previousQuery = props.remoteConfig.clearData && state.previousQuery !== state.query ? undefined : null
      }

      api.resetHoverIndex()

      nextTick(() => {
        if (refs.input && refs.input.value === '' && state.selected.length === 0) {
          state.currentPlaceholder = state.cachedPlaceHolder
        }

        if (refs.selectGrid) {
          refs.selectGrid.clearScroll()
        }
      })

      postOperOfToVisible({ props, state, constants })
    }

export const toHide =
  ({ constants, state, props, vm, api }) =>
    () => {
      const refs = vm.$refs

      state.selectEmitter.emit(constants.COMPONENT_NAME.SelectDropdown, constants.EVENT_NAME.updatePopper)

      if (state.filterOrSearch) {
        state.query =
        props.remote || props.searchable ? '' : props.renderType !== constants.TYPE.Tree ? state.selectedLabel : ''

        state.previousQuery !== state.query && api.handleQueryChange(state.query)

        if (props.multiple) {
          props.filterable ? refs.input?.focus() : refs.reference?.focus()
        } else {
          if (!props.remote) {
            state.selectEmitter.emit(constants.EVENT_NAME.queryChange, '')

            state.selectEmitter.emit(constants.COMPONENT_NAME.OptionGroup, constants.EVENT_NAME.queryChange)
          }

          if (state.selectedLabel) {
            state.currentPlaceholder = state.selectedLabel
            state.selectedLabel = ''
          }
        }
      }

      if (refs.selectGrid) {
        refs.selectGrid.clearSelection()
        refs.selectGrid.setSelection(state.selected, true)

        if (state.filterOrSearch && typeof props.filterMethod === 'function') {
          refs.selectGrid.handleTableData(true)
        } else if (state.filterOrSearch && props.remote && typeof props.remoteMethod === 'function') {
          refs.selectGrid.handleTableData()
        }
      }
    }

export const watchVisible =
  ({ api, constants, emit, state, refs }) =>
    (value) => {
      if (api.onCopying()) {
        return
      }

      value ? api.toHide() : api.toVisible()

      emit(constants.EVENT_NAME.visibleChange, value)

      setTimeout(() => {
        state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
      })

      if (value && state.optimizeStore.flag) {
        optmzApis.createMacro(() => {
          optmzApis.setScrollTop({ refs, state })
          api.getScrollListener()
        })
      }
    }

export const watchOptions =
  ({ api, constants, nextTick, parent, props, state }) =>
    () => {
      if (typeof window === 'undefined') {
        return
      }

      nextTick(() => {
        state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
      })

      if (props.multiple) {
        api.resetInputHeight()
      }

      nextTick(() => {
        if (parent.$el.querySelector('input') !== document.activeElement) {
          api.setSelected()
        }
      })

      if (
        props.defaultFirstOption &&
      (props.filterabl || props.searchable || props.remote) &&
      state.filteredOptionsCount
      ) {
        api.checkDefaultFirstOption()
      }
    }

export const handleCopyClick =
  ({ parent, props, state }) =>
    () => {
      const input = document.createElement('input')

      input.style.height = 0
      input.style.border = 'none'
      input.style.position = 'absolute'

      parent.$el.appendChild(input)

      input.value = state.selected
        .map((item) => (item.state ? item.state.currentLabel : item.currentLabel))
        .join(props.textSplit)

      input.select()
      document.execCommand('copy')
      parent.$el.removeChild(input)
    }

export const selectChange =
  ({ emit, props, state }) =>
    ({ $table, selection, checked, row }) => {
      const { textField, valueField } = props
      const remoteItem = (row) => {
        const removeItem = find(state.selected, (item) => item[valueField] === row[valueField])

        removeItem && state.selected.splice(state.selected.indexOf(removeItem), 1)
      }

      if (row) {
        checked ? state.selected.push({ ...row, value: row[valueField], currentLabel: row[textField] }) : remoteItem(row)
      } else {
        checked
          ? (state.selected = state.selected.concat(
              selection.filter((row) => !~props.modelValue.indexOf(row[valueField]))
            ))
          : $table.tableData.forEach((row) => remoteItem(row))
      }

      const keys = state.selected.map((item) => item[valueField])

      emit('update:modelValue', keys)
      emit('change', keys, state.selected)
    }

export const getcheckedData =
  ({ props, state }) =>
    () => {
      const checkedKey = []

      if (!Array.isArray(state.selected)) {
        return props.modelValue ? [props.modelValue] : [state.selected[props.valueField]]
      } else {
        state.selected.length > 0 &&
        state.selected.forEach((item) => {
          checkedKey.push(item[props.valueField])
        })

        return checkedKey
      }
    }

export const radioChange =
  ({ emit, props, state }) =>
    ({ row }) => {
      row.value = row[props.valueField]
      row.currentLabel = row[props.textField]
      state.selected = row
      state.visible = false
      state.currentKey = row[props.valueField]

      emit('update:modelValue', row.value)
      emit('change', row)
    }

export const getTreeData = (props) => (data) => {
  const nodes = []
  const getChild = (data, pId) => {
    data.forEach((node) => {
      node.pId = pId
      nodes.push(node)

      if (node.children && node.children.length > 0) {
        getChild(node.children, node[props.valueField])
      }
    })
  }

  getChild(data, null)

  return nodes
}

export const treeNodeClick =
  ({ emit, props, state }) =>
    (data) => {
      if (!props.multiple) {
        data.currentLabel = data[props.textField]
        data.value = data[props.valueField]
        state.selected = data
        state.visible = false

        emit('update:modelValue', data.value)
        emit('change', data)
      }
    }

export const nodeCheckClick =
  ({ emit, props }) =>
    (data, { checkedKeys, checkedNodes }) => {
      checkedNodes.forEach((node) => {
        node.currentLabel = node[props.textField]
        node.value = node[props.valueField]
      })

      emit('update:modelValue', checkedKeys)
      emit('change', checkedKeys, checkedNodes)
    }

export const nodeCollapse =
  ({ state, constants }) =>
    () => {
      setTimeout(() => {
        state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
      }, 310)
    }

export const nodeExpand =
  ({ state, constants }) =>
    () => {
      setTimeout(() => {
        state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
      }, 310)
    }

export const debouncRquest = ({ api, state, props }) =>
  debounce(props.delay, () => {
    if (state.filterOrSearch && state.query !== state.selectedLabel) {
      state.query = state.selectedLabel
      api.handleQueryChange(state.query)
    }
  })

export const getChildValue = () => (data, key) => {
  const ids = []

  const getChild = (nodes) => {
    nodes.forEach((node) => {
      ids.push(node.data[key])

      if (node.childNodes.length > 0) {
        getChild(node.childNodes)
      }
    })
  }

  getChild(data)

  return ids
}

export const watchPropsOption =
  ({ constants, parent, props, state }) =>
    () => {
      const renderType = props.renderType
      const { key, parentKey } = props.treeOp

      const dataset = {
        dataset: props.options || props.dataset,
        service: parent.$service,
        tree: { key, parentKey }
      }

      getDataset(dataset).then((data) => {
        if (renderType === constants.TYPE.Tree) {
          state.treeData = data
        } else if (renderType === constants.TYPE.Grid) {
          state.gridData = data
        } else {
          if (props.cacheOp && props.cacheOp.key) {
            state.memorize = new Memorize(props.cacheOp)
            state.datas = state.memorize.assemble(data.slice())
          } else {
            state.datas = data
          }
        }
      })
    }

export const buildSelectConfig =
  ({ props, state }) =>
    () => {
      const checkRowKeys = state.gridCheckedData
      const selectConfig = props.selectConfig

      return { ...selectConfig, checkRowKeys }
    }

export const buildRadioConfig =
  ({ props, state }) =>
    () => {
      const checkRowKey = state.currentKey
      const highlight = true
      const radioConfig = props.radioConfig

      return { ...radioConfig, ...{ checkRowKey, highlight } }
    }

export const onMouseenterNative =
  ({ state }) =>
    () => {
      state.inputHovering = true

      if (state.searchSingleCopy && state.selectedLabel) {
        state.softFocus = true
      }
    }

export const onMouseleaveNative =
  ({ state }) =>
    () => {
      state.inputHovering = false

      if (state.searchSingleCopy && state.selectedLabel) {
        state.softFocus = false
      }
    }

export const onCopying =
  ({ state, refs }) =>
    () =>
      state.searchSingleCopy &&
    state.selectedLabel &&
    refs.reference &&
    refs.reference.hasSelection &&
    refs.reference.hasSelection()

export const watchHoverIndex =
  ({ state }) =>
    (value) => {
      if (typeof value === 'number' && value > -1) {
        state.hoverOption = state.options[value] || {}
      } else if (value === -9) {
        state.hoverOption = {}
      }

      state.options.forEach((option) => {
        option.hover = state.hoverOption === option
      })
    }

export const mounted =
  ({ api, parent, state, props, refs }) =>
    () => {
      const parentEl = parent.$el
      const inputEl =
      parentEl.querySelector('input.tiny-input__inner') || parentEl.querySelector('input.tiny-mobile-input__inner')
      const inputClientRect = inputEl?.getBoundingClientRect()

      if (inputEl === document.activeElement) {
        document.activeElement?.blur()
      }

      state.completed = true

      const sizeMap = { mini: 28, small: 32, medium: 36 }

      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        state.currentPlaceholder = ''
      }

      if (inputClientRect) {
        state.initialInputHeight = inputClientRect.height || sizeMap[state.selectSize]

        addResizeListener(parentEl, api.handleResize)

        if (refs.tags) {
          addResizeListener(refs.tags, api.resetInputHeight)
        }

        if (props.remote && props.multiple) {
          api.resetInputHeight()
        }

        state.inputWidth = inputClientRect.width
      }

      api.setSelected()

      if (props.dataset) {
        api.watchPropsOption()
      }
    }

export const unMount =
  ({ api, parent, refs, state }) =>
    () => {
      if (parent.$el && api.handleResize) {
        removeResizeListener(parent.$el, api.handleResize)
      }

      if (refs.tags) {
        removeResizeListener(refs.tags, api.resetInputHeight)
      }

      state.popperElm = null

      state.optimizeStore.flag && optmzApis.removeScrollListener({ api, refs, state })
    }

export const computeOptimizeOpts =
  ({ props, state }) =>
    () => {
      const { optimization } = props
      const baseOpts = { gt: 20, rSize: 10, optionHeight: 30, limit: 20 }

      let optOpts

      if (optimization) {
        if (typeof optimization === 'boolean') {
          optOpts = extend(true, {}, baseOpts)
        } else {
          optOpts = extend(true, {}, baseOpts, optimization)
        }

        optOpts.virtualScroll = optOpts.gt > 0 && optOpts.gt <= state.datas.length

        return optOpts
      }
    }

export const watchOptimizeOpts =
  ({ api, props, refs, state }) =>
    () => {
      const { optimizeOpts, optimizeStore } = state

      if (optimizeOpts) {
        const { virtualScroll, optionHeight } = optimizeOpts

        optimizeStore.flag = virtualScroll

        if (virtualScroll) {
          optimizeStore.viewStyle = optmzApis.getViewStyle({ props, state })
          optimizeStore.valueIndex = optmzApis.getValueIndex(props)
          optmzApis.process({ props, state })

          optmzApis.createMacro(() => {
            const itemFn = (i) => optionHeight * (optimizeStore.startIndex + i)

            optmzApis.addScrollListener({ api, refs, state })
            optmzApis.updateItems({ refs, state, itemFn })
          })
        }
      }
    }

export const getScrollListener = ({ props, refs, state }) => {
  const listener = () => {
    const { options } = props
    const { optimizeOpts } = state
    const { optionHeight } = optimizeOpts
    const viewHeight = optionHeight * options.length
    const { clientHeight, scrollTop } = optmzApis.queryWrap(refs)
    const maxScrollTop = viewHeight - clientHeight
    const start = Math.floor(scrollTop / optionHeight)

    if (scrollTop <= maxScrollTop) {
      optmzApis.process({ props, start, state })

      optmzApis.createMacro(() => {
        const itemFn = (i) => scrollTop + optionHeight * i - (scrollTop % optionHeight)

        optmzApis.updateItems({ refs, state, itemFn })
      })
    }
  }

  const { optimization } = props
  const delay = optmzApis.natural((optimization && typeof optimization === 'object' ? optimization.delay : null) || 10)

  return debounce(delay, listener)
}

export const computeCollapseTags = (props) => () => props.collapseTags

export const computeMultipleLimit =
  ({ props, state }) =>
    () => {
      const { multipleLimit, multiple } = props
      const { optimizeOpts, optimizeStore } = state

      return optmzApis.natural(multiple && optimizeStore.flag ? multipleLimit || optimizeOpts.limit : multipleLimit)
    }

export const computedGetIcon =
  ({ constants, designConfig }) =>
    (name = 'downWard') => {
      return designConfig?.icons[name] || constants?.ICON_MAP[name]
    }
