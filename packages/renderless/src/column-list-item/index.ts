import { isNull } from '../common/type'

export const handelIconClick =
  ({ emit }) =>
  (item, index, event) => {
    if (item.disabled) return
    emit('icon-click', item, index, event)
  }

export const handleChange =
  ({ constants, dispatch, emit, state, nextTick }) =>
  () => {
    nextTick(() => {
      emit('change', state.model)
      state.isGroup && dispatch(constants.COLUMN_GROUP, 'change', [state.model])
    })
  }

export const getIsGroup =
  ({ constants, parent: $parent, state }) =>
  () => {
    let parent = $parent
    while (parent) {
      if (parent.$options.componentName !== constants.COLUMN_GROUP) {
        parent = parent.$parent
      } else {
        state.columnGroup = parent
        return true
      }
    }

    return false
  }

export const getSize =
  ({ props, state }) =>
  () =>
    state.isGroup ? state.columnGroup.size || props.size : props.size

export const isDisabled =
  ({ props, state }) =>
  () =>
    props.disabled || state.columnGroup.disabled

export const getModel =
  ({ props, state }) =>
  () => {
    const model = state.isGroup ? state.store : props.modelValue !== undefined ? props.modelValue : state.selfModel

    if (state.showCheckbox) {
      return isNull(model) ? [] : model
    } else {
      return state.store
    }
  }

export const setModel =
  ({ constants, dispatch, emit, state }) =>
  (val) => {
    if (state.isGroup) {
      dispatch(constants.COLUMN_GROUP, 'update:modelValue', [val])
    } else {
      emit('update:modelValue', val)
      state.showCheckbox && (state.selfModel = val)
    }
  }

export const computedStore =
  ({ state, props }) =>
  () =>
    state.isGroup ? state.columnGroup.modelValue : props.modelValue

export const getItemChecked =
  ({ props, state }) =>
  () => {
    if (!state.showCheckbox || !state.showRadio) return

    if (state.showCheckbox) {
      return state.isGroup || Array.isArray(state.model) ? ~state.model.indexOf(props.label) : state.model
    } else {
      return state.model === props.label
    }
  }
