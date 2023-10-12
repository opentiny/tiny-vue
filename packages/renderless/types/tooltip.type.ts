import type { ExtractPropTypes } from 'vue'
import { tooltipProps } from '@/tooltip/src'
import type { ISharedRenderlessFunctionParams } from './shared.type'
import userPopper from '../src/common/deps/vue-popper'

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
} from '../src/tooltip'

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
