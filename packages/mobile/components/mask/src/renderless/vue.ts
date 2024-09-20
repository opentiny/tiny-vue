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

import { handleTouch } from './index'

export const api = ['state', 'handleTouch']

export const renderless = (props, { reactive, computed }, { emit }) => {
  const api = {}
  const state = reactive({
    calcStyle: computed(() => ({ zIndex: props.zIndex }))
  })

  Object.assign(api, {
    state,
    handleTouch: handleTouch({ props, emit })
  })

  return api
}
