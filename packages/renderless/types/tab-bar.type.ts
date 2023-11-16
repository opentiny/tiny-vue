import type { ExtractPropTypes } from 'vue'
import { ITabsVm } from './tabs.type'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import { tabBarProps } from '@/tabs/src/tab-nav'
import type { computedBarStyle } from '../src/tab-bar'

export type ITabBarPcProps = ExtractPropTypes<typeof tabBarProps>

export interface ITabBarPcState {
  rootTabs: ITabsVm
  barStyle: object
  separator: boolean | null
}

export interface ITabBarPcApi {
  state: ITabBarPcState
  computedBarStyle: ReturnType<typeof computedBarStyle>
}

export type ITabBarPcRenderlessParamUtils = ISharedRenderlessParamUtils<never>

export type ITabBarPcRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ITabBarPcState
  props: ITabBarPcProps
  api: ITabBarPcApi
  rootTabs: ITabsVm
}

export interface ITabBarStyle {
  transform: string
  msTransform: string
  webkitTransform: string
}
