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

import { isUndefined, isNull } from '../grid/static'
import { log } from '../common'

export const init =
  ({ state, service, api }) =>
  () => {
    const { textField, valueField } = service.fields

    service.fetchCurrency().then((data) => {
      api.fixServiceData(data).then((result) => {
        state.options = result.map((item) => ({
          label: item[textField],
          value: item[valueField]
        }))
      })
    })
  }

export const change = (emit) => (value) => {
  emit('update:modelValue', value)
  emit('change', value)
}

export const initService = ({ props, service }) => {
  const defaultCurrencySetting = {
    textField: 'currency_code',
    valueField: 'currency_code'
  }

  const { setting = {}, fetchCurrency } = service || {}
  const { options = {} } = setting

  const fetchCurrencyNoop = () => Promise.resolve([])

  return {
    fetchCurrency: props.fetchCurrency || fetchCurrency || fetchCurrencyNoop,
    fields: props.fields || options.Currency || defaultCurrencySetting
  }
}

export const fixServiceData =
  ({ props, service }) =>
  (data) => {
    const { textField, valueField } = service.fields

    return new Promise((resolve) => {
      data = data || []
      data = Array.isArray(data) ? data : []

      const result = []

      data.forEach((option) => {
        option = option || {}

        const value = option[valueField]
        const text = option[textField]

        if (isUndefined(value) || isNull(value)) {
          if (text) {
            option[valueField] = text
          } else {
            log('data error. set it to the default value.', 'warn')
            option[textField] = option[valueField] = props.currency
          }
        }

        result.push(option)
      })

      resolve(result)
    })
  }
