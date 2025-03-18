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

interface ValidationRule {
  required?: boolean
  field: string
  type?: string
}

interface ValidationSource {
  [key: string]: any
}

interface ValidationOptions {
  [key: string]: any
}

type ValidationCallback = (errors: string[]) => void

/**
 * 验证方法的主函数
 * @param rule - 验证规则对象
 * @param checkValue - 需要验证的值
 * @param callback - 验证完成后的回调函数
 * @param source - 包含所有字段值的源对象
 * @param options - 验证选项
 */
export default function validate(
  rule: ValidationRule,
  checkValue: any,
  callback: ValidationCallback,
  source: ValidationSource,
  options: ValidationOptions
): void {
  const validate = rule.required || (!rule.required && hasOwn.call(source, rule.field))
  const errors: string[] = []

  if (validate) {
    if (!rule.required && isEmptyValue(checkValue)) {
      return callback([])
    }

    rules.required({ rule, checkValue, source, errors, options })

    if (checkValue !== undefined) {
      rules.type(rule, checkValue, source, errors, options)
    }
  }

  callback(errors)
}
