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

import type { ExtractPropTypes, ComponentPublicInstance } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils, ITinyVm } from '@mobile-root/shared.type'
import type { IFormItemInstance, IFormItemRule } from '../../form-item/src/form-item'

import type {
  updateTip,
  computedAutoLabelWidth,
  computedHideRequiredAsterisk,
  computedValidateIcon,
  computedIsErrorInline,
  computedIsErrorBlock,
  created,
  resetFields,
  clearValidate,
  validate,
  validateField,
  getLabelWidthIndex,
  registerLabelWidth,
  deregisterLabelWidth,
  watchRules,
  showTooltip,
  hideTooltip
} from './renderless'

export const formProps = {
  model: Object,
  rules: Object,
  inlineMessage: {
    type: Boolean,
    default: undefined
  },
  messageType: String,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true
  },
  validatePosition: {
    type: String,
    default: 'right'
  },
  size: String,
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: undefined
  },
  labelPosition: {
    type: String,
    default: 'right',
    validator: (value: string) => ['left', 'top', 'right'].includes(value)
  },
  labelWidth: {
    type: String,
    // 默认值挪到design中
    default: ''
  },
  labelAlign: {
    type: Boolean,
    default: false
  },
  contentOffset: Number,
  labelSuffix: {
    type: String,
    default: ''
  },
  inline: {
    type: Boolean,
    default: false
  },
  responsiveLayout: {
    type: Boolean,
    default: false
  },
  validateType: {
    type: String,
    default: 'tip',
    validator(value: string) {
      return Boolean(~['tip', 'text'].indexOf(value))
    }
  },
  validateIcon: Object,
  manual: {
    type: Boolean,
    default: false
  },
  appendToBody: {
    type: Boolean,
    default: undefined
  },
  popperOptions: {
    type: Object,
    default: () => ({})
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  showAutoWidth: {
    type: Boolean,
    default: false
  },
  showEmptyValue: {
    type: Boolean,
    default: true
  },
  validateTag: {
    type: Boolean,
    default: false
  },
  overflowTitle: {
    type: Boolean,
    default: false
  }
}

export interface IFormRules {
  [prop: string]: IFormItemRule
}
export interface IFormState {
  showAutoWidth: boolean
  fields: IFormItemInstance[]
  timer: number
  tooltipVisible: boolean
  displayedValue: string
  potentialLabelWidthArr: number[]
  autoLabelWidth: string
  isDisplayOnly: boolean
  hasRequired: boolean
  hideRequiredAsterisk: boolean
  validateIcon: object | null
  isErrorInline: boolean
  isErrorBlock: boolean
  labelWidth: string
  tooltipType: string
}

export type IFormProps = ExtractPropTypes<typeof formProps>

export type IFormRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: IFormState
  props: IFormProps
  api: IFormApi
  dialog: ITinyVm | null
}

export interface IFormApi {
  state: IFormState
  updateTip: ReturnType<typeof updateTip>
  computedAutoLabelWidth: ReturnType<typeof computedAutoLabelWidth>
  computedHideRequiredAsterisk: ReturnType<typeof computedHideRequiredAsterisk>
  computedValidateIcon: ReturnType<typeof computedValidateIcon>
  computedIsErrorInline: ReturnType<typeof computedIsErrorInline>
  computedIsErrorBlock: ReturnType<typeof computedIsErrorBlock>
  created: ReturnType<typeof created>
  resetFields: ReturnType<typeof resetFields>
  clearValidate: ReturnType<typeof clearValidate>
  validate: ReturnType<typeof validate>
  validateField: ReturnType<typeof validateField>
  getLabelWidthIndex: ReturnType<typeof getLabelWidthIndex>
  registerLabelWidth: ReturnType<typeof registerLabelWidth>
  deregisterLabelWidth: ReturnType<typeof deregisterLabelWidth>
  watchRules: ReturnType<typeof watchRules>
  showTooltip: ReturnType<typeof showTooltip>
  hideTooltip: ReturnType<typeof hideTooltip>
}

export type IFormRenderlessParamUtils = ISharedRenderlessParamUtils<never>

export type IFormInstance = ComponentPublicInstance & IFormProps & IFormApi
