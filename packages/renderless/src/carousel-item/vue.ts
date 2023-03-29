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

import { processIndex, calculateTranslate, translateItem, handleItemClick, computedTransform } from './index'

export const api = [
  'state',
  'hover',
  'translate',
  'scale',
  'active',
  'ready',
  'inStage',
  'animating',
  'isOblique',
  'hasTitle',
  'getTransform',
  'processIndex',
  'calculateTranslate',
  'translateItem',
  'handleItemClick'
]

export const renderless = (props, { computed, onMounted, onUnmounted, reactive }, { parent, dispatch }) => {
  const api = {}
  const CARD_SCALE = parent.$constants.CARD_SCALE
  const TYPE_VERTICAL = parent.$constants.TYPE_VERTICAL

  const state = reactive({
    scale: 1,
    translate: 0,
    hover: false,
    ready: false,
    active: false,
    inStage: false,
    animating: false,
    isOblique: false,
    carouselParent: parent.$parent,
    hasTitle: computed(() => !!props.title),
    getTransform: computed(() => api.computedTransform(state))
  })

  Object.assign(api, {
    state,
    processIndex,
    handleItemClick: handleItemClick(parent),
    computedTransform: computedTransform({ parent, TYPE_VERTICAL }),
    calculateTranslate: calculateTranslate({ CARD_SCALE, state }),
    translateItem: translateItem({ api, CARD_SCALE, parent, state })
  })

  onMounted(() => {
    dispatch('Carousel', 'updateItems', [])
    dispatch('Carousel', 'complete', [])
  })

  onUnmounted(() => {
    parent.$parent && parent.$parent.updateItems()
  })

  return api
}
