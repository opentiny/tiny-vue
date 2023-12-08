import type { ExtractPropTypes, Component } from 'vue'
import type { loadingProps } from '@/loading/src'
import type { constants } from '@/loading/src/service'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { setText, close, handleAfterLeave } from '../src/loading'

export interface ILoadingState {
  text: string | null
  spinner: Component | null
  visible: boolean
  customClass: string
  background: string | null
  fullscreen: boolean
  closed: boolean
  size: string
  body?: boolean
  lock?: boolean
  target?: HTMLElement | string
  tiny_mode?: string
  type?: string
}

export type ILoadingProps = ExtractPropTypes<typeof loadingProps>

export type ILoadingConstants = typeof constants

export type ILoadingRenderlessParams = ISharedRenderlessFunctionParams<ILoadingConstants> & {
  state: ILoadingState
  props: ILoadingProps
}

export interface ILoadingApi {
  state: ILoadingState
  setText: ReturnType<typeof setText>
  handleAfterLeave: ReturnType<typeof handleAfterLeave>
  close: ReturnType<typeof close>
}

export type ILoadingRenderlessParamUtils = ISharedRenderlessParamUtils<ILoadingConstants>
