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
  updateTip,
  wrapValidate
} from './index'

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
  'updateTip'
]

const initState = ({ reactive, computed, api, mode, inject, props }) => {
  const state = reactive({
    mode,
    validateState: '',
    validateMessage: '',
    validateDisabled: false,
    validator: {},
    stowed: [],
    isNested: false,
    computedLabelWidth: '',
    initialValue: null,
    canShowTip: false,
    // 兼容 2.0 validation 的 required
    validationRequired: false,
    tooltip: null,
    formInstance: inject('form', null),
    labelFor: computed(() => props.for || props.prop),
    labelStyle: computed(() => api.computedLabelStyle()),
    valueStyle: computed(() => api.computedValueStyle()),
    contentStyle: computed(() => api.computedContentStyle()),
    form: computed(() => api.computedForm()),
    fieldValue: computed(() => api.computedFieldValue()),
    isRequired: computed(() => api.computedIsRequired()),
    formSize: computed(() => state.formInstance.size),
    formItemSize: computed(() => props.size || state.formSize),
    sizeClass: computed(() => state.formItemSize),
    getValidateType: computed(() => api.computedGetValidateType())
  })

  return state
}

const initApi = ({ api, state, dispatch, broadcast, refs, props, constants, instance, t, nextTick }) => {
  Object.assign(api, {
    state,
    dispatch,
    broadcast,
    watchError: watchError(state),
    updateTip: updateTip({ refs, state }),
    watchValidateStatus: watchValidateStatus(state),
    computedLabelStyle: computedLabelStyle({ props, state }),
    computedValueStyle: computedValueStyle({ props, state }),
    computedContentStyle: computedContentStyle({ props, state }),
    computedForm: computedForm({ constants, instance, state }),
    computedFieldValue: computedFieldValue({ props, state }),
    computedGetValidateType: computedGetValidateType({ props, state }),
    clearValidate: clearValidate(state),
    getRules: getRules({ props, state }),
    updateComputedLabelWidth: updateComputedLabelWidth(state),
    removeValidateEvents: removeValidateEvents(instance),
    unmounted: unmounted({ api, instance, state }),
    mounted: mounted({ api, instance, props, state, refs }),
    computedIsRequired: computedIsRequired({ api, state }),
    resetField: resetField({ api, nextTick, props, state }),
    getFilteredRule: getFilteredRule(api),
    onFieldBlur: onFieldBlur(api),
    onFieldChange: onFieldChange({ api, state }),
    addValidateEvents: addValidateEvents({ api, instance, props, state }),
    validate: wrapValidate({ validateFunc: validate({ api, props, state, t }), props })
  })
}

const initWatch = ({ watch, api, props }) => {
  watch(() => props.error, api.watchError, { immediate: true })

  watch(() => props.validateStatus, api.watchValidateStatus)
}

export const renderless = (
  props,
  { computed, inject, onMounted, onUnmounted, provide, reactive, watch },
  { vm: instance, constants, t, nextTick, refs, broadcast, dispatch, mode }
) => {
  const api = {}
  const state = initState({ reactive, computed, api, mode, inject, props })

  provide('formItem', instance)

  initApi({ api, state, dispatch, broadcast, refs, props, constants, instance, t, nextTick })
  initWatch({ watch, api, props })

  onMounted(api.mounted)
  onUnmounted(api.unmounted)

  return api
}
