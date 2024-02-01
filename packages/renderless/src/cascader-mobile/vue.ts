import {
  close,
  watchVisible,
  selectOption,
  confirm,
  searchMethod,
  searchSelectHandler,
  searchBoxToggle,
  watchModelValue,
  isSelected,
  setLevel,
  created,
  loadData,
  getNodeConfig,
  initTreeStore,
  renderSearchOption,
  computedNavListHandler,
  disabledNavOption,
  syncCheckStatus
} from './index'

export const api = [
  'state',
  'close',
  'selectOption',
  'confirm',
  'searchMethod',
  'searchSelectHandler',
  'searchBoxToggle',
  'setLevel',
  'loadData',
  'renderSearchOption',
  'disabledNavOption',
  'isSelected'
]

export const renderless = (props, { computed, reactive, watch }, { emit, constants }) => {
  const api = {}
  const state = reactive({
    toggle: false,
    loading: false,
    root: null,
    store: null,
    navList: [],
    rootData: [],
    level: 0,
    isLeaf: false,
    search: {
      show: false,
      input: '',
      options: [],
      filterOptions: []
    },
    options: computed(() => {
      let arr
      let list = [state.rootData]
      state.navList.forEach((option) => {
        arr = option.childNodes
        arr && arr.length && list.push(arr)
      })
      return list
    }),
    checkIds: computed(() => state.navList.map((option) => option.data[props.valueField])),
    checkLabels: computed(() => state.navList.map((option) => option.data[props.textField])),
    waitLoadList: computed(() =>
      state.navList.filter((option) => option.selfWaitLoad).map((option) => option.data[props.valueField])
    ),
    computedNavList: computed(() => api.computedNavListHandler()),
    showButton: computed(() => {
      const len = state.navList.length
      return len && (props.nodeConfig.checkStrictly || state.navList[len - 1].isLeaf)
    })
  })

  Object.assign(api, {
    state,
    confirm: confirm({ state, emit, props, api }),
    selectOption: selectOption({ state, emit, props, api }),
    close: close({ state, emit }),
    watchVisible: watchVisible({ emit, state, props, api }),
    watchModelValue: watchModelValue({ props, state, emit }),
    searchMethod: searchMethod({ state, props, api }),
    searchSelectHandler: searchSelectHandler({ state, emit, api, props }),
    searchBoxToggle: searchBoxToggle({ state, props, api }),
    syncCheckStatus: syncCheckStatus({ state, props, api }),
    setLevel: setLevel({ state, api }),
    created: created({ api }),
    loadData: loadData({ state, props }),
    getNodeConfig: getNodeConfig({ state, constants, props }),
    initTreeStore: initTreeStore({ props, state, api }),
    renderSearchOption: renderSearchOption({ props, state, api }),
    computedNavListHandler: computedNavListHandler({ props, state, api }),
    disabledNavOption: disabledNavOption({ state }),
    isSelected: isSelected({ state, api, props })
  })

  api.created()

  watch(() => props.visible, api.watchVisible)
  watch(() => props.modelValue, api.watchModelValue, { immediate: true, deep: true })
  watch(() => props.data, api.loadData, { deep: true })

  return api
}
