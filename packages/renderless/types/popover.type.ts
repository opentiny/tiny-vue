import type { ExtractPropTypes } from 'vue'
import type { popoverProps } from '@/popover/src'
import type { ISharedRenderlessFunctionParams } from './shared.type'

import type {
  mounted,
  computedTooltipId,
  destroyed,
  doToggle,
  doShow,
  doClose,
  handleFocus,
  handleClick,
  handleBlur,
  handleKeydown,
  handleAfterEnter,
  handleAfterLeave,
  handleMouseEnter,
  handleMouseLeave,
  handleDocumentClick,
  cleanup,
  wrapMounted,
  handleItemClick,
  observeCallback
} from '../src/popover/index'

export type IPopoverProps = ExtractPropTypes<typeof popoverProps>

export interface IPopoverState {
  popperElm: HTMLElement
  referenceElm: HTMLElement
  showPopper: boolean
  timer: number
  mounted: boolean
  xPlacement: string
  tooltipId: string
  webCompEventTarget: HTMLElement | null
}

export interface IPopoverApi {
  state: IPopoverState
  doDestroy: (forceDestroy?: boolean | undefined) => void
  observer: MutationObserver
  mounted: ReturnType<typeof mounted>
  cleanup: ReturnType<typeof cleanup>
  destroyed: ReturnType<typeof destroyed>
  computedTooltipId: ReturnType<typeof computedTooltipId>
  doShow: ReturnType<typeof doShow>
  doClose: ReturnType<typeof doClose>
  doToggle: ReturnType<typeof doToggle>
  handleClick: ReturnType<typeof handleClick>
  handleAfterEnter: ReturnType<typeof handleAfterEnter>
  handleBlur: ReturnType<typeof handleBlur>
  handleFocus: ReturnType<typeof handleFocus>
  handleKeydown: ReturnType<typeof handleKeydown>
  handleMouseLeave: ReturnType<typeof handleMouseLeave>
  handleAfterLeave: ReturnType<typeof handleAfterLeave>
  handleMouseEnter: ReturnType<typeof handleMouseEnter>
  handleDocumentClick: ReturnType<typeof handleDocumentClick>
  wrapMounted: ReturnType<typeof wrapMounted>
  handleItemClick: ReturnType<typeof handleItemClick>
  observeCallback: ReturnType<typeof observeCallback>
}

export type IPopoverRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  props: IPopoverProps
  state: IPopoverState
  api: IPopoverApi
  updatePopper: () => void
}
