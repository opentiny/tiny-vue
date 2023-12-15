export function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}

export const isObject = (value) => value !== null && typeof value === 'object'

export const isFunction = (value) => typeof value === 'function'

export const isString = (value) => typeof value === 'string'

export const isBoolean = (value) => typeof value === 'boolean'

export const isNumber = (value) => typeof value === 'number'

export const isUndef = (value) => typeof value === 'undefined'

export const isDOM =
  typeof HTMLElement === 'object'
    ? function (dom) {
        return dom instanceof HTMLElement
      }
    : function (dom) {
        return dom && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string'
      }

export const toArray = (value) => {
  if (!isArray(value)) {
    return [value]
  } else {
    return value
  }
}
