import { find } from '../common/array'
import { getObj, isEqual } from '../common/object'
import { isKorean } from '../common/string'
import scrollIntoView from '../common/deps/scroll-into-view'
import PopupManager from '../common/deps/popup-manager'
import debounce from '../common/deps/debounce'
import { getDataset } from '../common/dataset'
import Memorize from '../common/deps/memorize'
import { isEmptyObject } from '../common/type'
import { addResizeListener, removeResizeListener } from '../common/deps/resize-event'
import { extend } from '../common/object'
import { BROWSER_NAME } from '../common'
import browserInfo from '../common/browser'
import { isNull } from '../common/type'
import { fastdom } from '../common/deps/fastdom'
import { deepClone } from '../picker-column'
import { escapeRegexpString } from '../option'
import { isBrowser } from '../common/browser'

export const handleComposition =
  ({ api, nextTick, state }) =>
  (event) => {
    const text = event.target.value

    if (event.type === 'compositionend') {
      state.isOnComposition = false
      const isChange = false
      const isInput = true

      nextTick(() => api.handleQueryChange(text, isChange, isInput))
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
          vm.$refs.selectGrid.setRadioRow(find(data, (item) => props.modelValue === item[props.valueField]))
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
  ({ props, state, constants, api, nextTick }) =>
  (value, isInput) => {
    if (props.remote && (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')) {
      state.hoverIndex = -1
      props.remoteMethod && props.remoteMethod(value, props.extraQueryParams)
    } else if (typeof props.filterMethod === 'function') {
      props.filterMethod(value)
      state.selectEmitter.emit(constants.COMPONENT_NAME.OptionGroup, constants.EVENT_NAME.queryChange)
    } else {
      api.queryChange(value, isInput)
    }
    setFilteredSelectCls(nextTick, state, props)
    api.getOptionIndexArr()

    state.magicKey = state.magicKey > 0 ? -1 : 1
  }

export const queryChange =
  ({ props, state, constants }) =>
  (value, isInput) => {
    if (props.optimization && isInput) {
      const filterDatas = state.initDatas.filter((item) => new RegExp(escapeRegexpString(value), 'i').test(item.label))
      state.datas = filterDatas
    } else {
      state.selectEmitter.emit(constants.EVENT_NAME.queryChange, value)
    }
  }

const setFilteredSelectCls = (nextTick, state, props) => {
  nextTick(() => {
    if (props.multiple && props.showAlloption && props.filterable && state.query && !props.remote) {
      const filterSelectedVal = state.options
        .filter((item) => item.state.visible && item.state.itemSelected)
        .map((opt) => opt.value)
      const visibleOptions = state.options.filter((item) => item.state.visible)
      if (filterSelectedVal.length === visibleOptions.length) {
        state.filteredSelectCls = 'checked-sur'
      } else if (filterSelectedVal.length === 0) {
        state.filteredSelectCls = 'check'
      } else {
        state.filteredSelectCls = 'halfselect'
      }
    }
  })
}

export const handleQueryChange =
  ({ api, constants, nextTick, props, vm, state }) =>
  (value, isChange = false, isInput = false) => {
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

    state.query = value
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
        const length = vm.$refs.input.value.length * 15 + 20
        state.inputLength = state.collapseTags ? Math.min(50, length) : length
        api.managePlaceholder()
        api.resetInputHeight()
      })
    }

    state.triggerSearch = true

    api.defaultOnQueryChange(value, isInput)
  }

export const scrollToOption =
  ({ vm, constants }) =>
  (option) => {
    const target =
      Array.isArray(option) && option[0] && option[0].state ? option[0].state.el : option.state ? option.state.el : ''
    if (vm.$refs.popper && target) {
      const menu = vm.$refs.popper.$el.querySelector(constants.CLASS.SelectDropdownWrap)
      setTimeout(() => scrollIntoView(menu, target))
    }

    vm.$refs.scrollbar && vm.$refs.scrollbar.handleScroll()
  }

export const handleMenuEnter =
  ({ api, nextTick, state, props }) =>
  () => {
    if (!props.optimization) {
      nextTick(() => api.scrollToOption(state.selected))
    }
  }

export const emitChange =
  ({ emit, props, state, constants }) =>
  (value, changed) => {
    if (state.device === 'mb' && props.multiple && !changed) return

    if (!isEqual(props.modelValue, state.compareValue)) {
      emit('change', value)
    }
  }

export const directEmitChange =
  ({ emit, props, state }) =>
  (value, key) => {
    if (state.device === 'mb' && props.multiple) return

    emit('change', value, key)
  }

export const getOption =
  ({ props, state, api }) =>
  (value) => {
    let option
    const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
    const isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]'
    const isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]'

    if (state.cachedOptions.length !== 0) {
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
    } else if (!isEmptyObject(state.selected)) {
      return state.selected
    }

    if (props.optimization) {
      option = api.getSelectedOption(value)
      if (option) {
        return { value: option.value, currentLabel: option.label || option.currentLabel }
      }

      option = state.datas.find((v) => getObj(v, props.valueKey) === value)
      if (option) {
        return { value: option.value, currentLabel: option.label || option.currentLabel }
      }
    }
    // tiny 新增 clearNoMatchValue的条件
    const label = !isObject && !isNull && !isUndefined && !props.clearNoMatchValue ? value : ''
    let newOption = { value, currentLabel: label }

    if (props.multiple) {
      newOption.hitState = false
    }

    return newOption
  }

