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

export const getHorizontalWidth = (props) => () => {
  if (props.showMax) {
    return props.groupSize * 6 + 12 - ((props.groupSize + 2) / 4) * 5
  }
  return props.groupSize * 4 + 8 - ((props.groupSize + 2) / 4) * 3
}

export const getMinHeight = (props) => () => props.groupSize * 2 + 2

export const getWidth = (props) => () => props.groupSize * 2 + 2

export const getHorizontalLeft = (props) => () => (props.groupSize + 2) / 4

export const handleClick = (emit) => (event) => emit('click', event)

export const mouseEnter = (emit) => (event) => emit('mouseenter', event)
