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
import type { ComputedRef, ExtractPropTypes } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'
import type { clearTimer, handleClick } from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const buttonProps = {
  type: {
    type: String,
    default: 'default'
  },
  tabindex: { type: String, default: '1' },
  icon: {
    type: [Object, String],
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  resetTime: {
    type: [Number, String],
    default: 1000
  },
  nativeType: {
    type: String,
    default: 'button'
  },
  href: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '',
    validator(val: string) {
      return ['large', 'medium', 'small', 'mini', ''].includes(val)
    }
  },
  round: Boolean,
  plain: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  autofocus: Boolean,
  customClass: {
    type: String,
    default: ''
  },
  banner: {
    type: Boolean,
    default: false
  },
  ghost: Boolean
}

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
