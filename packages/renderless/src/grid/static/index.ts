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

// 对象相关的方法
import assign from './object/assign'
import extend from './object/extend'
import objectEach from './object/objectEach'
import lastObjectEach from './object/lastObjectEach'
import objectMap from './object/objectMap'
import values from './object/values'

// 数组相关的方法
import map from './array/map'
import every from './array/every'
import find from './array/find'
import arrayEach from './array/arrayEach'
import lastArrayEach from './array/lastArrayEach'
import toArray from './array/toArray'
import sortBy from './array/sortBy'
import slice from './array/slice'
import includes from './array/includes'
import sum from './array/sum'
import toTreeArray from './array/toTreeArray'
import findTree from './array/findTree'
import eachTree from './array/eachTree'
import mapTree from './array/mapTree'
import filterTree from './array/filterTree'
import arrayIndexOf from './array/arrayIndexOf'

// 基础方法
import isNull from './base/isNull'
import isUndefined from './base/isUndefined'
import isFunction from './base/isFunction'
import isObject from './base/isObject'
import isString from './base/isString'
import isPlainObject from './base/isPlainObject'
import eqNull from './base/eqNull'
import each from './base/each'
import indexOf from './base/indexOf'
import keys from './base/keys'
import clone from './base/clone'
import lastEach from './base/lastEach'
import remove from './base/remove'
import clear from './base/clear'
import isBoolean from './base/isBoolean'
import isNumber from './base/isNumber'
import isEmpty from './base/isEmpty'
import isSet from './base/isSet'
import isEqual from './base/isEqual'
import uniqueId from './base/uniqueId'
import findIndexOf from './base/findIndexOf'
import toStringJSON from './base/toStringJSON'
import toJSONString from './base/toJSONString'
import has from './base/has'
import get from './base/get'
import set from './base/set'
import destructuring from './base/destructuring'

// 数值相关方法
import toNumber from './number/toNumber'

// 字符串相关的方法
import template from './string/template'
import toString from './string/toString'

// 函数相关的方法
import property from './function/property'

const isArray = Array.isArray

export {
  assign,
  extend,
  objectEach,
  lastObjectEach,
  objectMap,
  values,
  map,
  every,
  find,
  arrayEach,
  lastArrayEach,
  toArray,
  sortBy,
  slice,
  includes,
  sum,
  toTreeArray,
  findTree,
  eachTree,
  mapTree,
  filterTree,
  arrayIndexOf,
  isArray,
  isNull,
  isUndefined,
  isFunction,
  isObject,
  isString,
  isPlainObject,
  eqNull,
  each,
  indexOf,
  keys,
  clone,
  lastEach,
  remove,
  clear,
  isBoolean,
  isNumber,
  isEmpty,
  isSet,
  isEqual,
  uniqueId,
  findIndexOf,
  toStringJSON,
  toJSONString,
  has,
  get,
  set,
  destructuring,
  toNumber,
  template,
  toString,
  property
}
