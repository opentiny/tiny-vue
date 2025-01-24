import xss from './xss'
import logger from './logger'
import crypt from './crypt'

export { xss, logger, crypt }

export { getWindow, isWeb } from './globalConfigs'
export { getDays, getWeek, lastMonth, nextMonth, getCalendar, transformArray, parseDate } from './calendar'
export {
  isLeapYear,
  toDate,
  format as formatDate,
  getDateWithNewTimezone,
  toDateStr,
  getWeekOfFirstDay,
  getLocalTimezone,
  getStrTimezone
} from './date'

export {
  toString,
  hasOwn,
  isNull,
  typeOf,
  isObject,
  isFunction,
  isPlainObject,
  isEmptyObject,
  isNumber,
  isNumeric,
  isDate,
  isSame,
  isRegExp,
  isPromise
} from './type'

export {
  formatTypes,
  escapeChars,
  isNullOrEmpty,
  camelize,
  capitalize,
  hyphenate,
  toJson,
  getLength,
  fillChar,
  random,
  guid,
  escapeHtml,
  escape,
  fieldFormat,
  format as formatString,
  truncate,
  tryToConvert,
  toInt,
  tryToInt,
  toNumber,
  tryToNumber,
  toDecimal,
  tryToDecimal,
  toCurrency,
  tryToCurrency,
  toBoolValue,
  toRate,
  toFileSize,
  formatFileSize,
  isKorean,
  omitText
} from './string'

// 待转移到globalConfigs
export { isBrowser, globalEnvironment, browser } from './browser'

export { roundFixed, Decimal, toFixed as toFixedDecimal, formatNumber, recoverNumber } from './decimal'
export { each, getObj, setObj, copyField, copyArray, isEqual, isEachEqual, extend, toJsonStr, merge } from './object'

export {
  supportBigInt,
  trimNumber,
  isE,
  validateNumber,
  getNumberPrecision,
  num2str,
  getMiniDecimal,
  BigIntDecimal,
  NumberDecimal,
  setDecimalClass,
  lessEquals,
  equalsDecimal,
  toFixed as toFixedBigInt
} from './bigInt'

export { getDataset } from './dataset'
export { indexOf, find, remove, sort, push, unique, toObject, transformPidToChildren, transformTreeData } from './array'

// 原来common的index.ts 的定义  都是全局变量， 像 DATEPICKER等， 应该移到各自使用的组件内部中去，  待移除
export {
  KEY_CODE,
  POSITION,
  SORT,
  REFRESH_INTERVAL,
  IPTHRESHOLD,
  DATE,
  DATEPICKER,
  BROWSER_NAME,
  MOUSEDELTA,
  VALIDATE_STATE,
  CASCADER,
  version
} from './common'

// 待移除 ，写到各自组件内部中去
export { FORM_ITEM, FORM_EVENT } from './form'

export { Validator } from './validate'

export { emitEvent, getActualTarget, correctTarget } from './event'

export { noop, callInterceptor } from './function'

// 当真有人这么用的吗？  待移除
export {
  unknownProp,
  numericProp,
  truthProp,
  makeRequiredProp,
  makeArrayProp,
  makeNumberProp,
  makeNumericProp,
  makeStringProp,
  makeStringValidProp
} from './prop-util'
