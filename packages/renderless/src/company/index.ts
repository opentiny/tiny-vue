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

export const init = ({ state, props, service }) => () => {
  const { textField, valueField } = service.fields

  if (state.source) {
    state.options = state.source.map((item) => ({
      label: item[textField],
      value: item[valueField]
    }))
  } else {
    service.fetchCompany().then((data) => {
      const list = data || []

      state.source = props.max ? list.slice(0, props.max) : list

      state.options = state.source.map((item) => ({
        label: item[textField],
        value: item[valueField]
      }))
    })
  }
}

export const change = (emit) => (value) => {
  emit('update:modelValue', value)
  emit('change', value)
}

export const initService = ({ props, service }) => {
  const { setting = {}, fetchCompany } = service || {}
  const { options = {} } = setting

  const defaultCompanySetting = {
    textField: 'tx_corporation_cn',
    valueField: 'tx_coa'
  }

  const fetchCompanyNoop = () => Promise.resolve([])

  return {
    fetchCompany: props.fetchCompany || fetchCompany || fetchCompanyNoop,
    fields: props.fields || options.Company || defaultCompanySetting
  }
}
