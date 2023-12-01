import type { ExtractPropTypes } from 'vue'
import type { collapseProps, $constants } from '@/collapse/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type ICollapseProps = ExtractPropTypes<typeof collapseProps>

export type ICollapseConstants = typeof $constants

export interface ICollapseState {
  activeNames: Array<string>
}

export type ICollapseRenderlessParams = ISharedRenderlessFunctionParams<ICollapseConstants> & {
  api: ICollapseApi
  state: ICollapseState
  props: ICollapseProps
  constants: ICollapseConstants
}

export interface ICollapseApi {
  state: ICollapseState
  setActiveNames: (activeName: string[] | string) => void
  handleItemClick: (item?: Object) => void
}

export type ICollapseRenderlessParamUtils = ISharedRenderlessParamUtils<ICollapseConstants>
