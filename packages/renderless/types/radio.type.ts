import type { ExtractPropTypes } from 'vue'
import { radioProps, $constants } from '@/radio/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type {
  handleChange,
  isGroup,
  radioSize,
  isDisabled,
  isDisplayOnly,
  tabIndex,
  getModel,
  setModel,
  dispatchDisplayedValue,
  getDisplayedValue
} from '../src/radio'

export type IRadioProps = ExtractPropTypes<typeof radioProps>

export type IRadioConstants = typeof $constants
export interface IRadioState {
  vertical: boolean
  size: IRadioProps['size']
  focus: boolean
  radioGroup: ISharedRenderlessParamUtils<IRadioConstants>['parent'] | null
  isGroup: boolean
  radioSize: IRadioProps['size']
  isDisabled: boolean
  isDisplayOnly: boolean
  tabIndex: number
  formDisabled: boolean
  model: string
}

export type IRadioRenderlessParams = ISharedRenderlessFunctionParams<IRadioConstants> & {
  state: IRadioState
  props: IRadioProps
  type: string
  api: IRadioApi
}

export interface IRadioApi {
  state: IRadioState
  handleChange: ReturnType<typeof handleChange>
  isGroup: ReturnType<typeof isGroup>
  radioSize: ReturnType<typeof radioSize>
  isDisabled: ReturnType<typeof isDisabled>
  isDisplayOnly: ReturnType<typeof isDisplayOnly>
  tabIndex: ReturnType<typeof tabIndex>
  getModel: ReturnType<typeof getModel>
  setModel: ReturnType<typeof setModel>
  dispatchDisplayedValue: ReturnType<typeof dispatchDisplayedValue>
  getDisplayedValue: ReturnType<typeof getDisplayedValue>
}

export type IRadioRenderlessParamUtils = ISharedRenderlessParamUtils<IRadioConstants>
