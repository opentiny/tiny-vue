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

import { computedClassName, computedStyle } from './index'

export const api = ['state']

export const renderless = (props, { computed, reactive }) => {
  const api = {
    computedStyle,
    computedClassName
  }

  const state = reactive({
    style: computed(() => api.computedStyle(props.gutter)),
    className: computed(() =>
      api.computedClassName({
        flex: props.flex,
        justify: props.justify,
        align: props.align
      })
    )
  })

  api.state = state

  return api
}
