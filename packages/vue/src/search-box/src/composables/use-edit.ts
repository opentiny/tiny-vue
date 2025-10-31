import { emitChangeModelEvent } from '../utils/tag.ts'
import { getVerifyNumTag, getVerifyDateTag, setStateNumRange, getVerifyTag } from '../utils/validate.ts'
import { showDropdown } from '../utils/dropdown.ts'

export function useEdit({ props, state, t, nextTick, format, emit, vm }) {
  const setDropdownProps = (curTag) => {
    const { operator, value, start, end } = curTag
    const { options, operators, type, mergeTag } = state.prevItem
    if (type === 'custom') {
      return
    } else if (type === 'numRange') {
      setStateNumRange(state, curTag, t)
    } else if (type === 'dateRange') {
      const { dateRangeFormat } = state
      state.startDate = format(start, dateRangeFormat)
      state.endDate = format(end, dateRangeFormat)
    } else if (type === 'datetimeRange') {
      const { datetimeRangeFormat } = state
      state.startDateTime = format(start, datetimeRangeFormat)
      state.endDateTime = format(end, datetimeRangeFormat)
      } else {
        if (mergeTag) {
          const labels = curTag.options?.flatMap((item) => item.label) || []
          // 多选编辑态，tiny-select multiple 需要数组
          state.inputEditValue = labels
          state.currentEditSelectTags = labels
        } else {
          // 其他场景使用字符串
          state.inputEditValue = Array.isArray(value) ? value.join(',') : (value || '')
        }
        state.currentEditValue = options
      }
    state.operatorValue = operator
    state.currentOperators = operators
  }

  const editTag = (tag, index, e) => {
    if (!props.editable || (tag.type && tag.type === 'map')) {
      return
    }

    showDropdown(state, false)
    state.popoverVisible = false
    const dom = e.target.classList.contains('tiny-tag') ? e.target : e.srcElement.parentElement

    nextTick(() => {
      const { popoverRef } = state.instance.$refs
      popoverRef.state.referenceElm = dom
      popoverRef.state.popperElm && (popoverRef.state.popperElm.style.display = 'none')
      popoverRef.doDestroy()
      state.popoverVisible = true
    })

    state.prevItem = state.recordItems.find((item) => item.field === tag.field)
    !state.prevItem && (state.prevItem = tag)
    state.selectValue = tag.label
    state.currentModelValueIndex = index

    emit('tagClick', tag)
    setDropdownProps(tag)
  }

  const selectPropChange = (item, disabled) => {
    if (disabled) return
    state.prevItem = item
    setDropdownProps(item)
  }

  const confirmEditTag = async (isConfirm) => {
    if (!isConfirm) {
      state.popoverVisible = false

      return
    }

    const { prevItem, currentModelValueIndex: index } = state

    let newTag = null
    if (prevItem.type === 'numRange') {
      newTag = await getVerifyNumTag(state.instance, state, props)
    } else if (prevItem.type === 'dateRange') {
      newTag = await getVerifyDateTag(state.instance, state, props, false)
    } else if (prevItem.type === 'datetimeRange') {
      newTag = await getVerifyDateTag(state.instance, state, props, true)
    } else {
      newTag = await getVerifyTag(state.instance, state, props)
    }

    if (newTag) {
      showDropdown(state, false)
      state.popoverVisible = false
      emitChangeModelEvent({ emit, state, nextTick, index, newTag, isEdit: true })
    } else {
      state.popoverVisible = true
    }

    state.currentEditValue = []
  }

  const selectItemIsDisable = (item) => {
    if (item.type && item.type === 'map') {
      return true
    }

    if (state.prevItem?.operators || item.operators) {
      return state.prevItem.operators?.length !== item.operators?.length
    }

    const typeArr = ['radio', 'checkbox']
    if (state.prevItem.type && typeArr.includes(state.prevItem.type)) {
      return !item.type ? false : !typeArr.includes(item.type)
    }

    return state.prevItem?.type !== item.type
  }

  return {
    editTag,
    confirmEditTag,
    selectPropChange,
    selectItemIsDisable
  }
}
