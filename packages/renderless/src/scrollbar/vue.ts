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

import { handleScroll, update } from './index'
import { addResizeListener, removeResizeListener } from '@opentiny/vue-renderless/common/deps/resize-event'

export const api = ['state', 'update', 'handleScroll']

export const renderless = (props, { onBeforeUnmount, onMounted, reactive }, { refs, nextTick, emit }) => {
  const state = reactive({
    sizeWidth: '0',
    sizeHeight: '0',
    moveX: 0,
    moveY: 0
  })

  const api = {
    state,
    update: update({ refs, state }),
    handleScroll: handleScroll({ refs, state, emit })
  }

  onMounted(() => {
    if (props.native) {
      return
    }

    nextTick(api.update)

    !props.noresize && addResizeListener(refs.resize, api.update)
  })

  onBeforeUnmount(() => {
    if (props.native) {
      return
    }

    !props.noresize && removeResizeListener(refs.resize, api.update)
  })

  return api
}
