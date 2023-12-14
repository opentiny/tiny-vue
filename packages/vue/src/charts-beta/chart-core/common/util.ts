import { typeOf as getType, isObject } from './type'
import { copyArray } from './object'

import _numerify from './numerify'

export { setObj as set, getObj as get } from './object'

export const $prefix = 'Tiny'

export function toUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getFormatted = (value, type, digit, defaultVal = '-') => {
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

export const cloneDeep = (data) => {
  if (isObject(data)) {
    return extend(true, data)
  } else if (Array.isArray(data)) {
    return copyArray(data)
  } else {
    return data
  }
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
