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
  /**
   * @zh 状态
   * @en status of button
   */
  state: IButtonState
  /**
   * @zh 该项不会被渲染, 因为在renderless.ts的api变量中没有暴露
   * @en This item will not be rendered because it is not exposed in the API variable of renderless. ts
   */
  clearTimer: ReturnType<typeof clearTimer>
  /**
   * @zh 点击时触发的函数
   * @en Function triggered on click
   */
  handleClick: ReturnType<typeof handleClick>
}

export type IButtonRenderlessParamUtils = ISharedRenderlessParamUtils<never>
