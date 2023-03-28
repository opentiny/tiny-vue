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

export const computedClassName = ({ flex, justify, align }) => {
  const className = []

  if (flex) {
    className.push('row-flex')
    className.push(`row-justify-${justify}`)
    className.push(`row-align-${align}`)
  }

  return className.join(' ')
}

export const computedStyle = (gutter) => {
  const value = gutter ? -(gutter / 2) : 0

  return value ? { marginLeft: value + 'px', marginRight: value + 'px' } : {}
}
