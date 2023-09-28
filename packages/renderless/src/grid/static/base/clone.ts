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

import isPlainObject from './isPlainObject'
import objectMap from '../object/objectMap'
import map from '../array/map'

let deepClone
const startClone = (func, obj, deep) => func(obj, deep ? (val) => deepClone(val, deep) : (val) => val)

deepClone = (val, deep) =>
  isPlainObject(val) ? startClone(objectMap, val, deep) : Array.isArray(val) ? startClone(map, val, deep) : val

const clone = (obj, deep) => (obj ? deepClone(obj, deep) : obj)

export default clone
