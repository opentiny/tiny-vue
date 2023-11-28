import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { popeditorProps, $constants } from '@/popeditor/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export interface IPopeditorState {
  showContent: boolean
  open: boolean
  display: string
  getTitle: ComputedRef<string>
  readonly: ComputedRef<boolean>
  modalWidth: ComputedRef<string>
  conditions: string
  activeName: string
  commitValue: string
  currentPage: number
  baseColumns: number
  selectedDatas: Array<string>
  selectedValues: Array<string>
  sourceGridDataset: Array<object>
  fullGridData: Array<object>
  historyGridDataset: Array<object>
  filterText: string
  treeOp: ComputedRef<string>
  theme: string
  pagerConfig: object
  loading: boolean
  treeSelectList: Array<object>
  radioConfig: object
  searchOp: object
  cacheStore: object
  formDisabled: ComputedRef<boolean>
  disabled: boolean
  suggestList: Array<object>
  showSuggestPanel: boolean
  inputHover: boolean
  search: null
  closeSuggestPanelInvoker: null
}

export type IPopeditorProps = ExtractPropTypes<typeof popeditorProps>

export type IPopeditorConstants = typeof $constants

export type IPopeditorRenderlessParams = ISharedRenderlessFunctionParams<IPopeditorConstants> & {
  state: IPopeditorState
  props: IPopeditorProps
  constants: IPopeditorConstants
}

export interface IPopeditorApi {
  state: IPopeditorState
  computedGetIcon: () => string
  computedGetTitle: () => string
  handleClose: () => void
  handleHeaderClick: () => void
}

export type IPopeditorRenderlessParamUtils = ISharedRenderlessParamUtils<IPopeditorConstants> & {
  constants: IPopeditorConstants
}
