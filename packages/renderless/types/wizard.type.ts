import type { ExtractPropTypes } from 'vue'
import type { wizardProps, $constants } from '@/wizard/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type IWizardProps = ExtractPropTypes<typeof wizardProps>

interface IWizardPropsDataNodeValues {
  text: string
  value: string
}

// props.data类型
export interface IWizardPropsDataNode {
  name: string
  status: string
  showNode?: boolean
  content?: string
  imgUrl?: string
  users?: string
  userName?: string
  roleNumber?: string
  date?: string
  values?: IWizardPropsDataNodeValues[]
}

export interface IWizardState {
  datas: IWizardProps['data']
  submitShow: boolean
  doing: string
  ready: string
  wait: string
}

export type IWizardConstants = typeof $constants

export type IWizardRenderlessParams = ISharedRenderlessFunctionParams<IWizardConstants> & {
  state: IWizardState
  props: IWizardProps
  api: IWizardApi
}

export interface IWizardValue {
  text: string
  value: number
}

export interface IWizardNodesItem {
  date: string
  nodeStatus: string
  showNode: boolean
  value: IWizardPropsDataNode[]
}
export interface IWizardApi {
  state: IWizardState
  nodeClick: (node: IWizardPropsDataNode, index: number, event: Event) => void
  showNode: (node: IWizardPropsDataNode, index: number, event: Event) => void
  nextStepHandle: () => void
  lastStepHandle: () => void
  submitHandle: () => void
  btnSaveHandle: () => void
  setTimelineflowNodeStatus: (nodes: IWizardNodesItem[]) => void
  timelineflowData: () => void
}

export type IWizardRenderlessParamUtils = ISharedRenderlessParamUtils<IWizardConstants>
