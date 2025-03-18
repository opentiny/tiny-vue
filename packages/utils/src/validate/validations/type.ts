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
 * 类型验证函数
 *
 * 根据规则验证数据类型，如果数据为空且非必填则直接通过，否则进行类型校验
 *
 * @param rule - 验证规则对象，包含类型、是否必填等信息
 * @param checkValue - 需要验证的值
 * @param callback - 回调函数，用于返回验证结果
 * @param source - 源数据对象
 * @param options - 验证选项配置
 */
export default function (
  rule: {
    type: string
    required?: boolean
    field: string
    [key: string]: any
  },
  checkValue: any,
  callback: (errors?: any[]) => void,
  source: Record<string, any>,
  options: Record<string, any>
): void {
  const ruleType = rule.type
  const errors: any[] = []
  const validate = rule.required || (!rule.required && hasOwn.call(source, rule.field))

  if (validate) {
    if (isEmptyValue(checkValue, ruleType) && !rule.required) {
      return callback()
    }

    rules.required({
      rule,
      checkValue,
      source,
      errors,
      options,
      type: ruleType
    })

    if (!isEmptyValue(checkValue, ruleType)) {
      rules.type(rule, checkValue, source, errors, options)
    }
  }

  callback(errors)
}
