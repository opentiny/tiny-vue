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

import { hasOwn, typeOf, isObject, isPlainObject, isNull } from './type'

/**
 * 将对象的每个属性值进行循环处理。
 *
 *     let obj = { name: 'jacky', age: 28, job: 'coder', dept: 'it' }
 *     each(obj, function (field, value) {
 *       if (field === 'name') {
 *         // do something
 *       }
 *     })
 *
 * @param {Object} obj 要处理的对象
 * @param {Function} handle 进行循环处理的函数，函数返回false, 则跳出循环
 */
export const each = (obj: object, handle: (key: string, value?: any) => boolean) => {
  if (typeof handle !== 'function') {
    return
  }
  for (const name in obj) {
    if (hasOwn.call(obj, name)) {
      if (handle(name, obj[name]) === false) {
        break
      }
    }
  }
}

/** 支持深度合并对象
 * 【首参为true】，则每一层是对象就合并， 但是简单值或数组时，就后面覆盖过来
 * 【首参为对象】，则仅第一层合并， 类似Object.assign
 * 合并对象中，有非object类型的，统统忽略！
 * @returns {Object}
 */

// eslint-disable-next-line import/no-mutable-exports
let extend: (deep: boolean | object, ...values: object[]) => object

/**
 * 通过路径，获得对象指向位置的值。
 *
 *     getObj({ a: { b: 1 } }, 'a.b')            // 1
 *     getObj({ a: { b: 1 } }, 'data.a.b', true) // 1
 *     getObj({ a: { b: undefined } }, 'a.b')    // undefined
 *
 * @param {Object} data 查找数据源
 * @param {String} names 查找属性命名空间字符串
 * @param {Boolean} [isExceptRoot] 是否排除 names 的第一个节点，默认 false
 * @returns {Object}
 */
export const getObj = (data: object, names: string, isExceptRoot?: boolean) => {
  if (!data || !isPlainObject(data) || !names || typeof names !== 'string') {
    return
  }

  const nameArr = names.split('.')

  let obj = data
  const len = nameArr.length

  if (len > 1) {
    const startIndex = isExceptRoot ? 1 : 0

    for (let i = startIndex; i < len; i++) {
      obj = obj[nameArr[i]]

      if (isNull(obj)) {
        return obj
      }
    }

    return obj
  } else {
    return obj[nameArr[0]]
  }
}

/**
 * 通过路径，设置对象指向位置的值。
 *
 *     let obj = { limit: 5, data: { a: 1, b: 2 }, info: { a: 1, b: 2 } }
 *     setObj(obj, 'limit', 10)              // obj.limit = 10
 *     setObj(obj, 'data', { c: 3 }, true)   // obj.data = { a: 1, b: 2, c: 3 }
 *     setObj(obj, 'info', { c: 3 })         // obj.info = { c: 3 }
 *     setObj(obj, 'info.c', { d: 4 }, true) // obj.info = { c: { d: 4 } }
 *     setObj(obj, 'info.c', { e: 5 }, true) // obj.info = { c: { d: 4, e: 5 } }
 *
 * @param {Object} data 设置数据源
 * @param {String} names 查找属性命名空间字符串
 * @param {Object} value 设置的值
 * @param {boolean} [isMerge] 是否覆盖还是合并，默认覆盖
 * @returns {Object}
 */
export const setObj = (data: object, names: string, value: any, isMerge) => {
  if (!data || !isPlainObject(data) || !names || typeof names !== 'string') {
    return data
  }

  const nameArr = names.split('.')

  const obj = data
  let len = nameArr.length
  let item = nameArr[0]

  if (len > 1) {
    len--

    let tmpl = obj
    let name, target

    for (let i = 0; i < len; i++) {
      name = nameArr[i]
      target = tmpl[name]

      if (target === null || !isPlainObject(target)) {
        tmpl[name] = {}
        target = tmpl[name]
      }

      tmpl = target
    }

    item = nameArr[len]

    isMerge
      ? isPlainObject(tmpl[item])
        ? extend(true, tmpl[item], value)
        : (tmpl[item] = value)
      : (tmpl[item] = value)
  } else {
    isMerge
      ? isPlainObject(obj[item])
        ? extend(true, obj[item], value) //
        : (obj[item] = value)
      : (obj[item] = value)
  }

  return obj
}

