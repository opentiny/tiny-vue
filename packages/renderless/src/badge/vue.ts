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

import { computedContent, computedValueRef } from './index'
import { xss } from '../common/xss'

export const api = ['state']

export const renderless = (props, { computed, reactive }) => {
  const state = reactive({
    isOverstep: false,
    valueRef: computed(() => api.computedValueRef()),
    content: computed(() => api.computedContent()),
    href: computed(() => xss.filterUrl(props.href))
  })

  const api = {
    state,
    computedValueRef: computedValueRef({ props }),
    computedContent: computedContent({ props, state })
  }

  return api
}
