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

export default function (rule, checkValue, callback, source, options) {
  const validate = rule.required || (!rule.required && hasOwn.call(source, rule.field))
  const errors = []

  if (validate) {
    if (!rule.required && isEmptyValue(checkValue)) {
      return callback()
    }

    rules.required({ rule, checkValue, source, errors, options })

    if (undefined !== checkValue) {
      rules.type(rule, checkValue, source, errors, options)
    }
  }

  callback(errors)
}
