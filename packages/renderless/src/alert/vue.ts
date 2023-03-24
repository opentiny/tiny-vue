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

import { close, computedGetIcon, computedGetTitle } from './index'

export const api = ['close', 'state']

export const renderless = (props, { computed, reactive }, { t, emit, constants }) => {
  const api = {
    computedGetIcon: computedGetIcon({ constants, props }),
    computedGetTitle: computedGetTitle({ constants, props, t })
  }

  const state = reactive({
    show: true,
    getIcon: computed(() => api.computedGetIcon()),
    getTitle: computed(() => api.computedGetTitle())
  })

  Object.assign(api, {
    state,
    close: close({ state, emit })
  })

  return api
}
