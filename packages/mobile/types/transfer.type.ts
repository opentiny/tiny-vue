import type { ExtractPropTypes } from 'vue'
import type { transferProps, $constants } from '@/transfer/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

import type {
  getObj,
  getSourceData,
  getLeftCheckedData,
  getRightCheckedData,
  getTargetData,
  logicFun,
  onSourceCheckedChange,
  onTargetCheckedChange,
  addToLeft,
  addToRight,
  clearQuery,
  sortableEvent
} from '../src/transfer'

// 默认穿梭数据项的格式
export interface ITransferData {
  key: string
  label: string
  disabled: boolean
  [customProp: string]: any // 它可以通过props重定义
}
export interface ITransferState {
  /** 左边选中的key的数组 */
  leftChecked: string[]
  /** 右边选中的key的数组 */
  rightChecked: string[]

  /* 左边非禁用的数据项 */
  leftData: any[]
  /* 右边非禁用的数据项 */
  rightData: any[]

  /* 全量数据对应的一个大对象，键值为key, 值为每一个数据项 */
  dataObj: any

  /** 左边的全部数据项 */
  sourceData: ITransferData[]
  /** 右边的全部数据 */
  targetData: ITransferData[]
  /** 是否传入了有效的buttonText */
  hasButtonTexts: boolean

  /** 传递给右面板的 isToLeft 属性 */
  isToLeft: boolean
  /** 函数。 它传递给2个面板，用于渲染每个数据项 */
  optionRender: any
}

export type ITransferProps = ExtractPropTypes<typeof transferProps>

export type ITransferConstants = typeof $constants

export type ITransferRenderlessParams = ISharedRenderlessFunctionParams<ITransferConstants> & {
  api: ITransferApi
  state: ITransferState
  props: ITransferProps
}

export interface ITransferApi {
  state: ITransferState
  /** 生成全量数据对应的一个大对象 */
  getObj: ReturnType<typeof getObj>
  clearQuery: ReturnType<typeof clearQuery>
  getSourceData: ReturnType<typeof getSourceData>
  addToLeft: ReturnType<typeof addToLeft>
  getLeftCheckedData: ReturnType<typeof getLeftCheckedData>
  getRightCheckedData: ReturnType<typeof getRightCheckedData>
  addToRight: ReturnType<typeof addToRight>
  onTargetCheckedChange: ReturnType<typeof onTargetCheckedChange>
  onSourceCheckedChange: ReturnType<typeof onSourceCheckedChange>
  logicFun: ReturnType<typeof logicFun>
  getTargetData: ReturnType<typeof getTargetData>
  sortableEvent: ReturnType<typeof sortableEvent>
}

export type ITransferRenderlessParamUtils = ISharedRenderlessParamUtils<ITransferConstants>
