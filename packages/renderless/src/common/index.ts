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

import { log as uLog, xss } from './xss.js'

export const KEY_CODE = {
  Backspace: 8,
  Tab: 9,
  Clear: 12,
  Enter: 13,
  Shift: 16,
  Control: 17,
  Alt: 18,
  CapsLock: 20,
  Escape: 27,
  Space: 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  'ArrowLeft': 37,
  'ArrowUp': 38,
  'ArrowRight': 39,
  'ArrowDown': 40,
  Insert: 45,
  Delete: 46,
  Colon: 58,
  Semicolon: 59,
  LessThan: 60,
  Equals: 61,
  GreaterThan: 62,
  QuestionMark: 63,
  AtMark: 64,
  KeyA: 65,
  KeyB: 66,
  KeyC: 67,
  KeyD: 68,
  'KeyE': 69,
  'KeyF': 70,
  'KeyG': 71,
  'KeyH': 72,
  KeyI: 73,
  KeyJ: 74,
  KeyK: 75,
  KeyL: 76,
  KeyM: 77,
  KeyN: 78,
  KeyO: 79,
  KeyP: 80,
  KeyQ: 81,
  'KeyR': 82,
  'KeyS': 83,
  'KeyT': 84,
  'KeyU': 85,
  KeyV: 86,
  KeyW: 87,
  KeyX: 88,
  KeyY: 89,
  KeyZ: 90,
  'Digit0': 48,
  'Digit1': 49,
  'Digit2': 50,
  'Digit3': 51,
  Digit4: 52,
  Digit5: 53,
  Digit6: 54,
  Digit7: 55,
  Digit8: 56,
  Digit9: 57,
  'F1': 112,
  'F2': 113,
  'F3': 114,
  'F4': 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  'NumLock': 144,
  'Numpad0': 96,
  'Numpad1': 97,
  'Numpad2': 98,
  Numpad3: 99,
  Numpad4: 100,
  Numpad5: 101,
  Numpad6: 102,
  Numpad7: 103,
  Numpad8: 104,
  Numpad9: 105,
  'NumpadMultiply': 106,
  'NumpadAdd': 107,
  'NumpadEnter': 13,
  'NumpadSubtract': 109,
  NumpadDecimal: 110,
  NumpadDivide: 111,
  NumpadComma: 190
}

export const POSITION = { Left: 'left', Right: 'right', Top: 'top', Bottom: 'bottom' }

export const SORT = { Asc: 'asc', Desc: 'desc' }

export const REFRESH_INTERVAL = 100

export const IPTHRESHOLD = { Min: 0, Max: 255, NonNumeric: 25 }

export const DATE = {
  FullDatetime: 'yyyy-MM-dd hh:mm:ss.SSS',
  LongDatetime: 'yyyy-MM-dd hh:mm:ss',
  Datetime: 'yyyy-MM-dd hh:mm',
  Date: 'yyyy-MM-dd',
  FullTime: 'hh:mm:ss.SSS',
  LongTime: 'hh:mm:ss',
  Time: 'hh:mm',
  YearMonth: 'yyyy-MM'
}

const TriggerTypes =
  'date,datetime,time,time-select,week,month,year,years,yearrange,daterange,monthrange,timerange,datetimerange,dates'

