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

import { getWidth, getMinHeight, getHorizontalWidth, getHorizontalLeft, handleClick, mouseEnter } from './index'

export const api = ['state', 'handleClick', 'mouseEnter']

export const renderless = (props, { reactive, provide, computed }, { emit }) => {
  const state = reactive({
    groupSize: props.groupSize,
    list: props.list,
    width: computed(() => api.getWidth()),
    minHeight: computed(() => api.getMinHeight()),
    horizontalWidth: computed(() => api.getHorizontalWidth()),
    horizontalLeft: computed(() => api.getHorizontalLeft())
  })

  const api = {
    state,
    getWidth: getWidth(props),
    getMinHeight: getMinHeight(props),
    getHorizontalWidth: getHorizontalWidth(props),
    getHorizontalLeft: getHorizontalLeft(props),
    handleClick: handleClick(emit),
    mouseEnter: mouseEnter(emit)
  }

  provide('groupSize', state.groupSize)

  provide('color', props.color)

  provide('backgroundColor', props.backgroundColor)

  return api
}
