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
  generateMonthValue,
  changeName,
  changeNumber,
  changeMonth,
  changeYear,
  changeCvv,
  invaildCard,
  blurCardNumber,
  maskCardNumber,
  unMaskCardNumber,
  focusCardNumber,
  toggleMask,
  handleSubmit
} from './index'

export const api = [
  'state',
  'generateMonthValue',
  'changeName',
  'changeNumber',
  'changeMonth',
  'changeYear',
  'changeCvv',
  'invaildCard',
  'blurCardNumber',
  'maskCardNumber',
  'unMaskCardNumber',
  'focusCardNumber',
  'toggleMask',
  'handleSubmit'
]

const initState = ({ reactive, props, computed }) => {
  const state = reactive({
    fields: {
      cardCvv: 'v-card-cvv',
      cardName: 'v-card-name',
      cardYear: 'v-card-year',
      cardMonth: 'v-card-month',
      cardNumber: 'v-card-number'
    },
    minCardYear: new Date().getFullYear(),
    isCardNumberMasked: true,
    mainCardNumber: props.formData.cardNumber,
    cardNumberMaxLength: 19,
    cardMonth: props.formData.cardMonth,
    cardYear: props.formData.cardYear,
    formData: props.formData,
    minCardMonth: computed(() => (props.formData.cardYear === state.minCardYear ? new Date().getMonth() + 1 : 1))
  })

  return state
}

const initApi = ({ api, state, emit, props }) => {
  Object.assign(api, {
    state,
    generateMonthValue,
    changeCvv: changeCvv({ emit, state }),
    changeYear: changeYear({ emit, state }),
    changeName: changeName({ emit, state }),
    invaildCard: invaildCard(props),
    changeMonth: changeMonth({ emit, state }),
    changeNumber: changeNumber({ emit, state }),
    maskCardNumber: maskCardNumber({ props, state }),
    unMaskCardNumber: unMaskCardNumber({ props, state }),
    toggleMask: toggleMask({ api, state }),
    handleSubmit: handleSubmit({ api, emit, props, state }),
    blurCardNumber: blurCardNumber({ api, state }),
    focusCardNumber: focusCardNumber(api)
  })
}

const initWatch = ({ watch, state, props, emit }) => {
  watch(
    () => state.cardYear,
    (value) => {
      state.formData.cardYear = value
      emit('update:formData', state.formData)
    }
  )

  watch(
    () => state.formData.cardNumber,
    () => emit('update:formData', state.formData)
  )

  watch(
    () => state.formData.cardName,
    () => emit('update:formData', state.formData)
  )

  watch(
    () => state.formData.cardCvv,
    () => emit('update:formData', state.formData)
  )

  watch(
    () => state.cardMonth,
    (value) => {
      state.formData.cardMonth = value
      emit('update:formData', state.formData)
    }
  )

  watch(
    () => props.formData.cardYear,
    () => {
      if (props.formData.cardMonth < state.minCardMonth) {
        state.cardMonth = ''
      }
    },
    { immediate: true }
  )
}

export const renderless = (props, { computed, onMounted, reactive, watch }, { emit }) => {
  const api = {}
  const state = initState({ reactive, props, computed })

  initApi({ api, state, emit, props })

  onMounted(api.maskCardNumber)

  initWatch({ watch, state, props, emit })

  return api
}
