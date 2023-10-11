import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import { ICascaderPanelNode, ICascaderPanelApi } from './cascader-panel.type'
import type { clearHoverZone, handleExpand, handleMouseMove } from '../src/cascader-menu'

export type ICascaderMenuProps = {
  nodes: ICascaderPanelNode[]
  index: number
}

export interface ICascaderMenuState {
  activeNode: null | HTMLElement
  hoverTimer: null | NodeJS.Timeout
  id: number
  isEmpty: boolean
  menuId: string
}

export interface ICascaderMenuApi {
  state: ICascaderMenuState
  clearHoverZone: ReturnType<typeof clearHoverZone>
  handleExpand: ReturnType<typeof handleExpand>
  handleMouseMove: ReturnType<typeof handleMouseMove>
}

export type ICascaderMenuRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ICascaderMenuState
  props: ICascaderMenuProps
  api: ICascaderMenuApi
  panel: ICascaderPanelApi // 在packages\vue\src\cascader-menu\src\index.tsx被inject的值
}

export type ICascaderMenuRenderlessParamUtils = ISharedRenderlessParamUtils<never>
