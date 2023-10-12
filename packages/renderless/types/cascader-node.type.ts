import { ICascaderPanelApi, ICascaderPanelConfig, ICascaderPanelNodePropValue, ICascaderPanelNodeValue, ICascaderPanelNode } from './cascader-panel.type'
import { ISharedRenderlessFunctionParams } from './shared.type'
import type { isInPath, handleExpand, comptCheckPath, handleCheckChange, handleMultiCheckChange } from '../src/cascader-node'

export type ICascaderNodeProps = {
  node: ICascaderPanelNode
  nodeId: string
}

export interface ICascaderNodeState {
  config: ICascaderPanelConfig,
  isLeaf: boolean,
  isDisabled: boolean,
  checkedValue: ICascaderPanelNodeValue[],
  isChecked: boolean,
  inActivePath: boolean,
  inCheckedPath: boolean,
  value: ICascaderPanelNodePropValue
}

export interface ICascaderNodeApi {
  state: ICascaderNodeState
  isInPath: ReturnType<typeof isInPath>
  handleExpand: ReturnType<typeof handleExpand>
  comptCheckPath: ReturnType<typeof comptCheckPath>
  handleCheckChange: ReturnType<typeof handleCheckChange>
  handleMultiCheckChange: ReturnType<typeof handleMultiCheckChange>
}

export type ICascaderNodeRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ICascaderNodeState
  props: ICascaderNodeProps
  api: ICascaderNodeApi
  parent: ICascaderPanelApi // 在packages\renderless\src\cascader-node\vue.ts中被inject的值
  panel: ICascaderPanelApi // 在packages\vue\src\cascader-node\src\pc.vue中被inject的值
}
