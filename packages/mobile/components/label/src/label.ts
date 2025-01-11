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

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const labelProps = {
  label: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'normal'
  },
  type: {
    type: String,
    default: 'base'
  },
  wholeline: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'left'
  },
  ellipsis: {
    type: Number,
    default: 0
  },
  decimal: {
    type: Number,
    default: 2
  },
  limit: {
    type: Number,
    default: 0
  },
  isRequired: {
    type: Boolean,
    default: false
  },
  bold: {
    type: Boolean,
    default: false
  }
}

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
