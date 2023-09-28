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

import { onDragOver, onDrop, watchDragover } from './index'

export const api = ['state', 'onDragOver', 'onDrop']

export const renderless = (props, { inject, reactive, ref, watch }, { emit }) => {
  const state = reactive({
    dragover: false,
    uploader: inject('uploader') || ref({ default: '' })
  })

  const constants = state.uploader.$constants || {}

  const api = {
    state,
    onDragOver: onDragOver({ props, state }),
    onDrop: onDrop({ emit, props, state }),
    watchDragover: watchDragover({ state, constants })
  }

  watch(
    () => state.dragover,
    () => api.watchDragover()
  )

  return api
}
