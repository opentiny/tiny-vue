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

import { isNumber } from '@opentiny/vue-renderless/common/type'

export const computedShowHeader = ({ constants, props }) => () => props.pattern !== constants.SIMPLE

export const computedShowFooter = ({ constants, props }) => () => props.pattern === constants.LEGEND || props.pattern === constants.CLASSIC

export const computedShowAside = ({ constants, props }) => () => props.pattern !== constants.CLASSIC

const transferWidthOrHeight = (value) => (isNumber(value) ? value + 'px' : value)

export const computedHeaderStyle = ({ constants, props }) => () => {
  if (props.pattern === constants.FASHION) {
    return {
      height: transferWidthOrHeight(props.headerHeight),
      left: transferWidthOrHeight(props.asideWidth)
    }
  }

  return {
    height: transferWidthOrHeight(props.headerHeight)
  }
}

export const computedAsideStyle = ({ constants, props }) => () => {
  if (props.pattern === constants.SIMPLE || props.pattern === constants.FASHION) {
    return {
      top: transferWidthOrHeight(0),
      width: transferWidthOrHeight(props.asideWidth)
    }
  }

  return {
    width: transferWidthOrHeight(props.asideWidth),
    top: transferWidthOrHeight(props.headerHeight)
  }
}

export const computedMainStyle = ({ constants, props }) => () => {
  if (props.pattern === constants.DEFAULT || props.pattern === constants.FASHION) {
    return {
      top: transferWidthOrHeight(props.headerHeight),
      left: transferWidthOrHeight(props.asideWidth),
      bottom: transferWidthOrHeight(0)
    }
  }

  if (props.pattern === constants.LEGEND) {
    return {
      top: transferWidthOrHeight(props.headerHeight),
      left: transferWidthOrHeight(props.asideWidth),
      bottom: transferWidthOrHeight(props.footerHeight)
    }
  }

  if (props.pattern === constants.SIMPLE) {
    return {
      top: transferWidthOrHeight(0),
      left: transferWidthOrHeight(props.asideWidth),
      bottom: transferWidthOrHeight(0)
    }
  }

  if (props.pattern === constants.CLASSIC) {
    return {
      top: transferWidthOrHeight(props.headerHeight),
      left: transferWidthOrHeight(0),
      bottom: transferWidthOrHeight(props.footerHeight)
    }
  }
}

export const computedFooterStyle = ({ constants, props }) => () => {
  if (props.pattern === constants.CLASSIC) {
    return {
      height: transferWidthOrHeight(props.footerHeight),
      left: transferWidthOrHeight(0)
    }
  } else if (props.pattern === constants.LEGEND) {
    return {
      height: transferWidthOrHeight(props.footerHeight),
      left: transferWidthOrHeight(props.asideWidth)
    }
  }

  return {
    height: transferWidthOrHeight(props.footerHeight)
  }
}
