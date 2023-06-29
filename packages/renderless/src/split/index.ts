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

export const px2percent = ({ numerator, denominator }) => parseFloat(numerator) / parseFloat(denominator)

export const getComputedThresholdValue =
  ({ api, props, refs, state }) =>
  (type) => {
    const size = refs.outerWrapper[state.offsetSize]

    if (state.valueIsPx) {
      return typeof props[type] === 'string' ? props[type] : size * props[type]
    } else {
      return typeof props[type] === 'string'
        ? api.px2percent({ numerator: props[type], denominator: size })
        : props[type]
    }
  }

export const getleftTopMin =
  (state) =>
  ({ oldvalue, newvalue }) =>
    state.valueIsPx ? `${Math.min(parseFloat(oldvalue), parseFloat(newvalue))}px` : Math.min(oldvalue, newvalue)

export const getrightBottomMin =
  (state) =>
  ({ oldvalue, newvalue }) =>
    state.valueIsPx ? `${Math.max(parseFloat(oldvalue), parseFloat(newvalue))}px` : Math.max(oldvalue, newvalue)

export const getAnotherOffset =
  ({ refs, state }) =>
  (value) =>
    state.valueIsPx ? `${refs.outerWrapper[state.offsetSize] - parseFloat(value)}px` : 1 - value

export const handleMove =
  ({ api, emit, props, refs, state }) =>
  (event) => {
    const pageOffset = state.isHorizontal ? event.pageX : event.pageY
    const offset = pageOffset - state.initOffset
    const outerWidth = refs.outerWrapper[state.offsetSize]

    let value = state.valueIsPx
      ? `${parseFloat(state.oldOffset) + offset}px`
      : api.px2percent({ numerator: outerWidth * state.oldOffset + offset, denominator: outerWidth })

    const anotherValue = api.getAnotherOffset(value)

    if (parseFloat(value) <= parseFloat(state.computedleftTopMin)) {
      value = api.getrightBottomMin({
        oldvalue: value,
        newvalue: state.computedleftTopMin
      })
    }

    if (parseFloat(anotherValue) <= parseFloat(state.computedrightBottomMin)) {
      value = api.getAnotherOffset(
        api.getrightBottomMin({
          oldvalue: anotherValue,
          newvalue: state.computedrightBottomMin
        })
      )
    }

    event.atMin = props.modelValue === state.computedleftTopMin
    event.atMax = state.valueIsPx
      ? api.getAnotherOffset(props.modelValue) === state.computedrightBottomMin
      : api.getAnotherOffset(props.modelValue).toFixed(5) === state.computedrightBottomMin.toFixed(5)

    emit('update:modelValue', value)
    emit('moving', event)
  }

export const handleUp =
  ({ api, emit, off, state }) =>
  () => {
    state.isMoving = false

    off(document, 'mousemove', api.handleMove)
    off(document, 'mouseup', api.handleUp)

    emit('moveend')
  }

export const handleMousedown =
  ({ api, emit, on, props, state }) =>
  (event) => {
    if (state.collapsed) return

    state.initOffset = state.isHorizontal ? event.pageX : event.pageY
    state.oldOffset = props.modelValue
    state.isMoving = true

    on(document, 'mousemove', api.handleMove)
    on(document, 'mouseup', api.handleUp)

    emit('movestart')
  }

export const computeOffset =
  ({ api, nextTick, props, refs, state }) =>
  () => {
    if (state.valueIsPx) {
      nextTick(() => {
        state.offset =
          (api.px2percent({
            numerator: props.modelValue,
            denominator: refs.outerWrapper && refs.outerWrapper[state.offsetSize]
          }) *
            10000) /
          100
      })
    } else {
      state.offset = (props.modelValue * 10000) / 100
    }
  }

export const handleCollapse =
  ({ emit, state }) =>
  () => {
    state.collapsed = !state.collapsed
    emit('collapsedChange', state.collapsed)
  }
