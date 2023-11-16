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
import { timelineProps, $constants } from '@/time-line/src'
import { toggleFold } from 'src/time-line'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { ITimelineItem } from './timeline-item.type'

export type ITimelineProps = ExtractPropTypes<typeof timelineProps>

export type ITimelineConstants = typeof $constants

export type ITimelineRenderlessParamUtils = ISharedRenderlessParamUtils<ITimelineConstants>

export interface ITimelineState {
  nodes: ITimelineItem[]
  timelineItems: ITimelineItem[]
  current: number
  isReverse: boolean
  stackNodes: ITimelineItem[]
  computedSpace: string
  showData: boolean
  showAll: boolean
  computedWrapperClass: ITimelineCustomCls
  computedLineWidth: string
}

export interface ITimelineApi {
  state: ITimelineState
  getDate: () => string
  computedData: () => ITimelineItem[]
  computedCurrent: () => number
  computedIsReverse: () => boolean
  computedSpace: () => string | number
  getStatus: () => string
  handleClick: () => void
  getStatusCls: () => ITimelineStatusCls
  computedStackNodes: () => ITimelineItem[]
  changeStatus: () => boolean
  computedWrapperClass: () => ITimelineCustomCls
  toggleFold: ReturnType<typeof toggleFold>
}

export type ITimelineRenderlessParams = ISharedRenderlessFunctionParams<ITimelineConstants> & {
  api: ITimelineApi
  state: ITimelineState
  props: ITimelineProps
}

export type ITimelineStatusCls = {
  [key in keyof ITimelineConstants]?: boolean
}

export type ITimelineCustomCls = (string | { [key: string]: boolean })[]
