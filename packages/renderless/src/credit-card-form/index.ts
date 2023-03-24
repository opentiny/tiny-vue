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

export const generateMonthValue = (month) => (month < 10 ? `0${month}` : month)

export const changeName = ({ emit, state }) => (event) => {
  state.formData.cardName = event.target.value
  emit('input-card-name', state.formData.cardName)
}

export const changeNumber = ({ emit, state }) => (event) => {
  state.formData.cardNumber = event.target.value
  state.mainCardNumber = event.target.value
  let value = state.formData.cardNumber.replace(/\D/g, '')

  if (/^3[47]\d{0,13}$/.test(value)) {
    // american express, 15 digits
    state.formData.cardNumber = value.replace(/^(\d{4})(?=\d)/, '$1 ').replace(/^(\d{4}) (\d{6})(?=\d)/, '$1 $2 ')

    state.cardNumberMaxLength = 17
  } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
    // diner's club, 14 digits
    state.formData.cardNumber = value.replace(/^(\d{4})(?=\d)/, '$1 ').replace(/^(\d{4}) (\d{6})(?=\d)/, '$1 $2 ')

    state.cardNumberMaxLength = 16
  } else if (/^\d{0,16}$/.test(value)) {
    // regular cc number, 16 digits
    state.formData.cardNumber = value
      .replace(/^(\d{4})(?=\d)/, '$1 ')
      .replace(/^(\d{4}) (\d{4})(?=\d)/, '$1 $2 ')
      .replace(/^(\d{4}) (\d{4}) (\d{4})(?=\d)/, '$1 $2 $3 ')

    state.cardNumberMaxLength = 19
  }

  emit('input-card-number', state.formData.cardNumber)
}

export const changeMonth = ({ emit, state }) => () => {
  emit('input-card-month', state.cardMonth)
}

export const changeYear = ({ emit, state }) => () => {
  emit('input-card-year', state.cardYear)
}

export const changeCvv = ({ emit, state }) => (event) => {
  state.formData.cardCvv = event.target.value
  emit('input-card-cvv', state.formData.cardCvv)
}

export const invaildCard = (props) => () => {
  let number = props.formData.cardNumber
  let sum = 0
  let isOdd = true

  if (!number) {
    return true
  }

  for (let i = number.length - 1; i >= 0; i--) {
    let code = number.charAt(i)

    if (isOdd) {
      sum += code
    } else {
      code = code * 2

      if (code > 9) {
        code = code.toString().split('').join('+')
      }

      sum += code
    }

    isOdd = !isOdd
  }

  if (sum % 10 !== 0) {
    return true
  }

  return false
}

export const handleSubmit = ({ api, emit, props, state }) => () => {
  const invaildCard = api.invaildCard()

  emit('submit', {
    invaildCard,
    ...props.formData,
    cardNumber: state.mainCardNumber.replace(/ /g, '')
  })
}

export const blurCardNumber = ({ api, state }) => () => {
  if (state.isCardNumberMasked) {
    api.maskCardNumber()
  }
}

export const maskCardNumber = ({ props, state }) => () => {
  state.mainCardNumber = props.formData.cardNumber
  let arr = props.formData.cardNumber.split('')

  arr.forEach((element, index) => {
    if (index > 4 && index < 14 && element.trim() !== '') {
      arr[index] = '*'
    }
  })

  props.formData.cardNumber = arr.join('')
}

export const unMaskCardNumber = ({ props, state }) => () => {
  props.formData.cardNumber = state.mainCardNumber
}

export const focusCardNumber = (api) => () => {
  api.unMaskCardNumber()
}

export const toggleMask = ({ api, state }) => () => {
  state.isCardNumberMasked = !state.isCardNumberMasked

  if (state.isCardNumberMasked) {
    api.maskCardNumber()
  } else {
    api.unMaskCardNumber()
  }
}
