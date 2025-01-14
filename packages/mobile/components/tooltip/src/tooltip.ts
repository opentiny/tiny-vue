import type { ExtractPropTypes } from 'vue'
import type { ISharedRenderlessFunctionParams, ITinyVm } from '@mobile-root/shared.type'

import type {
  bindEvent,
  show,
  hide,
  handleFocus,
  handleBlur,
  removeFocusing,
  handleShowPopper,
  handleClosePopper,
  setExpectedState,
  destroyed,
  debounceClose,
  watchFocusing,
  bindPopper,
  focusHandler,
  observeCallback,
  handleDocumentClick
} from './renderless'

export { ITinyVm }

export const tooltipProps = {
  visible: {
    type: String,
    default: () => 'always',
    validator: (value: string) => ['always', 'auto'].includes(value)
  },
  adjustArrow: {
    type: Boolean,
    default: () => false
  },
  appendToBody: {
    type: Boolean,
    default: () => true
  },
  arrowOffset: {
    type: Number,
    default: () => 0
  },
  content: { type: [String, Object] },
  disabled: { type: Boolean },
  enterable: {
    type: Boolean,
    default: () => true
  },
  hideAfter: {
    type: Number,
    default: () => 0
  },
  manual: { type: Boolean },
  modelValue: { type: Boolean },
  offset: {
    default: () => 0
  },
  effect: {
    type: String,
    default: () => ''
  },
  openDelay: {
    type: Number,
    default: () => 0
  },
  closeDelay: {
    type: Number,
    default: () => 100
  },
  placement: {
    type: String,
    default: () => 'bottom'
  },
  popper: {},
  popperClass: { type: String },
  popperOptions: {
    default: () => ({})
  },
  pre: { type: Boolean },
  reference: {},
  renderContent: { type: Function },
  tabindex: {
    type: Number,
    default: () => 0
  },
  transition: {
    type: String,
    default: () => 'tiny-fade-in-linear'
  },
  type: {
    type: String,
    validator: (value: string) => Boolean(~['normal', 'warning', 'error', 'info', 'success'].indexOf(value))
  },
  visibleArrow: {
    type: Boolean,
    default: () => true
  },
  genArrowByHtml: {
    type: Boolean,
    default: () => true
  },
  zIndex: {
    type: String,
    default: () => 'next'
  }
}

export type ITooltipProps = ExtractPropTypes<typeof tooltipProps>

export interface ITooltipState {
  showPopper: boolean
  popperElm: HTMLElement
  referenceElm: HTMLElement
  timeout: number
  timeoutPending: number
  focusing: boolean
  expectedState: boolean
  tooltipId: string
  tabindex: number
  xPlacement: string
  showContent: boolean
  tipsMaxWidth: string | number
}

export interface ITooltipApi {
  state: ITooltipState
  observer: MutationObserver
  doDestroy: (forceDestroy?: boolean | undefined) => void
  updatePopper: (popperElm?: HTMLElement | undefined) => void
  show: ReturnType<typeof show>
  hide: ReturnType<typeof hide>
  destroyed: ReturnType<typeof destroyed>
  bindPopper: ReturnType<typeof bindPopper>
  watchFocusing: ReturnType<typeof watchFocusing>
  removeFocusing: ReturnType<typeof removeFocusing>
  handleBlur: ReturnType<typeof handleBlur>
  handleFocus: ReturnType<typeof handleFocus>
  debounceClose: ReturnType<typeof debounceClose>
  setExpectedState: ReturnType<typeof setExpectedState>
  handleShowPopper: ReturnType<typeof handleShowPopper>
  handleClosePopper: ReturnType<typeof handleClosePopper>
  bindEvent: ReturnType<typeof bindEvent>
  focusHandler: ReturnType<typeof focusHandler>
  handleDocumentClick: ReturnType<typeof handleDocumentClick>
  observeCallback: ReturnType<typeof observeCallback>
}

export type ITooltipRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  props: ITooltipProps
  state: ITooltipState
  api: ITooltipApi
  popperVmRef: { popper: HTMLElement }
}
