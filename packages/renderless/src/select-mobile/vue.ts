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
  isSelected,
  allCheckHandler,
  watchPropsOption,
  setSelected
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
  'isSelected',
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
    checkIds: computed(() => state.checkList.map((option) => option[props.valueField])),
    selectedLabel: ''
  })

  Object.assign(api, {
    state,
    confirm: confirm({ state, emit, props, api }),
    selectOption: selectOption({ state, emit, props, api }),
    hide: hide({ state, emit }),
    watchVisible: watchVisible({ emit, state, props, api }),
    watchModelValue: watchModelValue({ api }),
    searchMethod: searchMethod({ state, props, api }),
    searchSelectHandler: searchSelectHandler({ state, emit, api, props }),
    searchBoxToggle: searchBoxToggle({ state, props, api }),
    allCheckHandler: allCheckHandler({ state, props }),
    includeOptionIndex: includeOptionIndex(props),
    isSelected: isSelected({ state, api, props }),
    watchPropsOption: watchPropsOption({ api }),
    setSelected: setSelected({ props, state, emit })
  })

  watch(() => props.visible, api.watchVisible)
  watch(() => props.modelValue, api.watchModelValue)
  watch(() => props.menus, api.watchPropsOption, { immediate: true, deep: true })

  return api
}
