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
import type { ExtractPropTypes, ComponentPublicInstance, ComputedRef } from 'vue'
import type {
  ISharedRenderlessFunctionParams,
  ISharedRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '@mobile-root/shared.type'
import type { IDropdownMenuVm } from '../../dropdown-menu/src/dropdown-menu'
import type {
  open,
  opened,
  close,
  getTitle,
  onScroll,
  reset,
  closed,
  clickWrapper,
  clickOutside,
  tagClick,
  getOptionStyle,
  toggle,
  clickItem,
  getItemStyle,
  bindScroll,
  confirm,
  handleClick,
  computedGetIcon,
  getTip
} from './renderless'

export type { ISharedRenderlessParamHooks, IDropdownMenuVm }

export const $constants = {
  ICON_MAP: {
    leftWardArrow: 'icon-delta-left'
  }
}

export const dropdownItemProps = {
  modelValue: [Number, String, Array],
  _constants: {
    type: Object,
    default: () => $constants
  },
  icon: [String, Object],
  disabled: {
    type: Boolean,
    default: false
  },
  divided: Boolean,
  itemData: {
    type: [String, Object],
    default: ''
  },
  title: String,
  label: String,
  level: String,
  titleClass: String,
  options: {
    type: Array,
    default: () => []
  },
  // mobile 属性，可选值 selection | filter | sort
  type: {
    type: String,
    default: 'selection'
  },
  // 是否选中，勾选状态功能
  selected: {
    type: Boolean,
    default: false
  },
  // 暂没找到使用的地方
  selectedField: {
    type: String,
    default: 'selected'
  },
  // 暂没找到使用的地方
  multiStage: {
    type: Boolean,
    default: false
  },
  currentIndex: {
    type: Number,
    default: () => -1
  },
  // 以下为 tiny 新增
  appendToBody: {
    type: Boolean,
    default: true
  },
  textField: {
    type: String,
    default: 'label'
  },
  tip: {
    type: [String, Function],
    default: ''
  },
  tipPosition: {
    type: String,
    default: 'right'
  }
}

export type IDropdownItemVm = ComponentPublicInstance & {
  type: string
  toggle: (value: boolean, options?: object) => void
  state: IDropdownItemState
} & IDropdownItemProps

export type IDropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>

export type IDropdownItemConstants = typeof $constants

export interface IDropdownItemState {
  checkedStatus: boolean
  sort: 'asc' | 'desc'
  transition: boolean
  getTitle: boolean
  showWrapper: boolean
  showPopup: boolean
  duration: number | string
  overlay: ComputedRef<boolean>
  offset: ComputedRef<number>
  direction: ComputedRef<string>
  displayTitle: ComputedRef<string>
  itemStyle: ComputedRef<string>
  activeColor: ComputedRef<string>
  closeOnClickOverlay: ComputedRef<boolean>
  dropdownMenuVm: IDropdownMenuVm
  currentIndex: number
  textField: string
  popperClass: string
  getIcon: ComputedRef<object>
}

export interface IDropdownItemApi {
  state: IDropdownItemState
  open: ReturnType<typeof open>
  opened: ReturnType<typeof opened>
  close: ReturnType<typeof close>
  getTitle: ReturnType<typeof getTitle>
  onScroll: ReturnType<typeof onScroll>
  reset: ReturnType<typeof reset>
  closed: ReturnType<typeof closed>
  clickWrapper: ReturnType<typeof clickWrapper>
  clickOutside: ReturnType<typeof clickOutside>
  tagClick: ReturnType<typeof tagClick>
  getOptionStyle: ReturnType<typeof getOptionStyle>
  toggle: ReturnType<typeof toggle>
  clickItem: ReturnType<typeof clickItem>
  getItemStyle: ReturnType<typeof getItemStyle>
  bindScroll: ReturnType<typeof bindScroll>
  confirm: ReturnType<typeof confirm>
  handleClick: ReturnType<typeof handleClick>
  computedGetIcon: ReturnType<typeof computedGetIcon>
  getTip: ReturnType<typeof getTip>
}

export type IDropdownItemRenderlessParams = ISharedRenderlessFunctionParams<IDropdownItemConstants> & {
  state: IDropdownItemState
  props: IDropdownItemProps
  api: IDropdownItemApi
}

export type IDropdownItemRenderlessParamUtils = ISharedRenderlessParamUtils<IDropdownItemConstants>

export interface IDropdownItemStyle {
  zIndex: number
  top: string
  bottom: string
}

export interface IDropdownItemTag {
  value: string
  text: string
}

export interface IDropdownItemOptionStyle {
  color: string
  border?: string
}

export interface IDropdownItemMfDataStore {
  checkedStatus: boolean
  multiStageMenu: boolean
  multiStage: string
  itemData: object
  itemLabel: string
  showContent: boolean
  dropdownMenuVm: IDropdownMenuVm
  currentIndex: string
  level: number
}
