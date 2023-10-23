import type { ExtractPropTypes, StyleValue } from 'vue'
import { formItemProps, $constants } from '@/form-item/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils, ITinyVm } from './shared.type'
import type { IFormInstance } from './form.type'

import type {
  watchError,
  updateTip,
  watchValidateStatus,
  computedLabelStyle,
  computedValueStyle,
  computedContentStyle,
  computedForm,
  computedFieldValue,
  computedGetValidateType,
  computedValidateIcon,
  computedIsErrorInline,
  computedIsErrorBlock,
  clearValidate,
  getRules,
  updateComputedLabelWidth,
  removeValidateEvents,
  unmounted,
  mounted,
  computedIsRequired,
  resetField,
  getFilteredRule,
  onFieldBlur,
  onFieldChange,
  addValidateEvents,
  validate,
  getDisplayedValue,
  clearDisplayedValue,
  handleMouseenter,
  handleMouseleave
} from '../src/form-item'

export interface IFormItemDisplayedValueParam {
  type: string
  val: string
}

export type IFormItemValidateStatus = 'validating' | 'success' | 'error'

export type IFormItemTrigger = 'blur' | 'change' | ''

export interface IFormItemLabelStyle {
  width: string
}

export interface IFormItemRule {
  required?: boolean
  message?: string
  trigger?: IFormItemTrigger | IFormItemTrigger[]
  validator?: Function
}
export interface IFormItemState {
  mode: string
  validateState: string
  validateMessage: string
  validateDisabled: boolean
  validator: object
  isNested: boolean
  computedLabelWidth: string
  initialValue: any
  canShowTip: boolean
  validationRequired: boolean
  validateType: string
  tooltip: string
  displayedValue: string
  isBasicComp: boolean
  showTooltip: boolean
  typeName: string
  formInstance: IFormInstance
  labelFor: string
  labelStyle: IFormItemLabelStyle
  valueStyle: StyleValue
  contentStyle: StyleValue
  form: IFormInstance
  fieldValue: any
  isRequired: boolean
  formInline: boolean | undefined
  formSize: string | undefined
  formItemSize: string | undefined
  isDisplayOnly: boolean
  labelPosition: string
  hideRequiredAsterisk: boolean
  labelSuffix: string
  labelWidth: string
  showMessage: boolean
  sizeClass: string | undefined
  getValidateType: string
  validateIcon: object | null
  isErrorInline: boolean
  isErrorBlock: boolean
}

export type IFormItemConstants = typeof $constants

export type IFormItemProps = ExtractPropTypes<typeof formItemProps>

export type IFormItemRenderlessParams = ISharedRenderlessFunctionParams<IFormItemConstants> & {
  state: IFormItemState
  props: IFormItemProps
  api: IFormItemApi
  instance: IFormItemInstance
  validateFunc: Function
}

export interface IFormItemApi {
  state: IFormItemState
  dispatch: ISharedRenderlessParamUtils['dispatch']
  broadcast: ISharedRenderlessParamUtils['broadcast']
  watchError: ReturnType<typeof watchError>
  updateTip: ReturnType<typeof updateTip>
  watchValidateStatus: ReturnType<typeof watchValidateStatus>
  computedLabelStyle: ReturnType<typeof computedLabelStyle>
  computedValueStyle: ReturnType<typeof computedValueStyle>
  computedContentStyle: ReturnType<typeof computedContentStyle>
  computedForm: ReturnType<typeof computedForm>
  computedFieldValue: ReturnType<typeof computedFieldValue>
  computedGetValidateType: ReturnType<typeof computedGetValidateType>
  computedValidateIcon: ReturnType<typeof computedValidateIcon>
  computedIsErrorInline: ReturnType<typeof computedIsErrorInline>
  computedIsErrorBlock: ReturnType<typeof computedIsErrorBlock>
  clearValidate: ReturnType<typeof clearValidate>
  getRules: ReturnType<typeof getRules>
  updateComputedLabelWidth: ReturnType<typeof updateComputedLabelWidth>
  removeValidateEvents: ReturnType<typeof removeValidateEvents>
  unmounted: ReturnType<typeof unmounted>
  mounted: ReturnType<typeof mounted>
  computedIsRequired: ReturnType<typeof computedIsRequired>
  resetField: ReturnType<typeof resetField>
  getFilteredRule: ReturnType<typeof getFilteredRule>
  onFieldBlur: ReturnType<typeof onFieldBlur>
  onFieldChange: ReturnType<typeof onFieldChange>
  addValidateEvents: ReturnType<typeof addValidateEvents>
  validate: ReturnType<typeof validate>
  getDisplayedValue: ReturnType<typeof getDisplayedValue>
  clearDisplayedValue: ReturnType<typeof clearDisplayedValue>
  handleMouseenter: ReturnType<typeof handleMouseenter>
  handleMouseleave: ReturnType<typeof handleMouseleave>
}

export type IFormItemRenderlessParamUtils = ISharedRenderlessParamUtils<IFormItemConstants>

export type IFormItemInstance = ITinyVm<IFormItemConstants> & IFormItemProps & IFormItemApi
