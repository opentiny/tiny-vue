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
 * 模式校验函数
 *
 * @description 根据规则验证值是否匹配指定的模式（正则表达式）
 * @param rule 校验规则对象，包含校验字段和条件
 * @param checkValue 需要校验的值
 * @param callback 校验完成后的回调函数
 * @param source 包含校验字段的源对象
 * @param options 校验选项
 * @returns void
 */
export default function pattern(
  rule: {
    field: string
    required?: boolean
    pattern?: RegExp | string
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
  const validate = rule.required || (!rule.required && hasOwn.call(source, rule.field))

  if (validate) {
    if (isEmptyValue(checkValue, 'string') && !rule.required) {
      return callback()
    }

    rules.required({ rule, checkValue, source, errors, options })

    if (!isEmptyValue(checkValue, 'string')) {
      rules.pattern(rule, checkValue, source, errors, options)
    }
  }

  callback(errors)
}
