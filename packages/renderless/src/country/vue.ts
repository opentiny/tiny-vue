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

import { init, change, initService } from './index'

export const api = ['state', 'change', 'emit']

export const renderless = (props, { watch, reactive }, { service, emit }) => {
  const $service = initService({ props, service })

  const state = reactive({
    source: null,
    options: [],
    selectedValue: props.modelValue
  })

  const api = {
    state,
    emit,
    change: change(emit),
    init: init({ state, service: $service })
  }

  watch(
    () => props.modelValue,
    (newValue) => {
      state.selectedValue = newValue
    },
    { immediate: true }
  )

  api.init()

  return api
}
