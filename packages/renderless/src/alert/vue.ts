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

import { handleClose, computedGetIcon, computedGetTitle, handleHeaderClick } from './index'

export const api = ['handleClose', 'state', 'handleHeaderClick']

export const renderless = (props, { computed, reactive }, { t, emit, constants, vm, designConfig }) => {
  const state = reactive({
    show: true,
    getIcon: computed(() => api.computedGetIcon()),
    getTitle: computed(() => api.computedGetTitle()),
    contentVisible: false,
    contentDescribeHeight: 0,
    contentDefaultHeight: 0,
    contentMaxHeight: constants.CONTENT_MAXHEUGHT,
    scrollStatus: false
  })

  const api = {
    state,
    computedGetIcon: computedGetIcon({ constants, props, designConfig }),
    computedGetTitle: computedGetTitle({ constants, props, t }),
    handleClose: handleClose({ emit, state}),
    handleHeaderClick: handleHeaderClick({ state, props, vm })
  }

  return api
}
