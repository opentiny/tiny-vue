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

/**
 * 获取对象的字符串表示形式
 * 用于类型判断，等同于 Object.prototype.toString
 */
export const toString: () => string = Object.prototype.toString

/**
 * 检查对象是否具有指定的属性
 * 等同于 Object.prototype.hasOwnProperty
 */
export const hasOwn: (prop: PropertyKey) => boolean = Object.prototype.hasOwnProperty

/**
 * 获取对象的原型
 * 等同于 Object.getPrototypeOf
 */
const getProto: <T>(obj: T) => object | null = Object.getPrototypeOf

/**
 * 获取函数的字符串表示
 * 用于判断对象构造函数
 */
const fnToString: () => string = hasOwn.toString

/**
 * Object函数的字符串表示
 * 用于判断纯粹对象
 */
const ObjectFunctionString: string = fnToString.call(Object)

/**
 * 类型映射表
 * 将Object.prototype.toString的结果映射为对应的类型字符串
 */
const class2type: Record<string, string> = {
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

/**
 * 判断值是否为 null 或 undefined
 *
 * @param {any} x - 要检查的值
 * @returns {boolean} - 如果值为null或undefined则返回true，否则返回false
 *
 * @example
 * isNull(null)      // true
 * isNull(undefined) // true
 * isNull(0)         // false
 * isNull('')        // false
 */
export const isNull = (x: any): boolean => x === null || x === undefined

/**
 * 返回 JavaScript 对象的类型。
 *
 * 如果对象是 undefined 或 null，则返回相应的'undefined'或'null'。
 * 其他一切都将返回它的类型字符串表示。
 *
 * @param {any} obj - 要检查类型的对象
 * @returns {string} - 类型的字符串表示
 *
 * @example
 * typeOf(undefined)       // 'undefined'
 * typeOf(null)            // 'null'
 * typeOf(true)            // 'boolean'
 * typeOf(3)               // 'number'
 * typeOf("test")          // 'string'
 * typeOf(function(){})    // 'function'
 * typeOf([])              // 'array'
 * typeOf(new Date())      // 'date'
 * typeOf(new Error())     // 'error'
 * typeOf(/test/)          // 'regExp'
 * typeOf({})              // 'object'
 */
export const typeOf = (obj: any): string => (isNull(obj) ? String(obj) : class2type[toString.call(obj)] || 'object')

/**
 * 判断对象是否为纯粹的对象类型（通过{}或new Object创建的对象）
 *
 * @param {any} obj - 要检查的对象
 * @returns {boolean} - 如果是纯粹的对象类型则返回true，否则返回false
 *
 * @example
 * isObject({})           // true
 * isObject(new Object()) // true
 * isObject([])           // false
 * isObject(null)         // false
 */
export const isObject = (obj: any): boolean => typeOf(obj) === 'object'

/**
 * 判断对象是否为函数类型（包括普通函数和异步函数）
 *
 * @param {any} fn - 要检查的对象
 * @returns {boolean} - 如果是函数类型则返回true，否则返回false
 *
 * @example
 * isFunction(function(){})       // true
 * isFunction(async function(){}) // true
 * isFunction(() => {})           // true
 * isFunction({})                 // false
 */
export const isFunction = (fn: any): boolean => ['asyncFunction', 'function'].includes(typeOf(fn))

/**
 * 判断对象是否为简单对象（纯粹的对象）
 *
 * 即不是 HTML 节点对象，也不是 window 对象，而是纯粹的对象
 * （通过 '{}' 或者 'new Object' 创建的，或者原型为null的对象）
 *
 * @param {any} obj - 要检查的对象
 * @returns {boolean} - 如果是简单对象则返回true，否则返回false
 *
 * @example
 * isPlainObject({})                // true
 * isPlainObject(new Object())      // true
 * isPlainObject(Object.create(null)) // true
 * isPlainObject([])                // false
 * isPlainObject(new Date())        // false
 */
export const isPlainObject = (obj: any): boolean => {
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false
  }

  const proto: object | null = getProto(obj)
  if (!proto) {
    return true
  }

  const Ctor: any = hasOwn.call(proto, 'constructor') && proto.constructor
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
}

