import type { ExtractPropTypes } from 'vue'
import { milestoneProps, $constants } from '@/milestone/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type IMilestoneProps = ExtractPropTypes<typeof milestoneProps>

export interface IMilestoneState {
  tipContent: string
}

export type IMilestoneConstants = typeof $constants

export type IMilestoneRenderlessParams = ISharedRenderlessFunctionParams<IMilestoneConstants> & {
  state: IMilestoneState
  props: IMilestoneProps
  api: IMilestoneApi
}

export interface IMilestonePropsDataFlags {
  content: string
  name?: string
  status: string
}

export interface IMilestoneNode {
  name: string
  status: string
  time: string
  flags?: IMilestonePropsDataFlags[]
}

export interface IMilestoneIconStyle {
  background: string
  color: string
  boxShadow: string
}

export interface IMilestoneGetMileContentParams {
  data: IMilestoneNode[]
  index: number
}

export interface IMilestoneHandleFlagClickParams {
  idx: number
  flag: IMilestonePropsDataFlags
}

export interface IMilestoneHandleClickParams {
  index: number
  node: IMilestoneNode
}

export interface IMilestoneFlagOperateParams {
  event: MouseEvent & { target: HTMLInputElement }
  over: boolean
  text: string
}

export interface IMilestoneApi {
  state: IMilestoneState
  getLineColor: (status: string) => { background: string }
  getMileContent: ({ data, index }: IMilestoneGetMileContentParams) => IMilestonePropsDataFlags[]
  handleFlagClick: ({ idx, flag }: IMilestoneHandleFlagClickParams) => void
  handleClick: ({ index, node }: IMilestoneHandleClickParams) => void
  getMileIcon: (node: IMilestoneNode) => IMilestoneIconStyle
  flagOperate: ({ event, over, text }: IMilestoneFlagOperateParams) => void
}

export type IMilestoneRenderlessParamUtils = ISharedRenderlessParamUtils<IMilestoneConstants>
