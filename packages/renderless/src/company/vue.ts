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

export const api = ['state', 'change', 'clear', 'visibleChange']

export const renderless = (props, { watch, reactive }, { emit, service }) => {
  const $service = initService({ props, service })

  const state = reactive({
    options: [],
    source: null,
    selectedValue: props.modelValue
  })

  const api = {
    state,
    change: change(emit),
    init: init({ state, props, service: $service })
  }

  watch(
    () => props.modelValue,
    (propsValue) => {
      state.selectedValue = propsValue
    },
    { immediate: true }
  )

  api.init()

  return api
}
