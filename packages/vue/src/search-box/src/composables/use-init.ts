import { showDropdown, showPopover } from '../utils/dropdown.ts'
import { hasTagItem } from '../utils/tag.ts'

export function useInit({ props, state }) {
  const initItems = () => {
    state.groupItems = {}
    state.recordItems.forEach((item) => {
      const { groupKey = '0' } = item
      if (state.groupItems[groupKey]) {
        state.groupItems[groupKey].push({ ...item })
      } else {
        state.groupItems[groupKey] = [{ ...item }]
        state.matchItems[groupKey] = { attr: [], attrValue: [] }
      }
      if (state.prevItem && item.field === state.prevItem.field && item !== state.prevItem) {
        const { options, type } = item
        state.prevItem = item
        if (options?.length) {
          state.backupList = options
        }
        if (type === 'checkbox') {
          state.filterList = state.backupList
          state.checkboxGroup = []
          state.backupList?.forEach((subItem) => {
            const { label } = subItem
            if (hasTagItem(state, label)) {
              state.checkboxGroup.push(`${item.label}${label}`)
            }
            subItem.isFilter = false
          })
        }
        showDropdown(state, item.field === state.prevItem.field && item !== state.prevItem)
      }
    })
  }

  const handleClick = (e) => {
    const { backupPrevItem, prevItem } = state
    e.stopPropagation()
    if (props.editable) {
      state.popoverVisible = false
      state.currentEditValue = []
      if (state.propItem.label && backupPrevItem && backupPrevItem !== prevItem) {
        state.prevItem = backupPrevItem
      }
    }

    if (
      (state.hasBackupList && (state.backupList?.length === 0 || !state.backupList) && !state.inputValue) ||
      props.items.length === 0
    ) {
      showDropdown(state, false)
    } else {
      showDropdown(state)
    }
  }

  const watchOutsideClick = () => {
    if (props.editable) {
      showPopover(state, false)
    }

    state.isMouseDown = false
    showDropdown(state, false)
  }

  const watchMouseDown = () => {
    state.isMouseDown = true
  }

  const watchMouseMove = () => {
    if (state.isMouseDown) {
      state.isMouseDown = false
    }
  }

  return {
    initItems,
    watchOutsideClick,
    watchMouseDown,
    watchMouseMove,
    handleClick
  }
}
