import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { amountProps } from '@/amount/src'
import type { ISharedRenderlessParamUtils } from './shared.type'

export interface IAmountState {
  visible: boolean
  amount: string
  currency: string
  date: string | Date | undefined
  overMaxLen: boolean
  isFocus: boolean
  lock: boolean
  amountText: string
  lastInput: string | number | undefined
  lastCurrency: number
  lastDate: string | Date | undefined
  format: ComputedRef<object>
}

export type IAmountEditorState = Pick<IAmountState, 'amount' | 'date' | 'currency' | 'lastInput'>

export type IAmountProps = ExtractPropTypes<typeof amountProps>

export type IAmountRenderlessParamUtils = ISharedRenderlessParamUtils<null>

export interface IAmountApi {
  state: IAmountState
  t: ISharedRenderlessParamUtils['t']
  editorState: IAmountEditorState
  getDecimal: (value: any) => any
  innerFormat: (value: any) => any
  getAmountText: (value: any) => any
  initAmount: () => any
  onInputPreprocess: (value: any) => any
  onInput: (value: any) => any
  initText: () => void
  inputFocus: () => void
  inputBlur: () => void
  closePopper: () => void
  emitChange: () => void
  popInput: (value: any) => void
  save: () => void
  reset: () => void
  handelClick: (e: any) => void
  addOutSideEvent: (visible: any) => void
  watchModelValue: () => void
  watchCurrency: (value: any) => void
  toggleVisible: () => void
}
