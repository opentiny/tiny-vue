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
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  PROGRESS_TYPE: {
    LINE: 'line',
    CIRCLE: 'circle',
    DASHBOARD: 'dashboard'
  },
  PROGRESS_SIZE: {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
  },
  PROGRESS_SIZE_WIDTH: {
    SMALL: 48,
    MEDIUM: 96,
    LARGE: 160
  },
  PROGRESS_STATUS: {
    DEFAULT: 'default',
    SUCCESS: 'success',
    EXCEPTION: 'exception',
    WARNING: 'warning'
  },
  STATUS_TO_COLOR: {
    success: '#00a874',
    exception: '#eb171f',
    warning: '#fdc000'
  },
  STATUS_DEFAULT_COLOR: '#0067d1',
  ICON_CIRCLE_WARNING: 'icon-warning',
  ICON_CIRCLE_SUCCESS: 'icon-success',
  ICON_CIRCLE_EXCEPTION: 'icon-error',
  ICON_SUCCESS: 'icon-yes',
  ICON_EXCEPTION: 'icon-close',
  ICON_WARNING: 'icon-warning',
  TEXT_XS: 12,
  TEXT_SM: 14,
  WIDTH_RATE_TWO: 2,
  WIDTH_RATE_THREE: 3,
  WIDTH_RATE_SIX: 6,
  DEFAULT_STROKE_WIDTH: 6,
  REL_STROKE_WIDTH: 4,
  DEFAULT_WIDTH: 126,
  STROKE_WIDTH_RATE: 0.4
}

export const progressProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  color: {
    type: [String, Array, Function],
    default: ''
  },
  info: String,
  format: Function,
  percentage: {
    type: Number,
    default: 0,
    required: true,
    validator: (val: number) => val >= 0 && val <= 100
  },
  showText: {
    type: Boolean,
    default: true
  },
  status: {
    type: String,
    validator: (value: string) => !!$constants.PROGRESS_STATUS[value.toUpperCase()]
  },
  strokeWidth: {
    type: Number,
    default: 0
  },
  textInside: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: $constants.PROGRESS_TYPE.LINE,
    validator: (value: string) => !!$constants.PROGRESS_TYPE[value.toUpperCase()]
  },
  size: {
    type: String,
    default: $constants.PROGRESS_SIZE.MEDIUM,
    validator: (value) => !!$constants.PROGRESS_SIZE[value.toUpperCase()]
  },
  width: {
    type: Number,
    default: 0
  }
}

export type IProgressProps = ExtractPropTypes<typeof progressProps>

export interface IProgressState {
  percentTextSize: number
  rate: number
  radius: number
  stroke: string
  content: string
  barStyle: object
  trackPath: string
  perimeter: number
  iconClass: string
  iconStyle: object
  circleStyle: object
  trailPathStyle: object
  circlePathStyle: object
  progressTextSize: number
  strokeDashoffset: string
  strokeWidth: number
  width: number
  relativeStrokeWidth: number
}

export interface IProgressColorItem {
  color: string
  progress: number
}

export interface IProgressIconStyle<T> {
  width: T
  height: T
}

export interface IProgressPathStyle {
  strokeDasharray: string
  strokeDashoffset: string
  transition?: string
}

export interface IProgressBarStyle {
  width: string
  backgroundColor: string
}

export interface IProgressApi {
  state: IProgressState
  customAppearHook: (el: HTMLElement) => void
  computedContent: () => string
  getColorArray: () => IProgressColorItem[]
  computedRate: () => number
  computedPerimeter: () => number
  computedRadius: () => number
  computedTrackPath: () => string
  computedIconClass: () => string
  computedIconStyle: () => IProgressIconStyle<number> | object
  computedCircleStyle: () => IProgressIconStyle<string> | object
  computedCirclePathStyle: () => IProgressPathStyle
  computedStrokeDashoffset: () => string
  computedTrailPathStyle: () => IProgressPathStyle
  computedRelativeStrokeWidth: () => number
  computedProgressTextSize: () => number
  customAfterAppearHook: (el: HTMLElement) => void
  customBeforeAppearHook: (el: HTMLElement) => void
  getLevelColor: (p: number) => string
  computedBarStyle: () => IProgressBarStyle
  getCurrentColor: (p: number) => string
  computedStroke: () => string
}

export type IProgressConstants = typeof $constants

export type IProgressRenderlessParamUtils = ISharedRenderlessParamUtils<IProgressConstants> & {
  constants: IProgressConstants
}

export type IProgressRenderlessParams = ISharedRenderlessFunctionParams<IProgressConstants> & {
  state: IProgressState
  props: IProgressProps
  api: IProgressApi
}