export const getSelectedOption =
  ({ props, state }) =>
  (value) => {
    let option
    if (props.multiple) {
      option = state.selected.find((v) => getObj(v, props.valueKey) === value)
    } else {
      if (!isEmptyObject(state.selected) && getObj(state.selected, props.valueKey) === value) {
        option = state.selected
      }
    }

    return option
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

  // tiny 新增
  if (!option.currentLabel) {
    api.clearNoMatchValue('')
  }

  return option
}

// 多选，获取匹配的option
const getResultOfSetSelected = ({ state, api, props }) => {
  let result = []
  const newModelValue = [] // tiny 新增，用于 clearNoMatchValue

  if (Array.isArray(state.modelValue)) {
    state.modelValue.forEach((value) => {
      // tiny 新增
      const option = api.getOption(value)
      if (!props.clearNoMatchValue || (props.clearNoMatchValue && option.label)) {
        result.push(option)
        newModelValue.push(value)
      }
    })
  }
  // tiny 新增
  api.clearNoMatchValue(newModelValue)

  return result
}

export const setSelected =
  ({ api, nextTick, props, vm, state }) =>
  () => {
    if (!props.multiple) {
      const option = getOptionOfSetSelected({ api, props })
      state.selected = option
      state.selectedLabel = option.state.currentLabel || option.currentLabel
      props.filterable && !props.shape && (state.query = state.selectedLabel)
    } else {
      const result = getResultOfSetSelected({ state, props, api })
      state.selectCls = result.length
        ? result.length === state.options.length
          ? 'checked-sur'
          : 'halfselect'
        : 'check'

      if (state.selected.length === 0 || !state.selected[0].currentLabel) {
        state.selected = result
      }

      vm.$refs.selectTree && vm.$refs.selectTree.setCheckedNodes && vm.$refs.selectTree.setCheckedNodes(state.selected)
      state.tips = state.selected.map((item) => (item.state ? item.state.currentLabel : item.currentLabel)).join(',')

      setFilteredSelectCls(nextTick, state, props)
      nextTick(api.resetInputHeight)
    }
  }

// 多选,树/表格，获取匹配option
export const getPluginOption =
  ({ props, state }) =>
  (value) => {
    const isRemote =
      props.filterable &&
      props.remote &&
      (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')
    const { textField, valueField } = props
    const sourceData = isRemote ? state.remoteData : state.gridData
    const selNode = find(sourceData, (item) => item[valueField] === value)
    const items = []

    if (selNode) {
      selNode.currentLabel = selNode[textField]
      items.push(selNode)
    }

    return items
  }

export const toggleCheckAll =
  ({ api, state }) =>
  (filtered) => {
    let value = []
    // 1. 需要控制勾选或去勾选的项
    const enabledValues = state.options
      .filter((op) => !op.state.disabled && !op.state.groupDisabled && !op.required && op.state.visible)
      .map((op) => op.value)

    if (filtered) {
      if (state.filteredSelectCls === 'check' || state.filteredSelectCls === 'halfselect') {
        value = [...new Set([...state.modelValue, ...enabledValues])]
      } else {
        value = state.modelValue.filter((val) => !enabledValues.includes(val))
      }
    } else {
      if (state.selectCls === 'check') {
        value = enabledValues
      } else if (state.selectCls === 'halfselect') {
        const unchecked = state.options.filter((item) => !item.state.disabled && item.state.selectCls === 'check')

        unchecked.length ? (value = enabledValues) : (value = [])
      } else if (state.selectCls === 'checked-sur') {
        value = []
      }
    }
    // 2. 必选项
    const requiredValue = state.options.filter((op) => op.required).map((op) => op.value)

    // 3. 禁用且已设置为勾选的项
    const disabledSelectedValues = state.options
      .filter((op) => (op.state.disabled || op.state.groupDisabled) && op.state.selectCls === 'checked-sur')
      .map((op) => op.value)

    value = [...value, ...requiredValue, ...disabledSelectedValues]

    api.setSoftFocus()

    state.isSilentBlur = true
    api.updateModelValue(value)
    api.directEmitChange(value)
  }

export const handleFocus =
  ({ emit, props, state }) =>
  (event) => {
    if (!state.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        state.visible = true
        state.softFocus = true
      }

      emit('focus', event)
    } else {
      if (state.searchSingleCopy && state.selectedLabel) {
        emit('focus', event)
      }

      state.softFocus = false
    }
  }

export const focus =
  ({ vm, state }) =>
  () => {
    if (!state.softFocus) {
      vm.$refs.reference.focus()
    }
  }

export const blur =
  ({ vm, state }) =>
  () => {
    state.visible = false
    vm.$refs.reference.blur()
  }

