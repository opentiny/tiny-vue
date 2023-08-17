import type { ComputedRef, ExtractPropTypes } from '@opentiny/vue-common'
import { buttonProps } from '@/button/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export interface IButtonState {
  timer: ReturnType<typeof setTimeout>
  disabled: boolean
  plain: ComputedRef<boolean>
  formDisabled: ComputedRef<boolean>
  buttonDisabled: ComputedRef<boolean>
}

export type IButtonRenderlessParams = ISharedRenderlessFunctionParams & {
  state: IButtonState
  props: IButtonProps
}

export type IButtonProps = ExtractPropTypes<typeof buttonProps>

export interface IButtonApi {
  state: IButtonState
  clearTimer: () => void
  handleClick: (event: MouseEvent) => void
}

export type IButtonRenderlessParamUtils = ISharedRenderlessParamUtils
