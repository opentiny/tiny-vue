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
import logger from '../logger'

const formatRegExp = /%[sdj%]/g

/**
 * @description 警告函数（当前未实现）
 * @returns undefined
 */
export const warning = (): undefined => undefined

/**
 * @description 转换返回错误的数据结构，将错误数组转换为按字段分组的对象
 * @param errors 错误数组
 * @returns 按字段分组的错误对象或null
 */
export function convertFieldsError(
  errors: Array<{ field: string; [key: string]: any }> | null | undefined
): Record<string, any[]> | null {
  if (!errors || !errors.length) {
    return null
  }

  const fields: Record<string, any[]> = {}

  errors.forEach((error) => {
    const field = error.field
    fields[field] = fields[field] || []
    fields[field].push(error)
  })

  return fields
}

/**
 * @description 生成校验错误的提示信息，支持格式化占位符
 * @param i18nTemplate 带占位符的字符串或函数
 * @param rest 替换占位符的字符串参数
 * @returns 格式化后的字符串
 * 例：format('%s 必须等于 %s', 'A', 'B') 返回 A 必须等于 B
 */
export function format(i18nTemplate: Function | string, ...rest: string[]): string {
  if (typeof i18nTemplate === 'function') {
    return i18nTemplate(...rest)
  }

  if (typeof i18nTemplate === 'string') {
    let i = 0
    const len = rest.length
    let str = String(i18nTemplate).replace(formatRegExp, (matchChar) => {
      if (matchChar === '%%') {
        return '%'
      }

      if (i >= len) {
        return matchChar
      }

      switch (matchChar) {
        case '%j':
          try {
            return JSON.stringify(rest[i++])
          } catch (e) {
            return '[Circular]'
          }
        case '%d':
          return Number(rest[i++]).toString()
        case '%s':
          return String(rest[i++])
        default:
          return matchChar
      }
    })

    return str
  }

  return String(i18nTemplate)
}

/**
 * @description 判断是否为原生字符串类型
 * @param type 类型名称
 * @returns 是否为原生字符串类型
 */
function isNativeStringType(type: string | undefined): boolean {
  if (!type) return false

  return [
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
  ].includes(type)
}

/**
 * @description 判断对应的类型是否是空值
 * @param data 要检查的数据
 * @param dataType 数据类型
 * @returns 是否为空值
 */
export function isEmptyValue(data: any, dataType?: string): boolean {
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

/**
 * @description 判断对象是否为空
 * @param data 要检查的对象
 * @returns 对象是否为空
 */
export function isEmptyObject(data: Record<string, any>): boolean {
  return Object.keys(data).length === 0
}

/**
 * @description 并行处理校验规则
 * @param arrData 规则数组
 * @param func 处理函数
 * @param callback 完成回调
 */
function asyncParallelArray(
  arrData: any[],
  func: (rule: any, callback: (errors: any[]) => void) => void,
  callback: (errors: any[]) => void
): void {
  let count = 0
  const results: any[] = []
  const arrLength = arrData.length

  function checkCount(errors: any[]): void {
    results.push(...errors)

    count++

    if (count === arrLength) {
      callback(results)
    }
  }

  arrData.forEach((rule) => {
    func(rule, checkCount)
  })
}

/**
 * @description 串行处理校验规则
 * @param arr 规则数组
 * @param fn 处理函数
 * @param cb 完成回调
 */
function asyncSerialArray(
  arr: any[],
  fn: (rule: any, callback: (errors: any[]) => void) => void,
  cb: (errors: any[]) => void
): void {
  let idx = 0
  const arrLength = arr.length

  function checkNext(errorList: any[]): void {
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

/**
 * @description 将对象数组扁平化处理
 * @param objArr 对象数组
 * @returns 扁平化后的数组
 */
function flattenObjArr(objArr: Record<string, any[]>): any[] {
  const result: any[] = []

  Object.keys(objArr).forEach((item) => {
    result.push(...objArr[item])
  })

  return result
}

/**
 * @description 异步映射处理对象数组，支持串行或并行处理
 * @param objArray 对象数组
 * @param option 选项配置
 * @param func 处理函数
 * @param callback 完成回调
 * @returns Promise对象
 */
export function asyncMap(
  objArray: Record<string, any[]>,
  option: { first?: boolean; firstFields?: boolean | string[] },
  func: (rule: any, callback: (errors: any[]) => void) => void,
  callback: (errors: any[]) => void
): Promise<void> {
  if (option.first) {
    const pending = new Promise<void>((resolve, reject) => {
      const errorFn = reject
      const next = (errors: any[]) => {
        callback(errors)
        return errors.length ? errorFn({ errors, fields: convertFieldsError(errors) }) : resolve()
      }
      const flattenArr = flattenObjArr(objArray)
      asyncSerialArray(flattenArr, func, next)
    })

    // 校验器会报告中，errors fields 同时存在，属于正常，不打印；  代码真异常才打印。
    pending.catch((error) => (error.errors && error.fields) || logger.error(error))
    return pending
  }

  let firstFields: string[] = Array.isArray(option.firstFields) ? option.firstFields : []

  if (option.firstFields === true) {
    firstFields = Object.keys(objArray)
  }

  let total = 0
  const objArrayKeys = Object.keys(objArray)
  const objArrLength = objArrayKeys.length
  const results: any[] = []
  const pending = new Promise<void>((resolve, reject) => {
    const errorFn = reject
    const next = (errors: any[]) => {
      results.push(...errors)
      total++
      if (total === objArrLength) {
        callback(results)
        return results.length ? errorFn({ errors: results, fields: convertFieldsError(results) }) : resolve()
      }
    }

    objArrayKeys.forEach((key) => {
      const arr = objArray[key]
      if (firstFields.includes(key)) {
        asyncSerialArray(arr, func, next)
      } else {
        asyncParallelArray(arr, func, next)
      }
    })
  })

  // 校验器会报告中，errors fields 同时存在，属于正常，不打印；  代码真异常才打印。
  pending.catch((error) => (error.errors && error.fields) || logger.error(error))

  return pending
}

/**
 * @description 处理返回的错误，补充错误信息
 * @param rule 规则对象
 * @returns 处理函数
 */
export function complementError(rule: {
  fullField?: string
  [key: string]: any
}): (onError: string | Function | { message?: string; field?: string }) => { message: string; field: string } {
  return (onError) => {
    if (onError && (onError as any).message) {
      ;(onError as any).field = (onError as any).field || rule.fullField
      return onError as { message: string; field: string }
    }

    return {
      message: typeof onError === 'function' ? (onError as Function)() : String(onError),
      field: (onError as any)?.field || rule.fullField
    }
  }
}

/**
 * @description 深度合并对象
 * @param target 目标对象
 * @param sources 源对象
 * @returns 合并后的对象
 */
export function deepMerge(target: Record<string, any>, sources: Record<string, any>): Record<string, any> {
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
