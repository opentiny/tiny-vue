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
  computedWidth,
  computedItemStyle
} from './index'
import type {
  ITimelineItemApi,
  ITimelineItemProps,
  ITimelineItemRenderlessParamUtils,
  ITimelineItemState,
  ISharedRenderlessParamHooks,
  ITimelineInject
} from '@/types'

export const api = ['state', 'handleClick', 'getStatusCls', 'getStatus', 'getDate', 'rootProps']

export const renderless = (
  props: ITimelineItemProps,
  { computed, reactive, inject }: ISharedRenderlessParamHooks,
  { t, emit, constants }: ITimelineItemRenderlessParamUtils
): ITimelineItemApi => {
  const api = {} as ITimelineItemApi

  const { timelineItems, nodes, props: rootProps } = inject('nodesInject') as ITimelineInject
  timelineItems.push(props.node)

  const state: ITimelineItemState = reactive({
    nodesLength: computed(() => nodes.length),
    current: computed(() => api.computedCurrent()),
    isReverse: computed(() => api.computedIsReverse()),
    computedSpace: computed(() => api.computedWidth(props.space || api.rootProps.space)),
    computedItemCls: computed(() => api.computedItemCls()),
    computedItemStyle: computed(() => api.computedItemStyle()),
    computedLineWidth: computed(() => api.computedWidth(props.lineWidth || api.rootProps.lineWidth))
  })

  Object.assign(api, {
    state,
    rootProps,
    getDate,
    computedCurrent: computedCurrent({ state, api }),
    computedIsReverse: computedIsReverse(api),
    computedItemCls: computedItemCls({ props, api, state }),
    computedItemStyle: computedItemStyle({ props, state, api }),
    computedWidth: computedWidth(),
    getStatus: getStatus({ state, t }),
    handleClick: handleClick({ emit, state }),
    getStatusCls: getStatusCls({ constants, state })
  })

  return api
}
