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

import type { ExtractPropTypes, ComponentPublicInstance } from 'vue'
import type { actionMenuProps } from '@/action-menu/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type {
  handleMoreClick,
  handleItemClick,
  visibleChange,
  computedMaxShowNum,
  computedSpacing,
  computedMoreText,
  computedSuffixIcon
} from '../src/action-menu'

export interface IActonMenuOptionsItem {
  label?: string
  disabled?: boolean
  divided?: boolean
  children?: IActonMenuOptionsItem[]
  icon?: any
  [key: string]: any
}

export interface IActionMenuState {
  visibleOptions: IActonMenuOptionsItem[]
  moreOptions: IActonMenuOptionsItem[]
  isCardMode: boolean
  spacing: string | number
  maxShowNum: number
  moreText: string
  suffixIcon: string | object
}

export type IActionMenuProps = ExtractPropTypes<typeof actionMenuProps>

export type IActionMenuRenderlessParams = ISharedRenderlessFunctionParams<null> & {
  state: IActionMenuState
  props: IActionMenuProps
}

export interface IActionMenuItemData {
  itemData: object
  vm: ComponentPublicInstance
  disabled: boolean
}

export interface IActionMenuApi {
  handleMoreClick: ReturnType<typeof handleMoreClick>
  handleItemClick: ReturnType<typeof handleItemClick>
  visibleChange: ReturnType<typeof visibleChange>
  computedMaxShowNum: ReturnType<typeof computedMaxShowNum>
  computedSpacing: ReturnType<typeof computedSpacing>
  computedMoreText: ReturnType<typeof computedMoreText>
  computedSuffixIcon: ReturnType<typeof computedSuffixIcon>
  state: IActionMenuState
}

export type IActionMenuRenderlessParamUtils = ISharedRenderlessParamUtils<null>
