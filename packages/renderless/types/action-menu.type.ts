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

import type { ComputedRef, ExtractPropTypes, ComponentPublicInstance } from 'vue'
import { actionMenuProps } from '@/action-menu/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export interface IActionMenuState {
  visibleOptions: ComputedRef<object>
  moreOptions: ComputedRef<object>
  spacing: ComputedRef<string | number>
}

export type IActionMenuProps = ExtractPropTypes<typeof actionMenuProps>

export type IActionMenuRenderlessParams = ISharedRenderlessFunctionParams<null> & {
  state: IActionMenuState
  props: IActionMenuProps
}

export type IActionMenuItemData = {
  itemData: object
  vm: ComponentPublicInstance
  disabled: boolean
}

export interface IActionMenuApi {
  handleMoreClick: () => void
  handleItemClick: (data: IActionMenuItemData) => void
  visibleChange: (status: boolean) => void
  state: IActionMenuState
}

export type IActionMenuRenderlessParamUtils = ISharedRenderlessParamUtils<null>
