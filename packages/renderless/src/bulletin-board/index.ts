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

import { xss } from '../common/xss.js'

export const getRoute = (route) => `/${route || ''}`.replace(/^\/+/, '/')

export const computedDataList =
  ({ props, state }) =>
  () => {
    const list = props.data[Number(state.actName) - 1] || []

    list.forEach((subItem) => {
      subItem.url = xss.filterUrl(subItem.url)
    })

    return list
  }

export const computedMoreLink =
  ({ props }) =>
  () => {
    if (props.moreLink) {
      props.moreLink.url = xss.filterUrl(props.moreLink.url)
    }
    return props.moreLink
  }
