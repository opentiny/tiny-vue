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
import required from './required'
import { format } from '../../date'
import { isNullOrEmpty } from '../../string'
import { isNumber, isObject, isDate, typeOf } from '../../type'

const emailReg1 = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))'
const emailReg = new RegExp(
  emailReg1 + '@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,6}))$'
)

const pattern = {
  acceptImg: /\.(png|jpe?g|gif)$/,
  acceptFile: /\.(doc?x|xls?x|ppt?x|txt)$/,
  email: emailReg,
  fileSize: /^\d+(\.\d+)?[KMGTPEZY]?B$/i,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  speczh: /^[0-9a-zA-Z_\u4E00-\u9FA5]+$/,
  specialch: /^[0-9a-zA-Z_\-.]+$/,
  specialch2: /^[0-9a-zA-Z_-]+$/,
  url: /^([a-zA-Z]{3,}):\/\/([\w-]+\.)+[\w]+(\/[a-zA-Z- ./?%&=]*)?/i,
  version: /^\d+\.\d+(\.\d+)*$/
}

const types = {
  integer: (value) => types.number(value) && parseInt(value, 10) === value,
  float: (value) => types.number(value) && !types.integer(value),
  array: Array.isArray,
  regexp(value) {
    if (value instanceof RegExp) {
      return true
    }
    try {
      return !!new RegExp(value)
    } catch (e) {
      return false
    }
  },
  date: isDate,
  number: isNumber,
  object: (value) => isObject(value) && !types.array(value),
  method: (value) => typeOf(value) === 'function',

  email: (value) => isNullOrEmpty(value) || (!!value.match(pattern.email) && value.length < 255),

  url: (value) => isNullOrEmpty(value) || !!value.match(pattern.url),
  hex: (value) => isNullOrEmpty(value) || !!value.match(pattern.hex),
  digits: (value) => isNullOrEmpty(value) || /^\d+$/.test(value),

  time: (value) => isNullOrEmpty(value) || /^((0)[0-9]|1[0-9]|20|21|22|23):([0-5][0-9])$/.test(value),

  dateYM: (value) => isNullOrEmpty(value) || format(value, 'yyyy-MM') === value,

  dateYMD: (value) => isNullOrEmpty(value) || format(value, 'yyyy-MM-dd') === value,

  dateTime: (value) => isNullOrEmpty(value) || format(value, 'yyyy-MM-dd hh:mm') === value,

  longDateTime: (value) => isNullOrEmpty(value) || format(value, 'yyyy-MM-dd hh:mm:ss') === value,

  version: (value) => isNullOrEmpty(value) || !!value.match(pattern.version),
  speczh: (value) => isNullOrEmpty(value) || !!value.match(pattern.speczh),

  specialch: (value) => isNullOrEmpty(value) || !!value.match(pattern.specialch),

  specialch2: (value) => isNullOrEmpty(value) || !!value.match(pattern.specialch2),

  acceptImg: (value) => isNullOrEmpty(value) || !!value.match(pattern.acceptImg),

  acceptFile: (value) => isNullOrEmpty(value) || !!value.match(pattern.acceptFile),

  fileSize: (value) => isNullOrEmpty(value) || !!value.match(pattern.fileSize)
}

export default function (rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options)
    return
  }

  const custom = [
    'array',
    'acceptImg',
    'acceptFile',
    'date',
    'digits',
    'dateTime',
    'dateYM',
    'dateYMD',
    'email',
    'float',
    'fileSize',
    'hex',
    'integer',
    'longDateTime',
    'method',
    'number',
    'object',
    'regexp',
    'speczh',
    'specialch',
    'specialch2',
    'time',
    'version',
    'url'
  ]

  const ruleType = rule.type

  if (custom.includes(ruleType)) {
    if (!types[ruleType](value)) {
      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type))
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type))
  }
}
