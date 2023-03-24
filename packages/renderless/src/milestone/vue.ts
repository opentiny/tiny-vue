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

import { handleClick, flagOprate, getMileIcon, getMileContent, getLineColor, handleFlagClick } from './index'

export const api = [
  'state',
  'showTip',
  'handleClick',
  'handleFlagClick',
  'flagOprate',
  'getMileIcon',
  'getMileContent',
  'getMileFlagStyle',
  'getLineColor',
  'getStatus'
]

export const renderless = (props, { reactive }, { emit, refs, constants }) => {
  const state = reactive({
    tipContent: ''
  })

  const api = {
    state,
    getLineColor: getLineColor(props),
    getMileContent: getMileContent(props),
    handleFlagClick: handleFlagClick(emit),
    handleClick: handleClick({ emit, state }),
    getMileIcon: getMileIcon({ constants, props }),
    flagOprate: flagOprate({ constants, refs, state })
  }

  return api
}
