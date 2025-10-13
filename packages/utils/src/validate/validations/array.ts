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
 * 数组验证函数
 *
 * @description 验证目标值是否符合数组规则要求，支持必填验证、类型验证和范围验证
 * @param rule - 验证规则对象，包含验证条件
 * @param checkValue - 需要验证的值
 * @param callback - 验证完成后的回调函数
 * @param source - 验证源对象，包含所有需要验证的字段
 * @param options - 验证选项配置
 * @returns void
 */
export default function arrayValidation(
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
  const validate = rule.required || (!rule.required && hasOwn.call(source, rule.field))

  if (validate) {
    if (isEmptyValue(checkValue, 'array') && !rule.required) {
      return callback()
    }

    rules.required({ rule, checkValue, source, errors, options, type: 'array' })

    if (!isEmptyValue(checkValue, 'array')) {
      rules.type(rule, checkValue, source, errors, options)
      rules.range(rule, checkValue, source, errors, options)
    }
  }

  callback(errors)
}
