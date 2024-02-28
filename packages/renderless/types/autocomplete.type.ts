import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { autoCompleteProps } from '@/autocomplete/src'
import type { initSuggestionState } from '../src/autocomplete/vue'
import type {
  watchVisible,
  mounted,
  handleChange,
  handleFocus,
  handleBlur,
  handleClear,
  close,
  handleKeyEnter,
  select,
  highlight
} from '../src/autocomplete'
import type { ISharedRenderlessParamUtils } from './shared.type'

export interface IAutoCompleteState {
  activated: boolean
  suggestions: unknown[]
  loading: boolean
  highlightedIndex: number
  suggestionDisabled: boolean
  id: string
  suggestionVisible: ComputedRef<boolean>
}
export type IAutoCompleteProps = ExtractPropTypes<typeof autoCompleteProps>
export interface IAutoCompleteApi {
  state: IAutoCompleteState
  doDestroy: (forceDestroy?: boolean | undefined) => void
  suggestionState: ReturnType<typeof initSuggestionState>
  close: ReturnType<typeof close>
  handleBlur: ReturnType<typeof handleBlur>
  mounted: ReturnType<typeof mounted>
  highlight: ReturnType<typeof highlight>
  handleClear: ReturnType<typeof handleClear>
  select: ReturnType<typeof select>
  watchVisible: ReturnType<typeof watchVisible>
  handleChange: ReturnType<typeof handleChange>
  handleFocus: ReturnType<typeof handleFocus>
  handleKeyEnter: ReturnType<typeof handleKeyEnter>
  debouncedGetData: Function
}

export type IAutoCompleteConstants = ReturnType<typeof autoCompleteProps._constants.default>

export type IAutoCompleteRenderlessParamUtils = ISharedRenderlessParamUtils<IAutoCompleteConstants>
