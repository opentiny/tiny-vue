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

import {
  validate,
  clearValidate,
  resetField,
  getRules,
  getFilteredRule,
  onFieldBlur,
  onFieldChange,
  updateComputedLabelWidth,
  addValidateEvents,
  removeValidateEvents,
  mounted,
  unmounted,
  registerField,
  unregisterField,
  watchError,
  watchValidateStatus,
  watchRequired,
  watchRules,
  computedLabelStyle,
  computedValueStyle,
  computedContentStyle,
  computedForm,
  computedIsRequired,
  computedFieldValue,
  computedGetValidateType,
  computedValidateIcon,
  computedIsErrorInline,
  computedIsErrorBlock,
  updateTip,
  updateTooltip,
  wrapValidate,
  getDisplayedValue,
  clearDisplayedValue,
  handleLabelMouseenter,
  handleMouseenter,
  handleMouseleave
} from './index'
import { nanoid } from '@opentiny/utils'
import type {
  IFormItemApi,
  IFormItemProps,
  IFormItemState,
  IFormInstance,
  IFormItemRenderlessParams,
  IFormItemRenderlessParamUtils
} from '@/types'

export const api = [
  'state',
  'validate',
  'validateOrigin',
  'clearValidate',
  'resetField',
  'getRules',
  'getFilteredRule',
  'onFieldBlur',
  'onFieldChange',
  'updateComputedLabelWidth',
  'addValidateEvents',
  'removeValidateEvents',
  'updateTip',
  'getDisplayedValue',
  'handleLabelMouseenter',
  'handleMouseenter',
  'handleMouseleave'
]

const initState = ({
  reactive,
  computed,
  api,
  mode,
  inject,
  props
}: Pick<IFormItemRenderlessParams, 'reactive' | 'computed' | 'api' | 'mode' | 'inject' | 'props'>) => {
  // 使用 nanoid 生成唯一的 ID（8位字符），用于无障碍属性关联
  const uniqueId = nanoid.api.nanoid(8)
  const errorId = `tiny-form-item-error-${uniqueId}`
  const labelId = `tiny-form-item-label-${uniqueId}`

  const state: IFormItemState = reactive({
    mode,
    validateState: '',
    validateMessage: '',
    validateDisabled: false,
    validator: {},
    isNested: false,
    computedLabelWidth: '',
    initialValue: null,
    canShowTip: false,
    // 兼容 2.0 validation 的 required
    validationRequired: false,
    validateType: 'text',
    tooltip: '',
    displayedValue: '',
    isBasicComp: false,
    showTooltip: false,
    typeName: '',
    formInstance: inject('form') as IFormInstance,
    // 无障碍支持：为错误信息和标签生成唯一 ID
    errorId,
    labelId,
    labelFor: computed(() => props.for || props.prop || ''),
    labelStyle: computed(() => api.computedLabelStyle()),
    valueStyle: computed(() => api.computedValueStyle()),
    contentStyle: computed(() => api.computedContentStyle()),
    form: computed(() => api.computedForm() as IFormInstance),
    fieldValue: computed(() => api.computedFieldValue()),
    isRequired: computed(() => api.computedIsRequired()),
    formInline: computed(() => state.formInstance?.inline),
    formSize: computed(() => state.formInstance?.size),
    formItemSize: computed(() => props.size || state.formSize),
    isDisplayOnly: computed(() => state.formInstance?.displayOnly ?? false),
    labelPosition: computed(() => state.formInstance?.labelPosition ?? 'right'),
    hideRequiredAsterisk: computed(() => state.formInstance?.state?.hideRequiredAsterisk ?? false),
    labelSuffix: computed(() => state.formInstance?.labelSuffix ?? ''),
    labelWidth: computed(() => state.formInstance?.labelWidth ?? ''),
    showMessage: computed(() => state.formInstance?.showMessage ?? true),
    sizeClass: computed(() => state.formItemSize),
    getValidateType: computed(() => api.computedGetValidateType()),
    validateIcon: computed(() => api.computedValidateIcon()),
    isErrorInline: computed(() => api.computedIsErrorInline()),
    isErrorBlock: computed(() => api.computedIsErrorBlock()),
    /**
     * TODO: There is a potential issue here. Need to confirm whether to keep this logic.
     * There does not have disabled prop in form-item, but disabled is used here, I think it is a mistake.
     * If not, need to add disabled prop in form-item component.
     */
    // @ts-expect-error Need to confirm whether to keep this logic
    disabled: computed(() => state.formInstance?.disabled || props.disabled),
    tooltipType: computed(() => state.formInstance?.state.tooltipType ?? 'normal'),
    // 标记表单项下是否有多个子节点
    isMultiple: false,
    fieldRegistered: false
  })

  return state
}

