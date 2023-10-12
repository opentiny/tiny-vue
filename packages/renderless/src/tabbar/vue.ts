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

import { setActiveItem, onChange, getChildrens } from './index'

export const api = ['state', 'onChange', 'getChildrens']

export const renderless = (
  props,
  { computed, onMounted, reactive, watch },
  { refs, emit, nextTick, childrenHandler }
) => {
  const state = reactive({
    height: null,
    children: [],
    fit: computed(() => (props.safeAreaInsetBottom !== null ? props.safeAreaInsetBottom : props.fixed))
  })

  const api = {
    state,
    onChange: onChange({ emit, props }),
    setActiveItem: setActiveItem({ props, state }),
    getChildrens: getChildrens({ childrenHandler })
  }

  onMounted(() => {
    if (props.placeholder && props.fixed) {
      nextTick(() => {
        state.height = refs.tabbar.getBoundingClientRect().height
      })
    }
  })

  watch(() => props.modelValue, api.setActiveItem, { immediate: true })

  watch(() => state.children, api.setActiveItem, { immediate: true, deep: true })

  return api
}
