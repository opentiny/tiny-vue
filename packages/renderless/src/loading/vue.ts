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

import { handleAfterLeave, setText, close } from './index'

export const api = ['state', 'handleAfterLeave', 'setText', 'close']

export const renderless = (props, { reactive }, { constants, vm, emit }) => {
  const state = reactive({
    text: null,
    spinner: null,
    visible: false,
    customClass: '',
    background: null,
    fullscreen: true,
    closed: false
  })

  const api = {
    state,
    setText: setText(state),
    handleAfterLeave: handleAfterLeave(emit),
    close: close({ state, constants, vm })
  }

  return api
}
