import type { ComputedRef, ExtractPropTypes } from 'vue'
import type { treeMenuProps } from '@/tree-menu/src'
import type {
  initData,
  setMenuKey,
  filterNode,
  watchFilterText,
  nodeDragStart,
  nodeDragEnter,
  nodeDragOver,
  nodeDragEnd,
  nodeDrop,
  nodeExpand,
  nodeCollapse,
  nodeClick,
  checkChange,
  check,
  currentChange,
  getTitle,
  collapseChange,
  collapseMenu,
  expandMenu,
  setCurrentKey,
  getCurrentKey,
  setCurrentNode,
  getCurrentNode
} from '../src/tree-menu'
import type { ISharedRenderlessParamUtils } from './shared.type'

export interface ITreeMenuState {
  data?: unknown[]
  filterText: string
  isCollapsed: boolean
  clearable: ComputedRef<boolean>
}
export type ITreeMenuProps = ExtractPropTypes<typeof treeMenuProps>
export interface ITreeMenuApi {
  t: ISharedRenderlessParamUtils['t']
  state: ITreeMenuState
  check: ReturnType<typeof check>
  filterNode: ReturnType<typeof filterNode>
  nodeDrop: ReturnType<typeof nodeDrop>
  nodeClick: ReturnType<typeof nodeClick>
  nodeExpand: ReturnType<typeof nodeExpand>
  nodeDragEnd: ReturnType<typeof nodeDragEnd>
  checkChange: ReturnType<typeof checkChange>
  nodeCollapse: ReturnType<typeof nodeCollapse>
  nodeDragOver: ReturnType<typeof nodeDragOver>
  nodeDragStart: ReturnType<typeof nodeDragStart>
  nodeDragEnter: ReturnType<typeof nodeDragEnter>
  currentChange: ReturnType<typeof currentChange>
  watchFilterText: ReturnType<typeof watchFilterText>
  getTitle: ReturnType<typeof getTitle>
  setMenuKey: ReturnType<typeof setMenuKey>
  initData: ReturnType<typeof initData>
  collapseChange: ReturnType<typeof collapseChange>
  collapseMenu: ReturnType<typeof collapseMenu>
  expandMenu: ReturnType<typeof expandMenu>
  setCurrentKey: ReturnType<typeof setCurrentKey>
  getCurrentKey: ReturnType<typeof getCurrentKey>
  setCurrentNode: ReturnType<typeof setCurrentNode>
  getCurrentNode: ReturnType<typeof getCurrentNode>
}

export interface ITreeMenuData {
  name: string
  siteNodeId: string
  url: string
  children: ITreeMenuData[]
}
export interface ITreeMenuNewData extends ITreeMenuData {
  label: string
  id: string
  url: string
  children: ITreeMenuNewData[]
}
