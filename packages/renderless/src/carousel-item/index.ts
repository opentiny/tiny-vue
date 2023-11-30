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

export const processIndex = ({ activeIndex, index, length }) => {
  if (activeIndex === 0 && index === length - 1) {
    return -1
  } else if (activeIndex === length - 1 && index === 0) {
    return length
  } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
    return length + 1
  } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
    return -2
  }

  return index
}

export const calculateTranslate =
  ({ CARD_SCALE, state }) =>
  ({ activeIndex, index, parentWidth }) => {
    if (state.inStage) {
      return (parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1)) / 4
    } else if (index < activeIndex) {
      return (-(1 + CARD_SCALE) * parentWidth) / 4
    }

    return ((3 + CARD_SCALE) * parentWidth) / 4
  }

export const translateItem =
  ({ api, CARD_SCALE, parent, state }) =>
  ({ activeIndex, index, oldIndex }) => {
    const parentHeight = parent.$parent.$el.offsetHeight
    const parentWidth = parent.$parent.$el.offsetWidth
    const vnode = parent.$parent
    const length = vnode.state.items.length
    const { TYPE_CARD, TYPE_VERTICAL } = parent.$constants

    if (vnode.type !== TYPE_CARD && oldIndex !== undefined) {
      state.animating = index === activeIndex || index === oldIndex
    }

    state.animatingMf = ![activeIndex, oldIndex].includes(index)

    if (index !== activeIndex && length > 2 && vnode.loop) {
      index = api.processIndex({ index, activeIndex, length })
    }

    if (vnode.type === TYPE_CARD) {
      state.inStage = Math.round(Math.abs(index - activeIndex)) <= 1
      state.active = index === activeIndex

      state.translate = api.calculateTranslate({
        index,
        activeIndex,
        parentWidth
      })

      state.scale = state.active ? 1 : CARD_SCALE
    } else {
      state.active = index === activeIndex

      state.translate =
        vnode.type === TYPE_VERTICAL ? parentHeight * (index - activeIndex) : parentWidth * (index - activeIndex)
    }

    state.ready = true
  }

export const handleItemClick =
  ({ state, parent }) =>
  () => {
    const vnode = parent.$parent

    if (vnode && vnode.type === parent.$constants.TYPE_CARD) {
      const index = vnode.state.items.findIndex((item) => item.state.translate === state.translate)
      vnode.setActiveItem(index)
    }
  }

export const computedTransform =
  ({ parent, TYPE_VERTICAL, mode, state }) =>
  () => {
    const TRANSLATE =
      parent.$parent.type === TYPE_VERTICAL
        ? `translateY(${state.translate + state.delta}px) scale(${state.scale})`
        : `translateX(${state.translate + state.delta}px) scale(${state.scale})`
    const style = mode === 'mobile-first' ? { width: '100%', height: '100%' } : {}

    return {
      msTransform: TRANSLATE,
      webkitTransform: TRANSLATE,
      transform: TRANSLATE,
      ...style
    }
  }

export const resetAnimatingMf = (state) => () => {
  state.animatingMf = false
}

export const setDelta =
  ({ state }) =>
  (val) => {
    state.delta = val
  }
