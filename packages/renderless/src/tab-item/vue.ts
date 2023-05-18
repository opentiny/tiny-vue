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

import { computedIsClosable, computedActive, computedPaneName, watchTitle } from './index'

export const api = ['state']

export const renderless = (props, { computed, inject, reactive, watch }, { parent, nextTick }) => {
  const api = {
    watchTitle: watchTitle(parent),
    computedIsClosable: computedIsClosable({ parent, props })
  }

  const state = reactive({
    index: null,
    loaded: false,
    animateShow: true,
    rootTabs: inject('rootTabs'),
    active: computed(() => api.computedActive()),
    paneName: computed(() => api.computedPaneName()),
    isClosable: computed(() => api.computedIsClosable())
  })

  Object.assign(api, {
    state,
    computedActive: computedActive({ nextTick, props, state }),
    computedPaneName: computedPaneName({ props, state })
  })

  watch(() => props.title, api.watchTitle)

  return api
}
