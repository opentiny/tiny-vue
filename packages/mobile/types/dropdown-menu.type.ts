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
import type { dropdownMenuProps } from '@/dropdown-menu/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { IDropdownVm } from './dropdown.type'
import type { IDropdownItemVm } from './dropdown-item.type'

export type IDropdownMenuProps = ExtractPropTypes<typeof dropdownMenuProps>

export interface IDropdownMenuState {
  offset: number
  scroller: null | HTMLElement
  children: IDropdownItemVm[]
  size: string
  showPopper: boolean
  label: string
  showContent: boolean
  selected: boolean
  selectedIndex: number
}

export interface IDropdownMenuApi {
  state: IDropdownMenuState
  toggleItem: (active: boolean, item) => void
  clickOutside: () => void
  updateOffset: () => void
  mounted: () => void
  handleMouseenter: ($event: MouseEvent) => void
  handleMouseleave: ($event: MouseEvent) => void
  handleMenuItemClick: (
    itemData: object,
    instance: ComponentPublicInstance,
    label: string,
    showContent: boolean,
    isDisabled: boolean
  ) => void
  doDestroy: () => void
}

export type IDropdownMenuRenderlessParams = ISharedRenderlessFunctionParams<null> & {
  state: IDropdownMenuState
  props: IDropdownMenuProps
  api: IDropdownMenuApi
}

export type IDropdownMenuRenderlessParamUtils = ISharedRenderlessParamUtils<null>

export interface IDropdownMenuPopperParams {
  api: IDropdownMenuApi
  props: IDropdownMenuProps
  hooks: Pick<
    IDropdownMenuRenderlessParams,
    | 'reactive'
    | 'provide'
    | 'onMounted'
    | 'inject'
    | 'nextTick'
    | 'onBeforeUnmount'
    | 'onDeactivated'
    | 'toRefs'
    | 'watch'
  >
  instance: IDropdownMenuRenderlessParamUtils
  state: IDropdownMenuState
  dropdownVm: IDropdownVm
}

export type IDropdownMenuVm = ComponentPublicInstance & {
  state: IDropdownMenuState
} & IDropdownMenuProps
