import type { VNode } from 'vue'
import type Node from '../src/cascader-panel/node'
import type Store from '../src/cascader-panel/store'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type {
  getNodeByValue,
  calculateCheckedNodePaths,
  lazyLoad,
  syncMenuState,
  handleExpand,
  getCheckedNodes,
  getFlattedNodes,
  calculateMultiCheckedValue,
  isLeaf,
  initStore,
  syncCheckedValue,
  watchCheckedValue,
  syncActivePath,
  syncMultiCheckState,
  scrollIntoView,
  expandNodes,
  focusNode,
  checkNode,
  getMenuIndex,
  clearCheckedNodes,
  handleCheckChange,
  handleKeyDown
} from '../src/cascader-panel'

/** CascaderPanel的节点 */
export type ICascaderPanelNode = Node

/** CascaderPanel的Store，用来操作ICascaderPanelNode */
export type ICascaderPanelStore = Store

export type ICascaderPanelNodeValue = string | Object | number

/** 值的类型（是数组还是值）由ICascaderPanelConfig的emitPath和multiple决定 */
export type ICascaderPanelNodePropValue =
  | ICascaderPanelNodeValue
  | ICascaderPanelNodeValue[]
  | ICascaderPanelNodeValue[][]

/** 懒加载时，提供给用户的根节点的node */
export interface ICascaderPanelLazyLoadNode {
  root: boolean
  level: number
  loading?: boolean
  loaded?: boolean
}

/** CascaderPanel的配置 */
export interface ICascaderPanelConfig {
  emitPath: boolean
  expandTrigger: 'click' | 'hover'
  hoverThreshold: number
  checkStrictly?: boolean
  multiple?: boolean
  lazy: boolean
  lazyLoad: (
    node: ICascaderPanelNode | ICascaderPanelLazyLoadNode,
    resolve: (dataList: ICascaderPanelData[]) => void
  ) => void
  value: string
  label: string
  children: string
  disabled: string
  leaf: string
}
/**
 * ICascaderPanelData的结构里的key名由ICascaderPanelConfig的value、label、children、disabled、leaf的值决定
 */
export interface ICascaderPanelData {
  value?: ICascaderPanelNodeValue
  label?: string
  children?: ICascaderPanelData[]
  disabled?: boolean
  leaf?: boolean
  [key: string]: ICascaderPanelNodeValue | ICascaderPanelData[] | string | boolean | undefined
}

type IRenderLabelFunction = (arg1: { node: ICascaderPanelNode; data: ICascaderPanelData }) => VNode

export interface ICascaderPanelProps {
  modelValue: ICascaderPanelNodePropValue
  options: ICascaderPanelData[]
  props: ICascaderPanelConfig
  border: boolean
  renderLabel?: IRenderLabelFunction
}

export interface ICascaderPanelState {
  checkedValue: ICascaderPanelNodePropValue | null
  checkedNodePaths: ICascaderPanelNode[][]
  store: ICascaderPanelStore
  menus: ICascaderPanelNode[][]
  activePath: ICascaderPanelNode[]
  loadCount: number
  multiple?: boolean
  checkStrictly?: boolean
  leafOnly: boolean
  isHoverMenu: boolean
  renderLabelFn?: IRenderLabelFunction
  config: ICascaderPanelConfig & ICascaderPanelProps
}

export interface ICascaderPanelApi {
  state: ICascaderPanelState
  isLeaf: ReturnType<typeof isLeaf>
  getMenuIndex: ReturnType<typeof getMenuIndex>
  getNodeByValue: ReturnType<typeof getNodeByValue>
  getFlattedNodes: ReturnType<typeof getFlattedNodes>
  handleCheckChange: ReturnType<typeof handleCheckChange>
  scrollIntoView: ReturnType<typeof scrollIntoView>
  syncActivePath: ReturnType<typeof syncActivePath>
  initStore: ReturnType<typeof initStore>
  syncMenuState: ReturnType<typeof syncMenuState>
  syncMultiCheckState: ReturnType<typeof syncMultiCheckState>
  calculateCheckedNodePaths: ReturnType<typeof calculateCheckedNodePaths>
  lazyLoad: ReturnType<typeof lazyLoad>
  syncCheckedValue: ReturnType<typeof syncCheckedValue>
  focusNode: ReturnType<typeof focusNode>
  checkNode: ReturnType<typeof checkNode>
  expandNodes: ReturnType<typeof expandNodes>
  handleExpand: ReturnType<typeof handleExpand>
  getCheckedNodes: ReturnType<typeof getCheckedNodes>
  clearCheckedNodes: ReturnType<typeof clearCheckedNodes>
  calculateMultiCheckedValue: ReturnType<typeof calculateMultiCheckedValue>
  watchCheckedValue: ReturnType<typeof watchCheckedValue>
  handleKeyDown: ReturnType<typeof handleKeyDown>
}

export type ICascaderPanelRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ICascaderPanelState
  props: ICascaderPanelProps
  api: ICascaderPanelApi
  Store: typeof Store
  $parent: ICascaderPanelRenderlessParams['parent']
  menus: ICascaderPanelRenderlessParams['vm'][]
}

export type ICascaderPanelRenderlessParamUtils = ISharedRenderlessParamUtils<never>
