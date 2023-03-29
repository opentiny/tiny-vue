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

import { getUserHref } from './index'

export const api = ['show', 'getUserHref']

export const renderless = (props, { reactive, ref }) => {
  const state = reactive({
    initialized: false
  })

  const api = {
    state,
    show: ref(false)
  }

  Object.assign(api, {
    getUserHref: getUserHref({ api, props })
  })

  return api
}
