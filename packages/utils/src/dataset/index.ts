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
 * 过滤器值类型
 */
interface FilterValue {
  type: string
  value: any
  relation?: string
  text?: string
}

/**
 * 过滤器对象类型
 */
interface Filters {
  [property: string]: FilterValue
}

/**
 * 分页参数类型
 */
interface Page {
  currentPage?: number
  pageSize?: number
}

/**
 * 分页返回值类型
 */
interface PageVO {
  totalRows: number
  [key: string]: any
}

/**
 * 排序参数类型
 */
interface Sort {
  property?: string
  order?: string
}

/**
 * 数据源参数类型
 */
interface Source {
  url: string
  type?: string
  method?: string
  data?: Record<string, any>
  beforeRequest?: (config: any, args?: any) => void
  afterRequest?: (data: any) => void
  success?: (data: any) => void
  hideErr?: boolean
  [key: string]: any
}

/**
 * API 参数类型
 */
interface Api {
  name: string
  data?: Record<string, any>
}

/**
 * 数据集参数类型
 */
interface Dataset {
  source?: Source
  value?: any[]
  api?: Api
  service?: any
}

/**
 * 数据集参数类型（完整）
 */
interface DatasetOptions {
  dataset?: Dataset | any[]
  service?: any
  tree?: {
    key?: string
    parentKey?: string
  }
}

/**
 * 请求参数类型
 */
interface RequestArgs {
  page?: Page
  sort?: Sort
  filters?: Filters
  [key: string]: any
}

/**
 * 响应数据类型
 */
interface ResponseData {
  result?: any[]
  pageVO?: PageVO
  [key: string]: any
}

/**
 * 转换过滤参数为后端所需格式
 * @param {Filters} filters - 过滤条件对象
 * @returns {string} - 转换后的 JSON 字符串
 */
const getFilterStr = (filters: Filters): string => {
  const filterArr: Record<string, any> = {}

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
 * 根据命名空间（点分隔的路径）取对象的值
 *
 * @param {Record<string, any>} obj - 源对象
 * @param {string | string[]} names - 命名空间，可以是点分隔的字符串或字符串数组
 * @returns {any} - 找到的值
 */
const getNsObj = (obj: Record<string, any>, names: string | string[]): any => {
  const arr = Array.isArray(names) ? names : names.split('.')
  const curkey = arr.shift()

  if (curkey === undefined) return undefined

  const curObj = obj[curkey]

  if (isObject(curObj) && arr.length) {
    return getNsObj(curObj, arr)
  }

  return curObj
}

/**
 * 处理请求参数，将分页、排序、过滤条件格式化到 URL 中
 * @param {Record<string, any>} options - 请求选项
 * @param {RequestArgs} args - 请求参数（分页、排序、过滤）
 */
const handlerArgs = (options: Record<string, any>, args?: RequestArgs): void => {
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

/**
 * 转换响应数据，处理树形数据和分页信息
 * @param {ResponseData} response - 响应数据
 * @param {Object} tree - 树形结构配置
 * @returns {any} - 转换后的数据
 */
const transForm = (response: ResponseData, tree?: { key?: string; parentKey?: string }): any => {
  const { result, pageVO } = response
  const { key = 'id', parentKey } = tree || {}
  let data = result || response

  if (parentKey) {
    data = transformTreeData(data, key, parentKey)
  }

  return pageVO ? { result: data, page: { total: pageVO.totalRows } } : data
}

/**
 * 获取数据集数据，支持多种数据源方式：
 * 1. 直接数组数据
 * 2. 通过 source 配置的网络请求
 * 3. 通过 api 配置的服务方法调用
 *
 * @param {DatasetOptions} param0 - 数据集配置选项
 * @param {RequestArgs} args - 请求参数
 * @returns {Promise<any>} - 返回处理后的数据承诺
 */
export const getDataset = ({ dataset, service, tree }: DatasetOptions, args?: RequestArgs): Promise<any> =>
  new Promise((resolve, reject) => {
    if (Array.isArray(dataset)) {
      return resolve(transForm(dataset as any, tree))
    }

    const datasetObj = dataset as Dataset | undefined
    const { source, value, api } = datasetObj || {}
    const $service = service || (datasetObj && datasetObj.service)

    if (Array.isArray(value)) {
      return resolve(transForm({ result: value }, tree))
    }

    if (!$service) {
      return resolve([])
    }

    if (isObject(source) && source?.url) {
      const {
        type = 'GET',
        data,
        beforeRequest,
        afterRequest,
        success,
        hideErr,
        url,
        method,
        ...options
      } = source as Source
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
        .then((response: { data: ResponseData }) => {
          afterRequestFn && afterRequestFn(response.data)
          resolve(transForm(response.data, tree))
        })
        .catch((error: any) => {
          hideErr || reject(error)
        })
    } else if (api) {
      const fetchFn = getNsObj($service, api.name)
      fetchFn &&
        fetchFn({ ...api.data, ...args })
          .then((response: ResponseData) => {
            resolve(transForm(response, tree))
          })
          .catch((error: any) => {
            reject(error)
          })
    }
  })
