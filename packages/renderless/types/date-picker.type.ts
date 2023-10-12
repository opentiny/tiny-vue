import type { ComputedRef, ExtractPropTypes } from 'vue'
import { datePickerProps, $constants } from '@/date-picker/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

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
