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

import { extend, copyArray } from '../../common/object'
import { isObject, typeOf as getType, isNull } from '../../common/type'
import _debounce from '../../common/deps/debounce'
import _numerify from './numerify'
import { escapeHtml } from '../../common/string'
import { xss } from '../../common'

export { setObj as set, getObj as get, isEqual } from '../../common/object'

export { typeOf as getType, isObject } from '../../common/type'

export const debounce = (callback, delay) => _debounce(delay, false, callback)

export const camelToKebab = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

export const cloneDeep = (data) => {
  if (isObject(data)) {
    return extend(true, data)
  } else if (Array.isArray(data)) {
    return copyArray(data)
  } else {
    return data
  }
}

export const getFormated = (value, type, digit, defaultVal = '-') => {
  if (isNaN(value)) {
    return defaultVal
  }

  if (!type) {
    return value
  }

  if (getType(type) === 'function') {
    return type(value, _numerify)
  }

  digit = !isNaN(digit) ? ++digit : 0

  const digitStr = `.[${new Array(digit).join(0)}]`
  let formatter = type

  if (type === 'KMB') {
    formatter = digit ? `0,0${digitStr}a` : '0,0a'
  } else if (type === 'normal') {
    formatter = digit ? `0,0${digitStr}` : '0,0'
  } else if (type === 'percent') {
    formatter = digit ? `0,0${digitStr}%` : '0,0.[00]%'
  }
  return _numerify(value, formatter)
}

export const getStackMap = (stack) => {
  const result = {}

  Object.keys(stack).forEach((item) => {
    stack[item].forEach((name) => {
      result[name] = item
    })
  })

  return result
}

export const $get = (url) =>
  new Promise((resolve, reject) => {
    const http = new XMLHttpRequest()

    url = xss.filterUrl(url)
    http.open('GET', url)
    http.send(null)

    http.onload = () => {
      resolve(JSON.parse(http.responseText))
    }

    http.onerror = () => {
      reject(JSON.parse(http.responseText))
    }
  })

const mapPromise = {}

export const getMapJSON = ({ position, positionJsonLink, beforeRegisterMapOnce, mapURLProfix = '' }) => {
  const link = positionJsonLink || `${mapURLProfix}${position}.json`

  if (!mapPromise[link]) {
    mapPromise[link] = $get(link).then((res) => {
      if (beforeRegisterMapOnce) {
        res = beforeRegisterMapOnce(res)
      }

      return res
    })
  }

  return mapPromise[link]
}

let { amapPromise = null, bmapPromise = null } = {}

export const getAmap = ({ key, version, url }) => {
  if (!amapPromise) {
    amapPromise = new Promise((resolve) => {
      let cbName = 'amap' + Date.now()
      let script = document.createElement('script')
      let ver = version || '1.4.3'

      window[cbName] = resolve
      script.src = [`${url}?v=${ver}`, `key=${key}`, `callback=${cbName}`].join('&')

      document.body.appendChild(script)
    })
  }

  return amapPromise
}

export const getBmap = ({ key, version, url }) => {
  if (!bmapPromise) {
    bmapPromise = new Promise((resolve) => {
      let cbName = 'bmap' + Date.now()
      let script = document.createElement('script')
      let ver = version || '2.0'

      window[cbName] = resolve
      script.src = [`${url}?v=${ver}`, `ak=${key}`, `callback=${cbName}`].join('&')

      document.body.appendChild(script)
    })
  }

  return bmapPromise
}

export const setArrayValue = (arr, index, value) => {
  let store = arr[index]

  if (typeof store === 'undefined') {
    arr[index] = [value]
    return
  }

  store.push(value)
}

export const numerify = _numerify

// 合并对象或数组
export const merge = (source, other) => {
  if (typeof source !== 'object' || typeof other !== 'object') {
    return other === undefined ? source : other
  }

  return Object.keys({ ...source, ...other }).reduce(
    (acc, key) => {
      acc[key] = merge(source[key], other[key])
      return acc
    },
    Array.isArray(source) ? [] : {}
  )
}

export const htmlHandler = (data) => {
  if (!data || !Array.isArray(data)) {
    return data
  }

  return cloneDeep(data).map((item) => {
    if (typeof item === 'string' && /<[a-z]+/i.test(item)) {
      return escapeHtml(item)
    } else if (typeof item === 'object') {
      for (let key in item) {
        if (typeof item[key] === 'string' && /<[a-z]+/i.test(item[key])) {
          item[key] = escapeHtml(item[key])
        }
      }

      return item
    } else {
      return item
    }
  })
}

export const getLegend = (args, legendItemStyle) => {
  const { metrics, legendName, labelMap } = args

  if (!labelMap && !legendName) {
    return { data: metrics }
  }

  const data = labelMap ? metrics.map((item) => (isNull(labelMap[item]) ? item : labelMap[item])) : metrics

  return {
    ...legendItemStyle,
    data,
    formatter(name) {
      return isNull(legendName[name]) ? name : legendName[name]
    }
  }
}

export const hexToRgb = (hex) => {
  const reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})/
  if (!reg.test(hex)) {
    return
  }

  hex = hex.replace(/#/g, '').toLowerCase()
  let len = hex.length
  if (len === 3) {
    let t = ''
    for (let i = 0; i < len; i++) {
      t += hex.slice(i, i + 1).concat(hex.slice(i, i + 1))
    }
    hex = t
  }

  const rgbs = []
  for (let i = 0; i < 6; i += 2) {
    let s = hex.slice(i, i + 2)
    rgbs.push(parseInt(s, 16))
  }

  return rgbs.join(',')
}
