import { hasTagItem, resetInput, createNewTag, getTagId, emitChangeModelEvent } from '../utils/tag.ts'
import { showDropdown } from '../utils/dropdown.ts'
import { setStateNumRange } from '../utils/validate.ts'
import { deepClone, omitObj } from '../utils/index.ts'

export function useDropdown({ props, emit, state, t, format, nextTick, vm }) {
  const instance = vm || state.instance
  const showValueItem = (item) => {
    const { start, end, type } = item
    state.backupList = item.options
    if (type === 'numRange') {
      setStateNumRange(state, item, t)
    } else if (type === 'dateRange') {
      const { dateRangeFormat } = state
      if (!state.startDate && start) {
        const newStart = format(start, dateRangeFormat)
        state.startDate = state.endDate < newStart ? null : newStart
      }
      if (!state.endDate && end) {
        const newEnd = format(end, dateRangeFormat)
        state.endDate = newEnd < state.startDate ? null : newEnd
      }
    } else if (type === 'datetimeRange') {
      const { datetimeRangeFormat } = state
      if (!state.startDateTime && start) {
        const newStart = format(start, datetimeRangeFormat)
        state.startDateTime = state.endDateTime < newStart ? null : newStart
      }
      if (!state.endDateTime && end) {
        const newEnd = format(end, datetimeRangeFormat)
        state.endDateTime = newEnd < state.startDateTime ? null : newEnd
      }
    } else if (state.backupList && type === 'checkbox') {
      state.filterList = state.backupList
      state.checkboxGroup = []
      state.backupList?.forEach((subItem) => {
        if (hasTagItem(state, subItem.label)) {
          state.checkboxGroup.push(`${item.label}${subItem.label}`)
        }
        subItem.isFilter = false
      })
    }

    if (type !== 'checkbox' && state.backupList?.length) {
      state.backupList?.forEach((option) => {
        option.isFilter = false
        option.isChecked = hasTagItem(state, option.label)
      })
    }

    state.currentOperators = null
    if (!state.backupList && !['dateRange', 'datetimeRange', 'numRange', 'custom'].includes(type)) {
      showDropdown(state, false)
    } else {
      showDropdown(state)
    }
  }

  const selectPropItem = (item) => {
    const { field, label } = item
    
    // 创建新对象而不是直接修改属性，确保 Vue 2 响应式检测
    state.propItem = { ...state.propItem, label }

    emit('first-level-select', field)

    const inputRef = instance.$refs?.inputRef
    state.prevItem = item
    state.backupPrevItem = item
    const { operators } = item
    if (operators?.length) {
      state.operatorValue = ''
      state.currentOperators = operators
      showDropdown(state)
    } else {
      state.operatorValue = ':'
      showValueItem(item)
    }
    state.inputValue = ''
    inputRef.focus()
  }

  const setOperator = (operator) => {
    state.operatorValue = operator
    showValueItem(state.prevItem)
  }

  /**
   * 更新modelValue值
   * @param prevItem items数组的第一层元素信息，用来识别此类型标签的某些属性作相应处理
   * @param item 当前选中的标签值信息
   * @param label 标签左侧的label
   * @param value 标签右侧值的value
   */
  const updateModelValue = (prevItem, item, label, value) => {
    const { replace, operators, mergeTag } = prevItem
    const rest = omitObj(prevItem)
    const { indexMap } = state
    const index = indexMap.get(label)
    const id = getTagId(props, prevItem, item)
    const operator = state.operatorValue && operators ? { operator: state.operatorValue } : null
    let newTag = null

    if (mergeTag) {
      const options = { label: value, ...id }
      if (index >= 0) {
        const newValue = `${state.innerModelValue[index].value} | ${value}`
        const newOptions = [...state.innerModelValue[index].options, options]
        newTag = createNewTag({ ...state.innerModelValue[index], value: newValue, options: newOptions })
      } else {
        newTag = createNewTag({ ...rest, label, value, options: [options] })
      }
    } else {
      newTag = createNewTag({ ...rest, label, value, ...id, ...operator })
    }
    if (hasTagItem(state, value, label)) {
      resetInput(state)
      return
    }
    showDropdown(state, false)

    const oldValue = deepClone(state.innerModelValue)
    let newValue = [] as any[]
    if ((replace || mergeTag) && index >= 0) {
      const cloned = [...state.innerModelValue]
      cloned.splice(index, 1)
      newValue = [...cloned, newTag]
    } else {
      newValue = [...state.innerModelValue, newTag]
    }
    emitChangeModelEvent({ emit, state, newValue, oldValue })
  }
  /**
   * 使用输入选项
   * @param val 输入框的值
   *
   */
  const selectInputValue = (val: string) => {
    if (state.propItem?.label) {
      selectRadioItem({ label: val })
    } else {
      createTag()
    }
  }

  /**
   * 选中单选标签
   * @param item 选中的标签option项
   * @param isPotential 是否为选择潜在匹配项，默认否。参数可选
   */
  const selectRadioItem = (item, isPotential = false) => {
    showDropdown(state, false)
    // 潜在匹配项没有prevItem
    if (isPotential) {
      state.prevItem = item
      state.backupPrevItem = item
    }

    const { prevItem } = state
    const value = item.value || item.label
    const inputRef = instance.$refs?.inputRef
    console.log('prevItem', prevItem)
    console.log('item', item)
    console.log('value', value)
    console.log('state.propItem.label', state.propItem.label)
    if (!hasTagItem(state, value)) {
      const tagLabel = state.propItem.label || item.label
      
      updateModelValue(prevItem, item, tagLabel, value)
    }
    inputRef.focus()
  }
  const hasNotInputValueCreateTag = (propItem, prevItem) => {
    // 有label
    if (propItem.label) {
      if (!prevItem.options) {
        return
      }

      const hasTag = props.modelValue.find((item) => item.value === prevItem.options[0].label)

      if (!hasTag) {
        const label = prevItem.label
        const value = prevItem.options && prevItem.options[0].label
        updateModelValue(prevItem, prevItem.options[0], label, value)
        return
      }
    } else {
      emit('search', state.innerModelValue)
    }
  }

  const newTagUpdateModelValue = (prevItem, propItem, tag) => {
    const item = state.backupList?.find((subItem) => subItem.label === tag)
    updateModelValue(prevItem, item, propItem.label, tag)
  }

  const hasInputValueCreateTag = (inputValue, propItem, prevItem) => {
    // 有label的情况
    if (propItem.label) {
      const { regexp, replace, type, mergeTag } = prevItem
      const tagList =
        (type !== 'checkbox' && replace) || (type === 'checkbox' && mergeTag)
          ? [inputValue]
          : inputValue.split(props.splitInputValue)

      if (regexp) {
        for (const tag of tagList) {
          if (regexp.test(tag)) {
            newTagUpdateModelValue(prevItem, propItem, tag)
          }
        }
        // 有输入且无正则
      } else {
        for (const tag of tagList) {
          newTagUpdateModelValue(prevItem, propItem, tag)
        }
      }
      // 无label的情况
    } else {
      const { items, defaultField } = props
      const currentItem =
        items.find((item) => {
          const { regexp } = item
          return regexp && regexp.test(state.inputValue)
        }) || (defaultField ? items.find((item) => item.field === defaultField) : state.allTypeAttri)
      const { replace, type, mergeTag } = currentItem
      const tagList =
        (type !== 'checkbox' && replace) || (type === 'checkbox' && mergeTag)
          ? [inputValue]
          : inputValue.split(props.splitInputValue)

      if (currentItem?.options?.length) {
        state.backupList = [...currentItem.options]
        state.backupList?.forEach((item) => {
          const label = item.value || item.label
          if (tagList.includes(label)) {
            item.isChecked = true
          }
        })
      }
      const label = currentItem.label
      for (const tag of tagList) {
        updateModelValue(currentItem, {}, label, tag)
      }
    }
  }

  const createTag = () => {
    const { inputValue, propItem, prevItem } = state
    showDropdown(state, false)
    if (!inputValue) {
      // 输入为空的情况
      hasNotInputValueCreateTag(propItem, prevItem)
    } else {
      // 输入不为空的情况
      const { maxlength } = props
      if (maxlength && maxlength < inputValue.length) {
        emit('exceed', maxlength)
        return
      }

      hasInputValueCreateTag(inputValue, propItem, prevItem)
    }
  }

  // 帮助图标点击事件
  const helpClick = () => {
    emit('help')
  }

  return { selectPropItem, selectRadioItem, selectInputValue, createTag, helpClick, setOperator }
}