/**
 * 根据指定的字段属性名，复制对应的数据。
 *
 *     let obj = { a: 1, b: '2', c: [3, 4, 5], d: { e: 'good' } }
 *     copyField(obj, ['a', 'b'])              // { a: 1, b: '2' }
 *     copyField(obj, ['a', 'b'], false, true) // { c: [3, 4, 5], d: { e: 'good' } }
 *
 * @param {Object} data 源数据，合并数据源
 * @param {Array} [fields] 指定的值得命名空间字符串的数值。 不传入，默认为克隆一份数据出来
 * @param {Boolean} [isMerge] 是否覆盖还是合并，默认false覆盖
 * @param {Boolean} [isExclude] 是否排除指定的fields复制，默认false
 * @returns {Array}
 */
export const copyField = (data: object, fields?: string[], isMerge?: boolean, isExclude?: boolean) => {
  const setValue = (obj, result, name, key, isMerge?) => {
    const include = key.indexOf(name) === 0
    const keySplit = key.split(name)
    const hasNextDot = keySplit[1] && keySplit[1].indexOf('.') === 0

    if (name === key || (include && hasNextDot)) {
      if (name !== key) {
        each(getObj(obj, name), (field) => {
          setValue(obj, result, `${name}.${field}`, key)
          return true
        })
      }
    } else {
      if (fields && !fields.includes(name)) {
        setObj(result, name, getObj(obj, name), isMerge)
      }
    }
  }
  const innerCopyFields = (obj, fields, isMerge, isExclude) => {
    const result = {}

    if (isExclude) {
      each(obj, (name) => fields.forEach((key) => setValue(obj, result, name, key, isMerge)))
    } else {
      fields.forEach((field) => setObj(result, field, getObj(obj, field), isMerge))
    }

    return result
  }

  if (isPlainObject(data)) {
    return Array.isArray(fields)
      ? innerCopyFields(data, fields, isMerge, isExclude)
      : extend(isMerge !== false, {}, data)
  }

  return data
}

/**
 * 复制数组数据，数据如包含对象，则深度复制，并返回一个新数组，如果不是数组则直接返回原对象。
 *
 *     let arr1 = [ 1, 2, { name: 'jacky' } ]
 *     let arr2 = copyArray(arr1)
 */
export const copyArray = (arr: any[]) => {
  return Array.isArray(arr) ? arr.map((item) => copyField(item)) : arr
}

/**
 * 对象复制，支持深度复制，修复 $.extend 数组复制的问题, 参数同 $.extend。
 *
 *     let obj1 = { a: 1, b: 2 }
 *     let obj2 = { c: 3, d: 4 }
 *     extend(obj1, obj2) // { a: 1, b: 2, c: 3, d: 4 }
 *
 * @param {Boolean} deep 如果是 true，合并成为递归（又叫做深拷贝）。仅支持 true | 空
 * @param {Object} target 对象扩展，这将接收新的属性。
 * @param {Object} object1 一个对象，它包含额外的属性合并到第一个参数。
 * @param {Object} objectN 包含额外的属性合并到第一个参数
 * @returns {Object}
 */

const deepCopy = (target, name, deep, copy, src) => {
  let copyIsArray
  if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
    if (copyIsArray) {
      copyIsArray = false
      target[name] = copyArray(copy)
    } else {
      const clone = src && isPlainObject(src) ? src : {}
      target[name] = extend(deep, clone, copy)
    }
  } else if (copy !== undefined) {
    try {
      target[name] = copy
    } catch (e) {
      // do nothing
    }
  }
}

extend = function (...args) {
  const length = args.length
  let target = args[0] || {}
  let i = 1
  let deep = false

  if (typeOf(target) === 'boolean') {
    deep = target as boolean
    target = args[i] || {}
    i++
  }

  if (!isObject(target) && typeOf(target) !== 'function') {
    target = {}
  }

  for (; i < length; i++) {
    const options = args[i]

    if (options !== null && isObject(options)) {
      const names = Object.keys(options)

      for (const name of names) {
        const src = target[name]
        const copy = options[name]

        if (target !== copy) {
          deepCopy(target, name, deep, copy, src)
        }
      }
    }
  }

  return target
} as any

