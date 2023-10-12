import type { ExtractPropTypes } from 'vue'
import { ISearchProps } from '@/search/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export interface ISearchState {
  show: boolean
  focus: boolean
  hovering: boolean
  collapse: boolean
  currentValue: string
  searchValue: object
  types: string[]
  showClear: boolean
}

export type ISearchProps = ExtractPropTypes<typeof ISearchProps>

export type ISearchRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: ISearchState
  props: ISearchProps
  api: ISearchApi
}

export interface ISearchValue {
  text: string
  value: number
}
export interface ISearchApi {
  state: ISearchState
  changeKey: (key: ISearchValue) => void
  handleChange: (event: Event) => void
  showSelector: () => void
  searchClick: (event: Event) => void
  clickOutside: (event: Event) => void
  emitInput: (...args: [string, ISearchValue]) => void
  setDefaultType: (searchTypes: ISearchValue[]) => ISearchValue
  formatSearchTypes: (searchTypes: ISearchValue[]) => ISearchValue[]
  clear: (event: Event) => void
  handleInput: (event: Event) => void
  searchEnterKey: () => void
}

export type ISearchRenderlessParamUtils = ISharedRenderlessParamUtils<never>
