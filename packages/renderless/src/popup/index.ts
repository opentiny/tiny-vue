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

import { on, off } from '../common/deps/dom'
import { touchStart, touchMove } from '../common/deps/touch'
import { getScroller } from '../dropdown-menu'
import { isNull } from '../common/type'

export const getStyle = (props) => () => {
  const style = { ...props.popupStyle }

  if (!isNull(props.duration)) {
    const key = props.position === 'center' ? 'animationDuration' : 'transitionDuration'

    style[key] = `${props.duration}s`
  }

  return style
}

export const watchValue = (api) => (value) => {
  const type = value ? 'open' : 'close'
  api[type]()
}

export const open =
  ({ api, constants, emit, props, state }) =>
  () => {
    if (state.opened) {
      return
    }

    if (props.zIndex !== undefined) {
      state.context.zIndex = props.zIndex
    }

    api.renderOverlay()

    state.opened = true

    emit('open')

    if (props.lockScroll) {
      on(document, 'touchstart', touchStart)
      on(document, 'touchmove', api.onTouchMove)

      if (!state.context.lockCount) {
        document.body.classList.add(constants.OVERFLOWHIDDEN)
      }

      state.context.lockCount++
    }
  }

export const close =
  ({ api, constants, emit, props, state }) =>
  () => {
    if (!state.opened) {
      return
    }

    if (props.lockScroll) {
      state.context.lockCount--

      off(document, 'touchstart', touchStart)
      off(document, 'touchmove', api.onTouchMove)

      if (!state.context.lockCount) {
        document.body.classList.remove(constants.OVERFLOWHIDDEN)
      }
    }

    state.opened = false

    emit('update:modelValue', false)
    emit('close')
  }

export const onTouchMove =
  ({ refs, state }) =>
  (event) => {
    touchMove(event)

    const direction = state.deltaY > 0 ? '10' : '01'
    const el = getScroller()(event.target, refs.$el)
    const { scrollHeight, offsetHeight, scrollTop } = el
    let status = '11'

    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01'
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = '10'
    }

    if (status !== '11' && state.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
      event.preventDefault()
    }
  }

export const renderOverlay =
  ({ api, nextTick, props, state }) =>
  () => {
    if (!props.modelValue) {
      return
    }

    nextTick(() => {
      api.updateZIndex(props.overlay ? 1 : 0)

      if (props.overlay) {
        state.zIndex = state.context.zIndex++
      }
    })
  }

export const updateZIndex =
  ({ refs, state }) =>
  (value = 0) =>
    (refs.popup.style.zIndex = ++state.context.zIndex + value)

export const clickOverlay =
  ({ api, props, emit }) =>
  () => {
    if (props.closeOnClickOverlay) {
      api.close()
      emit('click-overlay')
    }
  }

export const closed = (emit) => () => emit('closed')

export const opened = (emit) => () => emit('opened')
