import type { VNode } from 'vue'
import type {
  ICascaderPanelApi,
  ICascaderPanelConfig,
  ICascaderPanelNodePropValue,
  ICascaderPanelNodeValue,
  ICascaderPanelNode
} from './cascader-panel.type'
import type { ISharedRenderlessFunctionParams } from './shared.type'
import type {
  isInPath,
  handleExpand,
  comptCheckPath,
  handleCheckChange,
  handleMultiCheckChange,
  handleNodeClick
} from '../src/cascader-node'

export interface ICascaderNodeProps {
  node: ICascaderPanelNode
  nodeId: string
}

export interface ICascaderNodeState {
  config: ICascaderPanelConfig
  isLeaf: boolean
  isDisabled: boolean
  checkedValue: ICascaderPanelNodeValue[]
  isChecked: boolean
  inActivePath: boolean
  inCheckedPath: boolean
  value: ICascaderPanelNodePropValue
  nodeLabel: string | VNode
}

export interface ICascaderNodeApi {
  state: ICascaderNodeState
  isInPath: ReturnType<typeof isInPath>
  handleExpand: ReturnType<typeof handleExpand>
  comptCheckPath: ReturnType<typeof comptCheckPath>
  handleCheckChange: ReturnType<typeof handleCheckChange>
  handleMultiCheckChange: ReturnType<typeof handleMultiCheckChange>
  handleNodeClick: ReturnType<typeof handleNodeClick>
}

export type ICascaderNodeRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ICascaderNodeState
  props: ICascaderNodeProps
  api: ICascaderNodeApi
  parent: ICascaderPanelApi // 在packages\renderless\src\cascader-node\vue.ts中被inject的值
  panel: ICascaderPanelApi // 在packages\vue\src\cascader-node\src\pc.vue中被inject的值
}
