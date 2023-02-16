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
const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g

export default function (string, ...args) {
  if (args.length === 1 && typeof args[0] === 'object') {
    args = args[0]
  }

  if (!args || !args.hasOwnProperty) {
    args = {}
  }

  return string.replace(RE_NARGS, (match, prefix, i, index) => {
    let result

    if (string[index - 1] === '{' && string[index + match.length] === '}') {
      return i
    } else {
      result = Object.prototype.hasOwnProperty.call(args, i) ? args[i] : null

      if (result === null || result === undefined) {
        return ''
      }

      return result
    }
  })
}
