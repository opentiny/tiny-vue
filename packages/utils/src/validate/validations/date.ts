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

import rules from '../rules/index'
import { isEmptyValue } from '../util'
import { hasOwn } from '../../type'

/**
 * 日期验证函数
 *
 * @description 验证字段值是否为有效的日期格式，支持日期对象和日期字符串
 * @param rule - 验证规则对象
 * @param checkValue - 待验证的值
 * @param callback - 验证完成后的回调函数
 * @param source - 包含所有字段的源对象
 * @param options - 验证选项
 */
export default function dateValidator(
  rule: {
    required?: boolean
    field: string
    type?: string
    min?: number
    max?: number
    [key: string]: any
  },
  checkValue: any,
  callback: (errors?: any[]) => void,
  source: Record<string, any>,
  options: Record<string, any>
): void {
  const errors: any[] = []
  const validate: boolean = rule.required || (!rule.required && hasOwn.call(source, rule.field))

  /**
   * 判断是否为有效的日期字符串
   * @param value - 待检查的值
   * @returns 是否为有效的日期字符串
   */
  const isValidDateStr = (value: any): boolean =>
    value && typeof value === 'string' && new Date(value).toString() !== 'Invalid Date'

  if (validate) {
    if (isEmptyValue(checkValue) && !rule.required) {
      return callback()
    }

    rules.required({ rule, checkValue, source, errors, options })

    if (!isEmptyValue(checkValue)) {
      let dateObject: Date

      if (typeof checkValue === 'number' || isValidDateStr(checkValue)) {
        dateObject = new Date(checkValue)
      } else {
        dateObject = checkValue
      }

      rules.type(rule, dateObject, source, errors, options)

      if (dateObject && typeof dateObject.getTime === 'function') {
        rules.range(rule, dateObject.getTime(), source, errors, options)
      }
    }
  }

  callback(errors)
}
