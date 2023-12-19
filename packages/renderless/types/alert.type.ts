import type { ExtractPropTypes, CSSProperties } from 'vue'
import { alertProps, $constants } from '@/alert/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

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
  api: IAlertApi
  state: IAlertState
  props: IAlertProps
}

export interface IAlertApi {
  state: IAlertState
  computedGetIcon: () => string
  computedGetTitle: () => string
  handleClose: () => void
  handleHeaderClick: () => void
  watchAutoHide: (value: boolean) => void
  computedStyle: () => CSSProperties
}

export type IAlertRenderlessParamUtils = ISharedRenderlessParamUtils<IAlertConstants>
