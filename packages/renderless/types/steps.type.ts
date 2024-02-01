import type { ExtractPropTypes } from 'vue'
import type { stepsProps } from '@/steps/src'
import type { ISharedRenderlessParamUtils, ISharedRenderlessFunctionParams } from './shared.type'

export type IStepsProps = ExtractPropTypes<typeof stepsProps>

export type IStepsRenderlessParamUtils = ISharedRenderlessParamUtils<never>

export interface IStepsState {
  startIndex: number
  endIndex: number
  rightNodePositions: IStepsNodePosConfig[]
  computedSpace: number | string
}

export interface IStepsApi {
  state: IStepsState
  updateStartIndex: () => void
  isVisibleHandler: (index: number) => IStepsVisibleConfig
  computedRightNodePos: () => IStepsNodePosConfig[]
}

export type IStepsRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  props: IStepsProps
  state: IStepsState
  api: IStepsApi
}

export type IStepsVisibleConfig = 'hidden-left' | 'hidden-right' | 'visible'

export interface IStepsNodePosConfig {
  zIndex: number
  right: string
}
