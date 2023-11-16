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
import { isEmptyObject, isNull, isObject } from '../common/type'
import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'
import { extend } from '../common/object'
import { BROWSER_NAME } from '../common'
import browserInfo from '../common/browser'
import { fastdom } from '../common/deps/fastdom'

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
  ({ props, state, vm }) =>
  (show) => {
    if (!props.showOverflowTooltip) {
      return
    }

    let overflow

    if (!show) {
      clearTimeout(state.tipTimer)

      state.tipTimer = setTimeout(() => {
        state.showTip = state.tipHover
      }, vm.$refs.popover.closeDelay)
    } else {
      if (!props.multiple) {
        const reference = vm.$refs.reference.$el
        overflow = reference.querySelector('input').scrollWidth > reference.scrollWidth
      } else {
        overflow = vm.$refs.tags.scrollHeight > vm.$refs.tags.getBoundingClientRect().height
      }

      state.showTip = show && overflow && !!state.tips && !state.visible
    }
  }

export const gridOnQueryChange =
  ({ props, vm, constants, state }) =>
  (value) => {
    const { multiple, valueField, filterMethod, filterable, remote, remoteMethod } = props

    if (filterable && typeof filterMethod === 'function') {
      const table = vm.$refs.selectGrid.$refs.tinyTable
      const fullData = table.afterFullData

      vm.$refs.selectGrid.scrollTo(null, 0)

      table.afterFullData = filterMethod(value, fullData) || []

      vm.$refs.selectGrid
        .handleTableData(!value)
        .then(() => state.selectEmitter.emit(constants.EVENT_NAME.updatePopper))

      state.previousQuery = value
    } else if (remote && typeof remoteMethod === 'function') {
      state.previousQuery = value
      remoteMethod(value, props.extraQueryParams).then((data) => {
        // 多选时取远端数据与当前已选数据的并集
        if (multiple) {
          const selectedIds = state.selected.map((sel) => sel[valueField])
          vm.$refs.selectGrid.clearSelection()
          vm.$refs.selectGrid.setSelection(
            data.filter((row) => ~selectedIds.indexOf(row[valueField])),
            true
          )
          state.remoteData = data.filter((row) => !~selectedIds.indexOf(row[valueField])).concat(state.selected)
        } else {
          vm.$refs.selectGrid.clearRadioRow()
          vm.$refs.selectGrid.setRadioRow(find(data, (item) => props.modelValue == item[props.valueField]))
          state.remoteData = data
        }

        vm.$refs.selectGrid.$refs.tinyTable.lastScrollTop = 0
        vm.$refs.selectGrid.loadData(data)
        vm.$refs.selectGrid
          .handleTableData(!value)
          .then(() => state.selectEmitter.emit(constants.EVENT_NAME.updatePopper))
      })
    }
  }

