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

import { handleClick, moreNodeClick, handleChange } from './index'

export const api = ['state', 'handleClick', 'moreNodeClick', 'handleChange']

export const renderless = (props, { computed, reactive, watch, inject }, { emit, parent }) => {
  parent.tinyForm = parent.tinyForm || inject('form', null)

  const state = reactive({
    value: props.modelValue,
    buttonData: props.data?.slice(0, props.showMore) || [],
    moreData: props.data?.slice(props.showMore, props.data.length) || [],
    formDisabled: computed(() => (parent.tinyForm || {}).disabled),
    disabled: computed(() => props.disabled || state.formDisabled),
    attributeValue: computed(() => {
      if (state.disabled) {
        return { disabled: state.disabled }
      }

      return props.plain ? { plain: props.plain } : ''
    })
  })

  watch(
    () => props.modelValue,
    (value) => {
      if (!state.disabled && state.value !== value) {
        state.value = value
      }
    },
    { immediate: true }
  )
  watch(
    () => state.value,
    () => api.handleChange()
  )

  const api = {
    state,
    handleClick: handleClick({ emit, props, state }),
    moreNodeClick: moreNodeClick({ emit, props, state }),
    handleChange: handleChange({ emit, state })
  }

  return api
}
