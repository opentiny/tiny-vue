import type { ExtractPropTypes, StyleValue } from 'vue'
import type { radioButtonProps, $constants } from '@/radio-button/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type {
  handleChange,
  getValue,
  setValue,
  getGroup,
  getStyle,
  toggleEvents,
  keydownHandle,
  handleFocus,
  handleBlur
} from '../src/radio-button'

export interface IRadioButtonState {
  focus: boolean
  value: IRadioButtonProps['label']
  radioGroup: ISharedRenderlessFunctionParams<IRadioButtonConstants>['parent'] | null
  activeStyle: StyleValue
  size: string
  isDisabled: boolean
  tabIndex: number
  showTips: boolean
  tipContent: string | undefined
}

export type IRadioButtonProps = ExtractPropTypes<typeof radioButtonProps>

export type IRadioButtonConstants = typeof $constants

export type IRadioButtonRenderlessParams = ISharedRenderlessFunctionParams<IRadioButtonConstants> & {
  state: IRadioButtonState
  props: IRadioButtonProps
}

export interface IRadioButtonApi {
  state: IRadioButtonState
  handleChange: ReturnType<typeof handleChange>
  getValue: ReturnType<typeof getValue>
  setValue: ReturnType<typeof setValue>
  getGroup: ReturnType<typeof getGroup>
  getStyle: ReturnType<typeof getStyle>
  toggleEvents: ReturnType<typeof toggleEvents>
  keydownHandle: ReturnType<typeof keydownHandle>
  handleFocus: ReturnType<typeof handleFocus>
  handleBlur: ReturnType<typeof handleBlur>
}

export type IRadioButtonRenderlessParamUtils = ISharedRenderlessParamUtils<IRadioButtonConstants>
