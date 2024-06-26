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

import {
  processIndex,
  calculateTranslate,
  translateItem,
  handleItemClick,
  computedTransform,
  resetAnimatingMf,
  setDelta
} from './index'

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
  'handleItemClick',
  'resetAnimatingMf',
  'setDelta'
]

export const renderless = (
  props,
  { computed, onMounted, onUnmounted, reactive, inject },
  { parent, dispatch, mode, vm }
) => {
  const api = {}
  const CARD_SCALE = parent.$constants.CARD_SCALE
  const TYPE_VERTICAL = parent.$constants.TYPE_VERTICAL

  const carouselParent = inject('CarouselVm')

  const state = reactive({
    scale: 1,
    translate: 0,
    hover: false,
    ready: false,
    active: false,
    inStage: false,
    animating: false,
    animatingMf: false,
    isOblique: false,
    carouselParent,
    hasTitle: computed(() => !!props.title),
    moving: computed(() => carouselParent.state.moving),
    animate: computed(() => (Math.abs(carouselParent.state.delta) > 0 ? !state.animatingMf : state.animating)),
    getTransform: computed(() => api.computedTransform()),
    delta: 0
  })

  Object.assign(api, {
    state,
    processIndex,
    handleItemClick: handleItemClick({ state, parent, carouselParent }),
    computedTransform: computedTransform({ carouselParent, TYPE_VERTICAL, mode, state }),
    calculateTranslate: calculateTranslate({ CARD_SCALE, state }),
    translateItem: translateItem({ api, CARD_SCALE, parent, state, carouselParent }),
    setDelta: setDelta({ state }),
    resetAnimatingMf: resetAnimatingMf(state)
  })

  onMounted(() => {
    // 向父组件提交 updateItems 事件
    dispatch('Carousel', 'updateItems', [vm])
    // 向父组件提交 complete 事件
    dispatch('Carousel', 'complete', [])
  })

  onUnmounted(() => {
    carouselParent && carouselParent.updateItems()
  })

  return api
}
