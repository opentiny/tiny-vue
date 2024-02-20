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

export const toString = Object.prototype.toString
export const hasOwn = Object.prototype.hasOwnProperty

const getProto = Object.getPrototypeOf
const fnToString = hasOwn.toString
const ObjectFunctionString = fnToString.call(Object)

const class2type = {
  '[object Error]': 'error',
  '[object Object]': 'object',
  '[object RegExp]': 'regExp',
  '[object Date]': 'date',
  '[object Array]': 'array',
  '[object Function]': 'function',
  '[object AsyncFunction]': 'asyncFunction',
  '[object String]': 'string',
  '[object Number]': 'number',
  '[object Boolean]': 'boolean'
}

/** 判断是否为 null / undefined */
export const isNull = (x: any) => x === null || x === undefined

/**
 * 返回 JavaScript 对象的类型。
 *
 * 如果对象是 undefined 或 null，则返回相应的'undefined'或'null'。
 *
 * 其他一切都将返回它的类型'object'。
 *
 *     typeOf( undefined ) === 'undefined'
 *     typeOf() === 'undefined'
 *     typeOf( window.notDefined ) === 'undefined'
 *     typeOf( null ) === 'null'
 *     typeOf( true ) === 'boolean'
 *     typeOf( 3 ) === 'number'
 *     typeOf( "test" ) === 'string'
 *     typeOf( function (){} ) === 'function'
 *     typeOf( [] ) === 'array'
 *     typeOf( new Date() ) === 'date'
 *     typeOf( new Error() ) === 'error'
 *     typeOf( /test/ ) === 'regExp'
 *
 */
export const typeOf: (obj: any) => string = (obj) =>
  isNull(obj) ? String(obj) : class2type[toString.call(obj)] || 'object'

/**
 * 判断对象是否为 object 类型。
 *
 *     isObject({}) // true
 */
export const isObject = (obj: any) => typeOf(obj) === 'object'

/**
 * 判断对象是否为 function 类型。
 *
 *     isObject(function (){) // true

 */
export const isFunction = (fn: any) => ['asyncFunction', 'function'].includes(typeOf(fn))

/**
 * 判断对象是否为简单对象。
 *
 * 即不是 HTML 节点对象，也不是 window 对象，而是纯粹的对象（通过 '{}' 或者 'new Object' 创建的）。
 *
 *     let obj = {}
 *     isPlainObject(obj) //true
 */
export const isPlainObject = (obj: any) => {
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false
  }

  const proto = getProto(obj)
  if (!proto) {
    return true
  }

  const Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
}

/**
 * 检查对象是否为空（不包含任何属性）。
 *
 *     let obj = {}
 *     isEmptyObject(obj) // true
 */
export const isEmptyObject = (obj: any) => {
  const type = typeOf(obj)

  if (type === 'object' || type === 'array') {
    for (const name in obj) {
      if (hasOwn.call(obj, name)) {
        return false
      }
    }
  }

  return true
}

/**
 * 判断对象是否为数字类型。
 *
 *     isNumber(369) // true
 */
export const isNumber = (value: any) => typeof value === 'number' && isFinite(value)

/**
 * 判断对象是否代表一个数值。
 *
 *     isNumeric('-10')     // true
 *     isNumeric(16)        // true
 *     isNumeric(0xFF)      // true
 *     isNumeric('0xFF')    // true
 *     isNumeric('8e5')     // true
 *     isNumeric(3.1415)    // true
 *     isNumeric(+10)       // true
 *     isNumeric('')        // false
 *     isNumeric({})        // false
 *     isNumeric(NaN)       // false
 *     isNumeric(null)      // false
 *     isNumeric(true)      // false
 *     isNumeric(Infinity)  // false
 *     isNumeric(undefined) // false
 */
export const isNumeric = (value: any) => value - parseFloat(value) >= 0

/**
 * 判断对象是否为日期类型。
 *
 *     let date = new Date()
 *     isDate(date)  // true
 */
export const isDate = (value) => typeOf(value) === 'date'

/**
 * 判断两个值是否值相同且类型相同。
 *
 * 注：在 JavaScript 里 NaN === NaN 为 false，因此不能简单的用 === 来判断。
 *
 *     isSame(1, 1)     // true
 *     isSame(NaN, NaN) // true
 */
export const isSame = (x: any, y: any) =>
  x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))

/** 判断是否是正则表达式 */
export const isRegExp = (value: any) => typeOf(value) === 'regExp'
