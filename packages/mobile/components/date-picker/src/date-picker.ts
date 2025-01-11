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
import type { PropType } from '@mobile-root/common'
import { iconClose } from '@opentiny/vue-icon'
import type { ComputedRef, ExtractPropTypes } from 'vue'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'

export type { ISharedRenderlessParamHooks } from '@mobile-root/shared.type'

const currentYear = new Date().getFullYear()

export const $constants = {
  MonthDay: 32,
  Minutes: 59,
  Hours: 23,
  TotalMonth: 12,
  Max: 'max',
  Min: 'min',
  Hour: 'hour',
  Minute: 'minute',
  CapYear: 'Year',
  CapMonth: 'Month',
  CapDate: 'Date',
  CapHour: 'Hour',
  CapMinute: 'Minute',
  YearMonth: 'year-month',
  DateTime: 'datetime',
  Date: 'date',
  HookMounted: 'hook-mounted',
  Hidden: 'hidden',
  Year: 'year',
  Day: 'day'
}

const validator = (value) => {
  const result =
    value === null ||
    value === undefined ||
    typeof value === 'string' ||
    value instanceof String ||
    (Array.isArray(value) &&
      value.length === 2 &&
      value.every((item) => typeof item === 'string' || item instanceof String))

  return result
}

export const datePickerProps = {
  tabindex: {
    type: String,
    default: '1'
  },
  timeFormat: String,
  suffixIcon: Object,
  label: String,
  shape: String,
  tip: String,
  changeOnConfirm: {
    type: Boolean,
    default: false
  },
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  isutc8: {
    type: Boolean,
    default: false
  },
  dbTimezone: Number,
  timezoneOffset: Number,
  iso8601: Boolean,
  autoFormat: {
    type: Boolean,
    default: false
  },
  title: String,
  blank: {
    type: Boolean,
    default: false
  },

  type: {
    type: String as PropType<
      | 'date'
      | 'dates'
      | 'daterange'
      | 'week'
      | 'month'
      | 'monthrange'
      | 'year'
      | 'years'
      | 'yearrange'
      | 'datetime'
      | 'datetimerange'
    >,
    default: 'date'
  },
  _constants: {
    type: Object,
    default: () => $constants
  },
  timeArrowControl: Boolean,
  timeEditable: {
    type: Boolean,
    default: true
  },
  size: String,
  format: String,
  valueFormat: String,
  readonly: Boolean,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  prefixIcon: Object,
  clearIcon: {
    type: Object,
    default() {
      return iconClose()
    }
  },
  name: {
    default: '',
    validator
  },
  disabled: Boolean,
  clearable: {
    type: Boolean,
    default: true
  },
  id: {
    default: '',
    validator
  },
  popperClass: String,
  editable: {
    type: Boolean,
    default: true
  },
  align: {
    type: String,
    default: 'left'
  },
  modelValue: {},
  defaultValue: {},
  defaultTime: {},
  rangeSeparator: {
    type: [Object, String],
    default: '-'
  },
  pickerOptions: {},
  unlinkPanels: Boolean,
  validateEvent: {
    type: Boolean,
    default: true
  },
  isRange: Boolean,
  arrowControl: Boolean,
  timezoneData: {},
  showTimezone: {
    type: Boolean,
    default: false
  },
  defaultTimezone: {},
  visible: Boolean,
  minDate: {
    type: Date,
    default: () => new Date(currentYear - 10, 0, 1),
    validator: (val: Date) => Object.prototype.toString.call(val) === '[object Date]' && !isNaN(val.getTime())
  },
  maxDate: {
    type: Date,
    default: () => new Date(currentYear + 10, 11, 31),
    validator: (val: Date) => Object.prototype.toString.call(val) === '[object Date]' && !isNaN(val.getTime())
  },
  formatter: {
    type: Function,
    default: (type, value) => value
  },
  componentName: { type: String, default: 'DatePicker' },
  displayOnly: {
    type: Boolean,
    default: false
  },
  step: {
    type: Object,
    default() {
      return { hour: 1, minute: 1, second: 1 }
    }
  },
  showWeekNumber: {
    type: Boolean,
    default: false
  },
  formatWeeks: Function,
  changeCompat: {
    type: Boolean,
    default: false
  }
}

export type IDatePickerProps = ExtractPropTypes<typeof datePickerProps>

export type IDatePickerConstants = typeof $constants

export type IDatePickerRenderlessParamUtils = ISharedRenderlessParamUtils<IDatePickerConstants>

export interface IDatePickerColumn {
  type: string
}

export interface IDatePickerOriginColumn extends IDatePickerColumn {
  values: number[]
}

export interface IDatePickerState {
  visible: boolean
  innerValue: Date
  ranges: ComputedRef<object[]>
  originColumns: ComputedRef<IDatePickerOriginColumn[]>
  columns: ComputedRef<IDatePickerColumn[]>
  displayValue: string
  isReadonly: boolean
  clearable: boolean
}

export interface IDatePickerApi {
  state: IDatePickerState
  getOriginColumns: () => IDatePickerOriginColumn[]
  onCancel: () => void
  getColumns: () => IDatePickerColumn[]
  clearDisplayValue: () => void
  getDisplayValue: () => string
  showPickerAndLockScroll: () => void
  updateColumnValue: () => void

  formatValue: (value: number) => Date
  getMonthEndDay: (year: number, month: number) => number
  hookMounted: () => void

  getBoundary: ({ type, value }: { type: string; value: Date }) => {
    [x: string]: number
  }
  updateInnerValue: () => void
  getRanges: () => {
    type: string
    range: number[]
  }[]

  onConfirm: () => void
  onChange: () => void
}

export type IDatePickerRenderlessParams = ISharedRenderlessFunctionParams<IDatePickerConstants> & {
  api: IDatePickerApi
  state: IDatePickerState
  props: IDatePickerProps
}