export const DATEPICKER = {
  Day: 'day',
  Date: 'date',
  Dates: 'dates',
  Year: 'year',
  Years: 'years',
  YearRange: 'yearrange',
  PanelYearNum: 12,
  Month: 'month',
  Week: 'week',
  Normal: 'normal',
  Today: 'today',
  PreMonth: 'pre-month',
  NextMonth: 'next-month',
  YearI18n: 'ui.datepicker.year',
  List: [38, 40, 37, 39],
  YearObj: { 38: -4, 40: 4, 37: -1, 39: 1 },
  WeekObj: { 38: -1, 40: 1, 37: -1, 39: 1 },
  DayObj: { 38: -7, 40: 7, 37: -1, 39: 1 },
  Aviailable: 'available',
  Default: 'default',
  Current: 'current',
  InRange: 'in-range',
  StartDate: 'start-date',
  EndDate: 'end-date',
  Selected: 'selected',
  Disabled: 'disabled',
  Range: 'range',
  fullMonths: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
  fullWeeks: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  MonhtList: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
  Weeks: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
  PlacementMap: {
    left: 'bottom-start',
    center: 'bottom',
    right: 'bottom-end'
  },
  TriggerTypes: TriggerTypes.split(','),
  DateFormats: {
    year: 'yyyy',
    years: 'yyyy',
    yearrange: 'yyyy',
    month: 'yyyy-MM',
    time: 'HH:mm:ss',
    week: 'yyyywWW',
    date: 'yyyy-MM-dd',
    timerange: 'HH:mm:ss',
    monthrange: 'yyyy-MM',
    daterange: 'yyyy-MM-dd',
    datetime: 'yyyy-MM-dd HH:mm:ss',
    datetimerange: 'yyyy-MM-dd HH:mm:ss'
  },
  Time: 'time',
  TimeRange: 'timerange',
  IconTime: 'icon-time',
  IconDate: 'icon-Calendar',
  DateRange: 'daterange',
  DateTimeRange: 'datetimerange',
  MonthRange: 'monthrange',
  TimeSelect: 'time-select',
  TimesTamp: 'timestamp',
  DateTime: 'datetime',
  SelectbaleRange: 'selectableRange',
  Start: '09:00',
  End: '18:00',
  Step: '00:30',
  CompareOne: '-1:-1',
  CompareHundred: '100:100',
  selClass: '.selected',
  queryClass: '.tiny-picker-panel__content',
  disableClass: '.time-select-item:not(.disabled)',
  defaultClass: '.default',
  Qurtyli: 'li',
  MappingKeyCode: { 40: 1, 38: -1 },
  DatePicker: 'DatePicker',
  TimePicker: 'TimePicker'
}

export const BROWSER_NAME = {
  IE: 'ie',
  Edge: 'edge',
  Chrome: 'chrome',
  Firefox: 'firefox'
}

export const MOUSEDELTA = 120

export const VALIDATE_STATE = {
  Validating: 'validating',
  Success: 'success',
  Error: 'error'
}

export const CASCADER = {
  SvgStr: '<path style="pointer-events: auto;" fill="transparent" d="M',
  CascaderNodeExpand: '.tiny-cascader-node[aria-expanded="true"]',
  CascaderNodeTab: '.tiny-cascader-node[tabindex="-1"]',
  ScrollWrap: '.tiny-scrollbar__wrap',
  CascaderActice: '.tiny-cascader-node.is-active',
  ActivePath: '.tiny-cascader-node.in-active-path',
  PropsObject: {
    'expand-trigger': 'expand-trigger is removed, use `props.expandTrigger` instead.',
    'change-on-select': 'change-on-select is removed, use `props.checkStrictly` instead.',
    'hover-threshold': 'hover-threshold is removed, use `props.hoverThreshold` instead'
  },
  EventObject: {
    'active-item-change': 'active-item-change is renamed to expand-change'
  },
  SugItem: '.tiny-cascader__suggestion-item',
  CascaderMenu: '.tiny-cascader-menu',
  InputClass: '.tiny-input__inner',
  TagClass: '.tiny-cascader__tags',
  ListClass: '.tiny-cascader__suggestion-list',
  PropsExpandTri: 'expandTrigger',
  PropsCheckStric: 'checkStrictly',
  PropsHover: 'hoverThreshold',
  MenuConnector: 'cascader-menu-'
}

// export const version = process?.env.RUNTIME_VERSION
export const version = '3.13.0'
export const log = (data, type = 'log') => {
  uLog.logger[type](data)
}

export { xss }
