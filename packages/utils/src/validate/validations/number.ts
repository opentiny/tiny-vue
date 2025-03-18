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
 * 数字类型验证函数
 *
 * @description 用于验证数字类型字段是否符合规则，包括必填、类型和范围验证
 * @param rule - 验证规则对象
 * @param checkValue - 需要验证的值
 * @param callback - 验证完成后的回调函数，传入错误数组
 * @param source - 包含所有字段的源对象
 * @param options - 验证选项
 * @returns void
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
  options?: Record<string, any>
): void {
  const errors: any[] = []
  const validate = rule.required || (!rule.required && hasOwn.call(source, rule.field))

  if (validate) {
    if (checkValue === '') {
      checkValue = undefined
    }

    if (!rule.required && isEmptyValue(checkValue)) {
      return callback()
    }

    rules.required({ rule, checkValue, source, errors, options })

    if (checkValue !== undefined) {
      rules.type(rule, checkValue, source, errors, options)
      rules.range(rule, checkValue, source, errors, options)
    }
  }

  callback(errors)
}
