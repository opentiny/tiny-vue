import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { inputProps, $constants } from '@/input/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type useStorageBox from '../src/tall-storage/vue-storage-box'
import type {
  calculateNodeStyling,
  calcTextareaHeight,
  getInput,
  handleInput,
  calcIconOffset,
  focus,
  watchFormSelect,
  getDisplayedValue,
  setNativeInputValue,
  resizeTextarea,
  updateIconOffset,
  hiddenPassword,
  dispatchDisplayedValue,
  inputStyle
} from '../src/input'

export interface IInputState {
  mode: string
  focused: boolean
  hovering: boolean
  isComposing: boolean
  passwordVisible: boolean
  boxVisibility: boolean
  textareaCalcStyle: object
  checkedLabel: string
  width: string
  sheetvalue: string | number | undefined
  inputSize: ComputedRef<string>
  showClear: ComputedRef<boolean>
  upperLimit: ComputedRef<string>
  textLength: ComputedRef<string>
  inputExceed: ComputedRef<boolean>
  formItemSize: ComputedRef<string>
  validateIcon: ComputedRef<typeof $constants.VALIDATE_ICON | null>
  showWordLimit: ComputedRef<boolean>
  inputDisabled: ComputedRef<boolean>
  validateState: ComputedRef<string>
  textareaStyle: ComputedRef<object>
  needStatusIcon: ComputedRef<boolean>
  showPwdVisible: ComputedRef<boolean>
  nativeInputValue: ComputedRef<string>
  isWordLimitVisible: ComputedRef<boolean>
  isDisplayOnly: ComputedRef<boolean>
  displayOnlyTooltip: string
  hiddenPassword: ComputedRef<string>
}

export type IInputRenderlessParamUtils = ISharedRenderlessParamUtils<IInputConstants>

export type IInputProps = ExtractPropTypes<typeof inputProps>

export type IInputConstants = typeof $constants

export interface IInputApi extends Pick<IInputRenderlessParamUtils, 'dispatch'> {
  state: IInputState
  isMemoryStorage: ReturnType<typeof useStorageBox>['isMemoryStorage']
  searchMemory: ReturnType<typeof useStorageBox>['searchMemory']
  setNativeInputValue: ReturnType<typeof setNativeInputValue>
  resizeTextarea: ReturnType<typeof resizeTextarea>
  updateIconOffset: ReturnType<typeof updateIconOffset>
  dispatchDisplayedValue: ReturnType<typeof dispatchDisplayedValue>
  hiddenPassword: ReturnType<typeof hiddenPassword>
  watchFormSelect: ReturnType<typeof watchFormSelect>
  getInput: ReturnType<typeof getInput>
  calcTextareaHeight: ReturnType<typeof calcTextareaHeight>
  calculateNodeStyling: ReturnType<typeof calculateNodeStyling>
  handleInput: ReturnType<typeof handleInput>
  calcIconOffset: ReturnType<typeof calcIconOffset>
  focus: ReturnType<typeof focus>
  getDisplayedValue: ReturnType<typeof getDisplayedValue>
  inputStyle: ReturnType<typeof inputStyle>
}

export type IInputRenderlessParams = ISharedRenderlessFunctionParams<IInputConstants> & {
  state: IInputState
  props: IInputProps
  api: IInputApi
}

export interface IInputClassPrefixConstants {
  Input: string
  InputGroup: string
}

export interface IInputEventNameConstants {
  change: string
  blur: string
}
