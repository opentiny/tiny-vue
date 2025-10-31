import { showDropdown } from '../utils/dropdown.ts'
import { emitChangeModelEvent } from '../utils/tag.ts'
import { deepClone } from '../utils/index.ts'

export function useTag({ props, state, emit, nextTick }) {
  let lastInputValue = deepClone(state.inputValue)

  const changeIsChecked = (tag) => {
    if (tag) {
      const parent = state.recordItems.find((item) => item.label === tag.label)
      if (parent && parent.options) {
        const child = parent.options.find((item) => item.label === tag.value)
        child && (child.isChecked = false)
      }
    }
  }

  const deleteTag = (tag) => {
    showDropdown(state, false)
    changeIsChecked(tag)
    const newValue = props.modelValue.filter((item) => item !== tag)
    emitChangeModelEvent({ emit, state, nextTick, newValue })
  }

  const clearTag = () => {
    showDropdown(state, false)
    props.modelValue.forEach((item) => changeIsChecked(item))
    state.propItem = {}
    state.inputValue = ''
    emitChangeModelEvent({ emit, state, nextTick, newValue: [] })
    emit('clear')
  }

  const backspaceDeleteTag = () => {
    if (state.inputValue) {
      return
    }
    if (state.propItem.label) {
      state.propItem = {}
      return
    }
    if (lastInputValue === '' && state.inputValue === '') {
      showDropdown(state, false)
      const lastIndex = props.modelValue.length - 1
      changeIsChecked(props.modelValue[lastIndex])
      const newValue = state.innerModelValue.slice(0, props.modelValue.length - 1)
      emitChangeModelEvent({ emit, state, nextTick, newValue })
    }
    lastInputValue = state.inputValue
    if (state?.instance?.refs?.inputRef?.$el) {
      state.instance.refs.inputRef.$el.click()
    }
  }

  return {
    deleteTag,
    clearTag,
    backspaceDeleteTag
  }
}
