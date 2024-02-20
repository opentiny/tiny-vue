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

import { handleClick, toggleExpand } from './index'

export const api = [
  'state',
  'created',
  'handleClick',
  'confirm',
  'reset',
  'wheelChange',
  'clickWheelItem',
  'loadDefault',
  'toggleExpand'
]

const initApi = ({ api, props, state, multiSelect }) => {
  Object.assign(api, {
    state,
    handleClick: handleClick({ props, multiSelect }),
    toggleExpand: toggleExpand({ props, multiSelect })
  })
}

export const renderless = (props, { reactive, inject }, { emit, nextTick, refs, vm }) => {
  const api = {}
  const multiSelect = inject('multiSelect')
  const state = reactive({})
  initApi({ api, multiSelect, props, state, emit, nextTick, refs, vm })

  return api
}
