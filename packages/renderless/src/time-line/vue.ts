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
  getStatus,
  computedData,
  getDate,
  computedCurrent,
  computedIsReverse,
  changeStatus,
  computedStackNodes,
  computedSpace,
  computedWrapperClass,
  toggleFold
} from './index'
import type {
  ITimelineApi,
  ITimelineProps,
  ITimelineRenderlessParamUtils,
  ITimelineState,
  ISharedRenderlessParamHooks
} from '@/types'

export const api = ['state', 'handleClick', 'getStatusCls', 'getStatus', 'getDate', 'changeStatus', 'toggleFold']

export const renderless = (
  props: ITimelineProps,
  { computed, reactive, provide, watch }: ISharedRenderlessParamHooks,
  { t, emit, constants }: ITimelineRenderlessParamUtils
): ITimelineApi => {
  const api = {} as ITimelineApi
  const state: ITimelineState = reactive({
    // 当标签式使用时，记录有多少个 item 的标签
    itemsArray: [],
    nodes: computed(() => api.computedData()),
    current: computed(() => api.computedCurrent()),
    isReverse: computed(() => api.computedIsReverse()),
    stackNodes: computed(() => (state.showAll ? state.nodes : api.computedStackNodes())),
    computedSpace: computed(() => api.computedSpace()),
    showData: false,
    showAll: false,
    computedWrapperClass: computed(() => api.computedWrapperClass())
  })

  Object.assign(api, {
    state,
    getDate,
    computedData: computedData({ props, state }),
    computedCurrent: computedCurrent({ props, state }),
    computedIsReverse: computedIsReverse(props),
    computedSpace: computedSpace({ props }),
    getStatus: getStatus({ state, t }),
    handleClick: handleClick({ emit, state }),
    getStatusCls: getStatusCls({ constants, state }),
    computedStackNodes: computedStackNodes({ state, props }),
    changeStatus: changeStatus({ state }),
    computedWrapperClass: computedWrapperClass({ props }),
    toggleFold: toggleFold({ props })
  })

  provide('nodesInject', { state, props })

  return api
}
