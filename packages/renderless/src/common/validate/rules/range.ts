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

import * as util from '../util'
import { isNumber } from '../../type'
import { getLength } from '../../string'

function getErro({ min, max, val, key, rule, errors, util, options }) {
  if (min && !max && val < rule.min) {
    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min))
  } else if (max && !min && val > rule.max) {
    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max))
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max))
  }
}

export default function (rule, checkValue, source, errors, options) {
  const len = isNumber(rule.len)
  const min = isNumber(rule.min)
  const max = isNumber(rule.max)
  let val = checkValue
  let key = null
  const num = isNumber(checkValue)
  const str = typeof checkValue === 'string'
  const arr = Array.isArray(checkValue)

  if (num) {
    key = 'number'
  } else if (str) {
    key = 'string'
  } else if (arr) {
    key = 'array'
  }

  if (!key) {
    return false
  }

  if (arr) {
    val = checkValue.length
  }

  if (str) {
    val = getLength(checkValue, 'string')
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len))
    }
  } else {
    getErro({ min, max, val, key, rule, errors, util, options })
  }
}
