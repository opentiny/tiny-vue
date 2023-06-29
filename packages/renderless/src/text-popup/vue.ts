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

import { computedWidth, watchValue, mounted, onFocus, onBlur, onInput, separteText, jointText } from './index'

export const api = ['state', 'onFocus', 'onBlur', 'onInput']

export const renderless = (props, { computed, onMounted, reactive, watch, inject }, { emit, nextTick, refs }) => {
  const api = {}
  const state = reactive({
    showAutoWidth: inject('showAutoWidth', null),
    type: 'input',
    textAreaValue: '',
    text: null,
    popup: null,
    width: computed(() => api.computedWidth())
  })

  Object.assign(api, {
    state,
    jointText,
    separteText,
    computedWidth: computedWidth({ props }),
    mounted: mounted({ props, refs, state }),
    onInput: onInput({ api, emit, props }),
    watchValue: watchValue({ api, props, state }),
    onBlur: onBlur({ api, emit, props, state }),
    onFocus: onFocus({ api, emit, props, nextTick, state })
  })

  watch(() => props.modelValue, api.watchValue, { immediate: true })

  onMounted(api.mounted)

  return api
}
