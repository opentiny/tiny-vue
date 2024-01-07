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

import { setSubitemAttrValue, setGlobalAttrValue, getClassName, getStyle, row } from './index'

export const api = ['state']

export const renderless = (props, { computed, reactive, inject }, { parent }) => {
  const api = {}
  const state = reactive({
    row: computed(() => api.row()),
    style: computed(() => api.getStyle()),
    className: computed(() => api.getClassName()),
    layout: inject('layout')
  })

  Object.assign(api, {
    state,
    row: row(parent),
    setGlobalAttrValue,
    setSubitemAttrValue,
    getStyle: getStyle({ props, state }),
    getClassName: getClassName({ api, props, state })
  })

  return api
}
