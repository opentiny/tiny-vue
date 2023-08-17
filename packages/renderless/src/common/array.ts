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

import { SORT } from './index'
import { isSame } from './type'
import { getObj } from './object'

/**
 * 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
 * 修复数组原生的 indexOf 方法不能判断 NaN 的问题
 *
 *     let arr1 = [1, 2, 3, 4]
 *     let arr2 = [1, 2, NaN, 4]
 *     indexOf(arr1, 2)   // 1
 *     indexOf(arr2, NaN) // 2
 *
 * @param {Array} arr 要查找的数组
 * @param {Object} data  需要查找的数据
 * @param {Function} [predicate] 断言函数，缺省为 isSame, 两个参数为数组的元素和查找的数据
 * @returns {Number}
 */
export const indexOf = (arr, data, predicate = isSame) => {
  if (Array.isArray(arr) && typeof predicate === 'function') {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (predicate(arr[i], data)) {
        return i
      }
    }
  }

  return -1
}

/**
 * 在数组里查找对象，调用自定义的断言函数。
 *
 *     let arr = [1, 2, 3, 4]
 *     find(arr, function (value) { return value > 2 })   // 3
 *
 * @param {Array} arr 要查找的数组
 * @param {Function} predicate 断言函数
 * @returns {Object}
 */
export const find = (arr, predicate) => {
  const index = indexOf(arr, undefined, predicate)
  return index !== -1 ? arr[index] : undefined
}

/**
 * 从数组中删除指定元素，并返回该数组。
 *
 *     let arr1 = [1, 2, 3, 4]
 *     let arr2 = [1, 2, NaN, 4]
 *     remove(arr1, 2, 2) // [1, 4]
 *     remove(arr2, NaN)  // [1, 2, 4]
 *
 * @param {Array} arr 源数组
 * @param {Object} data  需要删除的数据
 * @param {Number} count 删除元素个数，默认为 1
 * @returns {Array}
 */
export const remove = (arr, data, count = 1) => {
  if (Array.isArray(arr) && arr.length) {
    const index = indexOf(arr, data)
    if (index > -1) {
      arr.splice(index, count)
    }
  }

  return arr
}

/**
 * 对象数组自定义排序，并返回该数组。
 *
 *     sort([ {a:100}, {a:1}, {a:NaN}, {a:10} ], 'a')        // [ {a:1}, {a:10}, {a:100}, {a:NaN} ]
 *     sort([ {a:100}, {a:1}, {a:NaN}, {a:10} ], 'a','desc') // [ {a:100}, {a:10}, {a:1}, {a:NaN} ]
 *
 * @param {Array} arr 需要排序的对象数组
 * @param {string} field 要排序的对象字段
 * @param {String} sort 排序方向，取值为 "asc" 或 "desc"
 * @returns {Array} 排好序的对象数组
 */
export const sort = (arr, field, sort = SORT.Asc) => {
  if (Array.isArray(arr) && arr.length > 1) {
    arr.sort((x, y) => {
      const compare = sort === SORT.Asc ? [1, -1] : [-1, 1]
      const xField = getObj(x, field)
      const yField = getObj(y, field)

      if (isNaN(xField)) {
        return sort === SORT.Asc ? 1 : -1
      } else if (isNaN(yField)) {
        return -1
      }

      return xField > yField ? compare[0] : compare[1]
    })
  }

  return arr
}

/**
 * 向数组中添加不重复的数据，并返回该数组。
 *
 *     let arr = [ 1, 2, NaN, 4]
 *     push(arr, 1)   // [ 1, 2, NaN, 4]
 *     push(arr, NaN) // [ 1, 2, NaN, 4]
 *     push(arr, 5)   // [ 1, 2, NaN, 4, 5]
 *
 * @param {Array} arr 源数组
 * @param {Object} data 需要增加的数据
 * @returns {Array}
 */
export const push = (arr, data) => {
  if (Array.isArray(arr) && !arr.some((value) => isSame(value, data))) {
    arr.push(data)
  }

  return arr
}

/**
 * 去除数组中的重复的值，并返回新数组。
 *
 *     let arr = [ 1, NaN, 2, NaN, 2, 3, 4]
 *     unique(arr) // [ 1, NaN, 2, 3, 4]
 *
 * @param {Array} arr
 * @returns {Array}
 */
export const unique = (arr) => {
  if (Array.isArray(arr)) {
    const array = []

    for (let i = 0, len = arr.length; i < len; i++) {
      const value = arr[i]
      if (indexOf(array, value) === -1) {
        array.push(value)
      }
    }

    return array
  }

  return arr
}

const extend = (to, _from) => {
  Object.keys(_from).forEach((key) => (to[key] = _from[key]))

  return to
}

/**
 * 数组转对象
 *
 *     let arr = [ { key1: value1 }, { key2: value2 } ]
 *     toObject(arr) // { key1: value1, key2: value2 }
 *
 * @param {Array} arr
 * @returns {Object}
 */
export const toObject = (arr) => {
  const res = {}

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }

  return res
}

/**
 * 将 id 与 pid 构成的扁平数据转换成 children 的树状数据
 *
 *     let data = [{ id: 100, pId: 0, label: '首页'}, { id: 101, pId: 100, label: '指南'}]
 *     transformPidToChildren(data) // [ 0: { id: 100, label: "首页", children: [ 0: { id: 101, label: "指南" } ] } ]
 *
 * @param {Array} data id 与 pid 构成的扁平数据的数组
 * @param {String} [pidName] pid 的属性名，缺省为 pId
 * @param {String} [childrenName] children 的属性名，缺省为 children
 * @param {String} [idName] id 的属性名，缺省为 id
 * @returns {Array}
 */
export const transformPidToChildren = (data, pidName = 'pId', childrenName = 'children', idName = 'id') => {
  const result = []

  Array.isArray(data) &&
    data.forEach((item) => {
      if (item[pidName] == '0') {
        result.push(item)
      } else {
        const parent = find(data, (i) => i[idName] == item[pidName])

        if (!parent) {
          return
        }

        if (!parent[childrenName]) {
          parent[childrenName] = []
        }

        parent[childrenName].push(item)
      }

      delete item[pidName]
    })

  return result
}

/**
 * 将pid标识的普通数组转换树结构数据
 * @param {*} data
 * @param {*} key
 * @param {*} parentKey
 */
export const transformTreeData = (data, key = 'id', parentKey = 'pId') => {
  if (!Array.isArray(data)) {
    data = [data]
  }

  data = data.map((item) => ({ ...item }))

  const treeData = transformPidToChildren(data, parentKey, 'children', key)
  return treeData
}