export const defaultOnQueryChange =
  ({ props, state, constants, api }) =>
  (value) => {
    if (props.remote && (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')) {
      state.hoverIndex = -1
      props.remoteMethod && props.remoteMethod(value, props.extraQueryParams)
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
  (value, isChange = false) => {
    if ((state.previousQuery === value && !isChange) || state.isOnComposition) {
      return
    }

    if (
      state.previousQuery === null &&
      !isChange &&
      (typeof props.filterMethod === 'function' ||
        typeof props.remoteMethod === 'function' ||
        typeof props.initQuery === 'function')
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
        vm.$refs.selectTree && vm.$refs.selectTree.filter(value)
      }
    }

    state.previousQuery = value

    window.requestAnimationFrame(() => {
      if (state.visible) {
        state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
        state.showWarper = true
      }
    })
    state.hoverIndex = -1

    if (props.multiple && props.filterable && !props.shape) {
      nextTick(() => {
        if (vm.$refs.input) {
          const length = vm.$refs.input.value.length * 15 + 20
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
  ({ vm, constants }) =>
  (option) => {
    const target = Array.isArray(option) && option[0] ? option[0].el : option.el

    if (vm.$refs.popper && target) {
      const menu = vm.$refs.popper.$el.querySelector(constants.CLASS.SelectDropdownWrap)

      scrollIntoView(menu, target)
    }

    vm.$refs.scrollbar && vm.$refs.scrollbar.handleScroll()
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

export const clearNoMatchValue =
  ({ props, emit }) =>
  (newModelValue) => {
    if (!props.clearNoMatchValue) {
      return
    }

    if (
      (props.multiple && props.modelValue.length !== newModelValue.length) ||
      (!props.multiple && props.modelValue !== newModelValue)
    ) {
      emit('update:modelValue', newModelValue)
    }
  }

export const getOption =
  ({ props, state }) =>
  (value) => {
    let option
    const optionsList = props.optimization ? props.options : state.cachedOptions

    for (let i = optionsList.length - 1; i >= 0; i--) {
      const cachedOption = optionsList[i]
      const isEqual = isObject(value)
        ? getObj(cachedOption.value, props.valueKey) === getObj(value, props.valueKey)
        : cachedOption.value === value

      if (isEqual) {
        option = cachedOption
        break
      }
    }

    if (option) {
      if (!option.currentLabel) {
        option.currentLabel = option[props.textField]
      }

      return option
    }

    let label = ''
    if (!isObject(value) && !isNull(value) && !props.clearNoMatchValue) {
      label = value
    }

    let newOption = { value, currentLabel: label }

    if (props.multiple) {
      newOption.hitState = false
    }

    return newOption
  }

// 单选，获取匹配的option
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

  if (!option.currentLabel) {
    api.clearNoMatchValue('')
  }

  return option
}

// 多选，获取匹配的option
const getResultOfSetSelected = ({ props, isGrid, isTree, api }) => {
  let result = []
  const newModelValue = []

  if (Array.isArray(props.modelValue)) {
    props.modelValue.forEach((value) => {
      if (isGrid || isTree) {
        const option = api.getPluginOption(value, isTree)
        result = result.concat(option)

        if (props.clearNoMatchValue && option.length) {
          newModelValue.push(value)
        }
      } else {
        const option = api.getOption(value)
        if (!props.clearNoMatchValue || (props.clearNoMatchValue && option.currentLabel)) {
          result.push(option)
          newModelValue.push(value)
        }
      }
    })
  }

  api.clearNoMatchValue(newModelValue)

  return result
}

// 单选,树/表格，获取匹配的option
const setGridOrTreeSelected = ({ props, state, vm, isTree, api }) => {
  if (!props.modelValue) {
    state.selectedLabel = ''
    state.selected = {}
    state.currentKey = ''
    vm.$refs.selectGrid && vm.$refs.selectGrid.clearRadioRow()
    vm.$refs.selectTree && vm.$refs.selectTree.setCurrentKey && vm.$refs.selectTree.setCurrentKey(null)
    return
  }

  const isRemote =
    state.filterOrSearch &&
    props.remote &&
    (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')
  const nestdata = isRemote ? state.remoteData : isTree ? api.getTreeData(state.treeData) : state.gridData
  const data = find(nestdata, (item) => props.modelValue == item[props.valueField])

  if (isEmptyObject(data)) {
    api.clearNoMatchValue('')

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

// 多选,树/表格，获取匹配option
export const getPluginOption =
  ({ api, props, state }) =>
  (value, isTree) => {
    const isRemote =
      state.filterOrSearch &&
      props.remote &&
      (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')
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
  ({ api, emit, state, props }) =>
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

    const requiredValue = []
    if (props.multiple) {
      state.options.forEach((opt) => {
        if (opt.required) requiredValue.push(opt.value)
      })
    }

    if (Array.isArray(value)) {
      value = requiredValue.concat(value.filter((val) => !requiredValue.find((requireVal) => requireVal === val)))
    }

    api.setSoftFocus()

    state.isSilentBlur = true
    api.updateModelValue(value)
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
  ({ vm, state }) =>
  () => {
    if (!state.softFocus) {
      vm.$refs.reference?.focus()
    }
  }

export const blur =
  ({ vm, state }) =>
  () => {
    state.visible = false
    vm.$refs.reference?.blur()
  }

export const handleBlur =
  ({ constants, dispatch, emit, state }) =>
  (event) => {
    clearTimeout(state.timer)
    state.timer = setTimeout(() => {
      if (state.isSilentBlur) {
        state.isSilentBlur = false
      } else {
        emit('blur', event)
      }

      dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.formBlur, event?.target?.value)
    }, 200)

    state.softFocus = false
  }

export const handleClearClick = (api) => (event) => {
  api.deleteSelected(event)
}

export const doDestroy = (vm) => () => {
  vm.$refs.popper && vm.$refs.popper.doDestroy()
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
  ({ api, constants, props, state, vm }) =>
  (event) => {
    if (event.target.value.length <= 0 && !api.toggleLastOptionHitState()) {
      const value = props.modelValue.slice()

      value.pop()

      api.updateModelValue(value)

      api.emitChange(value)

      if (props.renderType === constants.TYPE.Grid) {
        const rows = state.selected.slice().filter((item) => value.includes(item[props.valueField]))

        vm.$refs.selectGrid.clearSelection()
        vm.$refs.selectGrid.setSelection(rows, true)
      }
    }
  }

export const managePlaceholder =
  ({ vm, state }) =>
  () => {
    if (state.currentPlaceholder !== '') {
      state.currentPlaceholder = vm.$refs.input.value ? '' : state.cachedPlaceHolder
    }
  }

export const resetInputState =
  ({ api, vm, state }) =>
  (event) => {
    if (event.keyCode !== 8) {
      api.toggleLastOptionHitState(false)
    }

    state.inputLength = vm.$refs.input.value.length * 15 + 20
    api.resetInputHeight()
  }

export const resetInputHeight =
  ({ constants, nextTick, props, vm, state, api, designConfig }) =>
  () => {
    if (state.collapseTags && !props.filterable) {
      return
    }

    nextTick(() => {
      if (!vm.$refs.reference) {
        return
      }

      const inputChildNodes = vm.$refs.reference.$el.childNodes
      const inputContainer = [].filter.call(inputChildNodes, (item) => hasClass(item, 'tiny-input-display-only'))[0]
      const input = inputContainer && inputContainer.querySelector('input')
      const tags = vm.$refs.tags

      if (!input) {
        return
      }

      if (!state.isDisplayOnly && props.hoverExpand && !props.disabled) {
        api.calcCollapseTags()
      }

      const sizeInMap = designConfig?.state?.initialInputHeight || state.initialInputHeight
      const noSelected = state.selected.length === 0

      if (!state.isDisplayOnly) {
        if (!noSelected && tags) {
          fastdom.measure(() => {
            const tagsClientHeight = tags.clientHeight

            fastdom.mutate(() => {
              input.style.height =
                Math.max(tagsClientHeight + (tagsClientHeight > sizeInMap ? constants.BORDER_HEIGHT : 0), sizeInMap) +
                'px'
            })
          })
        } else {
          input.style.height = noSelected ? sizeInMap + 'px' : Math.max(0, sizeInMap) + 'px'
        }
      } else {
        input.style.height = 'auto'
      }

      if (state.visible && state.emptyText !== false) {
        state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
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
  ({ api, nextTick, props, vm, state }) =>
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

      api.updateModelValue(value)
      api.emitChange(value)

      if (option.created) {
        state.query = ''
        api.handleQueryChange('')
        state.inputLength = 20
      }
      if (props.filterable) {
        vm.$refs.input?.focus()
      }
      if (props.searchable) {
        vm.$refs.reference?.focus()
      }
      if (props.autoClose) {
        state.visible = false
      }
    } else {
      api.updateModelValue(option.value)
      api.emitChange(option.value)

      // 修复select组件，创建条目选中再创建选中，还是上一次的数据
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

export const initValue =
  ({ state }) =>
  (vm) => {
    const isExist = state.initValue.find((val) => val === vm.value)
    !isExist && state.initValue.push(vm.value)
  }

export const setSoftFocus =
  ({ vm, state }) =>
  () => {
    state.softFocus = true

    const input = vm.$refs.input || vm.$refs.reference

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
  ({ vm, state, props }) =>
  (e) => {
    const event = e || window.event
    const enterCode = 13
    const nodeName = event.target && event.target.nodeName
    const toggleVisible = props.ignoreEnter ? event.keyCode !== enterCode && nodeName === 'INPUT' : true

    if (!state.selectDisabled) {
      toggleVisible && !state.softFocus && (state.visible = !state.visible)

      state.softFocus = false

      if (state.visible) {
        if (!(props.filterable && props.shape)) {
          const dom = vm.$refs.input || vm.$refs.reference
          dom?.focus()
        }
      }
    }
  }

export const selectOption =
  ({ api, state, props }) =>
  (e) => {
    if (!state.visible || props.hideDrop) {
      api.toggleMenu(e)
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

    let selectedValue = []
    if (props.multiple) {
      const requireOptions = state.options.filter((opt) => opt.required && opt.value)
      selectedValue = props.modelValue.slice().filter((v) => requireOptions.find((opt) => opt.value === v))
    }

    const value = props.multiple ? selectedValue : ''
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

    api.updateModelValue(value)
    api.emitChange(value)

    state.visible = false

    emit('clear')
  }

export const deleteTag =
  ({ api, constants, emit, props, state, nextTick, vm }) =>
  (event, tag) => {
    if (tag.required) return

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
        node.parent.data && treeIds.push(node.parent.data[props.valueField])
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

      api.updateModelValue(isTree ? treeValue : value)
      api.emitChange(value)

      emit(constants.EVENT_NAME.removeTag, tag[props.valueField])
      nextTick(() => state.key++)
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
  ({ vm, state }) =>
  () => {
    state.inputWidth = vm.$refs.reference?.$el?.getBoundingClientRect()?.width || 0
  }

export const handleResize =
  ({ api, props, state }) =>
  () => {
    api.resetInputWidth()

    if (props.multiple && !state.isDisplayOnly) {
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
      if (!option.disabled && !option.groupDisabled && option.state.visible) {
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
  if (!item) return

  if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
    return item.value || item[props.valueField]
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

      if (state.filterOrSearch && state.query && state.options.length >= 0 && state.filteredOptionsCount === 0) {
        return props.noMatchText || t(I18N.noMatch)
      }

      if (!state.options.some((option) => option.visible)) {
        return props.noDataText || t(I18N.noData)
      }

      if (props.remote && state.query === '' && state.options.length === 0) {
        if (props.shape === 'filter') {
          return ''
        } else {
          return false
        }
      }
    }

    return null
  }

export const watchValue =
  ({ api, constants, dispatch, props, vm, state }) =>
  (value, oldValue) => {
    if (props.multiple) {
      api.resetInputHeight()

      if ((value && value.length > 0) || (vm.$refs.input && state.query !== '')) {
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

    !state.isClickChoose && api.initQuery({ init: true }).then(() => api.setSelected())
    state.isClickChoose = false

    if (props.filterable && !props.multiple) {
      state.inputLength = 20
    }

    if (state.completed && !isEqual(value, oldValue)) {
      dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.formChange, value)
    }

    state.optimizeStore.flag && optmzApis.setValueIndex({ props, state })
  }

export const calcOverFlow =
  ({ vm, props, state }) =>
  (height) => {
    if (props.multiple && props.showOverflowTooltip) {
      state.overflow = false

      const tagDom = vm.$refs.tags
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

      vm.$refs.select.style.height = vm.$refs.select.style.height || height
      vm.$refs.reference.$el.style.position = 'absolute'

      const inputWidth = vm.$refs.select.getBoundingClientRect().width
      const position = state.visible ? 'absolute' : ''

      state.selectFiexd = {
        height,
        position,
        width: inputWidth + 'px',
        zIndex: PopupManager.nextZIndex()
      }

      state.inputWidth = inputWidth
    }
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
        state.selectedLabel = state.selected.state?.currentLabel || state.selected.currentLabel
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
    state.selectEmitter.emit(constants.EVENT_NAME.destroyPopper)
    props.remote && props.dropOnlySearch && (state.showWarper = false)

    vm.$refs.input?.blur()
    state.query = ''
    state.selectedLabel = ''
    state.inputLength = 20

    state.previousQuery !== state.query && api.initQuery().then(() => api.setSelected())

    if (props.renderType !== constants.TYPE.Tree) {
      state.previousQuery = props.remoteConfig.clearData && state.previousQuery !== state.query ? undefined : null
    }

    api.resetHoverIndex()

    nextTick(() => {
      if (vm.$refs.input && vm.$refs.input.value === '' && state.selected.length === 0) {
        state.currentPlaceholder = state.cachedPlaceHolder
      }

      if (vm.$refs.selectGrid) {
        vm.$refs.selectGrid.clearScroll()
      }
    })

    postOperOfToVisible({ props, state, constants })
  }

export const toHide =
  ({ constants, state, props, vm, api, nextTick }) =>
  () => {
    state.selectEmitter.emit(constants.COMPONENT_NAME.SelectDropdown)
    nextTick(() => {
      state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
    })

    if (state.filterOrSearch) {
      state.query =
        props.remote || props.shape ? '' : props.renderType !== constants.TYPE.Tree ? state.selectedLabel : ''

      state.previousQuery !== state.query && api.handleQueryChange(state.query)

      if (props.multiple) {
        // Select组件，下拉面板顶部增加搜索框时修改
        props.filterable ? vm.$refs.input?.focus() : vm.$refs.reference?.focus()
      } else {
        if (!props.remote) {
          state.selectEmitter.emit(constants.EVENT_NAME.queryChange)
          state.selectEmitter.emit(constants.COMPONENT_NAME.OptionGroup)
        }

        if (state.selectedLabel && !props.shape) {
          state.currentPlaceholder = state.selectedLabel
          state.selectedLabel = ''
        }
      }
    }

    if (vm.$refs.selectGrid) {
      let { fullData } = vm.$refs.selectGrid.getTableData()
      if (props.multiple) {
        const selectedIds = state.selected.map((sel) => sel[props.valueField])
        vm.$refs.selectGrid.clearSelection()
        vm.$refs.selectGrid.setSelection(
          fullData.filter((row) => ~selectedIds.indexOf(row[props.valueField])),
          true
        )
      } else {
        vm.$refs.selectGrid.clearRadioRow()
        vm.$refs.selectGrid.setRadioRow(find(fullData, (item) => props.modelValue == item[props.valueField]))
      }

      if (state.filterOrSearch && typeof props.filterMethod === 'function') {
        vm.$refs.selectGrid.handleTableData(true)
      } else if (
        state.filterOrSearch &&
        props.remote &&
        (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')
      ) {
        vm.$refs.selectGrid.handleTableData()
      }
    }
  }

export const watchVisible =
  ({ api, constants, emit, state, vm, props }) =>
  (value) => {
    if ((state.filterOrSearch || props.remote) && !value) {
      vm.$refs.reference?.blur()
    }

    if (api.onCopying()) {
      return
    }

    setTimeout(() => {
      if (!value && !state.selectedLabel) {
        state.cachedOptions.forEach((item) => {
          item.state.visible = true
        })
      }
    }, 200)

    value ? api.toHide() : api.toVisible()

    emit(constants.EVENT_NAME.visibleChange, value)

    if (!value && props.shape === 'filter') {
      state.softFocus = false
    }

    if (value && state.optimizeStore.flag) {
      optmzApis.createMacro(() => {
        optmzApis.setScrollTop({ refs: vm.$refs, state })
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
      (props.filterable || props.searchable || props.remote) &&
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
  ({ emit, props, state, api }) =>
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
        : $table.tableFullData.forEach((row) => remoteItem(row))
    }

    const keys = state.selected.map((item) => item[valueField])

    api.updateModelValue(keys)
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
  ({ emit, props, state, api }) =>
  ({ row }) => {
    row.value = row[props.valueField]
    row.currentLabel = row[props.textField]
    state.selected = row
    state.visible = false
    state.currentKey = row[props.valueField]

    api.updateModelValue(row.value)
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
  ({ emit, props, state, api, vm }) =>
  (data) => {
    if (!props.multiple) {
      data.currentLabel = data[props.textField]
      data.value = data[props.valueField]
      state.selected = data
      state.visible = false

      api.updateModelValue(data.value)
      emit('change', data)
    } else {
      if (props.treeOp.checkOnClickNode) {
        const checkedNodes = vm.$refs.selectTree.getCheckedNodes()
        const checkedKeys = vm.$refs.selectTree.getCheckedKeys()
        api.nodeCheckClick(data, { checkedNodes, checkedKeys })
      }
    }
  }

export const nodeCheckClick =
  ({ emit, props, state, api }) =>
  (data, { checkedKeys, checkedNodes }) => {
    const selected = state.selected.map((item) => api.getValueKey(item))
    if (isEqual(selected, checkedKeys)) {
      return
    }

    state.selected = checkedNodes.filter((node) => {
      node.currentLabel = node[props.textField]
      node.value = node[props.valueField]
    })

    api.updateModelValue(checkedKeys)
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
        let sortData = data.slice()
        if (props.multiple) {
          const requiredData = []

          sortData = sortData.filter((item) => {
            if (item.required) {
              requiredData.push(item)
              return false
            }
            return true
          })

          sortData = requiredData.concat(sortData)
        }

        if (props.cacheOp && props.cacheOp.key) {
          state.memorize = new Memorize(props.cacheOp)
          state.datas = state.memorize.assemble(sortData.slice())
        } else {
          state.datas = sortData
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
  (e) => {
    if (e.target === e.currentTarget) return

    state.inputHovering = true

    if (state.searchSingleCopy && state.selectedLabel) {
      state.softFocus = true
    }
  }

export const onMouseleaveNative =
  ({ state }) =>
  (e) => {
    if (e.target === e.currentTarget) return
    state.inputHovering = false

    if (state.searchSingleCopy && state.selectedLabel) {
      state.softFocus = false
    }
  }

export const onCopying =
  ({ state, vm }) =>
  () =>
    state.searchSingleCopy &&
    state.selectedLabel &&
    vm.$refs.reference &&
    vm.$refs.reference.hasSelection &&
    vm.$refs.reference.hasSelection()

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

export const handleDropdownClick =
  ({ emit }) =>
  ($event) => {
    emit('dropdown-click', $event)
  }

export const handleEnterTag =
  ({ state }) =>
  ($event, key) => {
    const target = $event.target
    if (target && target.scrollWidth > target.offsetWidth) {
      state.tooltipContent = { ...state.tooltipContent, [key]: target.innerText }
    }
  }

export const calcCollapseTags =
  ({ state, vm }) =>
  () => {
    if (state.inputHovering) {
      return (state.isHidden = true)
    }

    const tags = vm.$refs.tags

    if (!tags) {
      return
    }

    const { width: tagsContentWidth, paddingLeft, paddingRight } = window.getComputedStyle(tags)
    const tagsWidth = parseFloat(tagsContentWidth) - parseFloat(paddingLeft) - parseFloat(paddingRight)

    const collapseTag = tags.querySelector('.tiny-select__tags-collapse')
    const { width: collapseTagContentWidth, marginRight } = collapseTag && window.getComputedStyle(collapseTag)
    const collapseTagWidth = collapseTag && parseFloat(collapseTagContentWidth) + parseFloat(marginRight) // 4为右margin值

    const tagList = Array.from(tags.querySelectorAll('.tiny-tag'))

    let { total, dom, idx } = { total: collapseTagWidth, dom: null, idx: 0 }
    tagList.some((tag, index) => {
      if (tag !== collapseTag) {
        const { width: tagContentWidth, marginRight } = tag && window.getComputedStyle(tag)
        total += parseFloat(tagContentWidth) + parseFloat(marginRight)
      }
      if (tag !== collapseTag && total > tagsWidth && !dom) {
        dom = tag
        idx = index
      }
    })

    let isOneLine = total - collapseTagWidth <= tagsWidth // 单行不展示计数

    if (isOneLine) {
      return (state.isHidden = true)
    }

    if (dom) {
      dom.before(collapseTag)
      state.isHidden = false
    } else {
      state.isHidden = true
    }

    state.collapseTagsLength = tagList.length - idx
  }

export const watchInputHover =
  ({ vm }) =>
  (newVal) => {
    const [inputHovering, visible] = newVal
    if (!inputHovering && !visible) {
      const tags = vm.$refs.tags
      const content = vm.$refs['tags-content']
      tags && content && tags.scrollTo({ top: content })
    }
  }

export const initQuery =
  ({ props, state, constants, vm }) =>
  ({ init } = {}) => {
    const isRemote =
      props.filterable &&
      props.remote &&
      (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')
    const isGrid = props.renderType === constants.TYPE.Grid

    let selected
    if (isRemote && isGrid && props.initQuery) {
      let initData = props.initQuery(props.modelValue, props.extraQueryParams, !!init)
      if (initData.then) {
        return new Promise((resolve) => {
          initData.then((selected) => {
            state.remoteData = selected
            vm.$refs.selectGrid.loadData(selected)
            resolve(selected)
          })
        })
      }
      selected = initData
      state.remoteData = selected
      vm.$refs.selectGrid.loadData(selected)
    }

    return Promise.resolve(selected)
  }

export const mounted =
  ({ api, parent, state, props, vm, constants }) =>
  () => {
    state.defaultCheckedKeys = state.gridCheckedData
    const parentEl = parent.$el
    const inputEl =
      parentEl.querySelector('input.tiny-input__inner') || parentEl.querySelector('input.tiny-mobile-input__inner')
    const inputClientRect = inputEl?.getBoundingClientRect() || {}

    if (inputEl === document.activeElement) {
      document.activeElement?.blur()
    }

    state.completed = true

    const sizeMap = { mini: 28, small: 32, medium: 36 }

    if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
      state.currentPlaceholder = ''
    }

    state.initialInputHeight = state.isDisplayOnly
      ? sizeMap[state.selectSize] || constants.DEFAULT_HEIGHT
      : inputClientRect.height || sizeMap[state.selectSize] || constants.DEFAULT_HEIGHT

    addResizeListener(parentEl, api.handleResize)

    if (vm.$refs.tags) {
      addResizeListener(vm.$refs.tags, api.resetInputHeight)
    }

    if (props.remote && props.multiple) {
      api.resetInputHeight()
    }

    state.inputWidth = inputClientRect.width

    api.initQuery({ init: true }).then(() => api.setSelected())

    if (props.dataset) {
      api.watchPropsOption()
    }
  }

export const unMount =
  ({ api, parent, vm, state }) =>
  () => {
    if (parent.$el && api.handleResize) {
      removeResizeListener(parent.$el, api.handleResize)
    }

    if (vm.$refs.tags) {
      removeResizeListener(vm.$refs.tags, api.resetInputHeight)
    }

    state.popperElm = null

    state.optimizeStore.flag && optmzApis.removeScrollListener({ api, refs: vm.$refs, state })
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
  ({ api, props, vm, state }) =>
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

          optmzApis.addScrollListener({ api, refs: vm.$refs, state })
          optmzApis.updateItems({ refs: vm.$refs, state, itemFn })
        })
      }
    }
  }

export const getScrollListener = ({ props, vm, state }) => {
  const listener = () => {
    const { options } = props
    const { optimizeOpts } = state
    const { optionHeight } = optimizeOpts
    const viewHeight = optionHeight * options.length
    const { clientHeight, scrollTop } = optmzApis.queryWrap(vm.$refs)
    const maxScrollTop = viewHeight - clientHeight
    const start = Math.floor(scrollTop / optionHeight)

    if (scrollTop <= maxScrollTop) {
      optmzApis.process({ props, start, state })

      optmzApis.createMacro(() => {
        const itemFn = (i) => scrollTop + optionHeight * i - (scrollTop % optionHeight)

        optmzApis.updateItems({ refs: vm.$refs, state, itemFn })
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

export const updateModelValue =
  ({ emit, state }) =>
  (value) => {
    state.isClickChoose = true
    emit('update:modelValue', value)
  }

export const getLabelSlotValue =
  ({ props, state }) =>
  (item) => {
    const datas = state.optimizeStore.flag ? state.optimizeStore.datas : state.datas
    const value = item.state ? item.state.currentValue : item.value
    const data = datas.find((data) => data.value === value)

    const obj = {
      ...data,
      label: item.state ? item.state.currentLabel : item.currentLabel,
      value
    }
    return ['grid', 'tree'].includes(props.renderType) ? item : obj
  }

export const computedTagsStyle =
  ({ props, parent, state }) =>
  () => {
    const isReadonly = props.disabled || (parent.form || {}).disabled || props.displayOnly

    // 原来是 { 'max-width': state.inputWidth - 32 + 'px', width: '100%' }
    return {
      'max-width': isReadonly ? '' : state.inputWidth - state.inputPaddingRight + 'px',
      width: '100%'
    }
  }

export const computedReadonly =
  ({ props, state }) =>
  () =>
    props.readonly ||
    !props.filterable ||
    props.multiple ||
    (browserInfo.name !== BROWSER_NAME.IE && browserInfo.name !== BROWSER_NAME.Edge && !state.visible)

export const computedShowClose =
  ({ props, state }) =>
  () =>
    props.clearable &&
    !state.selectDisabled &&
    state.inputHovering && //  新增 || (props.multiple && state.visible)
    (props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length > 0
      : !isNull(props.modelValue) && props.modelValue !== '')

export const computedCollapseTagSize = (state) => () => state.selectSize

export const computedShowNewOption =
  ({ props, state }) =>
  () =>
    props.filterable &&
    props.allowCreate &&
    state.query !== '' &&
    !state.options.filter((option) => !option.created).some((option) => option.state.currentLabel === state.query)

export const computedShowCopy =
  ({ props, state }) =>
  () =>
    props.multiple && props.copyable && state.inputHovering && state.selected.length

export const computedOptionsAllDisabled = (state) => () =>
  state.options.filter((option) => option.visible).every((option) => option.disabled)

export const computedDisabledTooltipContent = (state) => () =>
  state.selected.map((item) => (item.state ? item.state.currentLabel : item.currentLabel)).join('；')

export const computedSelectDisabled =
  ({ props, parent }) =>
  () =>
    props.disabled || (parent.form || {}).disabled || props.displayOnly || (parent.form || {}).displayOnly

export const computedIsExpandAll = (props) => () => {
  const { defaultExpandAll, lazy } = props.treeOp
  return !lazy && defaultExpandAll !== false
}

export const loadTreeData =
  ({ state, vm, props, api }) =>
  ({ data = [], init = false }) => {
    const getTreeDatas = (datas, newDatas = []) => {
      datas.forEach(({ data, childNodes }) => {
        let temData = { ...data, children: [] }

        if (childNodes && childNodes.length) {
          getTreeDatas(childNodes, temData.children)
        }

        newDatas.push(temData)
      })
    }

    if (init) {
      state.treeData = data
    } else if (vm.$refs.selectTree) {
      const treeData = []
      getTreeDatas(vm.$refs.selectTree.state.root.childNodes, treeData)
      state.treeData = treeData

      const { multiple, treeOp } = props
      if (multiple && treeOp.lazy) {
        const checkedNodes = vm.$refs.selectTree.getCheckedNodes()
        const checkedKeys = vm.$refs.selectTree.getCheckedKeys()
        api.nodeCheckClick(null, { checkedNodes, checkedKeys })
      }
    }
  }

export const watchInitValue =
  ({ props, emit }) =>
  (value) => {
    if (props.multiple) {
      let modelValue = props.modelValue.slice()

      value.forEach((val) => {
        modelValue = modelValue.filter((item) => item !== val)
      })

      emit('update:modelValue', value.concat(modelValue))
    }
  }

export const watchShowClose =
  ({ nextTick, state, parent }) =>
  () => {
    nextTick(() => {
      const parentEl = parent.$el
      const inputEl = parentEl.querySelector('input.tiny-input__inner')

      if (inputEl) {
        const { paddingRight } = getComputedStyle(inputEl)

        state.inputPaddingRight = parseFloat(paddingRight)
      }
    })
  }

export const computedGetIcon =
  ({ constants, designConfig, props }) =>
  (name) => {
    return props.dropdownIcon || designConfig?.icons[name] || constants?.ICON_MAP[name]
  }

export const computedGetTagType =
  ({ designConfig, props }) =>
  () => {
    if (designConfig?.props?.tagType && !props.tagType) {
      return designConfig.props.tagType
    }
    return props.tagType
  }

export const computedShowDropdownIcon =
  ({ props, state }) =>
  () => {
    return !state.showClose && !(props.remote && props.filterable && !props.remoteConfig.showIcon)
  }
