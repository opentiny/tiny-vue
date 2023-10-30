export const handleChange =
  ({ constants, nextTick, dispatch, state }) =>
  () => {
    nextTick(() => {
      dispatch(constants.SLIDER_BUTTON_GROUP, 'handleChange', [state.value])
    })
  }

export const getValue = (state) => () => state.sliderButtonGroup.modelValue

export const setValue =
  ({ state }) =>
  (val) => {
    if (state.disabled) return

    return state.sliderButtonGroup.$emit('update:modelValue', val)
  }

export const getGroup =
  ({ constants, parent: $parent }) =>
  () => {
    let parent = $parent.$parent

    while (parent) {
      if (parent.$options.componentName !== constants.SLIDER_BUTTON_GROUP) {
        parent = parent.$parent
      } else {
        return parent
      }
    }

    return parent
  }

export const mounted =
  ({ vm, props, dispatch, constants }) =>
  () => {
    dispatch(constants.SLIDER_BUTTON_GROUP, 'labelValue', [props.label || props.text])

    dispatch(constants.SLIDER_BUTTON_GROUP, 'eachBlock', [
      vm.$refs.sliderButton.offsetLeft,
      vm.$refs.sliderButton.offsetWidth,
      vm.$refs.sliderButton.offsetHeight
    ])
  }

export const customEvents = ({ props, vm, type }) => {
  const sliderInput = vm.$refs.sliderInput

  for (let ev in props.events) {
    sliderInput[type + 'EventListener'](ev, props.events[ev])
  }
}