export const handleBlur =
  ({ constants, dispatch, emit, state, designConfig }) =>
  (event) => {
    clearTimeout(state.timer)
    state.timer = setTimeout(() => {
      if (state.isSilentBlur) {
        state.isSilentBlur = false
      } else {
        emit('blur', event)
      }
      if (designConfig?.state?.delayBlur) {
        dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.formBlur, event.target.value)
      }
    }, 200)
    // tiny 新增： 表单校验不能异步，否则弹窗中嵌套表单会出现弹窗关闭后再出现校验提示的bug
    if (!designConfig?.state?.delayBlur) {
      dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.formBlur, event.target.value)
    }

    state.softFocus = false
  }

export const handleClearClick = (api) => (event) => {
  api.deleteSelected(event)
}

export const doDestroy = (vm) => () => {
  // 解决在特殊场景（表格使用select编辑器），选中下拉数据的一瞬间select组件被销毁时控制台报错的问题
  if (vm?.$refs?.popper) {
    vm.$refs.popper.doDestroy()
  }
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

    if (option.required) {
      return true
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
  ({ api, state }) =>
  (event) => {
    if (event.target.value.length <= 0 && !api.toggleLastOptionHitState()) {
      const value = state.modelValue.slice()

      value.pop()

      state.compareValue = deepClone(value)

      api.updateModelValue(value)

      api.emitChange(value)
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

      let input = vm.$refs.reference.type === 'text' && vm.$refs.reference.$el.querySelector('input')
      const tags = vm.$refs.tags
      const limitText = vm.$refs.reference.$el.querySelector('span.tiny-select__limit-txt')

      if (!input) {
        return
      }

      if (!state.isDisplayOnly && (props.hoverExpand || props.clickExpand) && !props.disabled) {
        api.calcCollapseTags()
      }

      const sizeInMap =
        designConfig?.state.initialInputHeight || state.initialInputHeight || (state.isSaaSTheme ? 28 : 30)
      const noSelected = state.selected.length === 0
      // tiny 新增的spacing (design中配置：aui为4，smb为0，tiny 默认为0)
      const spacingHeight = designConfig ? designConfig.state?.spacingHeight : constants.SPACING_HEIGHT

      if (!state.isDisplayOnly) {
        if (!noSelected && tags) {
          fastdom.measure(() => {
            const tagsClientHeight = tags.clientHeight

            fastdom.mutate(() => {
              input.style.height = Math.max(tagsClientHeight + spacingHeight, sizeInMap) + 'px'
            })
          })
        } else {
          input.style.height = noSelected ? sizeInMap + 'px' : Math.max(0, sizeInMap) + 'px'
        }
      } else {
        input.style.height = 'auto'
      }

      // tags给字数限制
      if (limitText && props.multipleLimit) {
        const { width, marginLeft, marginRight } = getComputedStyle(limitText)
        vm.$refs.tags.style.paddingRight = `${Math.ceil(
          parseFloat(width) + parseFloat(marginLeft) + parseFloat(marginRight)
        )}px`
      }

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

export const resetDatas =
  ({ props, state }) =>
  () => {
    if (props.optimization && !props.remote && !props.filterMethod) {
      state.datas = state.initDatas
    }
  }

export const handleOptionSelect =
  ({ api, nextTick, props, vm, state }) =>
  (option, byClick) => {
    state.memorize && state.memorize.updateByKey(option[state.memorize._dataKey] || option.value)

    if (props.multiple) {
      const value = (state.modelValue || []).slice()
      const optionIndex = api.getValueIndex(value, option.value)

      if (optionIndex > -1) {
        value.splice(optionIndex, 1)
      } else if (state.multipleLimit <= 0 || value.length < state.multipleLimit) {
        value.push(option.value)
      }

      state.compareValue = deepClone(value)

      api.updateModelValue(value)

      api.emitChange(value)

      if (option.created) {
        const isChange = false
        const isInput = true

        state.query = ''
        api.handleQueryChange('', isChange, isInput)

        state.inputLength = 20
      }

      if (props.filterable) {
        vm.$refs.input.focus()
      }

      if (props.autoClose) {
        state.visible = false
      }
    } else {
      state.compareValue = deepClone(option.value)

      api.updateModelValue(option.value)

      api.emitChange(option.value)

      // tiny 新增 修复select组件，创建条目选中再创建选中，还是上一次的数据
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

    if (input) {
      input.focus()
    }

    // tiny 新增： 解决 reference 插槽时，选择数据后，需要点2次才能打开下拉面板
    state.softFocus = false
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
  ({ vm, state, props, api }) =>
  (e) => {
    if (props.keepFocus && state.visible && props.filterable) {
      return
    }

    const event = e || window.event
    const enterCode = 13
    const nodeName = event.target && event.target.nodeName
    const toggleVisible = props.ignoreEnter ? event.keyCode !== enterCode && nodeName === 'INPUT' : true

    if (!props.displayOnly) {
      event.stopPropagation()
    }

    if (!state.selectDisabled) {
      toggleVisible && !state.softFocus && (state.visible = !state.visible)
      state.softFocus = false

      if (state.visible) {
        if (!(props.filterable && props.shape)) {
          const dom = vm.$refs.input || vm.$refs.reference
          dom?.focus && dom.focus()
          api.setOptionHighlight()
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
      let option = ''
      if (state.query || props.remote) {
        option = state.options.find((item) => item.state.index === state.hoverValue)
      } else {
        option = state.options[state.hoverIndex]
      }
      option && api.handleOptionSelect(option)
    }
  }

export const deleteSelected =
  ({ api, emit, props, state }) =>
  (event) => {
    event && event.stopPropagation()

    let selectedValue = []
    if (props.multiple) {
      const requireOptions = state.options.filter((opt) => opt.required && opt.value)
      selectedValue = state.modelValue.slice().filter((v) => requireOptions.find((opt) => opt.value === v))
    }

    const value = props.multiple ? selectedValue : ''

    state.showTip = false
    state.compareValue = deepClone(value)

    api.updateModelValue(value, true)

    api.emitChange(value, true)

    state.visible = false

    emit('clear')
  }

export const deleteTag =
  ({ api, constants, emit, props, state, nextTick, vm }) =>
  (event, tag) => {
    if (tag.required) return

    const index = state.selected.indexOf(tag)

    if (index > -1 && !state.selectDisabled) {
      const value = state.modelValue.slice()
      value.splice(index, 1)

      state.compareValue = deepClone(value)

      api.updateModelValue(value)

      api.emitChange(value)

      emit(constants.EVENT_NAME.removeTag, tag[props.valueField])
      nextTick(() => state.key++)
    }

    event && event.stopPropagation()
  }

export const onInputChange =
  ({ api, props, state, constants, nextTick }) =>
  () => {
    if (!props.delay) {
      if (props.filterable && state.query !== state.selectedLabel) {
        const isChange = false
        const isInput = true

        state.query = state.selectedLabel
        api.handleQueryChange(state.query, isChange, isInput)

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
    // tiny 新增：由于当有reference 插槽时， 就没有 vm.$refs.reference 对象了。
    if (vm.$refs.reference && vm.$refs.reference.$el) {
      state.inputWidth = vm.$refs.reference.$el.getBoundingClientRect().width
    }
  }

export const handleResize =
  ({ api, props, state }) =>
  () => {
    api.resetInputWidth()

    if (props.multiple && !state.isDisplayOnly) {
      api.resetInputHeight()
    }
  }

export const setOptionHighlight = (state) => () => {
  for (let i = 0; i < state.options.length; ++i) {
    const option = state.options[i]

    if (
      !option.disabled &&
      !option.groupDisabled &&
      !option.state.created &&
      option.state.visible &&
      option.state.itemSelected
    ) {
      state.hoverIndex = i
      break
    }
  }
}

export const checkDefaultFirstOption = (state) => () => {
  state.hoverIndex = -1

  let hasCreated = false

  const visibleOptions = state.options.filter((item) => item.visible && item.state.visible)

  for (let i = visibleOptions.length - 1; i >= 0; i--) {
    if (visibleOptions[i].created) {
      hasCreated = true
      state.hoverIndex = i
      state.hoverValue = state.optionIndexArr[i]

      break
    }
  }

  if (hasCreated) {
    return
  }

  for (let i = 0; i < visibleOptions.length; i++) {
    const option = visibleOptions[i]

    if (state.query) {
      if (!option.disabled && !option.groupDisabled && option.state.visible && option.visible) {
        state.hoverIndex = i
        state.hoverValue = state.optionIndexArr[i]

        break
      }
    } else {
      if (option.itemSelected) {
        state.hoverIndex = i
        state.hoverValue = state.optionIndexArr[i]

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
  ({ api, state, props, nextTick }) =>
  (direction) => {
    const { optimization } = props

    if (optimization) {
      return
    }
    const len = state.options.filter((item) => item.visible && item.state.visible).length

    if (!state.visible) {
      state.visible = true
      return
    }

    if (len === 0 || state.filteredOptionsCount === 0) {
      return
    }

    state.disabledOptionHover = true
    setTimeout(() => {
      state.disabledOptionHover = false
    }, 100)

    if (state.hoverIndex < -1 || state.hoverIndex >= len) {
      state.hoverIndex = 0
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

      let option = {}

      state.hoverValue = state.optionIndexArr[state.hoverIndex]

      if (state.query || props.remote) {
        option = state.options.find((item) => item.state.index === state.hoverValue)
      } else {
        option = state.options[state.hoverIndex]
      }

      if (
        option.disabled === true ||
        option.groupDisabled === true ||
        !option.state.visible ||
        option.state.limitReached
      ) {
        api.navigateOptions(direction)
      }

      nextTick(() => api.scrollToOption(state.hoverIndex === -9 ? {} : option || {}))
    }
  }

export const emptyFlag =
  ({ props, state }) =>
  () => {
    if (props.optimization) {
      if (props.allowCreate) {
        return state.query === '' && state.datas.length === 0
      } else {
        return state.datas.length === 0
      }
    } else {
      return state.options.length === 0
    }
  }

export const recycleScrollerHeight =
  ({ state, props, recycle }) =>
  () => {
    const { ITEM_HEIGHT, SAFE_MARGIN, SAAS_HEIGHT, AURORA_HEIGHT } = recycle
    let length = state.datas.length
    if (state.showNewOption) {
      length += 1
    }

    if (length === 0 || props.loading) {
      return 0
    } else if (length < 6) {
      return length * ITEM_HEIGHT + (state.isSaaSTheme ? SAFE_MARGIN * 2 : 0)
    } else {
      return state.isSaaSTheme ? SAAS_HEIGHT : AURORA_HEIGHT
    }
  }

export const emptyText =
  ({ I18N, props, state, t, isMobileFirstMode }) =>
  () => {
    if (props.loading) {
      return props.loadingText || t(I18N.loading)
    }

    if (props.remote && state.query === '' && props.renderType) {
      return remoteEmptyText(props, state)
    }

    if (props.remote && state.query === '' && state.emptyFlag && !state.triggerSearch) {
      return props.shape === 'filter' || isMobileFirstMode ? '' : false
    }

    if (
      props.filterable &&
      state.query &&
      ((props.remote && state.emptyFlag) || !state.options.some((option) => option.visible && option.state.visible))
    ) {
      return props.noMatchText || t(I18N.noMatch)
    }

    if (state.emptyFlag) {
      return props.noDataText || t(I18N.noData)
    }

    return null
  }

const remoteEmptyText = function (props, state) {
  if (props.multiple) {
    return state.selected.length > 0 || state.remoteData.length >= 0
  }

  return state.selected[props.valueField] || state.remoteData.length >= 0
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

      if (props.filterable && !props.reserveKeyword) {
        // tiny 优化： 多选且props.reserveKeyword为false时， aui此处会多请求一次
        // searchable时，不清空query, 这样才能保持搜索结果
        !props.searchable && (state.query = '')
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

    props.optimization && optmzApis.setValueIndex({ props, state })
  }

export const calcOverFlow =
  ({ vm, props, state }) =>
  (height) => {
    if (props.multiple && props.showOverflowTooltip) {
      state.overflow = false

      const tagDom = vm.$refs.tags
      const tags = tagDom.querySelectorAll('[data-tag="tiny-tag"]')

      if (tags.length) {
        tagDom.scrollTo && tagDom.scrollTo({ top: 0 })
        let { x, width } = tags[0].getBoundingClientRect()

        if (width >= tagDom.getBoundingClientRect().width) {
          state.overflow = 0
        } else {
          for (let i = 1; i < tags.length; i++) {
            let tx = tags[i].getBoundingClientRect().x

            if (tx === x) {
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
    if (props.filterable && props.allowCreate && state.createdSelected && state.createdLabel) {
      state.selectedLabel = state.createdLabel
    } else {
      state.selectedLabel = state.selected.state.currentLabel || state.selected.currentLabel
    }

    if (props.filterable) {
      state.query = state.selectedLabel
    }

    if (props.filterable) {
      state.currentPlaceholder = state.cachedPlaceHolder
    }
  }
}

export const toVisible =
  ({ constants, state, props, vm, api, nextTick }) =>
  () => {
    state.selectEmitter.emit(constants.EVENT_NAME.destroyPopper)
    props.remote && props.dropOnlySearch && (state.showWarper = false)

    if (vm.$refs.input) {
      vm.$refs.input.blur()
    }

    state.query = ''
    state.selectedLabel = ''
    state.inputLength = 20
    state.previousQuery !== state.query && api.initQuery().then(() => api.setSelected())

    state.previousQuery = null

    api.resetHoverIndex()
    api.resetDatas()

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
  ({ constants, state, props, vm, api }) =>
  () => {
    const { filterable, remote, remoteConfig, shape, multiple, valueField } = props

    state.selectEmitter.emit(constants.COMPONENT_NAME.SelectDropdown, constants.EVENT_NAME.updatePopper)

    if (filterable) {
      state.query = remote || shape ? '' : state.selectedLabel
      const isChange = remote && remoteConfig.autoSearch && (state.firstAutoSearch || remoteConfig.clearData)
      state.firstAutoSearch = false
      api.handleQueryChange(state.query, isChange)

      if (multiple) {
        vm.$refs.input.focus()
      } else {
        if (!remote) {
          state.selectEmitter.emit(constants.EVENT_NAME.queryChange, '')

          state.selectEmitter.emit(constants.COMPONENT_NAME.OptionGroup, constants.EVENT_NAME.queryChange)
        }

        if (state.selectedLabel && !shape) {
          state.currentPlaceholder = state.selectedLabel
          state.selectedLabel = ''
        }
      }
    }

    if (vm.$refs.selectGrid) {
      let { fullData } = vm.$refs.selectGrid.getTableData()
      if (multiple) {
        const selectedIds = state.selected.map((sel) => sel[valueField])
        vm.$refs.selectGrid.clearSelection()
        vm.$refs.selectGrid.setSelection(
          fullData.filter((row) => ~selectedIds.indexOf(row[valueField])),
          true
        )
      } else {
        vm.$refs.selectGrid.clearRadioRow()
        vm.$refs.selectGrid.setRadioRow(find(fullData, (item) => props.modelValue === item[valueField]))
      }

      if (filterable && typeof props.filterMethod === 'function') {
        vm.$refs.selectGrid.handleTableData(true)
      } else if (
        filterable &&
        remote &&
        (typeof props.remoteMethod === 'function' || typeof props.initQuery === 'function')
      ) {
        vm.$refs.selectGrid.handleTableData()
      }
    }
  }

export const watchVisible =
  ({ api, constants, emit, state, vm, props }) =>
  (value) => {
    if ((props.filterable || props.remote) && !value) {
      vm.$refs.reference.blur()
    }

    if (api.onCopying()) {
      return
    }

    if (value && props.multiple && state.device === 'mb') {
      state.selectedCopy = state.selected.slice()
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

    setTimeout(() => {
      state.selectEmitter.emit(constants.EVENT_NAME.updatePopper)
      if (value && vm.$refs.scrollbar) {
        if (props.optimization) {
          optmzApis.setScrollTop({ refs: vm.$refs, state })
          vm.$refs.scrollbar.updateVisibleItems(true, true)
        } else {
          vm.$refs.scrollbar.handleScroll()
        }
      }
    }, props.updateDelay)

    if (!value && props.shape === 'filter') {
      state.softFocus = false
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

    api.getOptionIndexArr()
  }

export const getOptionIndexArr =
  ({ props, state, api }) =>
  () => {
    setTimeout(() => {
      state.optionIndexArr = api.queryVisibleOptions().map((item) => Number(item.getAttribute('data-index')))
      if (props.defaultFirstOption && (props.filterable || props.remote) && state.filteredOptionsCount) {
        if (props.optimization) {
          optmzApis.checkDefaultFirstOption({ state })
        } else {
          api.checkDefaultFirstOption()
        }
      }
    })
  }

export const queryVisibleOptions =
  ({ props, vm, isMobileFirstMode }) =>
  () => {
    if (props.optimization) {
      return optmzApis.queryVisibleOptions(vm, isMobileFirstMode)
    } else {
      return vm.$refs.scrollbar
        ? Array.from(vm.$refs.scrollbar.$el.querySelectorAll('[data-index]:not([style*="display: none"])'))
        : []
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

export const debouncRquest = ({ api, state, props }) =>
  debounce(props.delay, () => {
    if (props.filterable && state.query !== state.selectedLabel) {
      const isChange = false
      const isInput = true

      state.query = state.selectedLabel
      api.handleQueryChange(state.query, isChange, isInput)
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
    const dataset = {
      dataset: props.options || props.dataset,
      service: parent.$service
    }
    getDataset(dataset).then((data) => {
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
        state.initDatas = sortData
      }
    })
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
  (e) => {
    if (e.target === e.currentTarget) return
    state.inputHovering = false

    if (state.searchSingleCopy && state.selectedLabel) {
      state.softFocus = false
    }
  }

export const onCopying =
  ({ state, vm }) =>
  () => {
    return (
      state.searchSingleCopy &&
      state.selectedLabel &&
      vm.$refs.reference &&
      vm.$refs.reference.hasSelection &&
      vm.$refs.reference.hasSelection()
    )
  }

export const watchHoverIndex =
  ({ state }) =>
  (value) => {
    if (value === -1 || value === -9) {
      state.hoverValue = -1
    } else {
      state.hoverValue = state.optionIndexArr[value]
    }
  }

export const handleDropdownClick =
  ({ vm, state, props, emit }) =>
  ($event) => {
    if (props.allowCopy && vm.$refs.reference) {
      vm.$refs.reference.$el.querySelector('input').selectionEnd = 0
    }

    state.softFocus = false

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
  ({ state, vm, props }) =>
  () => {
    if (state.inputHovering && !props.clickExpand) {
      return (state.isHidden = true)
    }

    const tags = vm.$refs.tags
    const collapseTag = tags && tags.querySelector('[data-tag="tags-collapse"]')

    if (!collapseTag || !tags) {
      return
    }

    const { width: tagsContentWidth, paddingLeft, paddingRight } = window.getComputedStyle(tags)
    const tagsWidth = parseFloat(tagsContentWidth) - parseFloat(paddingLeft) - parseFloat(paddingRight)

    const { width: collapseTagContentWidth, marginRight } = collapseTag && window.getComputedStyle(collapseTag)
    const collapseTagWidth = collapseTag && parseFloat(collapseTagContentWidth) + parseFloat(marginRight) // 4为右margin值

    const tagList = Array.from(tags.querySelectorAll('[data-tag="tiny-tag"]'))

    let [dom, idx, currentRowWidth, currentTagIndex] = [null, 0, 0, 0]

    for (let rowNum = 0; rowNum < props.maxVisibleRows; rowNum++) {
      currentRowWidth = 0
      let currentTagWidth = 0
      for (currentTagIndex; currentTagIndex < tagList.length; currentTagIndex++) {
        const tag = tagList[currentTagIndex]
        if (tag !== collapseTag) {
          const { width: tagContentWidth, marginRight, marginLeft } = tag && window.getComputedStyle(tag)
          currentTagWidth = parseFloat(tagContentWidth) + parseFloat(marginRight) + parseFloat(marginLeft)
          currentRowWidth += currentTagWidth
        }

        // 找到第一个超出隐藏的tag
        if (tag !== collapseTag && currentRowWidth > tagsWidth) {
          if (!dom && rowNum === props.maxVisibleRows - 1) {
            // 判断当前行能否显示折叠tag
            if (currentRowWidth - currentTagWidth + collapseTagWidth < tagsWidth) {
              dom = tag
              idx = currentTagIndex
            } else {
              dom = tagList[currentTagIndex - 1]
              idx = currentTagIndex - 1
            }
          }

          break
        }
      }

      if (currentTagIndex === tagList.length - 1) {
        break
      }
    }

    // 未超出最大显示行数
    if (idx === 0) {
      state.exceedMaxVisibleRow = false
      state.showCollapseTag = false
      return (state.isHidden = true)
    }

    if (dom) {
      dom.before(collapseTag)
      state.isHidden = false
    } else {
      state.isHidden = true
    }
    state.collapseTagsLength = tagList.length - idx
    state.exceedMaxVisibleRow = true
    state.toHideIndex = idx
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

    let selected
    if (isRemote && props.initQuery) {
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
  ({ api, parent, state, props, vm, designConfig }) =>
  () => {
    state.defaultCheckedKeys = state.gridCheckedData
    const parentEl = parent.$el
    const inputEl = parentEl.querySelector('input[data-tag="tiny-input-inner"]')

    const inputClientRect = (inputEl && inputEl.getBoundingClientRect()) || {}

    if (inputEl === document.activeElement) {
      document.activeElement.blur()
    }

    state.completed = true

    // tiny 新增：  sizeMap适配不同主题
    const defaultSizeMap = { default: 28, mini: 24, small: 32, medium: 40 }
    const sizeMap = designConfig?.state?.sizeMap || defaultSizeMap

    if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
      state.currentPlaceholder = ''
    }

    state.initialInputHeight = state.isDisplayOnly
      ? sizeMap[state.selectSize || 'default'] // tiny 新增 : default, aui只处理了另3种情况，不传入时，要固定为default
      : inputClientRect.height || sizeMap[state.selectSize]

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
  }

const optmzApis = {
  exist: (val, multiple) => (multiple ? Array.isArray(val) && val.length : val),
  getValueIndex: (props) => {
    const { options, valueField, modelValue, multiple } = props
    const contain = (val, arr) => Array.isArray(arr) && ~arr.indexOf(val)
    const equal = (val, opt) => (multiple ? contain(opt[valueField], [val]) : opt[valueField] === val)
    let start = 0

    if (optmzApis.exist(modelValue, multiple) && options) {
      const lastVal = multiple ? modelValue[modelValue.length - 1] : modelValue
      for (let i = 0; i < options.length; i++) {
        if (!equal(lastVal, options[i])) continue
        return i
      }
    }

    return start
  },
  queryVisibleOptions: (vm, isMobileFirstMode) => {
    const querySelectKey = isMobileFirstMode ? '.cursor-not-allowed' : '.is-disabled'
    return Array.from(
      vm.$refs.scrollbar.$el.querySelectorAll(
        '.tiny-recycle-scroller__slot, .tiny-recycle-scroller__item-view:not([style*="transform: translateY(-9999px) translateX(0px)"])'
      )
    )
      .map((item) => item.querySelector(`[data-tag="tiny-select-dropdown-item"]:not(${querySelectKey})`))
      .filter((v) => v)
  },
  setScrollTop: ({ refs, state }) => {
    const { optimizeStore } = state

    refs.scrollbar.scrollToItem(optimizeStore.valueIndex)
  },
  setValueIndex: ({ props, state }) => {
    state.optimizeStore.valueIndex = optmzApis.getValueIndex(props)
  },
  natural: (val) => (val < 0 ? 0 : val),
  checkDefaultFirstOption: ({ state }) => {
    state.hoverIndex = 0
    state.hoverValue = state.optionIndexArr[0]
  }
}

export const computeOptimizeOpts =
  ({ props, designConfig }) =>
  () => {
    const { optimization } = props
    // tiny 新增：  aui 的默认值为 { optionHeight: 34, limit: 20 }
    const baseOpts = designConfig?.baseOpts ? designConfig.baseOpts : { gt: 20, rSize: 10, optionHeight: 30, limit: 20 }

    let optOpts

    if (optimization) {
      if (typeof optimization === 'boolean') {
        optOpts = extend(true, {}, baseOpts)
      } else {
        optOpts = extend(true, {}, baseOpts, optimization)
      }

      return optOpts
    }
  }

export const watchOptimizeOpts =
  ({ props, state }) =>
  () => {
    const { optimizeOpts, optimizeStore } = state
    if (optimizeOpts) {
      if (props.optimization) {
        optimizeStore.valueIndex = optmzApis.getValueIndex(props)
      }
    }
  }

export const computeCollapseTags = (props) => () => props.collapseTags

export const computeMultipleLimit =
  ({ props, state }) =>
  () => {
    const { multipleLimit, multiple, optimization } = props
    const { optimizeOpts } = state

    return optmzApis.natural(multiple && optimization ? multipleLimit || optimizeOpts.limit : multipleLimit)
  }

export const updateModelValue =
  ({ props, emit, state }) =>
  (value, needUpdate) => {
    state.isClickChoose = true

    if (state.device === 'mb' && props.multiple && !needUpdate) {
      state.modelValue = value
    } else {
      emit('update:modelValue', value)
    }
  }

export const getLabelSlotValue =
  ({ props, state }) =>
  (item) => {
    const datas = state.datas
    const value = item.state ? item.state.currentValue : item.value
    const data = datas.find((data) => data.value === value)

    const obj = {
      ...data,
      label: item.state ? item.state.currentLabel : item.currentLabel,
      value
    }
    return obj
  }

export const computedTagsStyle =
  ({ props, parent, state, vm }) =>
  () => {
    const isReadonly = props.disabled || (parent.form || {}).disabled || props.displayOnly
    let tagsStyle = {
      'max-width': isReadonly ? '' : state.inputWidth - state.inputPaddingRight + 'px',
      width: '100%'
    }

    // 当前全部所选项显示
    if ((props.clickExpand && !state.exceedMaxVisibleRow) || state.visible) {
      Object.assign(tagsStyle, { height: 'auto' })
    }

    if (props.clickExpand && state.exceedMaxVisibleRow && !state.showCollapseTag) {
      const tags = vm.$refs.tags
      const { paddingTop: tagsPaddingTop, paddingBottom: tagsPaddingBottom } = window.getComputedStyle(tags)
      const tagsPaddingVertical = parseFloat(tagsPaddingTop) + parseFloat(tagsPaddingBottom)
      const tag = tags?.querySelector('[data-tag="tiny-tag"]')
      if (tag) {
        const { height: tagHeight, marginTop, marginBottom } = window.getComputedStyle(tag)
        const rowHeight =
          (parseFloat(tagHeight) + parseFloat(marginTop) + parseFloat(marginBottom)) * props.maxVisibleRows
        Object.assign(tagsStyle, { 'height': `${rowHeight + tagsPaddingVertical}px` })
      }
    }

    return tagsStyle
  }

export const computedReadonly =
  ({ props, state }) =>
  () =>
    state.device === 'mb' ||
    props.readonly ||
    !props.filterable ||
    props.multiple ||
    (browserInfo.name !== BROWSER_NAME.IE && browserInfo.name !== BROWSER_NAME.Edge && !state.visible)

export const computedShowClose =
  ({ props, state }) =>
  () =>
    props.clearable &&
    !state.selectDisabled &&
    (state.inputHovering || (props.multiple && state.visible)) &&
    (props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length > 0
      : !isNull(props.modelValue) && props.modelValue !== '')

// tiny 新增：  aui有自己的逻辑，移至defineConfig中去了
export const computedCollapseTagSize = (state) => () => state.selectSize

export const computedShowNewOption =
  ({ props, state }) =>
  () => {
    const query = state.device === 'mb' ? state.queryValue : state.query
    return (
      props.filterable &&
      props.allowCreate &&
      query &&
      !state.options.filter((option) => !option.created).some((option) => option.state.currentLabel === state.query)
    )
  }

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

export const computedIsExpand =
  ({ props, state }) =>
  () => {
    const hoverExpanded = (state.selectHover || state.visible) && props.hoverExpand && !props.disabled
    const clickExpanded = props.clickExpand && state.exceedMaxVisibleRow && state.showCollapseTag
    return hoverExpanded || clickExpanded
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
    if (!isBrowser) return
    nextTick(() => {
      const parentEl = parent.$el
      const inputEl = parentEl.querySelector('input[data-tag="tiny-input-inner"]')

      if (inputEl) {
        const { paddingRight } = getComputedStyle(inputEl)

        state.inputPaddingRight = parseFloat(paddingRight)
      }
    })
  }

// 以下为tiny 新增功能
export const computedGetIcon =
  ({ designConfig, props }) =>
  () => {
    return props.dropdownIcon
      ? { icon: props.dropdownIcon }
      : {
          icon: designConfig?.icons.dropdownIcon || 'icon-delta-down',
          isDefault: true
        }
  }

export const computedGetTagType =
  ({ designConfig, props }) =>
  () => {
    if (designConfig?.props?.tagType && !props.tagType) {
      return designConfig.props.tagType
    }
    return props.tagType
  }
export const clearSearchText =
  ({ state, api }) =>
  () => {
    state.query = ''
    state.previousQuery = undefined
    api.handleQueryChange(state.query)
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

// 解决无界时，event.target 会变为 wujie_iframe的元素的bug
export const handleDebouncedQueryChange = ({ state, api }) =>
  debounce(state.debounce, (value) => {
    api.handleQueryChange(value)
  })

export const onClickCollapseTag =
  ({ state, props, nextTick, api }) =>
  (event: MouseEvent) => {
    event.stopPropagation()
    if (props.clickExpand && !props.disabled && !state.isDisplayOnly) {
      state.showCollapseTag = !state.showCollapseTag

      nextTick(api.resetInputHeight)
    }
  }

export const updateSelectedData =
  ({ state }) =>
  (data) => {
    state.selected = data
  }

export const hidePanel =
  ({ state }) =>
  () => {
    state.visible = false
  }
