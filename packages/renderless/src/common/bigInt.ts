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

import { fillChar } from './string'
import { isBrowser } from './browser'

const BigInt = isBrowser ? window.BigInt : global.BigInt

export function supportBigInt() {
  return typeof BigInt === 'function'
}

export function trimNumber(numStr) {
  let string = numStr.toString().trim()
  let negative = string.startsWith('-')

  if (negative) {
    string = string.slice(1)
  }

  string = string // Remove decimal 0. `1.000` => `1.`, `1.100` => `1.1`
    .replace(/(\.\d*[^0])0*$/, '$1') // Remove useless decimal. `1.` => `1`
    .replace(/\.0*$/, '') // Remove integer 0. `0001` => `1`, 000.1' => `.1`
    .replace(/^0+/, '')

  if (string.startsWith('.')) {
    string = '0'.concat(string)
  }

  let trimStr = string || '0'
  let splitNumber = trimStr.split('.')
  let integerStr = splitNumber[0] || '0'
  let decimalStr = splitNumber[1] || '0'

  if (integerStr === '0' && decimalStr === '0') {
    negative = false
  }

  let negativeStr = negative ? '-' : ''

  return {
    negative,
    negativeStr,
    trimStr,
    integerStr,
    decimalStr,
    fullStr: ''.concat(negativeStr).concat(trimStr)
  }
}

export function isE(number) {
  let str = String(number)
  return !isNaN(Number(str)) && ~str.indexOf('e')
}

export function validateNumber(num) {
  if (typeof num === 'number') {
    return !isNaN(num)
  } // Empty

  if (!num) {
    return false
  }

  return (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(num) || // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(num) || // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(num)
  )
}

/**
 * [Legacy] Convert 1e-9 to 0.000000001.
 * This may lose some precision if user really want 1e-9.
 */

export function getNumberPrecision(number) {
  let numStr = String(number)

  if (isE(number)) {
    let precision = Number(numStr.slice(numStr.indexOf('e-') + 2))
    let decimalMatch = numStr.match(/\.(\d+)/)

    if (decimalMatch === null || decimalMatch === void 0 ? void 0 : decimalMatch[1]) {
      precision += decimalMatch[1].length
    }

    return precision
  }

  return ~numStr.indexOf('.') && validateNumber(numStr) ? numStr.length - numStr.indexOf('.') - 1 : 0
}

/**
 * Convert number (includes scientific notation) to -xxx.yyy format
 */

export function num2str(number) {
  let numStr = String(number)

  if (isE(number)) {
    if (number > Number.MAX_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MAX_SAFE_INTEGER)
    }

    if (number < Number.MIN_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MIN_SAFE_INTEGER)
    }

    numStr = number.toFixed(getNumberPrecision(numStr))
  }

  return trimNumber(numStr).fullStr
}

function pluginDecimal(decimal) {
  if (!decimal.add) {
    Object.assign(decimal, {
      add: decimal.plus,
      lessEquals: decimal.isLessThan,
      equals: decimal.isEqualTo
    })
  }

  return decimal
}

const DecimalCls = {
  CLS: null
}

let setDecimalClass

export function getMiniDecimal(value, decimal) {
  // We use BigInt here. Will fallback to Number if not support.
  if (!DecimalCls.CLS) {
    setDecimalClass(decimal)
  }

  return pluginDecimal(new DecimalCls.CLS(value))
}

export class BigIntDecimal {
  constructor(value) {
    if ((!value && value !== 0) || !String(value).trim()) {
      this.empty = true
      return
    }

    this.origin = String(value)
    this.negative = void 0
    this.integer = void 0
    this.decimal = void 0
    this.decimalLen = void 0
    this.empty = void 0
    this.nan = void 0

    if (value === '-') {
      this.nan = true

      return
    }

    let mergedValue = isE(value) ? Number(value) : value

    if (typeof mergedValue !== 'string') {
      num2str(mergedValue)
    }
    const f = Function
    const convertBigInt = (str) => {
      // 将以多个零开头的整数前置零清空 '0000000000000003e+21' --> '3e+21' ,解决BigInt(0000000000000003e+21)报错问题
      const validStr = str.replace(/^0+/, '') || '0'
      return f(`return BigInt(${validStr})`)()
    }
    if (validateNumber(mergedValue)) {
      const trimRet = trimNumber(mergedValue)
      this.negative = trimRet.negative
      const numbers = trimRet.trimStr.split('.')
      this.integer = BigInt(numbers[0])
      const decimalStr = numbers[1] || '0'
      this.decimal = convertBigInt(decimalStr)
      this.decimalLen = decimalStr.length
    } else {
      this.nan = true
    }
  }

  getDecimalStr() {
    return this.decimal.toString().padStart(this.decimalLen, '0')
  }

  getIntegerStr() {
    return this.integer.toString()
  }

  getMark() {
    return this.negative ? '-' : ''
  }

  /**
   * Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
   * This is used for add function only.
   */
  alignDecimal(decimalLength) {
    const string = `${this.getMark()}${this.getIntegerStr()}${this.getDecimalStr().padEnd(decimalLength, '0')}`

    return BigInt(string)
  }

