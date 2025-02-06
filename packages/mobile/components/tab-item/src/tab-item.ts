import type { ExtractPropTypes } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'
import type { ITabsVm } from '../../tabs/src/tabs'
import type { computedIsClosable, computedActive, computedPaneName, watchTitle } from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export { ITabsVm }

export const $constants = {}

export const tabItemProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  title: String,
  name: String,
  withClose: Boolean,
  disabled: Boolean,
  lazy: Boolean,
  selected: Boolean,
  renderTitle: Function,
  renderSetting: Function
}
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
