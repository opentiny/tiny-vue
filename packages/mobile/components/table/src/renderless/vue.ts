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
  computedCheckableData,
  computedSelectedKeys,
  computedSelectCls,
  watchDefaultChecked,
  watchSelected,
  selectRow,
  togeSelected,
  togeSelectAll
} from './index'

export const api = ['state', 'selectRow', 'togeSelected', 'togeSelectAll']

export const renderless = (props, { computed, reactive, watch }, { t, emit }) => {
  const api = {}
  const state = reactive({
    selectedRow: null,
    checkChangeByUser: false,
    selected: [],
    checkableData: computed(() => api.computedCheckableData()),
    selectedKeys: computed(() => api.computedSelectedKeys()),
    selectCls: computed(() => api.computedSelectCls())
  })

  Object.assign(api, {
    t,
    state,
    computedSelectCls: computedSelectCls({ state }),
    computedSelectedKeys: computedSelectedKeys({ props, state }),
    computedCheckableData: computedCheckableData({ props }),
    selectRow: selectRow({ emit, state }),
    togeSelected: togeSelected({ state }),
    togeSelectAll: togeSelectAll({ emit, props, state }),
    watchSelected: watchSelected({ emit, props, state }),
    watchDefaultChecked: watchDefaultChecked({ props, state })
  })

  watch(() => props.defaultChecked, api.watchDefaultChecked)

  watch(() => state.selected, api.watchSelected)

  return api
}
