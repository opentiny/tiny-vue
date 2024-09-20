import type { ComputedRef, ExtractPropTypes } from 'vue'
import type { floatButtonProps } from '@/float-button/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { clearTimer, handleClick } from '../src/float-button'

export interface IFloatButtonState {
  timer: number
  disabled: boolean
  open: Boolean
  show: Boolean
  hasEvent: Boolean
  formDisabled: ComputedRef<boolean>
  buttonDisabled: ComputedRef<boolean>
}

export type IFloatButtonRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: IFloatButtonState
  props: IFloatButtonProps
}

export type IFloatButtonProps = ExtractPropTypes<typeof floatButtonProps>

export interface IFloatButtonApi {
  state: IFloatButtonState
  clearTimer: ReturnType<typeof clearTimer>
  handleClick: ReturnType<typeof handleClick>
}

export type IFloatButtonRenderlessParamUtils = ISharedRenderlessParamUtils<never>
