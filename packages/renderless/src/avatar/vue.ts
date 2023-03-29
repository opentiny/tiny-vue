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

import { computedAvatarClass, handleError } from './index'

export const api = ['state', 'handleError']

export const renderless = (props, { computed, reactive }, { constants }) => {
  const api = {
    computedAvatarClass: computedAvatarClass(constants)
  }

  const state = reactive({
    isSrcImageExist: true,
    isDefaultImageExist: true,
    avatarClass: computed(() => api.computedAvatarClass(props))
  })

  Object.assign(api, {
    state,
    handleError: handleError({ props, state })
  })

  return api
}
