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

import { set, isObject, merge } from '../deps/utils'

const isArr = Array.isArray

export default ({ options, extend }) => {
  if (!extend) {
    return
  }

  Object.keys(extend).forEach((key) => {
    const value = extend[key]

    if (~key.indexOf('.')) {
      set(options, key, value)
    } else if (typeof value === 'function') {
      options[key] = value(options[key])
    } else if (isArr(options[key]) && isArr(value)) {
      const attrList = [
        'series',
        'yAxis',
        'xAxis',
        'color',
        'dataZoom',
        'legend',
        'toolbox',
        'grid',
        'graphic',
        'timeline',
        'visualMap',
        'brush'
      ]
      if (~attrList.indexOf(key)) {
        options[key] = merge(options[key], value)
      }
    } else {
      if (isArr(options[key]) && isObject(options[key][0])) {
        options[key].forEach((option, i) => (options[key][i] = { ...option, ...value }))
      } else if (isObject(options[key])) {
        let optionBase = options[key]

        options[key] = { ...optionBase, ...value }
      } else {
        options[key] = value
      }
    }
  })
}
