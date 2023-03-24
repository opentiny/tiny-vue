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

import { getMiniDecimal, toFixed as roundFixed } from './bigInt'

export { roundFixed }

const DECIMAL_SEPARATOR = '.'

const asInteger = (number) => {
  const tokens = number.split(DECIMAL_SEPARATOR)
  const integer = tokens[0]
  const fractional = tokens[1]
  let value
  let exp

  if (fractional) {
    value = parseInt(number.split(DECIMAL_SEPARATOR).join(''), 10)
    exp = fractional.length * -1
  } else {
    const trailingZeros = integer.match(/0+$/)
    if (trailingZeros) {
      const length = trailingZeros[0].length
      value = integer.substr(0, integer.length - length)
      exp = length
    } else {
      value = integer
      exp = 0
    }
  }

  return { value, exp }
}

const zero = (exp) => {
  let result

  if (exp <= 0) {
    result = ''
  } else if (String.prototype.repeat) {
    result = '0'.repeat(exp)
  } else {
    result = ((times) => {
      const zeros = []

      for (let i = 0; i < times; i++) {
        zeros.push(0)
      }
      return zeros.join('')
    })(exp)
  }

  return result
}

const negExp = (str, position) => {
  position = Math.abs(position)

  const offset = position - str.length
  let sep = DECIMAL_SEPARATOR

  if (offset >= 0) {
    str = zero(offset) + str
    sep = '0.'
  }

  const length = str.length
  const dif = length - position
  const head = str.substr(0, dif)
  const tail = str.substring(dif, length)

  return head + sep + tail
}

const posExp = (str, exp) => String(str + zero(exp))

const format = (num, exp) => (exp >= 0 ? posExp : negExp)(String(num), exp)

/**
 * Decimal 类，解决 JS 的计算精度问题。
 *
 *     // 加法运算 1.1 + 2.2 = 3.3000000000000003
 *     Decimal.add(1.1, 2.2).toNumber()           // 3.3
 *     new Decimal('1.1').add('2.2').toString()   // "3.3"
 *
 *     // 减法运算 0.3 - 0.1 = 0.19999999999999998
 *     Decimal.sub(0.3, 0.1).toNumber()           // 0.2
 *     new Decimal('0.3').sub('0.1').toString()   // "0.2"
 *
 *     // 乘法运算 4.01 * 2.01 = 8.060099999999998
 *     Decimal.mul(4.01, 2.01).toNumber()         // 8.0601
 *     new Decimal('4.01').mul('2.01').toString() // "8.0601"
 *
 *     // 除法运算 0.3 / 0.1 = 2.9999999999999996
 *     Decimal.div(0.3, 0.1).toNumber()           // 3
 *     new Decimal('0.3').div('0.1').toString()   // "3"
 *
 * @param {Number|String|} num 数字或字符串代表的数字
 * @returns {Number}
 */
export function Decimal(num) {
  if (!this || this.constructor !== Decimal) {
    return new Decimal(num)
  }

  if (num instanceof Decimal) {
    return num
  }

  this.internal = String(num)
  this.asInt = asInteger(this.internal)
  this.add = (target) => {
    const operands = [this, new Decimal(target)]
    operands.sort((x, y) => x.asInt.exp - y.asInt.exp)
    const smallest = operands[0].asInt.exp
    const biggest = operands[1].asInt.exp
    const x = Number(format(operands[1].asInt.value, biggest - smallest))
    const y = Number(operands[0].asInt.value)

    return new Decimal(format(String(x + y), smallest))
  }

  this.sub = (target) => new Decimal(this.add(target * -1))
  this.mul = (target) => {
    target = new Decimal(target)
    const result = String(this.asInt.value * target.asInt.value)
    const exp = this.asInt.exp + target.asInt.exp

    return new Decimal(format(result, exp))
  }

  this.div = (target) => {
    target = new Decimal(target)

    const smallest = Math.min(this.asInt.exp, target.asInt.exp)
    const absSmallest = 10 ** Math.abs(smallest)
    const x = Decimal.mul(absSmallest, this)
    const y = Decimal.mul(absSmallest, target)

    return new Decimal(x / y)
  }

  this.toString = () => this.internal
  this.toNumber = () => Number(this.internal)
}

