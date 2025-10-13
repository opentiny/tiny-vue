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

import { getMiniDecimal, toFixed as roundFixed } from '../bigInt'

// 待移除， 已经从bigInt导出过了
export { roundFixed }

const DECIMAL_SEPARATOR = '.'

/**
 * 将数字转换为整数表示
 * @param {string} number - 要转换的数字
 * @returns {{ value: string | number, exp: number }} 返回值和指数
 */
const asInteger = (number: string): { value: string | number; exp: number } => {
  const tokens = number.split(DECIMAL_SEPARATOR)
  const integer = tokens[0]
  const fractional = tokens[1]
  let value: string | number
  let exp: number

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

/**
 * 生成指定数量的零
 * @param {number} exp - 零的数量
 * @returns {string} 返回零字符串
 */
const zero = (exp: number): string => {
  let result: string

  if (exp <= 0) {
    result = ''
  } else {
    // String.prototype.repeat 总是定义的，所以移除了不必要的条件分支
    result = '0'.repeat(exp)
  }

  return result
}

/**
 * 处理负指数情况
 * @param {string} str - 输入字符串
 * @param {number} position - 位置
 * @returns {string} 处理后的字符串
 */
const negExp = (str: string, position: number): string => {
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

/**
 * 处理正指数情况
 * @param {string} str - 输入字符串
 * @param {number} exp - 指数
 * @returns {string} 处理后的字符串
 */
const posExp = (str: string, exp: number): string => String(str + zero(exp))

/**
 * 格式化数字
 * @param {string | number} num - 数字
 * @param {number} exp - 指数
 * @returns {string} 格式化后的字符串
 */
const format = (num: string | number, exp: number): string => (exp >= 0 ? posExp : negExp)(String(num), exp)

/**
 * Decimal 类的接口定义
 */
interface IDecimal {
  internal: string
  asInt: { value: string | number; exp: number }
  add: (target: number | string | IDecimal) => IDecimal
  sub: (target: number | string | IDecimal) => IDecimal
  mul: (target: number | string | IDecimal) => IDecimal
  div: (target: number | string | IDecimal) => IDecimal
  toString: () => string
  toNumber: () => number
}

/**
 * Decimal 类的静态方法接口
 */
interface DecimalConstructor extends Function {
  (num: number | string | IDecimal): IDecimal
  add: (a: number | string | IDecimal, b: number | string | IDecimal) => IDecimal
  sub: (a: number | string | IDecimal, b: number | string | IDecimal) => IDecimal
  mul: (a: number | string | IDecimal, b: number | string | IDecimal) => IDecimal
  div: (a: number | string | IDecimal, b: number | string | IDecimal) => IDecimal
}

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
 * @param {Number|String|IDecimal} num 数字或字符串代表的数字
 * @returns {IDecimal} Decimal实例
 */
export function Decimal(this: IDecimal | null | undefined, num: number | string | IDecimal): IDecimal {
  if (!this || !(this instanceof Decimal)) {
    return new (Decimal as any)(num) as IDecimal
  }

  if (num instanceof Decimal) {
    return num
  }

  this.internal = String(num)
  this.asInt = asInteger(this.internal)
  this.add = (target) => {
    const operands = [this, new (Decimal as any)(target) as IDecimal]
    operands.sort((x, y) => x.asInt.exp - y.asInt.exp)
    const smallest = operands[0].asInt.exp
    const biggest = operands[1].asInt.exp
    const x = Number(format(operands[1].asInt.value, biggest - smallest))
    const y = Number(operands[0].asInt.value)

    return new (Decimal as any)(format(String(x + y), smallest)) as IDecimal
  }

  this.sub = (target) => new (Decimal as any)(this.add((target as number) * -1)) as IDecimal
  this.mul = (target) => {
    target = new (Decimal as any)(target) as IDecimal
    const result = String(this.asInt.value * target.asInt.value)
    const exp = this.asInt.exp + target.asInt.exp

    return new (Decimal as any)(format(result, exp)) as IDecimal
  }

  this.div = (target) => {
    target = new (Decimal as any)(target) as IDecimal

    const smallest = Math.min(this.asInt.exp, target.asInt.exp)
    const absSmallest = 10 ** Math.abs(smallest)
    const x = (Decimal as DecimalConstructor).mul(absSmallest, this)
    const y = (Decimal as DecimalConstructor).mul(absSmallest, target)

    return new (Decimal as any)(x.toNumber() / y.toNumber()) as IDecimal
  }

  this.toString = () => this.internal
  this.toNumber = () => Number(this.internal)

  return this
}

// 将Decimal作为构造函数
;(Decimal as DecimalConstructor).add = (a, b) => new (Decimal as any)(a).add(b) as IDecimal
;(Decimal as DecimalConstructor).mul = (a, b) => new (Decimal as any)(a).mul(b) as IDecimal
;(Decimal as DecimalConstructor).sub = (a, b) => new (Decimal as any)(a).sub(b) as IDecimal
;(Decimal as DecimalConstructor).div = (a, b) => new (Decimal as any)(a).div(b) as IDecimal

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
 * @param {number} num 需精确计算的数字
 * @param {number} [fraction=0] 浮点数的小数部分，默认0位
 * @returns {string} 格式化后的字符串
 */
export const toFixed = (num: number, fraction = 0): string => {
  const sign = num < 0 ? '-' : ''

  num = Math.abs(num)

  const npmPow = num.toString().length < (2 ** 53).toString().length - 1 ? 10 ** fraction : 10 ** (fraction - 1)
  const result = new (Decimal as any)(Math.round(new (Decimal as any)(num).mul(npmPow))).div(npmPow).toString()

  const numResult = Number(result)

  return numResult ? sign + numResult.toFixed(fraction) : numResult.toFixed(fraction)
}

/**
 * 格式化整数部分
 * @param {string} value 要格式化的值
 * @param {object} options 格式化选项
 * @returns {string} 格式化后的字符串
 */
interface FormatIntegerOptions {
  secondaryGroupSize?: number
  groupSize?: number
  groupSeparator?: string
}

const formatInteger = (
  value: string,
  { secondaryGroupSize = 3, groupSize = 0, groupSeparator = ',' }: FormatIntegerOptions
): string => {
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

/**
 * 反转字符串
 * @param {string} str 要反转的字符串
 * @returns {string} 反转后的字符串
 */
const reverseString = (str: string): string => {
  const arr: string[] = []

  for (let i = 0; i < str.length; i++) {
    arr.push(str[i])
  }

  return arr.reverse().join('')
}

/**
 * 格式化小数部分
 * @param {string} num 要格式化的小数
 * @param {object} options 格式化选项
 * @returns {string} 格式化后的字符串
 */
interface FormatDecimalOptions {
  fractionGroupSize?: number
  fractionGroupSeparator?: string
}

const formatDecimal = (
  num: string,
  { fractionGroupSize = 0, fractionGroupSeparator = '\xA0' }: FormatDecimalOptions
): string => {
  const RE = new RegExp(`\\B(?=(\\d{${fractionGroupSize}})+(?!\\d))`, 'g')

  return reverseString(reverseString(num).replace(RE, fractionGroupSeparator))
}

/**
 * 格式化数字的接口
 */
interface FormatNumberOptions {
  fraction?: number
  rounding?: string
  prefix?: string
  decimalSeparator?: string
  suffix?: string
  zeroize?: boolean
  secondaryGroupSize?: number
  groupSize?: number
  groupSeparator?: string
  fractionGroupSize?: number
  fractionGroupSeparator?: string
}

/**
 * 格式化数字
 * @param {number|string} value 要格式化的数值
 * @param {FormatNumberOptions} format 格式化选项
 * @returns {string} 格式化后的字符串
 */
export const formatNumber = (value: number | string, format: FormatNumberOptions = {}): string => {
  const { fraction, rounding, prefix = '', decimalSeparator = '.', suffix = '' } = format
  let reslut = getMiniDecimal(value)

  if (reslut.isNaN() || !reslut.toString()) {
    return value as string
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

/**
 * 恢复数字
 * @param {number|string} number 要恢复的数字
 * @param {object} format 格式选项
 * @returns {number} 恢复后的数字
 */
export const recoverNumber = (number: number | string, format: FormatNumberOptions = {}): number => {
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
