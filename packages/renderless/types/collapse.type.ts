import type { ExtractPropTypes } from 'vue'
import type { collapseProps, $constants } from '@/collapse/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { setActiveNames, handleItemClick } from '../src/collapse'

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
  setActiveNames: ReturnType<typeof setActiveNames>
  handleItemClick: ReturnType<typeof handleItemClick>
}

export type ICollapseRenderlessParamUtils = ISharedRenderlessParamUtils<ICollapseConstants>
