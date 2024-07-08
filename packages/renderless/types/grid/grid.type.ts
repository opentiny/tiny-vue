import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from 'types/shared.type'
import type { ExtractPropTypes } from 'vue'
import type { gridProps } from '@/grid/grid/src'

export type IGridRenderlessParamUtils = ISharedRenderlessParamUtils

export interface IGridState {
  emitter: ReturnType<ISharedRenderlessParamUtils<never>['emitter']>
  listeners: Record<string, (params: any) => void>
  tableListeners: Record<string, (params: any) => void>
  // TODO：完善类型定义
}

export type IGridProps = ExtractPropTypes<typeof gridProps>

export interface IGridApi {}

export type IGridRenderlessParams = ISharedRenderlessFunctionParams & {
  state: IGridState
  props: IGridProps
  api: IGridApi
}

export interface IGridEventNameConstants {
  change: string
  blur: string
}
