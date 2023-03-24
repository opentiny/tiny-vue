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

import { mousedown, selectItem, keydown } from './index'
import { on, off } from '@opentiny/vue-renderless/common/deps/dom'

export const api = ['state', 'mousedown', 'selectItem']

export const renderless = (props, { onUnmounted, reactive, watch }, { emit }) => {
  const state = reactive({
    hoverValue: ''
  })

  const api = {
    state,
    mousedown,
    selectItem: selectItem({ emit, state }),
    keydown: keydown({ emit, props, state })
  }

  watch(
    () => props.isMemoryStorage,
    (value) => !value && (state.hoverValue = ''),
    { immediate: true }
  )

  onUnmounted(() => {
    state.hoverValue = ''
    off(document, 'keydown', api.keydown)
  })

  on(document, 'keydown', api.keydown)

  return api
}
