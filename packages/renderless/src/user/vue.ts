import {
  initUser,
  handleBlur,
  updateOptions,
  useSortable,
  userChange,
  suggestUser,
  autoSelect,
  searchMethod,
  setSelected,
  getUsers,
  updateCache,
  saveCache,
  cacheUser,
  visibleChange,
  initService,
  filter,
  computedTextField,
  computedValueField,
  syncCacheIds
} from './index'

export const api = ['state', 'handleBlur', 'searchMethod', 'userChange', 'visibleChange', 'useSortable', 'filter']

export const renderless = (
  props,
  { reactive, watch, computed, provide },
  { emit, nextTick, vm, service, constants, dispatch }
) => {
  const api = {}
  const $service = initService({ props, service })

  const state = reactive({
    loading: false,
    options: [],
    hisOptions: [],
    user: props.multiple ? [] : '',
    selected: [],
    visible: false,
    lastValue: null,
    type: props.valueField,
    sortable: null,
    overflow: false,
    addevnet: false,
    batch: props.batch === false ? false : props.batch || $service.batch,
    textField: computed(() => api.computedTextField()),
    valueField: computed(() => api.computedValueField())
  })

  Object.assign(api, {
    state,
    fetchW3Accounts: $service.fetchW3Accounts,
    fetchSuggestUser: $service.fetchSuggestUser,
    fetchUserByUserId: $service.fetchUserByUserId,
    visibleChange: visibleChange({ state, emit }),
    saveCache: saveCache({ props }),
    updateCache: updateCache({ props, state }),
    autoSelect: autoSelect({ props, state, nextTick }),
    updateOptions: updateOptions({ props, state, nextTick }),
    handleBlur: handleBlur({ constants, dispatch, state, emit }),
    filter: filter({ props, state }),
    suggestUser: suggestUser(api),
    cacheUser: cacheUser({ api, props, service: $service, state }),
    initUser: initUser({ api, props, state }),
    getUsers: getUsers({ api, props, state }),
    setSelected: setSelected({ api, props, state }),
    searchMethod: searchMethod({ api, props, state, emit }),
    userChange: userChange({ api, emit, props, state }),
    useSortable: useSortable({ api, props, state, vm }),
    computedTextField: computedTextField({ service: $service, props }),
    computedValueField: computedValueField({ service: $service, props }),
    syncCacheIds: syncCacheIds({ props, state })
  })

  props.cache && api.updateCache()

  watch(() => props.modelValue, api.initUser, { immediate: true })

  provide('showContent', props.showTips)
  provide('tips-max-width', props.maxWidth)

  return api
}
