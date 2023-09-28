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

export const switchIndex = (index, state, emit) => {
  if (index === state.index) {
    return
  }
  emit('select', index)
  state.index = index
  if (index < state.childrenAnchor.length) {
    const item = state.childrenAnchor[index]
    document.documentElement.scrollTop = item.offsetTop
  }
}

export const handleTouchDown =
  ({ state }) =>
  () => {
    state.isMouseDown = true
  }

export const handleTouchMove =
  ({ emit, state }) =>
  (e) => {
    console.log(e, state.isMouseDown)
    if (state.isMouseDown && e.target.id) {
      switchIndex(Number(e.target.id), state, emit)
    }
  }

export const handleTouchUp =
  ({ state }) =>
  () => {
    state.isMouseDown = false
  }

export const handleIndexClick =
  ({ emit, state }) =>
  (value) => {
    switchIndex(value.index, state, emit)
  }

export const updateAnchorChildren =
  ({ state, refs }) =>
  () => {
    const node = refs.indexBarContent
    if (node) {
      state.childrenAnchor = []
      getAnchorChildren(node, state)
    }
  }

export const getAnchorChildren = (node, state) => {
  node.childNodes.forEach((ele) => {
    if (ele.className === 'tiny-mobile-index-bar-anchor') {
      state.childrenAnchor.push(ele)
    } else {
      getAnchorChildren(ele, state)
    }
  })
}

export const handleScroll =
  ({ state }) =>
  () => {
    findTopAnchor(state)
  }

export const findTopAnchor = (state) => {
  const scrollTop = document.documentElement.scrollTop
  for (let index = 0; index < state.childrenAnchor.length; index++) {
    const item = state.childrenAnchor[index]
    if (item.offsetTop + item.offsetHeight > scrollTop) {
      state.index = index
      break
    }
  }
}
