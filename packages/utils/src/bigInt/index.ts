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

import { fillChar } from '../string'

/**
 * 检查环境是否支持BigInt
 * @returns {boolean} 是否支持BigInt
 */
export function supportBigInt(): boolean {
  return typeof BigInt === 'function'
}

/**
 * 格式化数字字符串
 * @param {string | number} numStr 要格式化的数字或字符串
 * @returns {Object} 格式化后的对象，包含各种数字信息
 */
export function trimNumber(numStr: string | number): {
  negative: boolean
  negativeStr: string
  trimStr: string
  integerStr: string
  decimalStr: string
  fullStr: string
} {
  let string = numStr.toString().trim()
  let negative = string.startsWith('-')

  if (negative) {
    string = string.slice(1)
  }

  string = string // 删除小数点后的0。如 `1.000` => `1.`，`1.100` => `1.1`
    .replace(/(\.\d*[^0])0*$/, '$1') // 移除无用的小数点。如 `1.` => `1`
    .replace(/\.0*$/, '') // 移除整数前的0。如 `0001` => `1`，`000.1` => `.1`
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

/**
 * 检查数字是否为科学计数法格式
 * @param {string | number} number 要检查的数字
 * @returns {boolean} 是否为科学计数法格式
 */
export function isE(number: string | number): boolean {
  let str = String(number)
  return !isNaN(Number(str)) && str.includes('e')
}

/**
 * 验证字符串是否为有效的数字格式
 * @param {string | number | null | undefined} num 要验证的数字或字符串
 * @returns {boolean} 是否为有效的数字格式
 */
export function validateNumber(num: string | number | null | undefined): boolean {
  if (typeof num === 'number') {
    return !isNaN(num)
  } // 空值

  if (!num) {
    return false
  }

  return (
    // 普通数字格式: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(num) || // 前置数字: 1.
    /^\s*-?\d+\.\s*$/.test(num) || // 后置数字: .1
    /^\s*-?\.\d+\s*$/.test(num)
  )
}

/**
 * 获取数字精度（小数位数）
 * [Legacy] 将科学计数法 1e-9 转换为 0.000000001。
 * 注意：如果用户真的需要 1e-9，可能会损失一些精度
 * @param {string | number} number 要检查的数字
 * @returns {number} 小数位数
 */
export function getNumberPrecision(number: string | number): number {
  let numStr = String(number)

  if (isE(number)) {
    let precision = Number(numStr.slice(numStr.indexOf('e-') + 2))
    let decimalMatch = numStr.match(/\.(\d+)/)

    if (decimalMatch?.[1]) {
      precision += decimalMatch[1].length
    }

    return precision
  }

  return numStr.includes('.') && validateNumber(numStr) ? numStr.length - numStr.indexOf('.') - 1 : 0
}

/**
 * 将数字（包括科学计数法）转换为 -xxx.yyy 格式
 * @param {string | number} number 要转换的数字
 * @returns {string} 转换后的字符串
 */
export function num2str(number: string | number): string {
  let numStr = String(number)

  if (isE(number)) {
    if (typeof number === 'number' && number > Number.MAX_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MAX_SAFE_INTEGER)
    }

    if (typeof number === 'number' && number < Number.MIN_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MIN_SAFE_INTEGER)
    }

    if (typeof number === 'number') {
      numStr = number.toFixed(getNumberPrecision(numStr))
    }
  }

  return trimNumber(numStr).fullStr
}

/**
 * 为decimal对象添加别名方法
 * @param {any} decimal 要处理的decimal对象
 * @returns {any} 处理后的对象
 */
function pluginDecimal(decimal: any): any {
  if (!decimal.add) {
    Object.assign(decimal, {
      add: decimal.plus,
      lessEquals: decimal.isLessThan,
      equals: decimal.isEqualTo
    })
  }

  return decimal
}

/**
 * Decimal类型存储
 */
const DecimalCls: { CLS: any } = {
  CLS: null
}

/**
 * 获取迷你Decimal实例
 * @param {string | number} value 数值
 * @param {any} decimal 可选的decimal库
 * @returns {any} decimal实例
 */
export function getMiniDecimal(value: string | number, decimal?: any): any {
  // 这里使用BigInt，如果不支持会回退到Number
  if (!DecimalCls.CLS) {
    setDecimalClass(decimal)
  }

  return pluginDecimal(new DecimalCls.CLS(value))
}

/**
 * 大整数小数处理类
 */
export class BigIntDecimal {
  /** 是否为空 */
  empty?: boolean
  /** 原始值 */
  origin!: string
  /** 是否为负数 */
  negative?: boolean
  /** 整数部分 */
  integer?: bigint | string
  /** 小数部分 */
  decimal?: bigint
  /** 小数长度 */
  decimalLen?: number
  /** 是否为NaN */
  nan?: boolean

