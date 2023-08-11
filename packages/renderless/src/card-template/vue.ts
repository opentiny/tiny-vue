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

import { toolClick, computedTools, computedMoreTools } from './index'

export const api = ['state', 'toolClick']

export const renderless = (props, { computed, reactive }, { t, refs, constants }) => {
  const api = {
    computedMoreTools: computedMoreTools({ props })
  }

  const state = reactive({
    isEnter: false,
    showMoreTools: false,
    moreTools: computed(() => api.computedMoreTools(props)),
    currentTools: computed(() => api.computedTools())
  })

  api.state = state
  api.computedTools = computedTools({ constants, props, refs, state, t })
  api.toolClick = toolClick(state)

  return api
}
