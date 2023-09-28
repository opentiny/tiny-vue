import type { ExtractPropTypes } from 'vue'
import { tooltipProps } from '@/tooltip/src'
import { ISharedRenderlessFunctionParams } from './shared.type'

export type ITooltipProps = ExtractPropTypes<typeof tooltipProps>

export interface ITooltipState {
  showPopper: boolean
  popperElm: HTMLElement
  referenceElm: HTMLElement
  timeout: number
  focusing: boolean
  expectedState: boolean
  /** TINY_NO_USED */
  mounted: boolean
  tooltipId: string
  tabindex: number
  xPlacement: string
  /** TINY_NO_USED  存储popperJS 对象，没有使用 */
  poppers: any[]
  showContent: boolean
  tipsMaxWidth: string | number
}

export interface ITooltipApi {
  state: ITooltipState
  /** TINY_NO_USED */
  markRaw: any
  doDestroy: () => void
  updatePopper: () => void
  show: (event: MouseEvent) => void
  hide: () => void
  destroyed: () => void
  bindPopper: (el?: Element) => void
  watchFocusing: (value: boolean) => void
  removeFocusing: () => void
  handleBlur: () => void
  handleFocus: () => void
  debounceClose: () => void
  setExpectedState: (value: boolean) => void
  handleShowPopper: (delay: number) => void
  handleClosePopper: () => void
  bindEvent: (reference: Element) => void
  focusHandler: () => void
  handleDocumentClick: (event: Event) => void
  observeCallback: (mutationsList: any) => void
}

export type ITooltipRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  props: ITooltipProps
  state: ITooltipState
  api: ITooltipApi
}
