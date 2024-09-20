import type { ISharedRenderlessParamUtils } from './shared.type'
import type { ExtractPropTypes } from 'vue'
import type { cascaderProps } from '@/cascader/src'
import type { ICascaderPanelApi, ICascaderPanelNodePropValue } from '@/types'
import type {
  getConfig,
  deleteTag,
  getCheckedNodes,
  updateStyle,
  handleSuggestionClick,
  handleDelete,
  handleSuggestionKeyDown,
  getSuggestions,
  handleExpandChange,
  computePresentText,
  focusFirstNode,
  handleClear,
  handleInput,
  handleBlur,
  handleFocus,
  handleKeyDown,
  handleDropdownLeave,
  toggleDropDownVisible,
  computePresentTags,
  selfMounted,
  watchCheckedValue,
  computClearVisible,
  computePresentContent,
  watchValue,
  setInputHeightToTag,
  handleBeforeUpdate,
  showPlaceholder,
  calcCollapseTags,
  watchInputHover,
  handleMouseenter,
  handleMouseleave
} from '../src/cascader'
import type CascaderPanelNode from '../src/cascader-panel/node'

export interface ICascaderState {
  showAutoWidth: boolean
  /** popper 元素是否显示。 它是通过v-show 绑定到页面上，造成隐藏时，popperJs并没有destory,有一定的性能影响 */
  dropDownVisible: boolean
  checkedValue: ICascaderPanelNodePropValue
  inputHover: boolean
  inputValue: string | null
  presentText: string | null
  present: string | null
  presentTags: Partial<
    CascaderPanelNode & { key: string | number; text: string; closable: boolean; hitState: boolean }
  >[]
  checkedNodes: (CascaderPanelNode & { text?: string })[]
  filtering: boolean
  suggestions: CascaderPanelNode[]
  inputInitialHeight: number
  pressDeleteCount: number
  realSize: 'medium' | 'small' | 'mini'
  formDisabled: boolean
  displayOnly: boolean
  disabled: boolean
  tagSize: 'mini' | 'small'
  isDisabled: boolean
  isDisplayOnly: boolean
  config: { multiple?: boolean; checkStrictly?: boolean }
  multiple: boolean
  leafOnly: boolean
  readonly: boolean
  clearBtnVisible: boolean
  panel: Element & ICascaderPanelApi
  placeholder: boolean
  inputValues: boolean
  collapseTagsLength: number
  isHidden: boolean
  tooltipVisible: boolean
  tooltipContent: string
}
export type ICascaderProps = ExtractPropTypes<typeof cascaderProps>
export interface ICascaderApi {
  state: ICascaderState
  handleFocus: ReturnType<typeof handleFocus>
  handleClear: ReturnType<typeof handleClear>
  getCheckedNodes: ReturnType<typeof getCheckedNodes>
  deleteTag: ReturnType<typeof deleteTag>
  handleDropdownLeave: ReturnType<typeof handleDropdownLeave>
  focusFirstNode: ReturnType<typeof focusFirstNode>
  computClearVisible: ReturnType<typeof computClearVisible>
  showPlaceholder: ReturnType<typeof showPlaceholder>
  updateStyle: ReturnType<typeof updateStyle>
  getSuggestions: ReturnType<typeof getSuggestions>
  handleExpandChange: ReturnType<typeof handleExpandChange>
  getConfig: ReturnType<typeof getConfig>
  setInputHeightToTag: ReturnType<typeof setInputHeightToTag>
  handleSuggestionClick: ReturnType<typeof handleSuggestionClick>
  handleDelete: ReturnType<typeof handleDelete>
  computePresentText: ReturnType<typeof computePresentText>
  handleSuggestionKeyDown: ReturnType<typeof handleSuggestionKeyDown>
  handleInput: ReturnType<typeof handleInput>
  handleKeyDown: ReturnType<typeof handleKeyDown>
  watchValue: ReturnType<typeof watchValue>
  computePresentTags: ReturnType<typeof computePresentTags>
  computePresentContent: ReturnType<typeof computePresentContent>
  watchCheckedValue: ReturnType<typeof watchCheckedValue>
  toggleDropDownVisible: ReturnType<typeof toggleDropDownVisible>
  selfMounted: ReturnType<typeof selfMounted>
  handleBeforeUpdate: ReturnType<typeof handleBeforeUpdate>
  handleBlur: ReturnType<typeof handleBlur>
  calcCollapseTags: ReturnType<typeof calcCollapseTags>
  watchInputHover: ReturnType<typeof watchInputHover>
  handleMouseenter: ReturnType<typeof handleMouseenter>
  handleMouseleave: ReturnType<typeof handleMouseleave>
  filterHandler: Function
}
export type ICascaderConstants = ReturnType<typeof cascaderProps._constants.default>
export type ICascadeRenderlessParamUtils = ISharedRenderlessParamUtils<ICascaderConstants>
