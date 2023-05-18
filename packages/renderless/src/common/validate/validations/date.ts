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
  const errors = []
  const validate = rule.required || (!rule.required && hasOwn.call(source, rule.field))
  const isValidDateStr = (value) => value && typeof value === 'string' && new Date(value).toString() !== 'Invalid Date'

  if (validate) {
    if (isEmptyValue(checkValue) && !rule.required) {
      return callback()
    }

    rules.required({ rule, checkValue, source, errors, options })

    if (!isEmptyValue(checkValue)) {
      let dateObject

      if (typeof checkValue === 'number' || isValidDateStr(checkValue)) {
        dateObject = new Date(checkValue)
      } else {
        dateObject = checkValue
      }

      rules.type(rule, dateObject, source, errors, options)

      if (dateObject && typeof dateObject.getTime === 'function') {
        rules.range(rule, dateObject.getTime(), source, errors, options)
      }
    }
  }

  callback(errors)
}
