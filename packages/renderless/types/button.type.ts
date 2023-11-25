import type { ComputedRef, ExtractPropTypes } from 'vue'
import type { buttonProps } from '@/button/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { clearTimer, handleClick } from '../src/button'

export interface IButtonState {
  timer: number
  disabled: boolean
  plain: ComputedRef<boolean>
  formDisabled: ComputedRef<boolean>
  buttonDisabled: ComputedRef<boolean>
}

export type IButtonRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: IButtonState
  props: IButtonProps
}

export type IButtonProps = ExtractPropTypes<typeof buttonProps>

export interface IButtonApi {
  state: IButtonState
  clearTimer: ReturnType<typeof clearTimer>
  handleClick: ReturnType<typeof handleClick>
}

export type IButtonRenderlessParamUtils = ISharedRenderlessParamUtils<never>
