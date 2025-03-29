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

const ENUM = 'enum'

/**
 * 枚举验证函数
 *
 * @description 验证值是否在指定的枚举范围内
 * @param rule - 验证规则对象，包含验证的字段和验证选项
 * @param checkValue - 需要验证的值
 * @param callback - 回调函数，用于返回验证结果
 * @param source - 数据源对象
 * @param options - 验证选项
 */
export default function (
  rule: {
    field: string
    required?: boolean
    enum?: any[]
    [key: string]: any
  },
  checkValue: any,
  callback: (errors?: any[]) => void,
  source: Record<string, any>,
  options: {
    messages: Record<string, any>
    [key: string]: any
  }
): void {
  const errors: any[] = []
  const validate: boolean = rule.required || (!rule.required && hasOwn.call(source, rule.field))

  if (validate) {
    if (isEmptyValue(checkValue) && !rule.required) {
      return callback()
    }

    rules.required({ rule, checkValue, source, errors, options })

    if (checkValue !== undefined) {
      rules[ENUM](rule, checkValue, source, errors, options)
    }
  }

  callback(errors)
}
