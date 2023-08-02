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

import { isPlainObject, isNumber, isNumeric, isNull } from './type'
import { getObj, toJsonStr } from './object'
import { toFixed } from './decimal'
import { nanoid } from './xss'

/**
 * 文本替换格式类型
 */
export const formatTypes = {
  text: 'text',
  url: 'url',
  html: 'html',
  tmpl: 'tmpl'
}

/**
 * 字符对应的字符编码
 */
export const escapeChars = {
  '&': '&#38;',
  '<': '&#60;',
  '>': '&#62;',
  '"': '&#34;',
  '\'': '&#x27;',
  '[': '&#91;',
  ']': '&#93;'
}

/**
 * 判断是否为null、undefined、空字符串
 *
 *     isNullOrEmpty('') // true
 *
 * @param {Object} value 需判断的对象
 * @return {Boolean}
 */
export const isNullOrEmpty = (value) => value === null || value === undefined || (typeof value === 'string' && value.trim().length === 0)

function cached(fn) {
  let cache = Object.create(null)

  return function cachedFn(str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

const camelizeRE = /-(\w)/g
export const camelize = cached((str) => str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : '')))

/**
 * 将字符串首写字母大写。
 *
 *     capitalize('hello')  // "Hello"
 *
 * @param {String} string 要转换的字符串
 * @returns {String}
 */
export const capitalize = cached((str) => str.charAt(0).toUpperCase() + str.slice(1))

const hyphenateRE = /\B([A-Z])/g
export const hyphenate = cached((str) => str.replace(hyphenateRE, '-$1').toLowerCase())

/**
 * 解析Json字符串成对象。
 *
 *     let str = '{ "value": "v1", "text": "t1" }'
 *     toJson(str) // { value: 'v1', text: 't1' }
 *
 * @param {String} string 要解析的Json字符串
 * @returns {Object}
 */
export const toJson = (string) => {
  try {
    return JSON.parse(string)
  } catch (e) {
    return undefined
  }
}

function getLengthInUtf16(string) {
  const len = string.length
  let count = 0

  for (let i = 0; i < len; i++) {
    let charCode = string.charCodeAt(i)

    /* istanbul ignore else */
    if (charCode <= 0xFFFF) {
      count += 2
    } else {
      count += 4
    }
  }

  return count
}

function getLengthInUtf8(string) {
  const len = string.length
  let count = 0

  for (let i = 0; i < len; i++) {
    let charCode = string.charCodeAt(i)

    /* istanbul ignore else */
    if (charCode <= 0x007F) {
      count += 1
    } else if (charCode <= 0x07FF) {
      count += 2
    } else if (charCode <= 0xFFFF) {
      count += 3
    } else {
      count += 4
    }
  }

  return count
}

function getLengthDefault(string) {
  const len = string.length
  let count = 0

  for (let i = 0; i < len; i++) {
    count++

    if (string.charCodeAt(i) >> 8) {
      count++
    }
  }

  return count
}

/**
 * 计算字符串长度或所占的内存字节数。
 * 默认计算方式（中文算两个长度，数字字母算一个），也可指定为 'basic','UTF-16','UTF-8',或自定义的计算规则。
 *
 *     getLength('12ED')          // => 4
 *     getLength('深圳')           // => 4
 *     getLength('好a','basic')   // '好a' => 2，'a' => 1
 *     getLength('好a','UTF-8')   // 好a' => 4，'a' => 1
 *     getLength('好a','UTF-16')  //'好a' => 4，'a' => 2
 *     getLength(str, function (str) {
 *       return (str + 'xx').length
 *     })
 *
 * UTF-8 是一种可变长度的 Unicode 编码格式，使用一至四个字节为每个字符编码
 *
 *     000000 - 00007F(128个代码)      0zzzzzzz(00-7F)                             一个字节
 *     000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)             两个字节
 *     000800 - 00D7FF 注: Unicode在范围 D800-DFFF 中不存在任何字符
 *     00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz           三个字节
 *     010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  四个字节
 *
 *
 * 定义参考 http://zh.wikipedia.org/wiki/UTF-8
 *
 * UTF-16 大部分使用两个字节编码，编码超出 65535 的使用四个字节
 *
 *     000000 - 00FFFF  两个字节
 *     010000 - 10FFFF  四个字节
 *
 * 定义参考  http://zh.wikipedia.org/wiki/UTF-16
 *
 * @param  {String} string
 * @param  {String|Function} regular 长度规则：'basic'、'UTF-16'、'UTF-8'或自定义的计算规则函数
 * @return {Number}
 */
