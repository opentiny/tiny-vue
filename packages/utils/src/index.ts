import xss from './xss'
import logger from './logger'
import ResizeObserver from './resize-observer'

export { xss, logger, ResizeObserver }

export { sha256 } from './crypt'
export { globalConfig, getViewportWindow, isServer, browserInfo } from './globalConfig'

export { getDays, getWeek, lastMonth, nextMonth, getCalendar, transformArray, parseDate } from './calendar'

export {
  isLeapYear,
  toDate,
  format as formatDateByPattern,
  getDateWithNewTimezone,
  toDateStr,
  getWeekOfFirstDay,
  getLocalTimezone,
  getStrTimezone
} from './date'

// 与 date.ts 合并一下, 有几个重名变量，待整理, 如果功能一致就合并
export {
  getI18nSettings,
  isDate as isDate1,
  toDate as toDate1,
  isDateObject,
  formatDate,
  parseDate as parseDate1,
  nextMonth as nextMonth1,
  getDayCountOfMonth,
  getDayCountOfYear,
  getFirstDayOfMonth,
  prevDate,
  nextDate,
  getStartDateOfMonth,
  getWeekNumber,
  getRangeHours,
  range,
  getMonthDays,
  getPrevMonthLastDays,
  getRangeMinutes,
  modifyDate,
  modifyTime,
  modifyWithTimeString,
  clearTime,
  clearMilliseconds,
  limitTimeRange,
  timeWithinRange,
  changeYearMonthAndClampDate,
  prevMonth,
  nextYear,
  prevYear,
  extractTimeFormat,
  extractDateFormat,
  validateRangeInOneMonth
} from './date-util'

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
  format as formatString,
  omitText
} from './string'

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

export { fastdom, fastdomAsync, fastdomSandbox } from './fastdom'

// 待移除。  移到fullscreen组件 内部去， 或起个更好的名字
export { FullscreenApi, sf } from './fullscreen'

export { NODE_KEY, getNodeKey, markNodeData, getChildState, Node, TreeStore } from './tree-model'

// 待移除， 移到loading中去， 或起个更好的名字
export { afterLeave } from './after-leave'

export { debounce } from './debounce'
export { throttle } from './throttle'

export {
  on,
  off,
  once,
  hasClass,
  addClass,
  removeClass,
  getStyle,
  setStyle,
  isScroll,
  getScrollContainer,
  isInContainer,
  getDomNode,
  getScrollTop,
  stopPropagation,
  preventDefault,
  getScrollParent,
  useScrollParent,
  isDisplayNone
} from './dom'

// 待移除  到组件内部中去
export { init as initEspace, espaceCtrl } from './espace-ctrl'

export { Memorize } from './memorize'

// 待修改名称
export { getScrollParent as getScrollParent1, PopperJS } from './popper'

export { PopupManager } from './popup-manager'

export { addResizeListener, removeResizeListener } from './resize-event'

// 这些为什么不移到dom中去呢
export { calcScrollWidth } from './scroll-width'

export { scrollIntoView } from './scroll-into-view'

// 待改造成hooks
export { getDirection, touchStart, touchMove, resetTouchStatus } from './touch'

export { emulate } from './touch-emulator'

export { uploadAjax } from './upload-ajax'
