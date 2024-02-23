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

import { getHrList, selectedDept, resetPerson, hrChange, initService, getDisplay, cancel } from './index'

export const api = ['state', 'hrChange', 'selectedDept', 'resetPerson', 'getDisplay', 'cancel']

const initState = ({ reactive, props }) => {
  const state = reactive({
    hrList: [],
    lastHrList: [],
    dept: props.modelValue,
    current: '',
    approvalPerson: props.approvalPerson,
    overdueData: '',
    loading: false
  })

  return state
}

const initApi = ({ api, state, emit, props, $service }) => {
  Object.assign(api, {
    state,
    hrChange: hrChange({ emit, state }),
    resetPerson: resetPerson({ props, state }),
    fetchHrapprover: $service.fetchHrapprover,
    cancel: cancel({ state }),
    getHrList: getHrList({ api, props, state }),
    selectedDept: selectedDept({ api, state }),
    getDisplay: getDisplay({ api, state })
  })
}

const initWatch = ({ watch, state, api, props }) => {
  watch(
    () => props.modelValue,
    (value) => {
      state.dept = value

      api.getDisplay(value)
    },
    { immediate: true }
  )

  watch(
    () => props.approvalPerson,
    (value) => {
      state.overdueData = value
      state.approvalPerson = value
    },
    { immediate: true }
  )
}

export const renderless = (props, { reactive, watch }, { service, emit }) => {
  const api = {}
  const $service = initService({ props, service })
  const state = initState({ reactive, props })

  initApi({ api, state, emit, props, $service })
  initWatch({ watch, state, api, props })

  return api
}