  /**
   * 构造函数
   * @param {string | number} value 数值
   */
  constructor(value: string | number) {
    if ((!value && value !== 0) || !String(value).trim()) {
      this.empty = true
      this.origin = String(value || '')
      return
    }

    this.origin = String(value)
    this.negative = undefined
    this.integer = undefined
    this.decimal = undefined
    this.decimalLen = undefined
    this.empty = undefined
    this.nan = undefined

    if (value === '-') {
      this.nan = true

      return
    }

    let mergedValue = isE(value) ? Number(value) : value

    if (typeof mergedValue !== 'string') {
      num2str(mergedValue)
    }
    const f = Function
    const convertBigInt = (str: string): bigint => {
      // 将以多个零开头的整数前置零清空 '0000000000000003e+21' --> '3e+21' ,解决BigInt(0000000000000003e+21)报错问题
      const validStr = str.replace(/^0+/, '') || '0'
      return f(`return BigInt('${validStr}')`)()
    }
    if (validateNumber(mergedValue)) {
      const trimRet = trimNumber(mergedValue)
      this.negative = trimRet.negative
      const numbers = trimRet.trimStr.split('.')
      this.integer = !numbers[0].includes('e') ? BigInt(numbers[0]) : numbers[0]
      const decimalStr = numbers[1] || '0'

      // 如果小数点后有科学计数法，需要特殊处理，如果是正常数字则保留之前逻辑
      this.decimal = decimalStr.includes('e') ? convertBigInt(decimalStr) : BigInt(decimalStr)
      this.decimalLen = decimalStr.length
    } else {
      this.nan = true
    }
  }

  /**
   * 获取小数部分字符串
   * @returns {string} 小数部分字符串
   */
  getDecimalStr(): string {
    return this.decimal!.toString().padStart(this.decimalLen!, '0')
  }

  /**
   * 获取整数部分字符串
   * @returns {string} 整数部分字符串
   */
  getIntegerStr(): string {
    return this.integer!.toString()
  }

  /**
   * 获取数字符号
   * @returns {string} 负号或空字符串
   */
  getMark(): string {
    return this.negative ? '-' : ''
  }

  /**
   * 对齐小数位，例如：12.3 + 5 = 1230000
   * 这仅用于add函数
   * @param {number} decimalLength 小数长度
   * @returns {bigint} 对齐后的BigInt
   */
  alignDecimal(decimalLength: number): bigint {
    const string = `${this.getMark()}${this.getIntegerStr()}${this.getDecimalStr().padEnd(decimalLength, '0')}`

    return BigInt(string)
  }

  /**
   * 加法操作
   * @param {string | number} value 要添加的值
   * @returns {BigIntDecimal} 计算结果
   */
  add(value: string | number): BigIntDecimal {
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

    return getMiniDecimal(
      `${hydrateValueStr.slice(0, -maxDecimalLength)}.${hydrateValueStr.slice(-maxDecimalLength)}`,
      undefined
    )
  }

  /**
   * 取反操作
   * @returns {BigIntDecimal} 取反后的值
   */
  negate(): BigIntDecimal {
    const clone = new BigIntDecimal(this.toString())
    clone.negative = !clone.negative

    return clone
  }

  /**
   * 检查是否为NaN
   * @returns {boolean} 是否为NaN
   */
  isNaN(): boolean {
    return this.nan === true
  }

  /**
   * 检查是否为空
   * @returns {boolean} 是否为空
   */
  isEmpty(): boolean {
    return this.empty === true
  }

  /**
   * 检查是否无效
   * @returns {boolean} 是否无效
   */
  isInvalidate(): boolean {
    return this.isEmpty() || this.isNaN()
  }

  /**
   * 小于等于比较
   * @param {BigIntDecimal} target 比较目标
   * @returns {boolean} 是否小于等于
   */
  lessEquals(target: BigIntDecimal): boolean {
    return this.add(target.negate().toString()).toNumber() <= 0
  }

  /**
   * 相等比较
   * @param {BigIntDecimal | null | undefined} target 比较目标
   * @returns {boolean} 是否相等
   */
  equals(target: BigIntDecimal | null | undefined): boolean {
    return this.toString() === (target && target.toString())
  }

  /**
   * 转换为数字
   * @returns {number} 数字值
   */
  toNumber(): number {
    if (this.isNaN()) {
      return NaN
    }

    return Number(this.toString())
  }

  /**
   * 转换为字符串
   * @param {boolean} safe 是否安全转换，默认为true
   * @returns {string} 字符串表示
   */
  toString(safe = true): string {
    if (!safe) {
      return this.origin
    }

    if (this.isInvalidate()) {
      return ''
    }

    return trimNumber(`${this.getMark()}${this.getIntegerStr()}.${this.getDecimalStr()}`).fullStr
  }
}

/**
 * 普通数字小数处理类
 */
export class NumberDecimal {
  /** 是否为空 */
  empty?: boolean
  /** 原始值 */
  origin = ''
  /** 数字值 */
  number?: number

  /**
   * 构造函数
   * @param {string | number} value 数值
   */
  constructor(value: string | number = '') {
    if ((!value && value !== 0) || !String(value).trim()) {
      this.empty = true
      return
    }

    this.origin = String(value)
    this.number = Number(value)
  }

