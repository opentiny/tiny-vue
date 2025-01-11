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
import type { PropType } from '@mobile-root/common'
import type { ExtractPropTypes } from 'vue'
import type { toggleFold } from './renderless'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  PROCESS_DONE_CLS: 'process-done',
  PROCESS_CUR_CLS: 'process-current',
  PROCESS_WAIT_CLS: 'process-wait',
  PROCESS_DISABLED_CLS: 'process-disabled',
  PROCESS_ERROR_CLS: 'process-error',
  STACK_NODES_MAX: 7,
  LIMITED_STACK_NODES: 3
}

export type ShapeType = 'circle' | 'dot'

export const timelineProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  vertical: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: Boolean,
    default: true
  },
  showNumber: {
    type: Boolean,
    default: true
  },
  nameField: {
    type: String,
    default: 'name'
  },
  timeField: {
    type: String,
    default: 'time'
  },
  tipsField: {
    type: String,
    default: 'tips'
  },
  autoColorField: {
    type: String,
    default: 'autoColor'
  },
  showIconField: {
    type: String,
    default: 'showIcon'
  },
  start: {
    type: Number,
    default: 1
  },
  data: Array,
  space: {
    type: [String, Number],
    default: ''
  },
  active: {
    type: Number,
    default: -1
  },
  reverse: {
    type: Boolean,
    default: false
  },
  showStatus: {
    type: Boolean,
    default: false
  },
  subField: {
    type: Boolean,
    default: false
  },
  foldDisabled: {
    type: Boolean,
    default: false
  },
  nodeMax: {
    type: [Number, String],
    default: $constants.STACK_NODES_MAX
  },
  limitedNodes: {
    type: [Number, String],
    default: $constants.LIMITED_STACK_NODES
  },
  onlyNumber: {
    type: Boolean,
    default: false
  },
  lineWidth: {
    type: [String, Number],
    default: ''
  },
  shape: {
    type: String as PropType<ShapeType>,
    default: 'circle'
  }
}

export type ITimelineProps = ExtractPropTypes<typeof timelineProps>

export type ITimelineConstants = typeof $constants

export type ITimelineRenderlessParamUtils = ISharedRenderlessParamUtils<ITimelineConstants>

export type TimelineItemType = 'primary' | 'success' | 'warning' | 'error' | 'info'
export interface ITimelineItem {
  index: number
  name: string
  time: string
  error: boolean
  disabled: boolean
  type: TimelineItemType
  fold?: boolean
}

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
