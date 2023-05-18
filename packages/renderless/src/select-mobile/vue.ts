import {
  hide,
  watchVisible,
  selectOption,
  confirm,
  searchMethod,
  searchSelectHandler,
  searchBoxToggle,
  watchModelValue,
  includeOptionIndex,
  allCheckHandler
} from './index'

export const api = [
  'state',
  'hide',
  'selectOption',
  'confirm',
  'searchMethod',
  'searchSelectHandler',
  'searchBoxToggle',
  'includeOptionIndex',
  'allCheckHandler'
]

export const renderless = (props, { computed, reactive, watch }, { emit }) => {
  const api = {}
  const state = reactive({
    toggle: false,
    checkList: [],
    search: {
      show: false,
      input: '',
      options: [],
      filterOptions: []
    },
    checkIds: computed(() => state.checkList.map(option => option[props.valueField]))
  })

  Object.assign(api, {
    state,
    confirm: confirm({ state, emit, props, api }),
    selectOption: selectOption({ state, emit, props, api }),
    hide: hide({ state, emit }),
    watchVisible: watchVisible({ emit, state, props, api }),
    watchModelValue: watchModelValue({ props, state, emit }),
    searchMethod: searchMethod({ state, props, api }),
    searchSelectHandler: searchSelectHandler({ state, emit, api, props }),
    searchBoxToggle: searchBoxToggle({ state, props, api }),
    allCheckHandler: allCheckHandler({ state, props }),
    includeOptionIndex: includeOptionIndex(props)
  })

  watch(() => props.visible, api.watchVisible)
  watch(() => props.modelValue, api.watchModelValue, { immediate: true })

  return api
}
