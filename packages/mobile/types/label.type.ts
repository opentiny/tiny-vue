import type { ComputedRef, ExtractPropTypes } from 'vue'
import type { labelProps } from '@/label/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type ILabelProps = ExtractPropTypes<typeof labelProps>

export interface ILabelState {
  label: ComputedRef<string>
  type: ComputedRef<string>
  color: ComputedRef<string>
  size: ComputedRef<string>
  labelStyle: ComputedRef<object>
  labelClass: ComputedRef<string>
  isRequired: ComputedRef<boolean>
}

export interface ILabelApi {
  state: ILabelState
  handleClick: (event: MouseEvent) => void
  computeLabel: () => string
  computeLabelStyle: () => object
  computeLabelClass: () => []
}
export type ILabelRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  api: ILabelApi
  state: ILabelState
  props: ILabelProps
}

export type ILabelRenderlessParamUtils = ISharedRenderlessParamUtils<never>
