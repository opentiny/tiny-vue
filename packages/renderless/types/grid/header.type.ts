import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from 'types/shared.type'
import type { gridHeaderProps } from '@/grid/grid/src'
import type { ExtractPropTypes } from 'vue'
import type { created, resizeMousedown, uploadColumn } from 'src/grid/header'

export type IGridHeaderRenderlessParamUtils = ISharedRenderlessParamUtils

export interface IGridHeaderState {
  headerColumn: Array<Array<Object>>
}

export type IGridHeaderProps = ExtractPropTypes<typeof gridHeaderProps>

export interface IGridHeaderApi {
  state: IGridHeaderState
  created: ReturnType<typeof created>
  uploadColumn: ReturnType<typeof uploadColumn>
  resizeMousedown: ReturnType<typeof resizeMousedown>
}

export type IGridHeaderRenderlessParams = ISharedRenderlessFunctionParams<null> & {
  state: IGridHeaderState
  props: IGridHeaderProps
  api: IGridHeaderApi
}
