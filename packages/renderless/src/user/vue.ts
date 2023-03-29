/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

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
  filter
} from './index'

export const api = ['state', 'handleBlur', 'searchMethod', 'userChange', 'visibleChange', 'useSortable', 'filter']

export const renderless = (props, { reactive, watch }, { emit, nextTick, refs, service, constants, dispatch }) => {
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
    batch: props.batch === false ? false : props.batch || $service.batch
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
    handleBlur: handleBlur({ constants, dispatch, state }),
    filter: filter({ props, state }),
    suggestUser: suggestUser(api),
    cacheUser: cacheUser({ api, props, service: $service }),
    initUser: initUser({ api, props, state }),
    getUsers: getUsers({ api, props, state }),
    setSelected: setSelected({ api, props, state }),
    searchMethod: searchMethod({ api, props, state, emit }),
    userChange: userChange({ api, emit, props, state }),
    useSortable: useSortable({ api, props, state, refs })
  })

  props.cache && api.updateCache()

  watch(() => props.modelValue, api.initUser, { immediate: true })

  return api
}
