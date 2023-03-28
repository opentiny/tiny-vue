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

import { handleScroll, updateAnchorChildren, handleTouchDown, handleTouchMove, handleTouchUp, handleIndexClick } from './index'

export const api = [
  'state',
  'handleIndexClick',
  'handleScroll',
  'updateAnchorChildren',
  'handleTouchDown',
  'handleTouchMove',
  'handleTouchUp',
  'handleIndexClick'
]

export const renderless = (props, { computed, reactive, onMounted, onUnmounted, onUpdated, watch }, { emit, parent, refs }) => {
  const state = reactive({
    index: 0,
    childrenAnchor: [],
    isFistUpdate: true
  })

  const api = {
    state,
    isMouseDown: false,
    handleScroll: handleScroll({ state }),
    updateAnchorChildren: updateAnchorChildren({ emit, parent, refs, state }),
    handleTouchDown: handleTouchDown({ state }),
    handleTouchMove: handleTouchMove({ emit, state }),
    handleTouchUp: handleTouchUp({ state }),
    handleIndexClick: handleIndexClick({ emit, parent, refs, state })
  }

  Object.assign(api, {
    state
  })

  onMounted((e) => {
    window.addEventListener('scroll', api.handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', api.handleScroll)
  })

  watch(
    () => state.index,
    (value, oldValue) => {
      const isChange = value !== oldValue && value >= 0 && value < parent.indexList.length
      if (isChange) {
        emit('change', value)
      }
    },
    { immediate: false }
  )

  watch(
    () => props.indexList,
    () => {
      api.updateAnchorChildren({ refs, state })
    },
    { immediate: false, deep: true }
  )

  onUpdated(() => {
    if (state.isFistUpdate) {
      state.isFistUpdate = false
      api.updateAnchorChildren({ refs, state })
    }
  })

  return api
}
