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

import { format } from '../string'
import { isObject } from '../type'
import { transformTreeData } from '../array'

/**
 * 转换过滤参数
 * @param {*} filters
 */
const getFilterStr = (filters) => {
  const filterArr = {}

  Object.keys(filters).forEach((property) => {
    const { type, value } = filters[property]

    if (type === 'enum') {
      filterArr[property] = { type: value.map(() => 0), value }

      if (value.length > 1) {
        filters[property].relation = 'or'
      }
    }

    if (type === 'input') {
      const { relation, text } = value

      filterArr[property] = {
        type: [relation === 'startwith' ? 8 : relation === 'equals' ? 0 : 6],
        value: text
      }
    }
  })

  return JSON.stringify(filterArr)
}

/**
 * 根据命名空间取对象的值
 *
 * @param {*} obj
 * @param {*} names
 */
const getNsObj = (obj, names) => {
  const arr = Array.isArray(names) ? names : names.split('.')
  const curkey = arr.shift()
  const curObj = obj[curkey]

  if (isObject(curObj) && arr.length) {
    return getNsObj(curObj, arr)
  }

  return curObj
}

const handlerArgs = (options, args) => {
  if (args) {
    const { page, sort, filters } = args
    const { currentPage, pageSize } = page || {}
    const filterStr = getFilterStr(filters || {})
    const orderBy = sort && sort.property ? sort.property + ' ' + sort.order : ''

    options.url = format(options.url, {
      curPage: currentPage,
      pageSize,
      filterStr,
      orderBy
    })
  }
}

const transForm = (response, tree) => {
  const { result, pageVO } = response
  const { key = 'id', parentKey } = tree || {}
  let data = result || response

  if (parentKey) {
    data = transformTreeData(data, key, parentKey)
  }

  return pageVO ? { result: data, page: { total: pageVO.totalRows } } : data
}

/**
 * dataset简单数据处理
 * @param {*} dataset
 * @param {*} service
 */
export const getDataset = ({ dataset, service, tree }, args) =>
  new Promise((resolve, reject) => {
    const { source, value, api } = dataset || {}
    const $service = service || (dataset && dataset.service)
    if (Array.isArray(dataset)) {
      return resolve(transForm(dataset, tree))
    }
    if (Array.isArray(value)) {
      return resolve(transForm(value, tree))
    }
    if (!$service) {
      return resolve([])
    }
    if (isObject(source) && source.url) {
      const { type = 'GET', data, beforeRequest, afterRequest, success, hideErr, url, method, ...options } = source
      options.url = url
      options.method = method || type.toLocaleLowerCase()
      const mergeTarget = options.method === 'get' ? 'params' : 'data'
      options[mergeTarget] = data || {}
      const afterRequestFn = afterRequest || success
      const config = { ...options }
      handlerArgs(config, args)
      beforeRequest && beforeRequest(config, args)
      $service.network
        .request(config)
        .then((response) => {
          afterRequestFn && afterRequestFn(response.data)
          resolve(transForm(response.data, tree))
        })
        .catch((error) => {
          hideErr || reject(error)
        })
    } else if (api) {
      const fetchFn = getNsObj($service, api.name)
      fetchFn &&
        fetchFn({ ...api.data, ...args })
          .then((response) => {
            resolve(transForm(response, tree))
          })
          .catch((error) => {
            reject(error)
          })
    }
  })
