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
import type {
  ISharedRenderlessFunctionParams,
  ISharedRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '@mobile-root/shared.type'
import type { mounted, handleKeydown } from './renderless'

export type { ISharedRenderlessParamHooks }

export const radioGroupProps = {
  modelValue: {},
  size: {
    type: String as PropType<'mini' | 'small' | 'medium'>,
    default: ''
  },
  fill: String,
  textColor: String,
  disabled: Boolean,
  vertical: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  type: {
    type: String,
    default: 'radio'
  },
  showTips: {
    type: Boolean,
    default: false
  },
  displayOnly: {
    type: Boolean,
    default: false
  }
}

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
