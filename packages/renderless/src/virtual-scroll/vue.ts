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

import { getUsers, cacheUser, saveCache, initService, syncCacheIds } from '../user'
import { initUser, showCard, showDetail, computedTextField, computedValueField } from './index'

export const api = ['state', 'showCard', 'showDetail']

export const renderless = (props, { reactive, watch, computed }, { service }) => {
  service = initService({ props, service })

  const api = {}

  const state = reactive({
    
  })

  Object.assign(api, {
    state,

  })

  // watch(() => props.modelValue, api.initUser, { immediate: true })

  return api
}
