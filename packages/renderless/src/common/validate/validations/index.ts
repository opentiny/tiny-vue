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

import date from './date'
import type from './type'
import float from './float'
import array from './array'
import string from './string'
import method from './method'
import number from './number'
import integer from './integer'
import pattern from './pattern'
import required from './required'
import enumValidator from './enum'

export default {
  date,
  float,
  array,
  string,
  method,
  number,
  integer,
  pattern,
  required,
  hex: type,
  url: type,
  time: type,
  email: type,
  digits: type,
  dateYM: type,
  speczh: type,
  dateYMD: type,
  version: type,
  fileSize: type,
  regexp: method,
  object: method,
  dateTime: type,
  specialch: type,
  boolean: method,
  acceptImg: type,
  specialch2: type,
  acceptFile: type,
  longDateTime: type,
  enum: enumValidator
}
