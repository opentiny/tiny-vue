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

export default function (rule, checkValue, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0

      if (!rule.pattern.test(checkValue)) {
        errors.push(util.format(options.messages.pattern.mismatch, '', checkValue, rule.pattern))
      }
    } else if (typeof rule.pattern === 'string') {
      const _pattern = new RegExp(rule.pattern)

      if (!_pattern.test(checkValue)) {
        errors.push(util.format(options.messages.pattern.mismatch, '', checkValue, rule.pattern))
      }
    }
  }
}
