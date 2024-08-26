export default {
  options: {
    isCloseIconHide: true
  },
  renderless: (props, hooks, { emit, nextTick }, api) => {
    const state = api.state

    return {
      clear: () => {
        emit('update:modelValue', '')
        emit('change', '')
        emit('input', '')
        emit('clear')
      },
      handleInput: (event) => {
        if (state.isComposing) {
          return
        }

        if (event.target.value === state.nativeInputValue) {
          return
        }

        emit('update:modelValue', event.target.value)

        emit('input', event.target.value, event)

        api.searchMemory(event.target.value)

        nextTick(api.setNativeInputValue)
      }
    }
  }
}
