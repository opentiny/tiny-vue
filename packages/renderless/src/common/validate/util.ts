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

import { hasOwn, isNull } from '../type'
import { log } from '../xss'

const formatRegExp = /%[sdj%]/g

export let warning = () => undefined

export function convertFieldsError(errors) {
  if (!errors || !errors.length) {
    return null
  }

  const fields = {}

  errors.forEach((error) => {
    const field = error.field
    fields[field] = fields[field] || []
    fields[field].push(error)
  })

  return fields
}

export function format(...args) {
  let i = 1
  const checkData = args[0]
  const len = args.length

  if (typeof checkData === 'function') {
    return checkData.apply(null, args.slice(1))
  }

  if (typeof checkData === 'string') {
    let str = String(checkData).replace(formatRegExp, (matchChar) => {
      if (matchChar === '%%') {
        return '%'
      }

      if (i >= len) {
        return matchChar
      }

      switch (matchChar) {
        case '%j':
          try {
            return JSON.stringify(args[i++])
          } catch (e) {
            return '[Circular]'
          }
        case '%d':
          return Number(args[i++])
        case '%s':
          return String(args[i++])
        default:
          return matchChar
      }
    })

    return str
  }

  return checkData
}

function isNativeStringType(type) {
  return ~[
    'string',
    'url',
    'hex',
    'email',
    'pattern',
    'digits',
    'time',
    'dateYMD',
    'longDateTime',
    'dateTime',
    'dateYM',
    'version',
    'speczh',
    'specialch',
    'specialch2',
    'acceptImg',
    'acceptFile',
    'fileSize'
  ].indexOf(type)
}

export function isEmptyValue(data, dataType) {
  if (isNull(data)) {
    return true
  }

  if (dataType === 'array' && Array.isArray(data) && !data.length) {
    return true
  }

  if (isNativeStringType(dataType) && typeof data === 'string' && !data) {
    return true
  }

  return false
}

export function isEmptyObject(data) {
  return Object.keys(data).length === 0
}

function asyncParallelArray(arrData, func, callback) {
  let count = 0
  const results = []
  const arrLength = arrData.length

  function checkCount(errors) {
    results.push.apply(results, errors)

    count++

    if (count === arrLength) {
      callback(results)
    }
  }

  arrData.forEach((rule) => {
    func(rule, checkCount)
  })
}

function asyncSerialArray(arr, fn, cb) {
  let idx = 0
  const arrLength = arr.length

  function checkNext(errorList) {
    if (errorList && errorList.length) {
      cb(errorList)
      return
    }

    const original = idx
    idx = idx + 1

    if (original < arrLength) {
      fn(arr[original], checkNext)
    } else {
      cb([])
    }
  }

  checkNext([])
}

function flattenObjArr(objArr) {
  const result = []

  Object.keys(objArr).forEach((item) => {
    result.push.apply(result, objArr[item])
  })

  return result
}

export function asyncMap(objArray, option, func, callback) {
  if (option.first) {
    const pending = new Promise((resolve, reject) => {
      const errorFn = reject
      const next = (errors) => {
        callback(errors)
        return errors.length ? errorFn({ errors, fields: convertFieldsError(errors) }) : resolve()
      }
      const flattenArr = flattenObjArr(objArray)
      asyncSerialArray(flattenArr, func, next)
    })

    // 校验器会报告中，errors fields 同时存在，属于正常，不打印；  代码真异常才打印。
    pending.catch((error) => (error.errors && error.fields) || log.logger.error(error))
    return pending
  }

  let firstFields = option.firstFields || []

  if (firstFields === true) {
    firstFields = Object.keys(objArray)
  }

  let total = 0
  const objArrayKeys = Object.keys(objArray)
  const objArrLength = objArrayKeys.length
  const results = []
  const pending = new Promise((resolve, reject) => {
    const errorFn = reject
    const next = (errors) => {
      results.push.apply(results, errors)
      total++
      if (total === objArrLength) {
        callback(results)
        return results.length ? errorFn({ errors: results, fields: convertFieldsError(results) }) : resolve()
      }
    }

    objArrayKeys.forEach((key) => {
      const arr = objArray[key]
      if (~firstFields.indexOf(key)) {
        asyncSerialArray(arr, func, next)
      } else {
        asyncParallelArray(arr, func, next)
      }
    })
  })

  // 校验器会报告中，errors fields 同时存在，属于正常，不打印；  代码真异常才打印。
  pending.catch((error) => (error.errors && error.fields) || log.logger.error(error))

  return pending
}

export function complementError(rule) {
  return (onError) => {
    if (onError && onError.message) {
      onError.field = onError.field || rule.fullField
      return onError
    }

    return {
      message: typeof onError === 'function' ? onError() : onError,
      field: onError.field || rule.fullField
    }
  }
}

export function deepMerge(target, sources) {
  if (!sources) {
    return target
  }
  for (const source in sources) {
    if (hasOwn.call(sources, source)) {
      const value = sources[source]

      if (typeof value === 'object' && typeof target[source] === 'object') {
        target[source] = {
          ...target[source],
          ...value
        }
      } else {
        target[source] = value
      }
    }
  }
  return target
}
