import type { ExtractPropTypes, StyleValue } from 'vue'
import type { switchProps, $constants } from '@/switch/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { toggle, computedWarpClasses, computedInnerClasses, computedStyle } from '../src/switch/index'

export interface ISwitchState {
  currentValue: string | number | boolean
  innerClasses: string
  wrapClasses: ISwitchClass
  style: StyleValue
  formDisabled: boolean
  disabled: boolean
  isDisplayOnly: boolean
  showText: boolean
}

export type ISwitchClass = Array<string | { [calssName: string]: boolean }>

export type ISwitchProps = ExtractPropTypes<typeof switchProps>

export type ISwitchConstants = typeof $constants

export type ISwitchRenderlessParams = ISharedRenderlessFunctionParams<ISwitchConstants> & {
  state: ISwitchState
  props: ISwitchProps
  prefixCls: string
}

export interface ISwitchApi {
  state: ISwitchState
  toggle: ReturnType<typeof toggle>
  computedWarpClasses: ReturnType<typeof computedWarpClasses>
  computedInnerClasses: ReturnType<typeof computedInnerClasses>
  computedStyle: ReturnType<typeof computedStyle>
}

export type ISwitchRenderlessParamUtils = ISharedRenderlessParamUtils<ISwitchConstants>
