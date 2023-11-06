import {
  close,
  confirm,
  watchVisible,
  selectOption,
  searchMethod,
  searchSelectHandler,
  loopSearchOption,
  searchBoxToggle,
  filterOptionsHandler,
  watchModelValue,
  setLevel,
  created,
  clean,
  loadData,
  isSelected,
  getNodeConfig,
  initTreeStore,
  disabledNavOption,
  renderSearchOption,
  computedNavListHandler,
  computedSelectedListHandler,
  nodeExpand,
  inputKeyword,
  removeOption,
  getCheckedNodes,
  toggleCheckList,
  syncCheckStatus
} from './index'

export const api = [
  'state',
  'close',
  'clean',
  'confirm',
  'setLevel',
  'loadData',
  'nodeExpand',
  'selectOption',
  'searchMethod',
  'searchBoxToggle',
  'searchSelectHandler',
  'renderSearchOption',
  'disabledNavOption',
  'toggleCheckList',
  'inputKeyword',
  'removeOption',
  'getCheckedNodes',
  'isSelected'
]

export const renderless = (props, { computed, reactive, watch }, { t, emit, constants }) => {
  const api = {}
  const state = reactive({
    toggle: false,
    loading: false,
    root: null,
    store: null,
    checkList: [],
    level: 0,
    rootData: [],
    navList: [],
    waitLoadCheckList: [],
    search: {
      loaded: false,
      show: false,
      input: '',
      filterOptions: [],
      options: []
    },
    selected: {
      removeList: [],
      options: [],
      show: false,
      waitLoadList: []
    },
    options: computed(() => {
      let data,
        list = [state.rootData]
      state.navList.map((option) => {
        data = option.childNodes
        data && data.length && list.push(data)
      })
      return list
    }),
    computedNavList: computed(() => api.computedNavListHandler()),
    computedCheckList: computed(() => [...state.waitLoadCheckList, ...state.checkList]),
    computedSelectedList: computed(() => api.computedSelectedListHandler()),
    checkIds: computed(() => state.computedSelectedList.map((option) => option.data[props.valueField])),
    checkLabels: computed(() => state.computedSelectedList.map((option) => option.data[props.textField]))
  })

  Object.assign(api, {
    state,
    created: created({ api }),
    close: close({ state, emit }),
    clean: clean({ state, props }),
    setLevel: setLevel({ state, api }),
    loadData: loadData({ state, props }),
    confirm: confirm({ state, emit, props, api }),
    selectOption: selectOption({ emit, state, api }),
    searchMethod: searchMethod({ state, props, api }),
    initTreeStore: initTreeStore({ props, state, api }),
    searchBoxToggle: searchBoxToggle({ state, props, api }),
    syncCheckStatus: syncCheckStatus({ state, props, api }),
    getNodeConfig: getNodeConfig({ state, constants, props }),
    watchVisible: watchVisible({ emit, state, props, api }),
    watchModelValue: watchModelValue({ props, state, emit }),
    loopSearchOption: loopSearchOption({ state, api, props }),
    filterOptionsHandler: filterOptionsHandler({ state, props }),
    searchSelectHandler: searchSelectHandler({ state, emit, api, props }),
    renderSearchOption: renderSearchOption({ props, state, api }),
    computedNavListHandler: computedNavListHandler({ props, state, api, t }),
    computedSelectedListHandler: computedSelectedListHandler({ state }),
    disabledNavOption: disabledNavOption({ state }),
    inputKeyword: inputKeyword({ state, api }),
    removeOption: removeOption({ state, api }),
    isSelected: isSelected({ state, api, props }),
    nodeExpand: nodeExpand({ emit, state, props, api }),
    toggleCheckList: toggleCheckList({ state, props, api }),
    getCheckedNodes: getCheckedNodes({ state, api })
  })

  api.created()

  watch(() => props.data, api.loadData, { deep: true })
  watch(() => props.modelValue, api.watchModelValue, { immediate: true, deep: true })
  watch(() => props.visible, api.watchVisible)

  return api
}
