import type { ExtractPropTypes } from 'vue'
import type { loadListProps } from '@/load-list/src'
import type { ISharedRenderlessFunctionParams } from './shared.type'

export interface ILoadListState {
}

export interface ILoadListApi {

}

export type ILoadListProps = ExtractPropTypes<typeof loadListProps>

export type ILoadListRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ILoadListState
  props: ILoadListProps
  api: ILoadListApi
}

