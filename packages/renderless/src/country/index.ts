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

export const change = (emit) => (value) => {
  emit('update:modelValue', value)
  emit('change', value)
}

export const init =
  ({ state, service }) =>
  () => {
    const { textField, valueField } = service.fields

    if (state.source) {
      state.options = state.source.map((item) => ({
        label: item[textField],
        value: item[valueField]
      }))
    } else {
      service.fetchCountry().then((data) => {
        state.source = data || []

        state.options = state.source.map((item) => ({
          value: item[valueField],
          label: item[textField]
        }))
      })
    }
  }

export const initService = ({ props, service }) => {
  const { fetchCountry, setting = {} } = service || {}
  const { options = {} } = setting

  const defaultCountrySetting = {
    textField: 'territory_short_name',
    valueField: 'territory_code'
  }

  const fetchCountryNoop = () => Promise.resolve([])

  return {
    fetchCountry: props.fetchCountry || fetchCountry || fetchCountryNoop,
    fields: props.fields || options.Country || defaultCountrySetting
  }
}
