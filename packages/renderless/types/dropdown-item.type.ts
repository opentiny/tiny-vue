import type { ExtractPropTypes, ComponentPublicInstance, ComputedRef } from 'vue'
import { dropdownItemProps, $constants } from '@/dropdown-item/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import { IDropdownMenuVm } from './dropdown-menu.type'
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
} from '../src/dropdown-item'

export type IDropdownItemVm = ComponentPublicInstance & {
  type: string
  toggle: (value: boolean, options?: object) => void
  state: IDropdownItemState
} & IDropdownItemProps

export type IDropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>

export type IDropdownItemConstants = typeof $constants

export interface IDropdownItemState {
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
