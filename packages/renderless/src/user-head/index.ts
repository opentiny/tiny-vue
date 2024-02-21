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

export const computedStyle =
  ({ state, props }) =>
  () => {
    return {
      fill: state.color,
      color: state.color,
      backgroundColor: state.backgroundColor,
      backgroundImage: /^(image)$/.test(props.type) && state.internalValue ? `url(${state.internalValue})` : 'none'
    }
  }

export const computedMessage =
  ({ props }) =>
  () => {
    let result = ''
    const total = Math.floor(props.messageTotal)

    if (props.messageType === 'details' && !isNaN(total) && total > 0) {
      result = total

      if (props.messageUpperLimit && total > props.messageUpperLimit) {
        result = `${props.messageUpperLimit}+`
      }
    }

    return result
  }

export const computedFontSize =
  ({ props, state, mode }) =>
  () => {
    let fontSize = ''

    if (props.type === 'label' && state.label && !props.min) {
      const length = state.label.length
      const sizeMap = {
        1: '40px',
        2: '30px',
        3: '22px',
        4: '20px',
        5: '18px',
        6: '16px'
      }

      const mfsizeMap = {
        1: `${state.size / 1.5}px`,
        2: `${state.size / 3}px`,
        3: `${state.size / 4.5}px`,
        4: `${state.size / 6}px`,
        5: `${state.size / 7.5}px`,
        6: `${state.size / 9}px`
      }

      if (mode === 'mobile-first') {
        fontSize = mfsizeMap[length]
      } else {
        fontSize = sizeMap[length]
      }
    }

    return { fontSize }
  }

export const computedLabel =
  ({ state, props }) =>
  () =>
    props.min ? state.internalValue.substr(0, 2) : state.internalValue.substr(0, 6)

export const getInternalValue =
  ({ props }) =>
  () => {
    if (props.modelValue === null) {
      let result = ''

      if (props.type === 'icon') {
        result = 'icon-user'
      } else if (props.type === 'label') {
        result = 'U'
      }

      return result || props.value
    } else {
      return props.modelValue
    }
  }

export const handleClick = (emit) => (event) => emit('click', event)

export const mouseEnter = (emit) => (event) => emit('mouseenter', event)
