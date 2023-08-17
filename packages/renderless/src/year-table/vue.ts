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

import { getRows, getCellStyle, handleYearTableClick, watchDate, markRange, handleMouseMove } from './index'

export const api = ['state', 'handleYearTableClick', 'getCellStyle', 'handleMouseMove']

export const renderless = (props, { computed, reactive, watch }, { emit, vm }) => {
  const api = {}
  const state = reactive({
    tableRows: [[], [], []],
    rows: computed(() => api.getRows())
  })

  Object.assign(api, {
    state,
    getCellStyle: getCellStyle({ props }),
    handleYearTableClick: handleYearTableClick({ emit, props, state }),
    markRange: markRange({ props, state }),
    watchDate: watchDate({ api, props }),
    getRows: getRows({ props, state, vm }),
    handleMouseMove: handleMouseMove({ api, emit, props, state })
  })

  watch(
    () => props.rangeState,
    (value, oldValue) => value !== oldValue && api.markRange(props.minDate, value.endDate),
    { deep: true }
  )

  watch(() => props.minDate, api.watchDate)

  watch(() => props.maxDate, api.watchDate)

  return api
}
