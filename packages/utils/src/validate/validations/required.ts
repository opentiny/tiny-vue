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

/**
 * 必填验证函数
 *
 * 检查字段是否满足必填要求。根据值的类型（数组或其他类型）应用相应的验证规则，
 * 并将验证结果通过回调函数返回。
 *
 * @param rule - 验证规则对象
 * @param checkValue - 需要验证的值
 * @param callback - 回调函数，用于返回验证错误
 * @param source - 包含所有字段的源对象
 * @param options - 验证选项，包括错误消息等配置
 */
export default function (
  rule: Record<string, any>,
  checkValue: any,
  callback: (errors: any[]) => void,
  source: Record<string, any>,
  options: Record<string, any>
): void {
  const errors: any[] = []
  const type: string = Array.isArray(checkValue) ? 'array' : typeof checkValue

  rules.required({ rule, checkValue, source, errors, options, type })
  callback(errors)
}
