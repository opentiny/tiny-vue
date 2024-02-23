import type { ExtractPropTypes } from 'vue'
import type { tabItemProps, $constants } from '@/tab-item/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { ITabsVm } from './tabs.type'
import type { computedIsClosable, computedActive, computedPaneName, watchTitle } from '../src/tab-item'

export interface ITabItemState {
  index: string | null
  loaded: boolean
  animateShow: boolean
  rootTabs: ITabsVm
  active: boolean
  paneName: string | object | null
  isClosable: boolean
}

export interface ITabItemApi {
  state: ITabItemState
  watchTitle: ReturnType<typeof watchTitle>
  computedIsClosable: ReturnType<typeof computedIsClosable>
  computedActive: ReturnType<typeof computedActive>
  computedPaneName: ReturnType<typeof computedPaneName>
}

export type ITabItemProps = ExtractPropTypes<typeof tabItemProps>

export type ITabItemConstants = typeof $constants

export type ITabItemRenderlessParamUtils = ISharedRenderlessParamUtils<ITabItemConstants>

export type ITabItemRenderlessParams = ISharedRenderlessFunctionParams<ITabItemConstants> & {
  state: ITabItemState
  props: ITabItemProps
  api: ITabItemApi
  rootTabs: ITabsVm
}
