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
import type { ISharedRenderlessFunctionParams } from '@mobile-root/shared.type'

export type { ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'

export const tagProps = {
  hit: Boolean,
  text: String,
  type: String,
  theme: String,
  size: String,
  color: String,
  closable: Boolean,
  operable: Boolean,
  disabled: Boolean,
  selectable: Boolean,
  customClass: {
    type: String,
    default: ''
  },
  effect: {
    type: String,
    default: 'light',
    validator: (value: string) => Boolean(~['dark', 'light', 'plain'].indexOf(value))
  },
  beforeDelete: Function,
  value: [Number, String],

  // mobile
  mini: {
    type: Boolean,
    default: false
  },
  maxWidth: {
    type: [String, Number],
    default: null
  }
}

export interface ITagState {
  type: string | undefined
  show: boolean
  selected: boolean
  text: string
  color: string
  mini: boolean
  maxWidth: string | number
}

export interface ITagApi {
  state: ITagState
  handleClose: (event: Event) => void
  handleClick: (event: Event) => void
}

export type ITagProps = ExtractPropTypes<typeof tagProps>

export type ITagRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ITagState
  props: ITagProps
  api: ITagApi
}
