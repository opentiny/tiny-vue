import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { checkboxProps, $constants } from '@/checkbox/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type {
  addToStore,
  removeFromStore,
  computedStore,
  computedFormItemSize,
  computedIsChecked,
  computedIsLimitDisabled,
  computedIsDisabled,
  computedIsDisplayOnly,
  computedIsGroupDisplayOnly,
  computedGetModelGet,
  computedIsGroup,
  computedCheckboxSize,
  computedGetModelSet,
  mounted,
  handleChange,
  computedDisplayLabel,
  computedIsShowText,
  computedShowText
} from '../src/checkbox'

export type ICheckboxSizeEnum = 'medium' | 'small' | 'mini'
export type ICheckboxModalValue = string | number | boolean

export interface ICheckboxChangeEvent extends Event {
  target: HTMLInputElement
}
export interface ICheckboxState {
  size: ICheckboxSizeEnum
  vertical: boolean
  focus: boolean
  selfModel: ICheckboxModalValue
  showLabel: boolean
  isLimitExceeded: boolean
  checkboxGroup: ISharedRenderlessFunctionParams<ICheckboxConstants>['parent']
  store: ICheckboxModalValue | ICheckboxModalValue[]
  isGroup: boolean
  isChecked: boolean
  isDisabled: boolean
  checkboxSize: boolean
  isLimitDisabled: boolean
  formDisabled: boolean
  formDisplayOnly: boolean
  isDisplayOnly: boolean
  isGroupDisplayOnly: boolean
  displayLabel: string
  inputDisabled: boolean
  model: ICheckboxModalValue | ICheckboxModalValue[]
  showText: boolean
  isShowText: boolean
}

export type ICheckboxProps = ExtractPropTypes<typeof checkboxProps>

export type ICheckboxConstants = typeof $constants

export type ICheckboxRenderlessParams = ISharedRenderlessFunctionParams<ICheckboxConstants> & {
  state: ICheckboxState
  props: ICheckboxProps
  formItemSize: ComputedRef<string>
  type: string
  api: ICheckboxApi
}

export interface ICheckboxApi {
  state: ICheckboxState
  dispatch: ISharedRenderlessParamUtils<ICheckboxConstants>['dispatch']
  addToStore: ReturnType<typeof addToStore>
  removeFromStore: ReturnType<typeof removeFromStore>
  computedStore: ReturnType<typeof computedStore>
  computedFormItemSize: ReturnType<typeof computedFormItemSize>
  computedIsChecked: ReturnType<typeof computedIsChecked>
  computedIsLimitDisabled: ReturnType<typeof computedIsLimitDisabled>
  computedIsDisabled: ReturnType<typeof computedIsDisabled>
  computedIsDisplayOnly: ReturnType<typeof computedIsDisplayOnly>
  computedIsGroupDisplayOnly: ReturnType<typeof computedIsGroupDisplayOnly>
  computedGetModelGet: ReturnType<typeof computedGetModelGet>
  computedIsGroup: ReturnType<typeof computedIsGroup>
  computedCheckboxSize: ReturnType<typeof computedCheckboxSize>
  computedGetModelSet: ReturnType<typeof computedGetModelSet>
  mounted: ReturnType<typeof mounted>
  handleChange: ReturnType<typeof handleChange>
  computedDisplayLabel: ReturnType<typeof computedDisplayLabel>
  computedIsShowText: ReturnType<typeof computedIsShowText>
  computedShowText: ReturnType<typeof computedShowText>
}

export type ICheckboxRenderlessParamUtils = ISharedRenderlessParamUtils<ICheckboxConstants>