/**
 * 检查对象是否为空（不包含任何属性）
 *
 * 对于对象和数组，检查是否有自有属性
 * 对于其他类型，直接返回true
 *
 * @param {any} obj - 要检查的对象
 * @returns {boolean} - 如果对象为空则返回true，否则返回false
 *
 * @example
 * isEmptyObject({})      // true
 * isEmptyObject([])      // true
 * isEmptyObject({a: 1})  // false
 * isEmptyObject([1, 2])  // false
 */
export const isEmptyObject = (obj: any): boolean => {
  const type: string = typeOf(obj)

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
 * 判断对象是否为数字类型（有限数字）
 *
 * 注意：NaN和Infinity不被视为有效数字
 *
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果是有效数字则返回true，否则返回false
 *
 * @example
 * isNumber(369)      // true
 * isNumber(0)        // true
 * isNumber(-1.5)     // true
 * isNumber(NaN)      // false
 * isNumber(Infinity) // false
 * isNumber('123')    // false
 */
export const isNumber = (value: any): boolean => typeof value === 'number' && isFinite(value)

/**
 * 判断对象是否代表一个数值（可以是数字类型或可转换为数字的字符串）
 *
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果是数值则返回true，否则返回false
 *
 * @example
 * isNumeric('-10')     // true
 * isNumeric(16)        // true
 * isNumeric(0xFF)      // true
 * isNumeric('0xFF')    // true
 * isNumeric('8e5')     // true
 * isNumeric(3.1415)    // true
 * isNumeric(+10)       // true
 * isNumeric('')        // false
 * isNumeric({})        // false
 * isNumeric(NaN)       // false
 * isNumeric(null)      // false
 * isNumeric(true)      // false
 * isNumeric(Infinity)  // false
 * isNumeric(undefined) // false
 */
export const isNumeric = (value: any): boolean => value - parseFloat(value) >= 0

/**
 * 判断对象是否为日期类型
 *
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果是日期类型则返回true，否则返回false
 *
 * @example
 * isDate(new Date())  // true
 * isDate(Date.now())  // false
 * isDate('2023-01-01') // false
 */
export const isDate = (value: any): boolean => typeOf(value) === 'date'

/**
 * 判断两个值是否值相同且类型相同
 *
 * 特别处理了NaN的情况，在JavaScript中NaN !== NaN，但在此函数中认为它们相同
 *
 * @param {any} x - 第一个值
 * @param {any} y - 第二个值
 * @returns {boolean} - 如果两个值相同则返回true，否则返回false
 *
 * @example
 * isSame(1, 1)     // true
 * isSame(NaN, NaN) // true
 * isSame('a', 'a') // true
 * isSame({}, {})   // false (引用不同)
 * isSame(1, '1')   // false (类型不同)
 */
export const isSame = (x: any, y: any): boolean =>
  x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))

/**
 * 判断值是否是正则表达式
 *
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果是正则表达式则返回true，否则返回false
 *
 * @example
 * isRegExp(/test/)         // true
 * isRegExp(new RegExp('test')) // true
 * isRegExp('/test/')       // false (这是字符串)
 */
export const isRegExp = (value: any): boolean => typeOf(value) === 'regExp'

/**
 * 判断值是否是Promise对象或类Promise对象
 *
 * 类Promise对象需要有then和catch方法
 *
 * @param {any} val - 要检查的值
 * @returns {boolean} - 如果是Promise对象则返回true，否则返回false
 *
 * @example
 * isPromise(Promise.resolve())  // true
 * isPromise(new Promise(() => {})) // true
 * isPromise({then: () => {}, catch: () => {}}) // true
 * isPromise({then: () => {}})   // false (缺少catch方法)
 */
export const isPromise = (val: any): boolean => isObject(val) && isFunction(val.then) && isFunction(val.catch)