export const getLength = (string, regular) => {
  if (!string || typeof string !== 'string') {
    return 0
  }

  let count = 0

  if (typeof regular === 'string') {
    regular = regular.toLowerCase()

    if (regular === 'utf-16' || regular === 'utf16') {
      count = getLengthInUtf16(string)
    } else if (regular === 'utf-8' || regular === 'utf8') {
      count = getLengthInUtf8(string)
    } else {
      count = string.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length
    }
  } else if (typeof regular === 'function') {
    return regular(string)
  } else {
    count = getLengthDefault(string)
  }

  return count
}

/**
 * 填充字符串，根据填充模式参数，在字符串前面或后面补充字附到指定的长度。
 *
 *     fillChar('1', 3)            // "001"
 *     fillChar('1', 3, true)      // "100"
 *     fillChar('1', 3, true, ' ') // "1  "
 *
 * @param {String} string 被填充的字符串
 * @param {Number} length 填充到某个长度
 * @param {Boolean} [append=false] 是否在后面填充，默认为在前面填充
 * @param {String} [chr="0"] 填充的字符，默认为0
 * @returns {String}
 */
export const fillChar = (string, length, append, chr = '0') => {
  if (typeof string === 'string' && typeof chr === 'string' && isNumber(length)) {
    let len = string.length - length

    if (len > 0) {
      return append ? string.substr(0, length) : string.substr(len, length)
    } else {
      const appendStr = []
      len = Math.abs(len) / chr.length

      for (; len > 0; len--) {
        appendStr.push(chr)
      }

      const s = appendStr.join('')

      return append ? string + s : s + string
    }
  }
}

/**
 * 生成一个guid。
 *
 *     guid('#') // #16722423
 *
 * @param {String} [prefix] guid前缀，可选值，默认为空字符串
 * @param {Number} [length] 生成的guid的长度，可选值，默认为8
 * @returns {String}
 */
export const random = nanoid.random

export const guid = (prefix = '', length = 8) => prefix + random().toString().substr(2, length)

/**
 * 将HTML字符串进行编码。
 *
 *     escapeHtml('<div>&&</div>') // "&#60;div&#62;&#38;&#38;&#60;/div&#62;"
 *
 * @param {String} string 要编码的字符串
 * @param {Boolean} [isReplaceSpace] 是否替换空格
 * @returns {String}
 */
