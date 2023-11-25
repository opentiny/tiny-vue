import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { ICascaderPanelNode, ICascaderPanelApi } from './cascader-panel.type'
import type { clearHoverZone, handleExpand, handleMouseMove } from '../src/cascader-menu'

export interface ICascaderMenuProps {
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