const initApi = ({ api, state, dispatch, broadcast, props, constants, vm, t, nextTick, slots }) => {
  // 创建原始的 validate 函数（不经过防抖处理）
  const validateOriginFunc = validate({ api, props, state, t })

  Object.assign(api, {
    state,
    dispatch,
    broadcast,
    watchError: watchError(state),
    updateTip: updateTip({ api, vm, state }),
    updateTooltip: updateTooltip({ vm, state }),
    watchValidateStatus: watchValidateStatus(state),
    watchRequired: watchRequired({ api }),
    watchRules: watchRules({ api }),
    computedLabelStyle: computedLabelStyle({ props, state }),
    computedValueStyle: computedValueStyle({ props, state }),
    computedContentStyle: computedContentStyle({ props, state }),
    computedForm: computedForm({ constants, vm, state }),
    computedFieldValue: computedFieldValue({ props, state }),
    computedGetValidateType: computedGetValidateType({ props, state }),
    computedValidateIcon: computedValidateIcon({ props, state }),
    computedIsErrorInline: computedIsErrorInline({ props, state }),
    computedIsErrorBlock: computedIsErrorBlock({ props, state }),
    clearValidate: clearValidate(state),
    getRules: getRules({ props, state }),
    updateComputedLabelWidth: updateComputedLabelWidth(state),
    removeValidateEvents: removeValidateEvents(vm),
    registerField: registerField({ api, vm, props, state }),
    unregisterField: unregisterField({ api, vm, state }),
    unmounted: unmounted({ api, state }),
    mounted: mounted({ api }),
    computedIsRequired: computedIsRequired({ api, state }),
    resetField: resetField({ api, nextTick, props, state }),
    getFilteredRule: getFilteredRule(api),
    onFieldBlur: onFieldBlur(api),
    onFieldChange: onFieldChange({ api, state }),
    addValidateEvents: addValidateEvents({ api, vm, props, state }),
    validateOrigin: validateOriginFunc,
    validate: wrapValidate({ validateFunc: validateOriginFunc, props }),
    getDisplayedValue: getDisplayedValue({ state }),
    clearDisplayedValue: clearDisplayedValue({ state }),
    handleLabelMouseenter: handleLabelMouseenter({ props, state, slots }),
    handleMouseenter: handleMouseenter({ state }),
    handleMouseleave: handleMouseleave(state)
  })
}

const initWatch = ({ watch, api, props, state, nextTick }) => {
  watch(() => props.error, api.watchError, { immediate: true })

  watch(() => props.validateStatus, api.watchValidateStatus)

  watch(() => state.formInstance?.displayOnly, api.clearDisplayedValue)

  watch(
    () => props.prop,
    (newProp, oldProp) => {
      if (oldProp) {
        api.unregisterField()
        api.clearValidate()
      }

      if (newProp) {
        nextTick(() => api.registerField())
      }
    }
  )

  watch(() => props.required, api.watchRequired)

  watch(() => props.rules, api.watchRules, { deep: true })
}

export const renderless = (
  props: IFormItemProps,
  { computed, inject, onMounted, onUnmounted, provide, reactive, watch }: IFormItemRenderlessParams,
  { vm, constants, t, nextTick, broadcast, dispatch, mode, slots }: IFormItemRenderlessParamUtils
): IFormItemApi => {
  const api = {} as IFormItemApi
  const state = initState({ reactive, computed, api, mode, inject, props })

  provide('formItem', vm)

  initApi({ api, state, dispatch, broadcast, props, constants, vm, t, nextTick, slots })
  initWatch({ watch, api, props, state, nextTick })

  onMounted(api.mounted)
  vm.$on('displayed-value-changed', (param) => {
    api.getDisplayedValue(param)
  })
  onUnmounted(api.unmounted)

  return api
}
