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

import { computedFormItemSize, computedCheckboxGroupSize } from './index'

export const api = ['state']

export const renderless = (props, { computed, reactive, watch, provide }, { dispatch, constants }) => {
  const api = {
    computedFormItemSize: computedFormItemSize(props)
  }
  const formItemSize = computed(() => api.computedFormItemSize())

  const state = reactive({
    checkboxGroupSize: computed(() => api.computedCheckboxGroupSize())
  })

  Object.assign(api, {
    state,
    computedCheckboxGroupSize: computedCheckboxGroupSize({ props, formItemSize })
  })

  watch(
    () => props.modelValue,
    (value) => dispatch(constants.FORM_ITEM, constants.FORM_CHANGE, [value])
  )

  provide('size', props.size)

  provide('vertical', props.vertical)

  return api
}
