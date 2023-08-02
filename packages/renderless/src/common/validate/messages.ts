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

const getTypesObj = (translate) => ({
  string: translate('validation.types.string'),
  method: translate('validation.types.method'),
  array: translate('validation.types.array'),
  object: translate('validation.types.object'),
  number: translate('validation.types.number'),
  date: translate('validation.types.date'),
  boolean: translate('validation.types.boolean'),
  integer: translate('validation.types.integer'),
  float: translate('validation.types.float'),
  regexp: translate('validation.types.regexp'),
  email: translate('validation.types.email'),
  url: translate('validation.types.url'),
  hex: translate('validation.types.hex'),
  digits: translate('validation.types.digits'),
  time: translate('validation.types.time'),
  dateYM: translate('validation.types.dateYM'),
  dateYMD: translate('validation.types.dateYMD'),
  dateTime: translate('validation.types.dateTime'),
  longDateTime: translate('validation.types.longDateTime'),
  version: translate('validation.types.version'),
  speczh: translate('validation.types.speczh'),
  specialch: translate('validation.types.specialch'),
  specialch2: translate('validation.types.hex'),
  acceptImg: translate('validation.types.acceptImg'),
  acceptFile: translate('validation.types.acceptFile'),
  fileSize: translate('validation.types.fileSize')
})
export default (translate = (value) => value) => ({
  default: translate('validation.default'),
  required: translate('validation.required'),
  enum: translate('validation.enum'),
  whitespace: translate('validation.whitespace'),
  date: {
    format: translate('validation.date.format'),
    parse: translate('validation.date.parse'),
    invalid: translate('validation.date.invalid')
  },
  types: getTypesObj(translate),
  string: {
    len: translate('validation.string.len'),
    min: translate('validation.string.min'),
    max: translate('validation.string.max'),
    range: translate('validation.string.range')
  },
  number: {
    len: translate('validation.number.len'),
    min: translate('validation.number.min'),
    max: translate('validation.number.max'),
    range: translate('validation.number.range')
  },
  array: {
    len: translate('validation.array.len'),
    min: translate('validation.array.min'),
    max: translate('validation.array.max'),
    range: translate('validation.array.range')
  },
  pattern: {
    mismatch: translate('validation.pattern.mismatch')
  }
})
