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
 * 浮点数验证函数
 *
 * @description 验证字段是否为有效的浮点数，并检查其范围
 * @param rule 验证规则对象，包含验证条件如required、type和范围限制
 * @param checkValue 需要验证的值
 * @param cb 回调函数，用于返回验证结果
 * @param source 包含所有字段的源对象
 * @param options 验证选项
 */
export default function float(
  rule: {
    required?: boolean
    field: string
    type?: string
    min?: number
    max?: number
    [key: string]: any
  },
  checkValue: any,
  cb: (errors?: any[]) => void,
  source: Record<string, any>,
  options?: Record<string, any>
): void {
  const errors: any[] = []
  const validate = rule.required || (!rule.required && hasOwn.call(source, rule.field))

  if (validate) {
    if (isEmptyValue(checkValue) && !rule.required) {
      return cb()
    }

    rules.required({ rule, checkValue, source, errors, options })

    if (checkValue !== undefined) {
      rules.type(rule, checkValue, source, errors, options)
      rules.range(rule, checkValue, source, errors, options)
    }
  }

  cb(errors)
}
