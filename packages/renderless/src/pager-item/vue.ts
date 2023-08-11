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

import { getPages, onPagerClick, onMouseenter } from './index'

export const api = ['state', 'onPagerClick', 'onMouseenter']

export const renderless = (props, { computed, reactive, watch }, { emit, vm }) => {
  const api = {
    onPagerClick: onPagerClick({ emit, props, vm })
  }

  const state = reactive({
    current: null,
    showPrevMore: false,
    showNextMore: false,
    quicknextIconClass: props.popupIcon,
    quickprevIconClass: props.popupIcon,
    pagers: computed(() => api.getPages())
  })

  Object.assign(api, {
    state,
    getPages: getPages({ props, state }),
    onMouseenter: onMouseenter({ props, state })
  })

  watch(
    () => state.showPrevMore,
    (value) => {
      if (!value) {
        state.quickprevIconClass = props.popupIcon
      }
    },
    { immediate: true }
  )

  watch(
    () => state.showNextMore,
    (value) => {
      if (!value) {
        state.quicknextIconClass = props.popupIcon
      }
    },
    { immediate: true }
  )

  return api
}
