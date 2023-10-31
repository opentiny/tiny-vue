import { isNull } from '../common/type'

export const handelIconClick =
  ({ emit }) =>
  (item, index, event) => {
    if (item.disabled) return
    emit('icon-click', item, index, event)
  }

export const getSliceNum =
  ({ state }) =>
  () => {
    const sliceNumMap = {
      'mini': 1,
      'small': 2,
      'medium': 3,
      'large': 5
    }
    return sliceNumMap[state.size]
  }

export const getIconNum =
  ({ state }) =>
  () => {
    const iconNumMap = {
      'mini': 2,
      'small': 3,
      'medium': 4,
      'large': 6
    }
    return iconNumMap[state.size]
  }

export const handleChange =
  ({ constants, dispatch, emit, state, nextTick }) =>
  () => {
    nextTick(() => {
      emit('change', state.model)

      state.isGroup && dispatch(constants.CARD_GROUP, 'handleChange', [state.model])
    })
  }

export const isGroup =
  ({ constants, parent: $parent, state }) =>
  () => {
    let parent = $parent
    while (parent) {
      if (parent.$options.componentName !== constants.CARD_GROUP) {
        parent = parent.$parent
      } else {
        state.cardGroup = parent
        return true
      }
    }

    return false
  }

export const getSize =
  ({ props, state }) =>
  () =>
    state.isGroup ? state.cardGroup.size || props.size : props.size

export const isDisabled =
  ({ props, state }) =>
  () =>
    props.disabled || state.cardGroup.disabled

export const getModel =
  ({ props, state }) =>
  () => {
    const model = state.isGroup ? state.store : props.modelValue !== undefined ? props.modelValue : state.selfModel

    if (state.isCheckbox) {
      return isNull(model) ? [] : model
    } else {
      return state.store
    }
  }

export const setModel =
  ({ constants, dispatch, emit, state }) =>
  (val) => {
    if (state.isGroup) {
      dispatch(constants.CARD_GROUP, 'update:modelValue', [val])
    } else {
      emit('update:modelValue', val)
      state.isCheckbox && (state.selfModel = val)
    }
  }

export const computedStore =
  ({ state, props }) =>
  () =>
    state.isGroup ? state.cardGroup.modelValue : props.modelValue

export const getItemChecked =
  ({ props, state }) =>
  () => {
    if (!state.checkType) return

    if (state.isCheckbox) {
      return state.isGroup || Array.isArray(state.model) ? ~state.model.indexOf(props.label) : state.model
    } else {
      return state.model === props.label
    }
  }
