import type { ExtractPropTypes } from 'vue'
import { toastProps } from '@/toast/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import { timeout } from '../src/toast'

export interface IToastState {
  text: string | null
  type?: string
  time: number
}

export type IToastProps = ExtractPropTypes<typeof toastProps>

export type IToastRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: IToastState
  props: IToastProps
}

export interface IToastApi {
  state: IToastState
  timeout: ReturnType<typeof timeout>
}

export type IToastRenderlessParamUtils = ISharedRenderlessParamUtils<never>
