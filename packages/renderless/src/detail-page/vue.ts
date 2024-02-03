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
  watchTextSplit,
  watchValue,
  showDialog,
  saveHandler,
  checkAllHander,
  checkValueHiddenItem,
  closeDialog,
  computedCancel,
  computedconfirm,
  computedSetLocalTips,
  computedSetValueTitle,
  computedSetLocalTitle,
  computedSetLabelTitle,
  computedSetDialogTitle
} from './index'

export const api = [
  'state',
  'valueChange',
  'showDialog',
  'closeDialog',
  'checkAllHander',
  'saveHandler',
  'checkValueHiddenItem'
]

const initState = ({ reactive, computed, api, props }) => {
  const state = reactive({
    value: props.modelValue,
    cloneValue: props.modelValue,
    textSplit: props.textSplit,
    isShowDialog: false,
    checkAll: false,
    indeterminate: computed(() => api.checkValueHiddenItem()),
    tips: computed(() => api.computedSetLocalTips()),
    saveButton: computed(() => api.computedconfirm()),
    cancelButton: computed(() => api.computedCancel()),
    title: computed(() => api.computedSetLocalTitle()),
    labelTitle: computed(() => api.computedSetLabelTitle()),
    valueTitle: computed(() => api.computedSetValueTitle()),
    dialogTitle: computed(() => api.computedSetDialogTitle())
  })

  return state
}

const initApi = ({ api, state, emit, alert, constants, props, t }) => {
  Object.assign(api, {
    state,
    watchValue: watchValue(state),
    showDialog: showDialog(state),
    closeDialog: closeDialog(state),
    watchTextSplit: watchTextSplit(state),
    checkAllHander: checkAllHander(state),
    saveHandler: saveHandler({ emit, state, alert }),
    checkValueHiddenItem: checkValueHiddenItem(state),
    computedCancel: computedCancel({ constants, props, t }),
    computedconfirm: computedconfirm({ constants, props, t }),
    computedSetLocalTips: computedSetLocalTips({ constants, props, t }),
    computedSetValueTitle: computedSetValueTitle({ constants, props, t }),
    computedSetLocalTitle: computedSetLocalTitle({ constants, props, t }),
    computedSetLabelTitle: computedSetLabelTitle({ constants, props, t }),
    computedSetDialogTitle: computedSetDialogTitle({ api, constants, props, t })
  })
}

const initWatch = ({ watch, props, api }) => {
  watch(() => props.modelValue, api.watchValue, { immediate: true })
  watch(() => props.textSplit, api.watchTextSplit, { immediate: true })
}

export const renderless = (props, { computed, reactive, watch }, { t, emit, constants }, { alert }) => {
  const api = {}
  const state = initState({ reactive, computed, api, props })

  initApi({ api, state, emit, alert, constants, props, t })

  initWatch({ watch, props, api })

  return api
}
