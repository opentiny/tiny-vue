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

const MIN_DISTANCE = 10

export const getDirection = (x, y) => {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal'
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical'
  }

  return ''
}

export const touchStart = (state) => (event) => {
  resetTouchStatus(state)

  state.startX = event.touches[0].clientX
  state.startY = event.touches[0].clientY
}

export const touchMove = (state) => (event) => {
  const touch = event.touches[0]

  state.deltaX = touch.clientX - state.startX
  state.deltaY = touch.clientY - state.startY
  state.offsetX = Math.abs(state.deltaX)
  state.offsetY = Math.abs(state.deltaY)

  state.direction = state.direction || getDirection(state.offsetX, state.offsetY)
}

export const resetTouchStatus = (state) => {
  state.direction = ''
  state.deltaX = 0
  state.deltaY = 0
  state.offsetX = 0
  state.offsetY = 0
}
