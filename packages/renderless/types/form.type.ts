import type { ExtractPropTypes, ComponentPublicInstance } from 'vue'
import { formProps } from '@/form/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils, ITinyVm } from './shared.type'
import type { IFormItemInstance, IFormItemRule } from './form-item.type'

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
} from '../src/form'

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
