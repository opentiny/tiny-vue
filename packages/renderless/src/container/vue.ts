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

import {
  computedShowHeader,
  computedShowAside,
  computedShowFooter,
  computedHeaderStyle,
  computedAsideStyle,
  computedMainStyle,
  computedFooterStyle
} from './index'

export const api = ['state']

export const renderless = (props, { computed, reactive }, { constants }) => {
  const api = {}
  const state = reactive({
    showAside: computed(() => api.computedShowAside()),
    showHeader: computed(() => api.computedShowHeader()),
    showFooter: computed(() => api.computedShowFooter()),
    mainStyle: computed(() => api.computedMainStyle()),
    asideStyle: computed(() => api.computedAsideStyle()),
    headerStyle: computed(() => api.computedHeaderStyle()),
    footerStyle: computed(() => api.computedFooterStyle())
  })

  Object.assign(api, {
    state,
    computedShowAside: computedShowAside({ constants, props }),
    computedShowHeader: computedShowHeader({ constants, props }),
    computedShowFooter: computedShowFooter({ constants, props }),
    computedMainStyle: computedMainStyle({ constants, props }),
    computedAsideStyle: computedAsideStyle({ constants, props }),
    computedHeaderStyle: computedHeaderStyle({ constants, props }),
    computedFooterStyle: computedFooterStyle({ constants, props })
  })

  return api
}
