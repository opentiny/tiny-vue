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

const horizontal = {
  key: 'horizontal',
  offset: 'offsetWidth',
  scroll: 'scrollLeft',
  scrollSize: 'scrollWidth',
  size: 'width',
  axis: 'X',
  client: 'clientX',
  direction: 'left'
}

const vertical = {
  key: 'vertical',
  offset: 'offsetHeight',
  scroll: 'scrollTop',
  scrollSize: 'scrollHeight',
  size: 'height',
  axis: 'Y',
  client: 'clientY',
  direction: 'top'
}

export const BAR_MAP = {
  horizontal,
  vertical
}

export const renderThumbStyle = ({ bar, move, size }) => {
  const style = {}
  const translate = `translate${bar.axis}(${move}%)`

  style[bar.size] = size

  Object.assign(style, { transform: translate, msTransform: translate, webkitTransform: translate })

  return style
}

export const clickThumbHandler =
  ({ api, state }) =>
  (event) => {
    if (event.ctrlKey || event.button === 2) {
      return
    }

    api.startDrag(event)

    state[state.bar.axis] =
      event.currentTarget[state.bar.offset] -
      (event[state.bar.client] - event.currentTarget.getBoundingClientRect()[state.bar.direction])
  }

export const clickTrackHandler =
  ({ vm, state }) =>
  (event) => {
    const offset = Math.abs(event.target.getBoundingClientRect()[state.bar.direction] - event[state.bar.client])

    const thumbHalf = vm.$refs.thumb[state.bar.offset] / 2
    const thumbPositionPercentage = ((offset - thumbHalf) * 100) / vm.$refs.bar[state.bar.offset]

    state.wrap[state.bar.scroll] = (thumbPositionPercentage * state.wrap[state.bar.scrollSize]) / 100
  }

export const startDrag =
  ({ api, on, state }) =>
  (event) => {
    event.stopImmediatePropagation()

    state.cursorDown = true

    on(document, 'mousemove', api.mouseMoveDocumentHandler)
    on(document, 'mouseup', api.mouseUpDocumentHandler)

    document.onselectstart = () => false
  }

export const mouseMoveDocumentHandler =
  ({ vm, state }) =>
  (event) => {
    if (state.cursorDown === false) {
      return
    }

    const prevPage = state[state.bar.axis]

    if (!prevPage) {
      return
    }

    const offset = (vm.$refs.bar.getBoundingClientRect()[state.bar.direction] - event[state.bar.client]) * -1

    const thumbClickPosition = vm.$refs.thumb[state.bar.offset] - prevPage
    const thumbPositionPercentage = ((offset - thumbClickPosition) * 100) / vm.$refs.bar[state.bar.offset]

    state.wrap[state.bar.scroll] = (thumbPositionPercentage * state.wrap[state.bar.scrollSize]) / 100
  }

export const mouseUpDocumentHandler =
  ({ api, off, state }) =>
  () => {
    state.cursorDown = false
    state[state.bar.axis] = 0
    off(document, 'mousemove', api.mouseMoveDocumentHandler)
    document.onselectstart = null
  }

export const handleScroll =
  ({ vm, state, emit }) =>
  (event) => {
    const wrap = vm.$refs.wrap

    state.moveY = (wrap.scrollTop * 100) / wrap.clientHeight
    state.moveX = (wrap.scrollLeft * 100) / wrap.clientWidth

    emit('scroll', event)
  }

export const update =
  ({ vm, state }) =>
  () => {
    let heightPercentage, widthPercentage
    const wrap = vm.$refs.wrap

    if (!wrap) {
      return
    }

    heightPercentage = (wrap.clientHeight * 100) / wrap.scrollHeight
    widthPercentage = (wrap.clientWidth * 100) / wrap.scrollWidth

    state.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : ''
    state.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : ''
  }
