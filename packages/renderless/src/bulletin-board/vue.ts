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

import { getRoute, computedDataList, computedMoreLink } from './index'

export const api = ['state', 'getRoute']

export const renderless = (props, { reactive, computed, watch }) => {
  const api = {}
  const state = reactive({
    actName: props.activeName,
    dataList: computed(() => api.computedDataList()),
    moreLink: computed(() => api.computedMoreLink())
  })

  watch(
    () => props.activeName,
    (value) => {
      state.actName = value
    },
    { immediate: true }
  )

  Object.assign(api, {
    state,
    getRoute,
    computedDataList: computedDataList({ props, state }),
    computedMoreLink: computedMoreLink({ props })
  })

  return api
}