  /**
   * 取反操作
   * @returns {NumberDecimal} 取反后的值
   */
  negate(): NumberDecimal {
    return new NumberDecimal(String(-this.toNumber()))
  }

  /**
   * 加法操作
   * @param {string | number} value 要添加的值
   * @returns {NumberDecimal} 计算结果
   */
  add(value: string | number): NumberDecimal {
    if (this.isInvalidate()) {
      return new NumberDecimal(value)
    }

    const target = Number(value)

    if (isNaN(target)) {
      return this
    }

    const number = this.number! + target

    if (number < Number.MIN_SAFE_INTEGER) {
      return new NumberDecimal(String(Number.MIN_SAFE_INTEGER))
    }

    if (number > Number.MAX_SAFE_INTEGER) {
      return new NumberDecimal(String(Number.MAX_SAFE_INTEGER))
    }

    const maxPrecision = Math.max(getNumberPrecision(target), getNumberPrecision(this.number!))
    return new NumberDecimal(number.toFixed(maxPrecision))
  }

  /**
   * 检查是否为NaN
   * @returns {boolean} 是否为NaN
   */
  isNaN(): boolean {
    return isNaN(this.number!)
  }

  /**
   * 检查是否为空
   * @returns {boolean} 是否为空
   */
  isEmpty(): boolean {
    return this.empty === true
  }

  /**
   * 检查是否无效
   * @returns {boolean} 是否无效
   */
  isInvalidate(): boolean {
    return this.isEmpty() || this.isNaN()
  }

  /**
   * 相等比较
   * @param {NumberDecimal | null | undefined} target 比较目标
   * @returns {boolean} 是否相等
   */
  equals(target: NumberDecimal | null | undefined): boolean {
    return this.toNumber() === (target && target.toNumber())
  }

  /**
   * 小于等于比较
   * @param {NumberDecimal} target 比较目标
   * @returns {boolean} 是否小于等于
   */
  lessEquals(target: NumberDecimal): boolean {
    return this.add(target.negate().toString()).toNumber() <= 0
  }

  /**
   * 转换为数字
   * @returns {number} 数字值
   */
  toNumber(): number {
    return this.number!
  }

  /**
   * 转换为字符串
   * @param {boolean} safe 是否安全转换，默认为true
   * @returns {string} 字符串表示
   */
  toString(safe = true): string {
    if (!safe) {
      return this.origin
    }

    if (this.isInvalidate()) {
      return ''
    }

    return num2str(this.number!)
  }
}

/**
 * 设置Decimal类
 * @param {any} decimaljs 自定义decimal库
 */
export const setDecimalClass = function (decimaljs?: any): void {
  DecimalCls.CLS = supportBigInt() ? BigIntDecimal : typeof decimaljs === 'function' ? decimaljs : NumberDecimal
}

/**
 * 比较两个值是否小于等于关系
 * @param {string | number} value1 第一个值
 * @param {string | number} value2 第二个值
 * @returns {boolean} value1 <= value2
 */
export function lessEquals(value1: string | number, value2: string | number): boolean {
  return getMiniDecimal(value1, undefined).lessEquals(getMiniDecimal(value2, undefined))
}

/**
 * 比较两个值是否相等
 * @param {string | number} value1 第一个值
 * @param {string | number} value2 第二个值
 * @returns {boolean} value1 === value2
 */
export function equalsDecimal(value1: string | number, value2: string | number): boolean {
  return getMiniDecimal(value1, undefined).equals(getMiniDecimal(value2, undefined))
}

/**
 * 将数字格式化为固定精度
 * @param {string | number} numStr 数字或数字字符串
 * @param {number} precision 精度（小数位数）
 * @param {number} rounding 舍入方式，默认为5（四舍五入）
 * @returns {string} 格式化后的字符串
 */
export function toFixed(numStr: string | number, precision: number, rounding = 5): string {
  if (numStr === '') {
    return ''
  }
  const separatorStr = '.'
  const { negativeStr, integerStr, decimalStr } = trimNumber(numStr)
  const precisionDecimalStr = `${separatorStr}${decimalStr}`
  const numberWithoutDecimal = `${negativeStr}${integerStr}`

  if (precision >= 0) {
    // 获取后一位数字，检查是否需要进位
    const advancedNum = Number(decimalStr[precision])

    if (advancedNum >= rounding && rounding !== 0) {
      const advancedDecimal = getMiniDecimal(`${integerStr}${separatorStr}${decimalStr}`, undefined).add(
        `0.${fillChar('', precision, true)}${10 - advancedNum}`
      )

      return toFixed(negativeStr + advancedDecimal.toString(), precision, 0)
    }

    if (precision === 0) {
      return numberWithoutDecimal
    }

    // 确保decimalStr存在，如果不存在则使用默认值'0'
    const safeDecimalStr = decimalStr || '0'
    return `${numberWithoutDecimal}${separatorStr}${fillChar(safeDecimalStr, precision, true).slice(0, precision)}`
  }

  if (precisionDecimalStr === '.0') {
    return numberWithoutDecimal
  }

  return `${numberWithoutDecimal}${precisionDecimalStr}`
}