  add(value) {
    if (this.isInvalidate()) {
      return new BigIntDecimal(value)
    }

    const offsetObj = new BigIntDecimal(value)
    if (offsetObj.isInvalidate()) {
      return this
    }

    const maxDecimalLength = Math.max(this.getDecimalStr().length, offsetObj.getDecimalStr().length)
    const offsetAlignedDecimal = offsetObj.alignDecimal(maxDecimalLength)
    const myAlignedDecimal = this.alignDecimal(maxDecimalLength)

    const valueStr = `${myAlignedDecimal + offsetAlignedDecimal}`

    const { negativeStr: str, trimStr } = trimNumber(valueStr)
    const hydrateValueStr = `${str}${trimStr.padStart(maxDecimalLength + 1, '0')}`

    return getMiniDecimal(`${hydrateValueStr.slice(0, -maxDecimalLength)}.${hydrateValueStr.slice(-maxDecimalLength)}`)
  }

  negate() {
    const clone = new BigIntDecimal(this.toString())
    clone.negative = !clone.negative

    return clone
  }

  isNaN() {
    return this.nan
  }

  isEmpty() {
    return this.empty
  }

  isInvalidate() {
    return this.isEmpty() || this.isNaN()
  }

  lessEquals(target) {
    return this.add(target.negate().toString()).toNumber() <= 0
  }

  equals(target) {
    return this.toString() === (target && target.toString())
  }

  toNumber() {
    if (this.isNaN()) {
      return NaN
    }

    return Number(this.toString())
  }

  toString(safe = true) {
    if (!safe) {
      return this.origin
    }

    if (this.isInvalidate()) {
      return ''
    }

    return trimNumber(`${this.getMark()}${this.getIntegerStr()}.${this.getDecimalStr()}`).fullStr
  }
}

export class NumberDecimal {
  constructor(value = '') {
    if ((!value && value !== 0) || !String(value).trim()) {
      this.empty = true
      return
    }
    this.origin = ''
    this.number = void 0
    this.empty = void 0

    this.origin = String(value)
    this.number = Number(value)
  }

  negate() {
    return new NumberDecimal(-this.toNumber())
  }

  add(value) {
    if (this.isInvalidate()) {
      return new NumberDecimal(value)
    }

    const target = Number(value)

    if (isNaN(target)) {
      return this
    }

    const number = this.number + target

    if (number < Number.MIN_SAFE_INTEGER) {
      return new NumberDecimal(Number.MIN_SAFE_INTEGER)
    }

    if (number > Number.MAX_SAFE_INTEGER) {
      return new NumberDecimal(Number.MAX_SAFE_INTEGER)
    }

    const maxPrecision = Math.max(getNumberPrecision(target), getNumberPrecision(this.number))
    return new NumberDecimal(number.toFixed(maxPrecision))
  }

  isNaN() {
    return isNaN(this.number)
  }

  isEmpty() {
    return this.empty
  }

  isInvalidate() {
    return this.isEmpty() || this.isNaN()
  }

  equals(target) {
    return this.toNumber() === (target && target.toNumber())
  }

  lessEquals(target) {
    return this.add(target.negate().toString()).toNumber() <= 0
  }

  toNumber() {
    return this.number
  }

  toString(safe = true) {
    if (!safe) {
      return this.origin
    }

    if (this.isInvalidate()) {
      return ''
    }

    return num2str(this.number)
  }
}

setDecimalClass = function (decimaljs) {
  DecimalCls.CLS = supportBigInt() ? BigIntDecimal : typeof decimaljs === 'function' ? decimaljs : NumberDecimal
}

export { setDecimalClass }

export function lessEquals(value1, value2) {
  return getMiniDecimal(value1).lessEquals(getMiniDecimal(value2))
}

export function equalsDecimal(value1, value2) {
  return getMiniDecimal(value1).equals(getMiniDecimal(value2))
}

export function toFixed(numStr, precision, rounding = 5) {
  if (numStr === '') {
    return ''
  }
  const separatorStr = '.'
  const { negativeStr, integerStr, decimalStr } = trimNumber(numStr)
  const precisionDecimalStr = `${separatorStr}${decimalStr}`
  const numberWithoutDecimal = `${negativeStr}${integerStr}`

  if (precision >= 0) {
    // We will get last + 1 number to check if need advanced number
    const advancedNum = Number(decimalStr[precision])

    if (advancedNum >= rounding && rounding !== 0) {
      const advancedDecimal = getMiniDecimal(`${integerStr}${separatorStr}${decimalStr}`).add(`0.${fillChar('', precision, true)}${10 - advancedNum}`)

      return toFixed(negativeStr + advancedDecimal.toString(), precision, 0)
    }

    if (precision === 0) {
      return numberWithoutDecimal
    }

    return `${numberWithoutDecimal}${separatorStr}${fillChar(decimalStr, precision, true).slice(0, precision)}`
  }

  if (precisionDecimalStr === '.0') {
    return numberWithoutDecimal
  }

  return `${numberWithoutDecimal}${precisionDecimalStr}`
}
