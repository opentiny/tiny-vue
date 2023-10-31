import { isEmpty } from './index'

const selectOptionAll = ({ state, emit }) => () => {
  state.selected = []

  emit('click', state.selected)
  emit('update:modelValue', state.selected)
}

const selectOption = ({ state, props, emit }) => (value) => {
  if (props.type === 'tag' && props.multiple) {
    const index = state.selected.indexOf(value)
    index === -1 ? state.selected.push(value) : state.selected.splice(index, 1)
    const values = state.selected

    emit('click', values)
    emit('update:modelValue', values.slice())
  } else if (props.type === 'tag' && !props.multiple) {
    state.selected = [value]

    emit('click', value)
    emit('update:modelValue', value)
  }
}

const setSelectedOption = ({ state }) => (value) => {
  state.selected = isEmpty(value) ? [] : Array.isArray(value) ? value.slice() : [value]
}

export const api = ['state', 'selectOptionAll', 'selectOption']

export const renderless = (props, { reactive, watch, computed }, { emit }) => {
  const api = {}
  const state = reactive({
    tagWidth: computed(() => (100 / props.columnNum).toFixed(1) + '%'),
    selected: []
  })

  Object.assign(api, {
    state,
    selectOptionAll: selectOptionAll({ state, emit }),
    selectOption: selectOption({ state, props, emit }),
    setSelectedOption: setSelectedOption({ state, props })
  })

  watch(() => props.modelValue, api.setSelectedOption)

  return api
}