Decimal.add = (a, b) => new Decimal(a).add(b)
Decimal.mul = (a, b) => new Decimal(a).mul(b)
Decimal.sub = (a, b) => new Decimal(a).sub(b)
Decimal.div = (a, b) => new Decimal(a).div(b)

/**
 * 使用定点表示法表示给定数字的字符串，解决 JS 的计算精度问题。
 *
 *     toFixed(1.1 + 2.2, 2)   // "3.30"
 *     toFixed(0.3 - 0.1, 2)   // "0.20"
 *     toFixed(4.01 * 2.01, 4) // "8.0601"
 *     toFixed(0.3 / 0.1, 2)   // "3.00"
 *     toFixed(0.0001, 2)      // "0.00"
 *     toFixed(0.0001, 3)      // "0.000"
 *     toFixed(0.0001, 4)      // "0.0001"
 *     toFixed(0.0001, 5)      // "0.00010"
 *     toFixed(-0.0001, 2)     // "0.00"
 *     toFixed(-0.0001, 3)     // "0.000"
 *     toFixed(-0.0001, 4)     // "-0.0001"
 *     toFixed(-0.0001, 5)     // "-0.00010"
 *
 * @param {Number} num 需精确计算的数字
 * @param {Number} [fraction=0] 浮点数的小数部分，默认0位
 * @returns {String}
 */
export const toFixed = (num, fraction = 0) => {
  const sign = num < 0 ? '-' : ''

  num = Math.abs(num)

  const npmPow = num.toString().length < (2 ** 53).toString().length - 1 ? 10 ** fraction : 10 ** (fraction - 1)
  const result = new Decimal(Math.round(new Decimal(num).mul(npmPow))).div(npmPow).toString()

  const numResult = Number(result)

  return numResult ? sign + numResult.toFixed(fraction) : numResult.toFixed(fraction)
}

const formatInteger = (value, { secondaryGroupSize = 3, groupSize = 0, groupSeparator = ',' }) => {
  const negative = /^-\d+/.test(value)
  let result = negative ? value.slice(1) : value
  const secSize = secondaryGroupSize || groupSize

  if (groupSize && result.length > groupSize) {
    let left = result.slice(0, 0 - groupSize)
    const right = result.slice(0 - groupSize)

    left = left.replace(new RegExp(`\\B(?=(\\d{${secSize}})+(?!\\d))`, 'g'), groupSeparator)
    result = `${left}${groupSeparator}${right}`
  }

  return `${negative ? '-' : ''}${result}`
}

const reverseString = (str) => {
  const arr = []

  for (let i = 0; i < str.length; i++) {
    arr.push(str[i])
  }

  return arr.reverse().join('')
}

const formatDecimal = (num, { fractionGroupSize = 0, fractionGroupSeparator = '\xA0' }) => {
  const RE = new RegExp(`\\B(?=(\\d{${fractionGroupSize}})+(?!\\d))`, 'g')

  return reverseString(reverseString(num).replace(RE, fractionGroupSeparator))
}

export const formatNumber = (value, format = {}) => {
  const { fraction, rounding, prefix = '', decimalSeparator = '.', suffix = '' } = format
  let reslut = getMiniDecimal(value)

  if (reslut.isNaN() || !reslut.toString()) {
    return value
  }

  reslut = roundFixed(reslut.toString(), fraction, rounding)

  format.zeroize === false && reslut.match(/\./) && (reslut = reslut.replace(/\.?0+$/g, ''))

  const number = reslut
    .toString()
    .split('.')
    .slice(0, 2)
    .map((str, index) => (index ? formatDecimal(str, format) : formatInteger(str, format)))
    .join(decimalSeparator)

  return `${prefix}${number}${suffix}`
}

export const recoverNumber = (number, format = {}) => {
  const { prefix = '', suffix = '', decimalSeparator = '.' } = format
  let result = number

  if (typeof number === 'string') {
    result = number
      .replace(new RegExp(`^${prefix}(.+)${suffix}$`), ($1, $2) => $2)
      .split(decimalSeparator)
      .map((s) => s.replace(/[^\d]/g, ''))
      .join('.')
  }

  return Number(result)
}
