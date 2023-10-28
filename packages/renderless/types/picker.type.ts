import type { Component, ExtractPropTypes, ComputedRef } from 'vue'
import { pickerProps } from '@/picker/src/type'
import { ISharedRenderlessParamUtils } from './shared.type'

export type IPickerProps = ExtractPropTypes<typeof pickerProps>

export interface IPickerApi {
  initGlobalTimezone: () => void
  setInputPaddingLeft: () => void
  handleClickIcon: (event: MouseEvent) => void
  destroyPopper: () => void
  getValueEmpty: () => boolean
  computedTriggerClass: () => string
  getMode: () => string
  computedHaveTrigger: () => boolean
  displayValue: () => string
  parsedValue: () => string | string[]
  firstInputId: () => { id: string }
  secondInputId: () => { id: string }
  getType: () => string
  getTimezone: () => {
    from: number
    to: number
    isServiceTimezone: boolean
  }
  getValueFormat: () => string
  computedFormat: () => string
  getPanel: (type: string) => Component
  watchPickerVisible: (value: boolean) => void
  watchIsRange: (value: boolean) => void
  watchModelValue: (value: Date | Date[], oldValue: Date | Date[]) => boolean
  updateOptions: () => void
}

export interface IPickerState {
  picker: HTMLElement | null
  panel: HTMLElement

  historyValue: string[]
  historyInput: string[]
  historyUserInput: string[]
  historyUserValue: string[]
  startStatus: boolean
  endStatus: boolean
  date: null
  pickerVisible: boolean
  showClose: boolean
  userInput: null
  valueOnOpen: null
  popperElm: HTMLElement | null
  unwatchPickerOptions: null
  ranged: ComputedRef<boolean>
  reference: ComputedRef<HTMLElement>
  formDisabled: ComputedRef<boolean>
  refInput: ComputedRef<HTMLElement[]>
  valueIsEmpty: ComputedRef<boolean>
  triggerClass: ComputedRef<string>
  selectionMode: ComputedRef<string>
  haveTrigger: ComputedRef<boolean>
  displayValue: ComputedRef<string>
  parsedValue: ComputedRef<string | string[]>
  pickerSize: ComputedRef<string>
  pickerDisabled: ComputedRef<boolean>
  firstInputId: ComputedRef<{ id: string }>
  secondInputId: ComputedRef<{ id: string }>
  type: ComputedRef<string[]>
  timezone: ComputedRef<{
    from: number
    to: number
    isServiceTimezone: boolean
  }>
  valueFormat: ComputedRef<string>
  format: ComputedRef<string>
  labelTooltip: string
  displayOnlyTooltip: string
  isDisplayOnly: ComputedRef<boolean>
}

export type IPickerRenderlessParamUtils = ISharedRenderlessParamUtils<null>

export interface IPickRenderlessParamExtendOptions {
  TimePanel: Component
  TimeRangePanel: Component
}
