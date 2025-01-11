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
import type { ExtractPropTypes } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'
import type { timeout } from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const toastProps = {
  type: {
    type: String,
    validator: (value: string) => ['text', 'correct', 'error'].includes(value)
  },
  zIndex: {
    type: Number,
    default: 100
  },
  text: {
    type: String,
    default: 'text'
  },
  time: {
    type: [String, Number],
    default: 2000
  },
  timeout: {
    type: Function,
    default: null
  }
}

export interface IToastState {
  text: string | null
  type?: string
  time: number
}

export type IToastProps = ExtractPropTypes<typeof toastProps>

export type IToastRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: IToastState
  props: IToastProps
}

export interface IToastApi {
  state: IToastState
  timeout: ReturnType<typeof timeout>
}

export type IToastRenderlessParamUtils = ISharedRenderlessParamUtils<never>
