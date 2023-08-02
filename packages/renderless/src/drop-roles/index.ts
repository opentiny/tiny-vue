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

export const init = ({ state, service, emit }) => () => {
  let promise
  const { textField, valueField } = service.fields

  if (state.source) {
    promise = new Promise((resolve) => resolve(state.source))
  } else {
    promise = Promise.all([service.fetchRole(), service.fetchCurrentRole()]).then((result) => {
      const [validRoles, currentRole] = result

      if (validRoles) {
        state.source = validRoles

        if (currentRole && currentRole[valueField]) {
          state.selectedValue = currentRole[valueField]
          emit('update:modelValue', state.selectedValue)
        }
      } else {
        state.source = []
      }

      return state.source
    })
  }

  promise.then((data) => {
    state.options = data.map((item) => ({
      label: item[textField],
      value: item[valueField]
    }))

    emit('render', state.options, state.selectedValue)
  })
}

export const change = (emit) => (value) => {
  emit('update:modelValue', value)
  emit('change', value)
}

export const initService = ({ props, service }) => {
  const { setting = {}, fetchRole, fetchCurrentRole } = service || {}
  const { options = {} } = setting

  const noopFnCreator = (propName) => () => Promise.reject(new Error(`[TINY Error][DropRoles] Prop ${propName} is not configured`))

  const defaultDropRolesSetting = {
    textField: 'roleName',
    valueField: 'roleId'
  }

  return {
    fetchRole: props.fetchRole || fetchRole || noopFnCreator('fetchRole'),
    fetchCurrentRole: props.fetchCurrentRole || fetchCurrentRole || noopFnCreator('fetchCurrentRole'),
    fields: props.fields || options.DropRoles || defaultDropRolesSetting
  }
}
