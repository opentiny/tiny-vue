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
import { $prefix } from '@mobile-root/common'
import type { PropType } from '@mobile-root/common'
import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'

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
} from './renderless'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

export type IconPosition = 'center' | 'top'

export const $constants = {
  FORM_ITEM: 'FormItem',
  FORM_CHANGE: 'form.change',
  CHECKBOX: $prefix + 'Checkbox',
  CHECKBOX_GROUP: 'CheckboxGroup'
}

export const checkboxProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: {
    type: [String, Number, Boolean]
  },
  label: {
    type: [String, Number, Boolean],
    default: ''
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: String,
  trueLabel: [String, Number],
  falseLabel: [String, Number],

  /*
   * 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系
   */
  id: String,

  /*
   * 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系
   */
  controls: { type: String, default: '' },
  border: Boolean,
  size: String,
  text: String,
  customClass: [String, Object, Array],
  validateEvent: {
    type: Boolean,
    default: true
  },
  events: {
    type: Object,
    default: () => ({})
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  iconPosition: String as PropType<IconPosition>,
  shape: {
    type: String,
    default: ''
  }
}

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
  tooltipVisible: boolean
  displayedValue: string
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