/**
 * 可深层比较两个对象或两个数组是否相等。注意以源对象为比较基础
 *
 *     isEachEqual({a: 1}, {a: 1, b: 2})      // true
 *     isEachEqual({a: 1, b: 2}, {a: 1})      // false (以源对象为比较基础，所以它是false)
 *     isEachEqual({a: 1, b: {c: 3, d: 4}}, {a: 1, b: {c: 3, d: 5}})  // false
 *
 * @param {Object} data1 数据源对象
 * @param {Object} data2 对比目标对象
 * @param {Boolean} [deep] 是否深度遍历，默认为true
 * @returns {Boolean}
 */
// eslint-disable-next-line import/no-mutable-exports
let isEachEqual: (data1: any, data2: any, deep?: boolean) => boolean

/**
 * 可深层比较两个对象是否相等。
 * 与`isEachEqual` 区别是：
 * 1、2个对象交换位置，判断2次
 * 2、它可以指定要比较的属性分支["a.b","a.c"] （整个系统使用fields这块功能）
 *
 *     isEqual({ a: { b: 1 } }, { a: { b: 1, c: 2 } }, false, [ 'a.b' ]) // false
 *     isEqual({ a: { b: 1 } }, { a: { b: 1, c: 2 } }, true, [ 'a.b' ])  // true
 *
 * @param {Object} sourceData 源对象
 * @param {Object} targetData 目标对象
 * @param {Boolean} [deep] 是否深度比较，默认为true
 * @param {Array} [fields] 指定需要比较的字段的数组
 * @returns {Boolean}
 */
export const isEqual: (sourceData: object, targetData: object, deep?: boolean, fields?: string[]) => boolean = (
  sourceData: object,
  targetData: object,
  deep?: boolean,
  fields?: string[]
) => {
  if (typeOf(sourceData) === typeOf(targetData)) {
    deep = deep !== false

    if (Array.isArray(fields)) {
      const _sourceData = copyField(sourceData, fields)
      const _targetData = copyField(targetData, fields)

      return isEqual(_sourceData, _targetData, deep) as boolean
    }

    // 此处交换了位置判断
    const source = isEachEqual(sourceData, targetData, deep)
    const target = isEachEqual(targetData, sourceData, deep)

    return source && target
  }

  return false
}

isEachEqual = (data1: any, data2: any, deep?: boolean) => {
  if (!isPlainObject(data1)) {
    // 当是数组的情况
    if (!Array.isArray(data1)) {
      return data1 === data2
    }
    if (data1.length !== data2.length) {
      return false
    }

    for (let i = 0, length = data1.length; i < length; i++) {
      const result = isEqual(data1[i], data2[i], deep)

      if (!result) {
        return false
      }
    }

    return true
  }
  // 对象的情况
  let bEqual = true
  const names = Object.keys(data1)

  for (const name of names) {
    if (hasOwn.call(data2, name)) {
      const _data1 = data1[name]
      const _data2 = data2[name]

      if ((deep && isObject(_data1)) || Array.isArray(_data1)) {
        bEqual = isEachEqual(_data1, _data2, deep)
      } else {
        bEqual = _data1 === _data2
      }
    } else {
      bEqual = false
    }

    if (bEqual === false) {
      break
    }
  }

  return bEqual
}

export { isEachEqual, extend }

/**
 * 将json对象序列化为字符串。
 *
 *     let obj = { a: 1, b: 2 }
 *     toJsonStr(obj)  // '{"a":1,"b":2}'
 *     obj.prop = obj
 *     toJsonStr(obj)  // undefined  递归引用自己了，所以catch了
 *     toJsonStr(null) // 'null'
 *
 * @param {Object} obj
 * @returns {String}
 */
export const toJsonStr = (obj: any) => {
  try {
    return JSON.stringify(obj)
  } catch (e) {
    return undefined
  }
}

/**
 * 将一个或多个源对象简单合并到目标对象中，合并时排除非 OwnProperty 及 undefined 属性。
 * 只处理第一层，功能基本等同于  Object.assign
 *
 *     merge({ a: 1 }, { b: { c: 2 } }, { d: 3 }) // { a: 1, b: { c: 2 }, d: 3 }
 *
 * @param {Object} target 目标对象
 * @param {Object} [source] 源对象
 * @returns {Object}
 */
export const merge = function (target: object, ...rest: object[]) {
  for (let i = 0, len = rest.length; i < len; i++) {
    const source = rest[i] || {}

    for (const prop in source) {
      if (hasOwn.call(source, prop)) {
        const value = source[prop]

        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}
