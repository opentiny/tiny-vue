/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import type { PropType } from '@mobile-root/common'
import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'

import type {
  calculateNodeStyling,
  calcTextareaHeight,
  getInput,
  handleInput,
  calcIconOffset,
  focus,
  watchFormSelect,
  setNativeInputValue,
  resizeTextarea,
  updateIconOffset,
  hiddenPassword,
  inputStyle
} from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export const $constants = {
  INPUT_PC: 'tiny-input__',
  INPUTGROUP_PC: 'tiny-input-group__',
  INPUT_MOBILE: 'tiny-mobile-input__',
  INPUTGROUP_MOBILE: 'tiny-mobile-input-group__',
  Mode: 'pc',
  inputMode(mode) {
    return mode === this.Mode ? this.INPUT_PC : this.INPUT_MOBILE
  },
  inputGroupMode(mode) {
    return mode === this.Mode ? this.INPUTGROUP_PC : this.INPUTGROUP_MOBILE
  },
  VALIDATE_ICON: {
    Validating: 'tiny-icon-loading',
    Success: 'tiny-icon-circle-check',
    Error: 'tiny-icon-circle-close'
  },
  COMPONENT_NAME: {
    FormItem: 'FormItem'
  },
  MASKSYMBOL: '******'
}

export const inputProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  name: String,
  size: String,
  form: String,
  label: String,
  height: Number,
  resize: String,
  tabindex: { type: String, default: '1' },
  disabled: Boolean,
  readonly: Boolean,
  hoverExpand: Boolean,
  mask: Boolean,
  suffixIcon: [Object, String],
  prefixIcon: [Object, String],
  modelValue: [String, Number] as PropType<string | number | null>,
  type: {
    type: String,
    default: 'text'
  },
  memorySpace: {
    type: Number,
    default: 5
  },
  vertical: {
    type: Boolean,
    default: false
  },
  selectMenu: {
    type: Array<{ id: string; label: string }>,
    default: () => []
  },
  ellipsis: {
    type: Boolean,
    default: false
  },
  contentStyle: {
    type: Object,
    default: () => ({})
  },
  isSelect: {
    type: Boolean,
    default: false
  },
  tips: String,
  counter: {
    type: Boolean,
    default: false
  },
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  showTitle: {
    type: Boolean,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  // mobile特有属性
  textareaTitle: {
    type: String,
    default: ''
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  displayOnlyContent: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  },
  frontClearIcon: {
    type: Boolean,
    default: false
  },
  showEmptyValue: {
    type: Boolean,
    default: false
  },
  textAlign: {
    type: String,
    default: 'left'
  },
  width: {
    type: [String, Number] as PropType<string | number | null>
  }
}

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
  setNativeInputValue: ReturnType<typeof setNativeInputValue>
  resizeTextarea: ReturnType<typeof resizeTextarea>
  updateIconOffset: ReturnType<typeof updateIconOffset>
  hiddenPassword: ReturnType<typeof hiddenPassword>
  watchFormSelect: ReturnType<typeof watchFormSelect>
  getInput: ReturnType<typeof getInput>
  calcTextareaHeight: ReturnType<typeof calcTextareaHeight>
  calculateNodeStyling: ReturnType<typeof calculateNodeStyling>
  handleInput: ReturnType<typeof handleInput>
  calcIconOffset: ReturnType<typeof calcIconOffset>
  focus: ReturnType<typeof focus>
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
