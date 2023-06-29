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
      fill: props.color,
      color: props.color,
      backgroundColor: props.backgroundColor,
      backgroundImage: /^(image)$/.test(props.type) && state.internalValue ? `url(${state.internalValue})` : 'none'
    }
  }

export const computedMessage = (props) => () => {
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
  ({ props, state }) =>
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

      fontSize = sizeMap[length]
    }

    return { fontSize }
  }

export const computedLabel =
  ({ state, props }) =>
  () =>
    props.min ? state.internalValue.substr(0, 2) : state.internalValue.substr(0, 6)

export const getInternalValue = (props) => () => {
  if (!props.modelValue) {
    let result = ''

    if (props.type === 'icon') {
      result = 'icon-user'
    } else if (props.type === 'label') {
      result = 'U'
    }

    return result
  } else {
    return props.modelValue
  }
}

export const computedSize =
  ({ props, state }) =>
  () => {
    let size = props.size

    if (typeof size === 'string') {
      switch (size) {
        case 'large':
          size = 64
          break
        case 'medium':
          size = 40
          break
        case 'small':
          size = 22
          break
        default:
          size = 40
          break
      }
    }
    return size
  }
