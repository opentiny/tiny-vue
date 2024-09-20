import type { ExtractPropTypes } from 'vue'
import type { stepsProps } from '@/steps/src'
import type { ISharedRenderlessParamUtils, ISharedRenderlessFunctionParams } from './shared.type'
import type {
  updateStartIndex,
  isVisibleHandler,
  computedRightNodePos,
  handleMouseenter,
  handleMouseleave
} from '../src/steps/index'

export type IStepsProps = ExtractPropTypes<typeof stepsProps>

export type IStepsRenderlessParamUtils = ISharedRenderlessParamUtils<never>

export interface IStepsState {
  startIndex: number
  endIndex: number
  rightNodePositions: IStepsNodePosConfig[]
  computedSpace: number | string
  popoverVisible: boolean
  popoverContent: string | null
  popoverPlacement: string
}

export interface IStepsApi {
  state: IStepsState
  updateStartIndex: ReturnType<typeof updateStartIndex>
  isVisibleHandler: ReturnType<typeof isVisibleHandler>
  handleMouseenter: ReturnType<typeof handleMouseenter>
  handleMouseleave: ReturnType<typeof handleMouseleave>
  computedRightNodePos: ReturnType<typeof computedRightNodePos>
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
