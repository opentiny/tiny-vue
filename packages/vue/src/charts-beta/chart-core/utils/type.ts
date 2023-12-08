// 判断参数是否是其中之一
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

export function typeOf(obj) {
  const map = {
    '[object Object]': 'object',
    '[object Null]': 'null',
    '[object Date]': 'date',
    '[object Undefined]': 'undefined',
    '[object RegExp]': 'regExp',
    '[object Array]': 'array',
    '[object Function]': 'function',
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object BigInt]': 'bigint'
  }
  const toString = Object.prototype.toString
  return map[toString.call(obj)]
}

/**
 * 判断任意类型的值是否为undefined或者null
 */
export function isNotUndefined(value) {
  return typeof value !== 'undefined' && value !== null
}

export function isUndefined(value) {
  return typeof value === 'undefined' || value === null
}

export const isDefined = (val) => {
  return val !== undefined && val !== null
}