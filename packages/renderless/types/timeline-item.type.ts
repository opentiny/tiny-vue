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

import type { ExtractPropTypes } from 'vue'
import { timelineItemProps, $constants } from '@/timeline-item/src'
import {
  getDate,
  computedCurrent,
  computedIsReverse,
  computedItemCls,
  computedItemStyle,
  computedWidth,
  getStatus,
  handleClick,
  getStatusCls
} from '../src/timeline-item'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { ITimelineCustomCls, ITimelineProps } from './time-line.type'

export type ITimelineItemProps = ExtractPropTypes<typeof timelineItemProps>

export type ITimelineItemConstants = typeof $constants

export type ITimelineItemRenderlessParamUtils = ISharedRenderlessParamUtils<ITimelineItemConstants>

export type TimelineItemType = 'primary' | 'success' | 'warning' | 'error' | 'info'

export interface ITimelineItemState {
  nodesLength: number
  current: number
  isReverse: boolean
  computedSpace: string
  computedItemCls: ITimelineCustomCls
  computedItemStyle: { [key: string]: string | number } | null
  computedLineWidth: string
}

export interface ITimelineItemApi {
  state: ITimelineItemState
  rootProps: ITimelineProps
  getDate: ReturnType<typeof getDate>
  computedCurrent: ReturnType<typeof computedCurrent>
  computedIsReverse: ReturnType<typeof computedIsReverse>
  computedItemCls: ReturnType<typeof computedItemCls>
  computedItemStyle: ReturnType<typeof computedItemStyle>
  computedWidth: ReturnType<typeof computedWidth>
  getStatus: ReturnType<typeof getStatus>
  handleClick: ReturnType<typeof handleClick>
  getStatusCls: ReturnType<typeof getStatusCls>
}

export type ITimelineItemRenderlessParams = ISharedRenderlessFunctionParams<ITimelineItemConstants> & {
  api: ITimelineItemApi
  state: ITimelineItemState
  props: ITimelineItemProps
}

export interface ITimelineItem {
  index: number
  name: string
  time: string
  error: boolean
  disabled: boolean
  type: TimelineItemType
  fold?: boolean
}

export interface ITimelineInject {
  timelineItems: ITimelineItem[]
  nodes: ITimelineItem[]
  props: ITimelineProps
}
