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
  handleClick,
  getStatusCls,
  computedItemCls,
  getStatus,
  getDate,
  computedCurrent,
  computedIsReverse,
  computedSpace,
  computedItemStyle
} from './index'

export const api = ['state', 'handleClick', 'getStatusCls', 'getStatus', 'getDate', 'rootProps']

export const renderless = (props, { computed, reactive, inject }, { t, emit, constants }) => {
  const api = {}

  const { timelineItems, nodes, props: rootProps } = inject('nodesInject')
  timelineItems.push(props.node)

  const state = reactive({
    nodesLength: computed(() => nodes.length),
    current: computed(() => api.computedCurrent()),
    isReverse: computed(() => api.computedIsReverse()),
    computedSpace: computed(() => api.computedSpace()),
    computedItemCls: computed(() => api.computedItemCls()),
    computedItemStyle: computed(() => api.computedItemStyle())
  })

  Object.assign(api, {
    state,
    rootProps,
    getDate,
    computedCurrent: computedCurrent({ state, api }),
    computedIsReverse: computedIsReverse(api),
    computedItemCls: computedItemCls({ props, api }),
    computedItemStyle: computedItemStyle({ props, state, api }),
    computedSpace: computedSpace({ props, api }),
    getStatus: getStatus({ state, t }),
    handleClick: handleClick({ emit, state }),
    getStatusCls: getStatusCls({ constants, state })
  })

  return api
}
