import type { ExtractPropTypes } from 'vue'
import type { userHeadProps, $constants } from '@/user-head/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { computedFontSize, computedLabel, computedMessage, computedStyle, getInternalValue } from 'src/user-head'

export interface IUserHeadState {
  internalValue: string | Record<string, any>
  label: string
  style: ReturnType<ReturnType<typeof computedStyle>>
  message: string
  fontSize: { fontSize: string }
  size: number
  color: string
  backgroundColor: string
}

export type IUserHeadProps = ExtractPropTypes<typeof userHeadProps>

export type IUserHeadConstants = typeof $constants

export type IUserHeadRenderlessParams = ISharedRenderlessFunctionParams<IUserHeadConstants> & {
  api: IUserHeadApi
  state: IUserHeadState
  props: IUserHeadProps
}

export interface IUserHeadApi {
  state: IUserHeadState
  computedLabel: ReturnType<typeof computedLabel>
  computedStyle: ReturnType<typeof computedStyle>
  computedMessage: ReturnType<typeof computedMessage>
  computedFontSize: ReturnType<typeof computedFontSize>
  getInternalValue: ReturnType<typeof getInternalValue>
  handleClick: (event: Event) => void
  mouseEnter: (event: Event) => void
}

export type IUserHeadRenderlessParamUtils = ISharedRenderlessParamUtils<IUserHeadConstants>
