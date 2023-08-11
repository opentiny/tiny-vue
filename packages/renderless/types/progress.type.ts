import type { ExtractPropTypes } from 'vue'
import { progressProps, $constants } from '@/progress/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

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
}
