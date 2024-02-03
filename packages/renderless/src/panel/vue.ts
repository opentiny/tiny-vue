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

import { collapse, expand, toggle } from './index'

export const api = ['state', 'toggle']

export const renderless = (props, { reactive }, { emit }) => {
  const api = {}
  const state = reactive({
    isShow: props.expand
  })

  Object.assign(api, {
    state,
    collapse: collapse({ emit, state }),
    expand: expand({ emit, state }),
    toggle: toggle({ api, state })
  })

  return api
}
