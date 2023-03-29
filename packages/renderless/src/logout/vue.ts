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

import { logout, initService } from './index'

export const api = ['state', 'logout']

export const renderless = (props, { reactive }, { service }) => {
  const $service = initService({ props, service })

  const state = reactive({
    logout: $service.isGuestUser()
  })

  const api = {
    state,
    logout: logout({ service: $service, state, props })
  }

  return api
}
