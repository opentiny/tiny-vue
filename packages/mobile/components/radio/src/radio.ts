/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import type { PropType } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'
import type {
  handleChange,
  isGroup,
  radioSize,
  isDisabled,
  isDisplayOnly,
  tabIndex,
  getModel,
  setModel
} from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  RADIO_GROUP: 'RadioGroup'
}

export const radioProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: {},
  label: {},
  disabled: Boolean,
  name: String,
  border: Boolean,
  size: {
    type: String as PropType<'mini' | 'small' | 'medium'>,
    default: ''
  },
  text: String,
  events: {
    type: Object,
    default: () => ({})
  },
  tabindex: {
    type: String,
    default: '1'
  },
  displayOnly: {
    type: Boolean,
    default: false
  }
}

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
}

export type IRadioRenderlessParamUtils = ISharedRenderlessParamUtils<IRadioConstants>
