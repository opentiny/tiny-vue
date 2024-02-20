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

  const { getCurrency, getDefaultCurrency, setDefaultCurrency } = service?.common || {}
  const { setting } = service || {}
  const { options = {} } = setting || {}

  const fetchCurrencyNoop = () => {
    return Promise.resolve([])
  }

  return {
    fetchCurrency: props.fetchCurrency || getCurrency || fetchCurrencyNoop,
    fields: props.fields || options.Currency || defaultCurrencySetting,
    fetchDefaultCurrency: props.fetchDefaultCurrency || getDefaultCurrency,
    setDefaultCurrency: props.setDefaultCurrency || setDefaultCurrency
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

export const fetchDefaultCurrency =
  ({ state, props, emit, service }) =>
  () => {
    if (!service.fetchDefaultCurrency || !props.setDefault) return

    const result = service.fetchDefaultCurrency()
    if (result.then) {
      result.then((res) => {
        if (!res) return
        state.defaultCurrency = res
        emit('update:modelValue', res)
      })
    } else {
      state.defaultCurrency = result
      emit('update:modelValue', result)
    }
  }

export const toogleDefaultCurrency =
  ({ state, service }) =>
  (value, isActive) => {
    if (!service.setDefaultCurrency) return

    let setValue = isActive ? '' : value
    const result = service.setDefaultCurrency(setValue)
    if (result.then) {
      result.then(() => {
        state.defaultCurrency = setValue
      })
    }
  }

export const computedSearchConfig =
  ({ props, service }) =>
  () => {
    const { textField, valueField } = service.fields
    const { searchConfig } = props

    const handleOptions = (options) => {
      return options.map((item) => ({
        label: item[textField],
        value: item[valueField]
      }))
    }

    const searchMethod = (...args) => {
      return new Promise((resolve) => {
        const options = searchConfig.searchMethod(...args)
        if (typeof options.then === 'function') {
          options.then((result) => resolve(handleOptions(result)))
        } else {
          resolve(handleOptions(options))
        }
      })
    }

    const config = { ...props.searchConfig }

    if (searchConfig && searchConfig.searchMethod) {
      config.searchMethod = searchMethod
    }

    return config
  }

export const visibleChange = (emit) => (value) => {
  emit('update:visible', value)
  emit('visible-change', value)
}
