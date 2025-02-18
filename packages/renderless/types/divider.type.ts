import type { ExtractPropTypes } from 'vue'
import type { dividerProps } from '@/divider/src'
import type { computedLineStyle, computedTextStyle, computedRootStyle, setDividerHeight } from '../src/divider'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export interface IDividerState {
  height: string
  margin: string
  lineStyle: IDividerStyle
  textStyle: IDividerStyle
  rootStyle: IDividerStyle
}

export type IDividerProps = ExtractPropTypes<typeof dividerProps>

export interface IDividerApi {
  state: IDividerState
  computedLineStyle: ReturnType<typeof computedLineStyle>
  computedTextStyle: ReturnType<typeof computedTextStyle>
  computedRootStyle: ReturnType<typeof computedRootStyle>
  setDividerHeight: ReturnType<typeof setDividerHeight>
}

export type IDividerRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  api: IDividerApi
  state: IDividerState
  props: IDividerProps
}

export type IDividerRenderlessParamUtils = ISharedRenderlessParamUtils<never>

export interface IDividerStyle {
  margin?: string | number
  height?: string | number
  fontSize?: string | number
  right?: string | number
  left?: string | number
  borderLeftStyle?: string | number
  borderTopStyle?: string | number
  borderTopColor?: string | number
}
