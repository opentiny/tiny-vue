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

let ABBR = { th: 3, mi: 6, bi: 9, tr: 12 }
let abbrLabel = { th: 'k', mi: 'm', bi: 'b', tr: 't' }
let DEFAULT_OPTIONS = { zeroFormat: null, nullFormat: null, defaultFormat: '0,0', scalePercentBy100: true, abbrLabel }
let [TRILLION, BILLION, MILLION, THOUSAND] = [1e12, 1e9, 1e6, 1e3]

const numIsNaN = (value) => typeof value === 'number' && isNaN(value)

function getBoundedPrecision(value, maxDecimals, optionals) {
  let splitValue = value.toString().split('e-')
  let exponent = splitValue.length === 2 ? Number(splitValue[1]) : 0

  splitValue = splitValue[0].split('.')
  exponent = splitValue.length === 2 ? splitValue[1].length + exponent : exponent

  let minDecimals = maxDecimals - (optionals || 0)
  return Math.min(Math.max(exponent, minDecimals), maxDecimals)
}

function toFixed(value, maxDecimals, roundingFunction, optionals) {
  let boundedPrecision = getBoundedPrecision(value, maxDecimals, optionals)
  let power = Math.pow(10, boundedPrecision)

  let output = (roundingFunction(value * `1e+${boundedPrecision}`) / power).toFixed(boundedPrecision)

  if (optionals > maxDecimals - boundedPrecision) {
    let optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$')

    output = output.replace(optionalsRegExp, '')
  }

  return output
}

function judgForFunc(num, abs, abbrForce) {
  let flag

  if (num === 0) {
    flag = (abs >= TRILLION && !abbrForce) || abbrForce === 't'
  } else if (num === 1) {
    flag = (abs < TRILLION && abs >= BILLION && !abbrForce) || abbrForce === 'b'
  } else if (num === 2) {
    flag = (abs < BILLION && abs >= MILLION && !abbrForce) || abbrForce === 'm'
  } else if (num === 3) {
    flag = (abs < MILLION && abs >= THOUSAND && !abbrForce) || abbrForce === 'k'
  }

  return flag
}

const negativeSigned = function ({ format, value }) {
  return format.includes('+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1
}

const updateAbbrV = function (params) {
  let { abbr, abbrForce, format, value, abs } = params
  abbrForce = format.match(/a(k|m|b|t)?/)
  abbrForce = abbrForce ? abbrForce[1] : false

  if (format.includes(' a')) {
    abbr = ' '
  }

  format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '')

  if (judgForFunc(0, abs, abbrForce)) {
    abbr += options.abbrLabel.tr
    value = value / TRILLION
  } else if (judgForFunc(1, abs, abbrForce)) {
    abbr += options.abbrLabel.bi
    value = value / BILLION
  } else if (judgForFunc(2, abs, abbrForce)) {
    abbr += options.abbrLabel.mi
    value = value / MILLION
  } else if (judgForFunc(3, abs, abbrForce)) {
    abbr += options.abbrLabel.th
    value = value / THOUSAND
  }

  Object.assign(params, { abbr, abbrForce, format, value, abs })
}

const handlePrecision = function (params) {
  let { roundingFunction, value, format } = params
  let number = value.toString().split('.')[0]
  let precision = format.split('.')[1]
  if (precision) {
    if (precision.includes('[')) {
      precision = precision.replace(']', '')
      precision = precision.split('[')

      params.decimal = toFixed(value, precision[0].length + precision[1].length, roundingFunction, precision[1].length)
    } else {
      params.decimal = toFixed(value, precision.length, roundingFunction)
    }

    number = params.decimal.split('.')[0]
    params.decimal = params.decimal.includes('.') ? '.' + params.decimal.split('.')[1] : ''

    if (params.optDec && Number(params.decimal.slice(1)) === 0) {
      params.decimal = ''
    }
  } else {
    number = toFixed(value, 0, roundingFunction)
  }
  return number
}

