import type { ExtractPropTypes } from 'vue'
import { alertProps, $constants } from '@/alert/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export interface IAlertState {
  show: boolean
  getIcon: string
  getTitle: string
  contentVisible: boolean
  contentDescribeHeight: number
  contentDefaultHeight: number
  contentMaxHeight: number
  scrollStatus: boolean
}

export type IAlertProps = ExtractPropTypes<typeof alertProps>

export type IAlertConstants = typeof $constants

export type IAlertRenderlessParams = ISharedRenderlessFunctionParams<IAlertConstants> & {
  state: IAlertState
  props: IAlertProps
}

export interface IAlertApi {
  state: IAlertState
  computedGetIcon: () => string
  computedGetTitle: () => string
  handleClose: () => void
  handleHeaderClick: () => void
}

export type IAlertRenderlessParamUtils = ISharedRenderlessParamUtils<IAlertConstants>
