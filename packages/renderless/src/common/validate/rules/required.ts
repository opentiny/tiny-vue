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
import { hasOwn } from '../../type'

export default function ({ rule, checkValue, source, errors, options, type }) {
  if (rule.required && (!hasOwn.call(source, rule.field) || util.isEmptyValue(checkValue, type || rule.type))) {
    errors.push(util.format(options.messages.required, rule.fullField))
  }
}
