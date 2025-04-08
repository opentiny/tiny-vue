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
 * 整数验证函数，用于验证输入值是否符合整数规则
 *
 * @param rule - 验证规则对象，包含验证所需的各种属性
 * @param checkValue - 待验证的值
 * @param callback - 回调函数，用于返回验证结果
 * @param source - 包含所有字段值的源对象
 * @param options - 验证选项
 *
 * 验证流程：
 * 1. 如果字段未提供且非必填，则验证通过
 * 2. 检查是否满足必填规则
 * 3. 检查值的类型是否为整数
 * 4. 检查值是否在指定范围内
 */
export default function (
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
    if (isEmptyValue(checkValue) && !rule.required) {
      return callback()
    }

    rules.required({ rule, checkValue, source, errors, options })

    if (checkValue !== undefined && checkValue !== '') {
      rules.type(rule, checkValue, source, errors, options)
      rules.range(rule, checkValue, source, errors, options)
    }
  }

  callback(errors)
}
