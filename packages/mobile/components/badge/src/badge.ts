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
import type { computedValueRef, computedContent, computedTransform } from './renderless/index'

export const badgeProps = {
  showLeft: {
    type: Boolean,
    default: false
  },
  isDot: {
    type: Boolean,
    default: false
  },
  isFixed: {
    type: Boolean,
    default: true
  },
  isMini: {
    type: Boolean,
    default: false
  },
  max: Number,
  value: [String, Number],
  modelValue: [String, Number],
  href: String,
  target: String,
  hidden: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    validator: (value: string) =>
      Boolean(~['primary', 'success', 'warning', 'info', 'danger', 'icon', 'label'].indexOf(value))
  },
  badgeClass: String,
  offset: {
    type: Array,
    default: () => [0, 0]
  },
  data: [String, Number]
}

export type IBadgeContent = string | number | undefined
export interface IBadgeState {
  isOverstep: boolean
  valueRef: number | undefined
  content: IBadgeContent
  href: string
}

export type IBadgeProps = ExtractPropTypes<typeof badgeProps>

export type IBadgeRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: IBadgeState
  props: IBadgeProps
}

export interface IBadgeApi {
  state: IBadgeState
  computedValueRef: ReturnType<typeof computedValueRef>
  computedContent: ReturnType<typeof computedContent>
  computedTransform: ReturnType<typeof computedTransform>
}

export type IBadgeRenderlessParamUtils = ISharedRenderlessParamUtils<never>
