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

import { KEY_CODE } from '../common'
import { on, off } from '../common/deps/dom'
import PopupManager from '../common/deps/popup-manager'

export const startTimer =
  ({ api, state }) =>
  () => {
    if (state.duration > 0) {
      state.timer = setTimeout(() => {
        !state.closed && api.close()
      }, state.duration)
    }
  }

export const clearTimer = (state) => () => {
  clearTimeout(state.timer)
  state.timer = null
}

export const click =
  ({ emit, state }) =>
  () => {
    typeof state.onClick === 'function' && this.onClick()
    emit('click', '')
  }

export const close =
  ({ state, props }) =>
  () => {
    if (!props.beforeClose || (typeof props.beforeClose === 'function' && props.beforeClose())) {
      typeof props.onClose === 'function' && props.onClose()
      state.closed = true
    }
  }

export const watchClosed = (state) => (value) => {
  if (value) {
    state.visible = false
  }
}

export const getTypeClass = (constants) => (state) =>
  state.type && constants[state.type.toUpperCase()] ? `icon-${constants[state.type]}` : ''

export const getOffsetStyle = (state) => {
  const side = {}

  side[state.verticalProperty] = `${state.verticalOffset}px`

  return side
}

export const getZindex = () => PopupManager.nextZIndex()

export const getPositionSide = (state) => (state.position.startsWith('top-') ? 'top' : 'bottom')

export const bindKeyDown =
  ({ api, state }) =>
  (event) => {
    if (event.keyCode === KEY_CODE.Delete || event.keyCode === KEY_CODE.Backspace) {
      api.clearTimer()
    } else if (event.keyCode === KEY_CODE.Escape) {
      !state.closed && api.close()
    } else {
      api.startTimer()
    }
  }

export const bindEvent =
  ({ api, state }) =>
  () => {
    if (state.timer) {
      api.clearTimer()
    }

    api.startTimer()

    on(document, 'keydown', api.bindKeyDown)
  }

export const unBindEvent = (api) => () => off(document, 'keydown', api.bindKeyDown)
