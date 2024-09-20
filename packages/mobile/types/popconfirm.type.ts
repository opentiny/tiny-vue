import type { ExtractPropTypes } from 'vue'
import type { popConfirmProps, $constants } from '@/popconfirm/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { show, hide, confirm, handleEmit } from '../src/popconfirm'

export interface IPopconfirmState {
  isLock: boolean
  showPopover: boolean
  getIcon: string
}

export type IPopconfirmProps = ExtractPropTypes<typeof popConfirmProps>

export type IPopconfirmConstants = typeof $constants

export type IPopconfirmRenderlessParams = ISharedRenderlessFunctionParams<IPopconfirmConstants> & {
  api: IPopconfirmApi
  state: IPopconfirmState
  props: IPopconfirmProps
}

export interface IPopconfirmApi {
  state: IPopconfirmState
  show: ReturnType<typeof show>
  hide: ReturnType<typeof hide>
  confirm: ReturnType<typeof confirm>
  handleEmit: ReturnType<typeof handleEmit>
}

export type IPopconfirmRenderlessParamUtils = ISharedRenderlessParamUtils<IPopconfirmConstants>
