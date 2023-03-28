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

import { getUsers, cacheUser, saveCache, initService } from '@opentiny/vue-renderless/user'
import { initUser, showCard, showDetail } from './index'

export const api = ['state', 'showCard', 'showDetail']

export const renderless = (props, { reactive, watch }, { service }) => {
  service = initService({ props, service })

  const api = {}

  const state = reactive({
    options: [],
    user: [],
    selected: [],
    type: props.valueField,
    expand: false,
    data: {},
    spinner: true,
    imgUrl: '',
    batch: props.batch === false ? false : props.batch || service.batch
  })

  Object.assign(api, {
    state,
    showDetail: showDetail(state),
    saveCache: saveCache({ props }),
    cacheUser: cacheUser({ api, props, service }),
    initUser: initUser({ api, props, state }),
    getUsers: getUsers({ api, props, state }),
    showCard: showCard({ api, service, state }),
    getUserImageUrl: service.getUserImageUrl,
    fetchW3Accounts: service.fetchW3Accounts,
    fetchUserByUserId: service.fetchUserByUserId
  })

  watch(() => props.modelValue, api.initUser, { immediate: true })

  return api
}
