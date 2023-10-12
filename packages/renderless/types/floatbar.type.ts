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
import { floatbarProps } from '@/floatbar/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type IFloatbarItem = {
  url: string
  target: string
  title: string
}

export type IFloatbarProps = ExtractPropTypes<typeof floatbarProps>

export type IFloatbarState = {
  data: IFloatbarItem[]
}

export type IFloatbarApi = {
  state: IFloatbarState
}

export type IFloatbarRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  props: IFloatbarProps
  state: IFloatbarState
}

export type IFloatbarRenderlessParamUtils = ISharedRenderlessParamUtils<never>
