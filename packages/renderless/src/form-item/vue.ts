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
  watchError,
  watchValidateStatus,
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
  wrapValidate,
  getDisplayedValue,
  clearDisplayedValue,
  handleLabelMouseenter,
  handleMouseenter,
  handleMouseleave
} from './index'
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
    labelFor: computed(() => props.for || props.prop || ''),
    labelStyle: computed(() => api.computedLabelStyle()),
    valueStyle: computed(() => api.computedValueStyle()),
    contentStyle: computed(() => api.computedContentStyle()),
    form: computed(() => api.computedForm() as IFormInstance),
    fieldValue: computed(() => api.computedFieldValue()),
    isRequired: computed(() => api.computedIsRequired()),
    formInline: computed(() => state.formInstance.inline),
    formSize: computed(() => state.formInstance.size),
    formItemSize: computed(() => props.size || state.formSize),
    isDisplayOnly: computed(() => state.formInstance.displayOnly),
    labelPosition: computed(() => state.formInstance.labelPosition),
    hideRequiredAsterisk: computed(() => state.formInstance.state.hideRequiredAsterisk),
    labelSuffix: computed(() => state.formInstance.labelSuffix),
    labelWidth: computed(() => state.formInstance.labelWidth),
    showMessage: computed(() => state.formInstance.showMessage),
    sizeClass: computed(() => state.formItemSize),
    getValidateType: computed(() => api.computedGetValidateType()),
    validateIcon: computed(() => api.computedValidateIcon()),
    isErrorInline: computed(() => api.computedIsErrorInline()),
    isErrorBlock: computed(() => api.computedIsErrorBlock())
  })

  return state
}

const initApi = ({ api, state, dispatch, broadcast, props, constants, vm, t, nextTick, slots }) => {
  Object.assign(api, {
    state,
    dispatch,
    broadcast,
    watchError: watchError(state),
    updateTip: updateTip({ vm, state }),
    watchValidateStatus: watchValidateStatus(state),
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
    unmounted: unmounted({ api, vm, state }),
    mounted: mounted({ api, vm, props, state }),
    computedIsRequired: computedIsRequired({ api, state }),
    resetField: resetField({ api, nextTick, props, state }),
    getFilteredRule: getFilteredRule(api),
    onFieldBlur: onFieldBlur(api),
    onFieldChange: onFieldChange({ api, state }),
    addValidateEvents: addValidateEvents({ api, vm, props, state }),
    validate: wrapValidate({ validateFunc: validate({ api, props, state, t }), props }),
    getDisplayedValue: getDisplayedValue({ state }),
    clearDisplayedValue: clearDisplayedValue({ state }),
    handleLabelMouseenter: handleLabelMouseenter({ props, state, slots }),
    handleMouseenter: handleMouseenter({ state }),
    handleMouseleave: handleMouseleave(state)
  })
}

const initWatch = ({ watch, api, props, state }) => {
  watch(() => props.error, api.watchError, { immediate: true })

  watch(() => props.validateStatus, api.watchValidateStatus)

  watch(() => state.formInstance.displayOnly, api.clearDisplayedValue)
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
  initWatch({ watch, api, props, state })

  onMounted(api.mounted)
  vm.$on('displayed-value-changed', (param) => {
    api.getDisplayedValue(param)
  })
  onUnmounted(api.unmounted)

  return api
}
