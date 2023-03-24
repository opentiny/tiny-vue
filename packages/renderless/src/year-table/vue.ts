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

import { getCellStyle, handleYearTableClick } from './index'

export const api = ['state', 'handleYearTableClick', 'getCellStyle']

export const renderless = (props, { computed, reactive }, { emit }) => {
  const api = {}
  const state = reactive({
    startYear: computed(() => Math.floor(props.date.getFullYear() / 10) * 10)
  })

  Object.assign(api, {
    state,
    getCellStyle: getCellStyle({ props }),
    handleYearTableClick: handleYearTableClick({ emit })
  })

  return api
}
