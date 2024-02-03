import type { ExtractPropTypes } from 'vue'
import type { radioGroupProps } from '@/radio-group/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { mounted, handleKeydown } from '../src/radio-group'

export interface IRadioGroupState {
  radioGroupSize: IRadioGroupProps['size']
  tag: string
  activeStyle: string | undefined
}

export type IRadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export type IRadioGroupRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: IRadioGroupState
  props: IRadioGroupProps
}

export interface IRadioGroupApi {
  state: IRadioGroupState
  dispatch: ISharedRenderlessParamUtils<never>['dispatch']
  onMounted: ReturnType<typeof mounted>
  handleKeydown: ReturnType<typeof handleKeydown>
}

export type IRadioGroupRenderlessParamUtils = ISharedRenderlessParamUtils<never>
