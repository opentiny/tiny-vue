import {
  close,
  watchVisible,
  selectOption,
  confirm,
  searchMethod,
  searchSelectHandler,
  searchBoxToggle,
  watchModelValue,
  includeOptionIndex,
  allCheckHandler,
  toggleCheckList,
  clean,
  load,
  selectedOptionHandler
} from './index'

export const api = [
  'state',
  'allCheckHandler',
  'close',
  'selectOption',
  'confirm',
  'searchMethod',
  'searchSelectHandler',
  'searchBoxToggle',
  'includeOptionIndex',
  'clean',
  'load',
  'selectedOptionHandler',
  'toggleCheckList'
]

export const renderless = (props, { computed, reactive, watch }, { emit, vm }) => {
  const api = {}
  const state = reactive({
    toggle: false,
    checkList: [],
    selected: {
      show: false,
      options: []
    },
    search: {
      filterOptions: [],
      input: '',
      options: props.menus || [],
      loading: false
    },
    checkIds: computed(() => state.checkList.map((option) => option[props.valueField])),
    lazy: computed(() => !props.infiniteScroll.disabled && typeof props.infiniteScroll.load === 'function')
  })

  Object.assign(api, {
    state,
    confirm: confirm({ state, emit, props, api }),
    selectOption: selectOption({ state, emit, props, api }),
    close: close({ state, emit, vm }),
    watchVisible: watchVisible({ emit, state, props, api }),
    watchModelValue: watchModelValue({ props, state, emit }),
    searchMethod: searchMethod({ state, props, api }),
    searchSelectHandler: searchSelectHandler({ state, emit, api, props }),
    searchBoxToggle: searchBoxToggle({ state, props, api }),
    allCheckHandler: allCheckHandler({ state, props }),
    toggleCheckList: toggleCheckList({ state }),
    clean: clean({ state, props }),
    load: load({ state, props, api }),
    selectedOptionHandler: selectedOptionHandler({ state, api }),
    includeOptionIndex: includeOptionIndex(props)
  })

  watch(() => props.visible, api.watchVisible, { immediate: true })
  watch(() => props.modelValue, api.watchModelValue, { immediate: true })
  watch(
    () => props.menus,
    (value) => {
      state.search.options = value
      api.searchMethod()
    }
  )

  return api
}
