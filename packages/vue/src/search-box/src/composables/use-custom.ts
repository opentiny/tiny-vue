import { resetInput, emitChangeModelEvent, hasTagItem } from '../utils/tag.ts'
import { showDropdown, showPopover } from '../utils/dropdown.ts'

export function useCustom({ state, emit, nextTick }) {
  const updateCustomValue = (customTag) => {
    showDropdown(state, false)
    const { prevItem, indexMap } = state
    const { replace, label } = prevItem

    const tagList = []
    if (replace && indexMap.has(label)) {
      const index = indexMap.get(label)
      const newTag = { ...prevItem, ...customTag }
      emitChangeModelEvent({ emit, state, nextTick, newTag, index })

      return
    } else if (!replace && Array.isArray(customTag)) {
      customTag.forEach((tag) => {
        if (!hasTagItem(state, tag.value)) {
          tagList.push({ ...prevItem, ...tag })
        }
      })
    } else {
      if (!hasTagItem(state, customTag.value)) {
        tagList.push({ ...prevItem, ...customTag })
      }
    }
    emitChangeModelEvent({ emit, state, nextTick, tagList })
  }

  const handleConfirm = (customTag) => {
    if (!customTag) {
      resetInput(state)
      showDropdown(state, false)
      return
    }

    updateCustomValue(customTag)
  }

  const handleEditConfirm = (customTag) => {
    if (!customTag) {
      showPopover(state, false)
      return
    }

    updateCustomValue(customTag)
  }

  return {
    handleConfirm,
    handleEditConfirm
  }
}
