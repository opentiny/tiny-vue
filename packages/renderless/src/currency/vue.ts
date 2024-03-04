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
  init,
  fixServiceData,
  change,
  initService,
  fetchDefaultCurrency,
  toogleDefaultCurrency,
  computedSearchConfig,
  visibleChange
} from './index'

export const api = ['state', 'change', 'toogleDefaultCurrency', 'visibleChange']

export const renderless = (props, { watch, reactive, computed }, { service, emit }) => {
  const api = {}
  const $service = initService({ props, service })

  const state = reactive({
    options: [],
    selectedValue: props.modelValue,
    defaultCurrency: '',
    searchConfig: computed(() => api.computedSearchConfig())
  })

  Object.assign(api, {
    state,
    change: change(emit),
    visibleChange: visibleChange(emit),
    fixServiceData: fixServiceData({ props, service: $service }),
    init: init({ state, service: $service, api }),
    fetchDefaultCurrency: fetchDefaultCurrency({ state, props, emit, service: $service }),
    toogleDefaultCurrency: toogleDefaultCurrency({ state, props, service: $service }),
    computedSearchConfig: computedSearchConfig({ props, service: $service })
  })

  watch(
    () => props.modelValue,
    (param) => {
      state.selectedValue = param
    },
    { immediate: true }
  )

  api.init()

  api.fetchDefaultCurrency()

  return api
}