export const escapeHtml = (string, isReplaceSpace) => {
  if (!string || typeof string !== 'string') {
    return string
  }

  string = string.replace(/[&<>"']/g, (chr) => escapeChars[chr])
  return isReplaceSpace ? string.replace(/\s/g, '&#160;') : string
}

/**
 * 将URL字符串进行转义。
 *
 *     let str = '< >& []""' + "'"
 *     escape(str)               // "&#60; &#62;& []&#34;&#34;'"
 *     escape(str, 'uri', true)  // "%3C%20%3E%26%20%5B%5D%22%22'"
 *     escape(str, true)         // "&#60;&#160;&#62;&&#160;[]&#34;&#34;'"
 *     escape(str, 'html', true) // "&#60;&#160;&#62;&#38;&#160;[]&#34;&#34;&#x27;"
 *     escape(str, 'prop', true) // "&#60;&#160;&#62;&#38;&#160;&#91;&#93;&#34;&#34;&#x27;"
 *
 * @param {String} string 需要转换的字符串
 * @param {String} [escapeType] 转换类型，可选值：uri, html, prop
 * @param {Boolean} [isReplaceSpace] 是否替换空格, 默认不替换
 * @returns {String}
 */
export const escape = (string, escapeType, isReplaceSpace) => {
  if (!string || typeof string !== 'string') {
    return string
  }

  if (typeof escapeType === 'boolean') {
    isReplaceSpace = !!escapeType
  }

  if (escapeType === 'uri') {
    return encodeURIComponent(string)
  } else if (escapeType === 'html') {
    return escapeHtml(string, isReplaceSpace)
  } else if (escapeType === 'prop') {
    string = escapeHtml(string, isReplaceSpace)
    return string.replace(/[[\]]/g, (chr) => escapeChars[chr])
  }

  string = string.replace(/[<>"]/g, (chr) => escapeChars[chr])
  return isReplaceSpace ? string.replace(/\s/g, '&#160;') : string
}

const getFormat = ({ sign, format, hasSign }) => {
  switch (sign) {
    case '#':
      format = formatTypes.text
      break
    case '@':
      format = formatTypes.url
      break
    case '$':
      format = formatTypes.html
      break
    case '%':
      format = formatTypes.tmpl
      break
    default:
      hasSign = false
      break
  }

  return { format, hasSign }
}

/**
 * 使用具体的对象字段代替字符串中的字段占位符。
 *
 *     fieldFormat('url:{{url}}',  { url: 'http://abc.com/a&b' }) // "url:http://abc.com/a&#38;b"
 *     fieldFormat('url:{{#url}}', { url: 'http://abc.com/a&b' }) // "url:http://abc.com/a&b"
 *     fieldFormat('url:{{@url}}', { url: 'http://abc.com/a&b' }) // "url:http%3A%2F%2Fabc.com%2Fa%26b"
 *     fieldFormat('url:{{$url}}', { url: 'http://abc.com/a&b' }) // "url:http://abc.com/a&#38;b"
 *     fieldFormat('url:{{%url}}', { url: 'http://abc.com/a&b' }) // "url:{{http://abc.com/a&b}}"
 *
 * @param {String} string 要替换的字符串模板
 * @param {Object} data 要替换模板的数据
 * @param {String} [type="html"] 替换的类型："text"、"url"、"tmpl"、"html"，默认"html"
 * @returns {String}
 */
export const fieldFormat = (string, data, type = 'html') => {
  if (typeof string === 'string') {
    return string.replace(/(\/)?\{\{([\s\S]*?)}}/g, (match, slash = '', offset = '') => {
      const sign = offset.substr(0, 1)
      let hasSign = true
      let format = formatTypes.html
      let ret = getFormat({ sign, format, hasSign })

      format = ret.format
      hasSign = ret.hasSign

      if (hasSign) {
        offset = (offset || '').substring(1)
      } else if (type) {
        format = type
      }

      let value = getObj(data, offset)

      if (isNull(value)) {
        value = ''
      }

      if (format === formatTypes.tmpl) {
        value = `{{${value}}}`
      } else {
        if (format === formatTypes.url) {
          value = encodeURIComponent(value)
        } else {
          value = format === formatTypes.html ? escapeHtml(value) : value
        }
      }

      return format === formatTypes.url && value.length === 0 ? '' : slash + value
    })
  }
}

const getFormatText = () => (str, reg, args, format) =>
  str.replace(reg, (m, i, j, k) => {
    if (!isNullOrEmpty(i) && !isNullOrEmpty(k)) {
      return `{${j}}`
    }

    const value = args[j]
    const string = isPlainObject(value) ? toJsonStr(value) : value

    if (isNullOrEmpty(value)) {
      return ''
    }

    return typeof value === 'string' && typeof format === 'function' ? format(string) : string
  })

const getResult = ({ type, res, formatText, string, reg, args }) => {
  if (type === formatTypes.url) {
    res = formatText(string, reg, args, encodeURIComponent)
  } else if (type === formatTypes.html) {
    res = formatText(string, reg, args, escapeHtml)
  } else {
    res = formatText(string, reg, args)
  }

  return res
}

const judgForFunc = (args, formatTypes, type) => {
  const lastArg = args[args.length - 1]

  if (lastArg !== formatTypes.text && lastArg !== formatTypes.url && lastArg !== formatTypes.html) {
    args = Array.prototype.slice.call(args, 1)
  } else {
    args = Array.prototype.slice.call(args, 1, args.length - 1)
    type = lastArg
  }

  return { args, type }
}

const checkParam = ({ data, args, type, _arguments }) => {
  if (Array.isArray(data)) {
    args = data
  } else {
    const judgObj = judgForFunc(_arguments, formatTypes, type)

    args = judgObj.args
    type = judgObj.type
  }

  return { args, type }
}

/**
 * 使用具体的值替换字符串中的数字占位符。
 *
 *     format('{0}', 1)                               // "1"
 *     format('{0}', 1, 'text')                       // "1"
 *     format('{0}{1}', [1, 2, 'text'])               // "12"
 *     format('age:{{age}}', { age: 20 })             // "age:20"
 *     format('\\{0\\}{1}', [0, 1])                   // "{0}1"
 *     format('{0}', [{ age: 20 }])                   // "{"age":20}"
 *     format('{0}', [ 'http://abc.com/a&b' ], 'url') // "http%3A%2F%2Fabc.com%2Fa%26b"
 *     format('{0}', [ '<div>&&</div>' ], 'html')     // "&#60;div&#62;&#38;&#38;&#60;/div&#62;"
 *
 * @param {String} string 要替换的字符串模板
 * @param {Object|Array|String} data 要替换模板的数据
 * @param {String} [type="text"] 替换的类型："text"、"url"、"html"，默认"text"
 * @returns {String}
 */
export const format = function (string, data, type = 'text') {
  if (typeof string !== 'string' || arguments.length < 2) {
    return string
  }

  let args, res

  if (isPlainObject(data)) {
    return fieldFormat(string, data, type)
  }

  const ret = checkParam({ data, args, type, _arguments: arguments })

  args = ret.args
  type = ret.type

  const reg = /(\\)?\{(\d+)(\\)?}/g
  const formatText = getFormatText()

  res = getResult({ type, res, formatText, string, reg, args })

  return res
}

const getTruthyValue = ({ string, length, ellipsis }) => {
  const flag = typeof string === 'string' && isNumber(length) && length < string.length
  const truthyValue = flag && format(ellipsis, string.substr(0, length))

  return { flag, truthyValue }
}

/**
 * 将字符串按指定长度截断。
 *
 *     truncate('abc', 5) // "abc"
 *     truncate('abc', 2) // "ab..."
 *
 * @param {String} string 要截断的字符串
 * @param {Number} length 要截断的长度
 * @param {String} [ellipsis="{0}..."] 截断类型，通常携带{0}占位符
 * @returns {String}
 */
export const truncate = (string, length, ellipsis = '{0}...') => {
  const { flag, truthyValue } = getTruthyValue({ string, length, ellipsis })

  return flag ? truthyValue : string
}

/**
 * 尝试按指定函数转换字符串，如果转换结果为 NaN，则返回 defaultValue。
 *
 *     tryToConvert(toInt, null, 0) // 0
 *
 * @param {Function} convert 指定的转换的函数
 * @param {Number|String} defaultValue 若为 NaN 时，返回的缺省值
 * @param {Number|String} value 要转换的字符串或多个参数
 * @returns {Number|String}
 */
export const tryToConvert = (convert, defaultValue, ...args) => {
  const result = convert.apply(null, args)
  return isNaN(result) ? defaultValue : result
}

/**
 * 将字符串解析成十进制整数。
 *
 *     toInt(100)      // 100
 *     toInt('100.01') // 100
 *
 * @param {Number|String} value 要解析的字符串
 * @returns {Number}
 */
export const toInt = (value) => (isNumber(value) ? Number(value.toFixed(0)) : typeof value === 'string' ? parseInt(value, 10) : NaN)

/**
 * 尝试将字符串解析成十进制整数。如果 value 是个无效的整数，则返回 defaultValue。
 *
 *     tryToInt(100)       // 100
 *     tryToInt('100.01')  // 100
 *     tryToInt(null, 100) // 100
 *
 * @param {Number|String} value 要解析的字符串
 * @param {Number|String} defaultValue 若为 NaN 时，返回的缺省值
 * @returns {Number|String}
 */
export const tryToInt = (value, defaultValue) => tryToConvert(toInt, defaultValue, value)

/**
 * 将字符串解析成数值。
 *
 *     toNumber(100)      // 100
 *     toNumber('100.01') // 100.01
 *
 * @param {Number|String} value 要解析的字符串
 * @returns {Number}
 */
export const toNumber = (value) => (isNumber(value) ? value : typeof value === 'string' ? parseFloat(value) : NaN)

/**
 * 尝试将字符串解析成数值。如果 value 是个无效的数字，则返回 defaultValue。
 *
 *     tryToNumber(100)        // 100
 *     tryToNumber('100.01')   // 100.01
 *     tryToNumber(null, 100)  // 100
 *
 * @param {Number|String} value 要解析的字符串
 * @param {Number|String} defaultValue 若为 NaN 时，返回的缺省值
 * @returns {Number|String}
 */
export const tryToNumber = (value, defaultValue) => tryToConvert(toNumber, defaultValue, value)

/**
 * 将字符串解析成浮点数。
 *
 *     toDecimal(100)                 // "100.00"
 *     toDecimal("100.01", 2)         // "100.01"
 *     toDecimal(0.8 - 0.6, 2, true)  // "0.2"
 *     toDecimal(0.8 - 0.6, 2, false) // "0.20"
 *
 * @param {Number|String} value 要解析的数字或字符串
 * @param {Number} [fraction=2] 浮点数的小数部分，默认2位
 * @param {Boolean} [isTruncate=false] 是否截断，默认为四舍五入，不截断
 * @returns {String}
 */
export const toDecimal = (value, fraction = 2, isTruncate = false) => {
  let result = NaN

  if (isNumber(value)) {
    result = value
  }

  if (typeof value === 'string') {
    const val = parseFloat(value)
    if (!isNaN(val)) {
      result = val
    }
  }

  if (isNumber(result)) {
    if (isTruncate) {
      result = toFixed(
        value
          .toString()
          .split('.')
          .slice(0, 2)
          .map((str, index) => (index ? str.slice(0, fraction) : str))
          .join('.'),
        fraction
      )
    } else {
      result = toFixed(result, fraction)
    }
  }

  return result
}

/**
 * 尝试将字符串解析成浮点数。如果 value 是个无效的浮点数，则返回 defaultValue。
 *
 *     tryToDecimal(100)                 // "100.00"
 *     tryToDecimal("100.01", 2)         // "100.01"
 *     tryToDecimal(0.8 - 0.6, 2, true)  // "0.2"
 *     tryToDecimal(0.8 - 0.6, 2, false) // "0.20"
 *     tryToDecimal(null, 2, false, 100) // 100
 *
 * @param {Number|String} value 要解析的数字或字符串
 * @param {Number} [fraction=2] 浮点数的小数部分，默认2位
 * @param {Boolean} [isTruncate=false] 是否截断，默认为四舍五入，不截断
 * @param {Number|String} [defaultValue] 若为 NaN 时，返回的缺省值
 * @returns {Number|String}
 */
export const tryToDecimal = (value, fraction, isTruncate, defaultValue) => tryToConvert(toDecimal, defaultValue, value, fraction, isTruncate)

/**
 * 将数字或字符串转换成货币格式。
 *
 *     toCurrency(100)            // "100.00"
 *     toCurrency(100, 2)         // "100.00"
 *     toCurrency(1234.56)        // "1,234.56"
 *     toCurrency(100, 2, '${0}') // "$100.00"
 *
 * @param {Number|String} value 要解析的数字或字符串
 * @param {Number} [fraction=2] 浮点数的小数部分，默认2位
 * @param {String} [placeholder] 货币符号，占位符格式，例如 "${0}"
 * @param {Boolean} [isTruncate=false] 是否截断，默认为四舍五入，不截断
 * @returns {String}
 */
export const toCurrency = (value, fraction, placeholder, isTruncate) => {
  if (isNumeric(value)) {
    let val = toDecimal(Number(value), fraction, isTruncate)
    val = String(val).replace(/(^|[^\w.])(\d{4,})/g, ($0, $1, $2) => $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, '$&,'))
    return placeholder ? format(placeholder, val) : val
  }

  return NaN
}

/**
 * 尝试将数字转换成货币格式。如果 value 是个无效的金额，则返回 defaultValue。
 *
 *     tryToCurrency(100)                         // "100.00"
 *     tryToCurrency(100, 2)                      // "100.00"
 *     tryToCurrency(1234.56)                     // "1,234.56"
 *     tryToCurrency(100, 2, '${0}')              // "$100.00"
 *     tryToCurrency(null, 3, '￥{0}', '金额错误') // "金额错误"
 *
 * @param {Number|String} value 要转换的数值
 * @param {Number} [fraction=2] 浮点数的小数部分，默认2位
 * @param {String} [placeholder] 货币符号，占位符格式，例如 "${0}"
 * @param {Number|String} [defaultValue] 若为 NaN 时，返回的缺省值
 * @returns {Number|String}
 */
export const tryToCurrency = (value, fraction, placeholder, defaultValue) => (isNaN(toNumber(value)) ? defaultValue : toCurrency(value, fraction, placeholder))

/**
 * 转换成布尔值或0（表示false），1（表示true）。
 *
 *     toBoolValue(1)      // 1
 *     toBoolValue(true)   // true
 *     toBoolValue('true') // true
 *     toBoolValue({})     // true
 *     toBoolValue('')     // false
 *
 * @param {Number|String|Boolean} value 要转换的值
 * @returns {Boolean|number}
 */
export const toBoolValue = (value) => {
  if (isNumber(value)) {
    return value ? 1 : 0
  } else if (isNull(value) || value === 'false') {
    return false
  } else if (value === 'true') {
    return true
  } else if (typeof value === 'boolean') {
    return value
  }

  return !!value
}

/**
 * 将数值按百分比显示。
 *
 *     toRate(0.1)        // "10.00%"
 *     toRate(10, 100, 2) // "10.00%"
 *
 * @param {Number} value 要转换的值
 * @param {Number} [total=1] 百分比基数，默认为1
 * @param {Number} [fraction=2] 数值的小数部分，默认为2
 * @returns {String}
 */
export const toRate = (value, total = 1, fraction = 2) => (isNumber(value) && isNumber(total) ? `${toDecimal((value * 100) / total, fraction)}%` : value)

/**
 * 文件大小值 单位互相转换。
 *
 *     toFileSize(1024)             // "1.00KB"
 *     toFileSize(1024, 'B')        // "1024.00B"
 *     toFileSize(1024, 'KB', 'B')  // "1.00KB"
 *     toFileSize(1024, 'MB', 'KB') // "1.00MB"
 *
 * @param {Number} value    文件大小数值
 * @param {String} unit     转换后的单位
 * @param {String} [currUnit]  当前大小单位，默认为B，值可为B、KB、MB、GB、TB、PB、EB、ZB、YB
 * @returns {String}
 */
export const toFileSize = (value, unit, currUnit) => {
  if (isNumeric(value)) {
    value = Number(value)

    if (value === 0) {
      return `0${currUnit || unit || 'B'}`
    }

    const fileSize = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    let index = fileSize.indexOf(currUnit)
    if (index > -1) {
      for (let i = 0; i < index; i++) {
        value *= 1024
      }
    }

    index = fileSize.indexOf(unit)
    if (index < 0) {
      index = fileSize.length - 1
    }

    let level = 0
    for (let i = 0; i < index && (value <= -1024 || value >= 1024); i++) {
      value /= 1024.0
      level++
    }

    return toDecimal(value, 2) + fileSize[level]
  }

  return value
}

/**
 * 检查文本中是否包含韩文
 * @param {String} text
 */
export const isKorean = (text) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text)

/**
 * 对字符串进行省略截取
 * @param {*} text 待处理的字符串
 * @param {*} font 字符集，例如 '14px Arial'
 * @param {*} w 字符串显示最大长度
 * @returns obj obj.t为处理后字符串，obj.o为是否已省略标志
 */
export const omitText = (text, font, w) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  ctx.font = font

  let metric = ctx.measureText(text)
  let t

  if (metric.width < w) {
    return { t: text, o: false }
  } else {
    for (let i = -1; ; i--) {
      t = text.slice(0, i) + '...'
      metric = ctx.measureText(t)

      if (metric.width < w) {
        return { t, o: true }
      }
    }
  }
}
