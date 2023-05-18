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

import { extend } from '../common/object'

export const getHrList = ({ api, props, state }) => (deptCode) => {
  state.loading = true

  const params = {
    code: deptCode,
    category: props.category
  }

  return api.fetchHrapprover(params).then((data) => {
    const hraInfo = []

    data.forEach((info) => {
      const person = info.approval_Person

      if (!person) {
        return
      }

      const persons = person.split('#')

      persons.forEach((val) => {
        const newInfo = extend({}, info, { 'approval_person': val })
        hraInfo.push(newInfo)
      })
    })

    state.loading = false
    return hraInfo
  })
}

export const selectedDept = ({ api, state }) => (value) => {
  if (!value) {
    state.hrList = []
    state.approvalPerson = ''
    return
  }

  api
    .getHrList(value)
    .then((result) => {
      state.hrList = result

      const hasApproval = result.some((item) => item.approval_person === state.approvalPerson)

      if (!hasApproval) {
        state.approvalPerson = ''
      }
    })
    .catch(() => {
      state.hrList = []
    })
}

export const getDisplay = ({ api, state }) => (value) => {
  if (state.current === value) {
    return
  }

  state.current = value

  if (!value) {
    state.hrList = []
    state.lastHrList = []
    state.approvalPerson = ''

    return
  }

  api
    .getHrList(value)
    .then((result) => {
      state.hrList = result
      state.lastHrList = result

      const hasApproval = result.some((item) => item.approval_person === state.approvalPerson)

      if (!hasApproval) {
        state.approvalPerson = ''
      }
    })
    .catch(() => {
      state.hrList = []
      state.lastHrList = []
      state.approvalPerson = ''
    })
}

export const resetPerson = ({ props, state }) => () => {
  state.approvalPerson = props.approvalPerson
}

export const hrChange = ({ emit, state }) => (value) => {
  state.current = value
  emit('update:modelValue', value)
  emit('update:approvalPerson', state.approvalPerson)
}

export const initService = ({ props, service }) => {
  const { fetchHrapprover } = service || {}

  const fetchHrapproverNoop = () => Promise.reject(new Error('[TINY Error][Hrapprover] Prop fetchHrapprover is not configured'))

  return {
    fetchHrapprover: props.fetchHrapprover || fetchHrapprover || fetchHrapproverNoop
  }
}

export const cancel = ({ state }) => () => {
  state.approvalPerson = state.overdueData
  state.hrList = state.lastHrList
}
