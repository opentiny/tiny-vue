import { hasTagItem, createNewTag, getTagId, emitChangeModelEvent } from '../utils/tag.ts'
import { deepClone, omitObj } from '../utils/index.ts'
import { showDropdown } from '../utils/dropdown.ts'

export function useCheckbox({ props, state, emit, nextTick }) {
  const selectCheckbox = (confirm: boolean) => {
    showDropdown(state, false)
    const { checkboxGroup, prevItem, propItem } = state
    const rest = omitObj(prevItem)
    if (confirm) {
      const tagList = []
      const oldValue = deepClone(state.innerModelValue)
      const { mergeTag, operators, label: prevLabel } = prevItem
      if (mergeTag) {
        let value = ''
        const options = []
        const { indexMap } = state
        const hasTagIndex = indexMap.get(prevLabel)
        hasTagIndex !== undefined && state.innerModelValue.splice(hasTagIndex, 1)

        state.backupList?.forEach((item) => {
          const { label } = item
          const checkboxLabel = `${prevLabel}${label}`
          const hasItem = checkboxGroup.includes(checkboxLabel)
          if (hasItem) {
            delete item.isFilter
            const id = getTagId(props, prevItem, item)
            const newOptions = { label: item.label, ...id }
            value += !value ? label : ` | ${label}`
            options.push(newOptions)
          }
        })
        if (options.length > 0) {
          const newTag = { ...rest, value, options }
          tagList.push(newTag)
        }
      } else {
        const { valueMap } = state
        const indexList = []
        state.backupList?.forEach((item) => {
          const { label } = item
          const value = `${prevLabel}${label}`
          const hasItem = checkboxGroup.includes(value)
          if (hasItem && !hasTagItem(state, label)) {
            const id = getTagId(props, prevItem, item)
            const operator = state.operatorValue && operators ? { operator: state.operatorValue } : null
            const newTag = createNewTag({ ...rest, label: propItem.label, value: label, ...id, ...operator })
            tagList.push(newTag)
            item.isChecked = true
          } else if (!hasItem && hasTagItem(state, label)) {
            item.isChecked = false
            const index = valueMap.get(value)
            indexList.push(index)
          }
        })
        if (indexList.length) {
          const filtered = state.innerModelValue.filter((item, index) => item && !indexList.includes(index))
          // 直接通过 newValue 强制同步到 modelValue（Vue2 需要显式触发）
          emitChangeModelEvent({ emit, state, nextTick, newValue: filtered, oldValue })
          return
        }
      }
      emitChangeModelEvent({ emit, state, nextTick, tagList, oldValue })
    } else {
      state.propItem = { ...propItem, label: '' }
      state.inputValue = ''
    }
  }


  return {
    selectCheckbox,

  }
}