function formatNumber(params) {
  let number = handlePrecision(params)
  let thousands = params.format.indexOf(',')

  let leadingCount = (params.format.split('.')[0].split(',')[0].match(/0/g) || []).length

  if (params.abbr && !params.abbrForce && Number(number) >= 1000 && params.abbr !== ABBR.trillion) {
    number = String(Number(number) / 1000)
    params.abbr = ABBR.million
  }

  if (number.includes('-')) {
    number = number.slice(1)
    params.neg = true
  }

  if (number.length < leadingCount) {
    for (let i = leadingCount - number.length; i > 0; i--) {
      number = '0' + number
    }
  }

  if (thousands > -1) {
    number = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  if (!params.format.indexOf('.')) {
    number = ''
  }
  return number
}

function getOutStr({ decimal, negFlag, neg, signed, abbr }, number) {
  let outStr = number + decimal + (abbr || '')

  if (negFlag) {
    outStr = negFlag && neg ? `(${outStr})` : outStr
  } else {
    if (signed >= 0) {
      const symbol = neg ? '-' : '+'
      outStr = signed === 0 ? symbol + outStr : outStr + symbol
    } else if (neg) {
      outStr = '-' + outStr
    }
  }
  return outStr
}

function numberToFormat(options, value, format, roundingFunction) {
  let params = {
    abs: Math.abs(value),
    negFlag: false,
    optDec: false,
    abbr: '',
    decimal: '',
    neg: false,
    abbrForce: void 0,
    signed: void 0,
    format: format || '',
    value: value || 0,
    roundingFunction
  }

  if (format.includes('(')) {
    params.negFlag = true
    params.format = format.replace(/[(|)]/g, '')
  } else if (params.format.includes('+') || params.format.includes('-')) {
    params.signed = negativeSigned(params)

    params.format = format.replace(/[+|-]/g, '')
  }

  if (params.format.includes('a')) {
    updateAbbrV(params)
  }

  if (params.format.includes('[.]')) {
    params.optDec = true
    params.format = format.replace('[.]', '.')
  }

  const number = formatNumber(params)

  return getOutStr(params, number)
}

function extend(target, sub) {
  Object.keys(sub).forEach((key) => {
    target[key] = sub[key]
  })
}

let numerifyPercent = {
  regexp: /%/,

  format: function format(value, formatType, roundingFunction, numerify) {
    let space = formatType.includes(' %') ? ' ' : ''
    let outStr = void 0

    if (numerify.options.scalePercentBy100) {
      value = value * 100
    }

    formatType = formatType.replace(/\s?%/, '')
    outStr = numerify._numberToFormat(value, formatType, roundingFunction)

    if (outStr.includes(')')) {
      outStr = outStr.split('')
      outStr.splice(-1, 0, space + '%')
      outStr = outStr.join('')
    } else {
      outStr = outStr + space + '%'
    }

    return outStr
  }
}

let options = {}
let formats = {}

extend(options, DEFAULT_OPTIONS)

function format(value, formatType, roundingFunc) {
  let { zeroFormat, nullFormat, defaultFormat } = options

  formatType = formatType || defaultFormat
  roundingFunc = roundingFunc || Math.round

  let { output, fmtFunc } = {}

  if (value === 0 && zeroFormat !== null) {
    output = zeroFormat
  } else if (value === null && nullFormat !== null) {
    output = nullFormat
  } else {
    for (let key in formats) {
      if (formats[key] && formatType.match(formats[key].regexp)) {
        fmtFunc = formats[key].format
        break
      }
    }

    fmtFunc = fmtFunc || numberToFormat.bind(null, options)
    output = fmtFunc(value, formatType, roundingFunc, numerify)
  }

  return output
}

const _register = (name, format) => {
  formats[name] = format
}

const _unregister = (name) => {
  formats[name] = null
}

const _setOptions = (opts) => {
  extend(options, opts)
}

const _reset = () => {
  extend(options, DEFAULT_OPTIONS)
}

function numerify(input, formatType, roundingFunc) {
  let { zeroFormat, nullFormat } = options
  let value = Number(input) || null

  if (typeof input === 'undefined' || input === 0) {
    value = 0
  } else if (numIsNaN(input) || input === null) {
    value = null
  } else if (typeof input === 'string') {
    value = Number(input)

    if (input === zeroFormat && zeroFormat) {
      value = 0
    } else if ((input === nullFormat && nullFormat) || !input.replace(/[^0-9]+/g, '').length) {
      value = null
    }
  }

  return format(value, formatType, roundingFunc)
}

numerify.options = options
numerify._numberToFormat = numberToFormat.bind(null, options)
numerify.register = _register
numerify.unregister = _unregister
numerify.setOptions = _setOptions
numerify.reset = _reset

numerify.register('percentage', numerifyPercent)

export default numerify
