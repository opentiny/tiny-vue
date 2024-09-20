import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { collapseItemProps, $constants } from '@/collapse-item/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type ICollapseItemProps = ExtractPropTypes<typeof collapseItemProps>

export type ICollapseItemConstants = typeof $constants
interface contentWrapStyleType {
  height: string
  display: string
}

export interface ICollapseItemState {
  id: string
  isClick: boolean
  focusing: boolean
  contentHeight: number
  contentWrapStyle: contentWrapStyleType
  isActive: ComputedRef<boolean>
}

export type ICollapseItemRenderlessParams = ISharedRenderlessFunctionParams<ICollapseItemConstants> & {
  api: ICollapseItemApi
  state: ICollapseItemState
  props: ICollapseItemProps
  constants: ICollapseItemConstants
  interval: number
  componentName: string
  eventName: string
}

export interface ICollapseItemApi {
  state: ICollapseItemState
  handleFocus: () => void
  handleEnterClick: () => void
  handleHeaderClick: () => void
}

export type ICollapseItemRenderlessParamUtils = ISharedRenderlessParamUtils<ICollapseItemConstants>
