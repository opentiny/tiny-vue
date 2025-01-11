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
import type { ExtractPropTypes } from 'vue'
import type { ISharedRenderlessFunctionParams } from '@mobile-root/shared.type'

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
} from './renderless'

export type { ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@mobile-root/shared.type'

export const popoverProps = {
  appendToBody: {
    type: Boolean,
    default: true
  },
  arrowOffset: {
    type: Number,
    default: 0
  },
  boundariesPadding: {
    type: Number,
    default: 5
  },
  closeDelay: {
    type: Number,
    default: 200
  },
  content: String,
  disabled: Boolean,
  modelValue: Boolean,
  offset: {
    default: 0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  placement: {
    type: String,
    default: 'bottom'
  },
  popper: {},
  popperClass: String,
  popperOptions: {
    type: Object,
    default: () => ({ gpuAcceleration: false })
  },
  reference: {},
  tabindex: {
    type: Number,
    default: 0
  },
  title: String,
  transition: {
    type: String,
    default: 'fade-in-linear'
  },
  trigger: {
    type: String,
    default: 'click',
    validator: (value: string) => Boolean(~['click', 'focus', 'hover', 'manual'].indexOf(value))
  },
  visibleArrow: {
    default: true
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  maxHeight: {
    type: [String, Number]
  },
  listData: [Object, Array],
  genArrowByHtml: {
    type: Boolean,
    default: () => true
  }
}

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
