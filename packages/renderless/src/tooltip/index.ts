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

import type { ITooltipApi, ITooltipRenderlessParams, ITooltipState } from '@/types'
import debounce from '../common/deps/debounce'
import { on, off, addClass, removeClass } from '../common/deps/dom'

export const show =
  ({ api, state, props }: Pick<ITooltipRenderlessParams, 'api' | 'state' | 'props'>) =>
    (event?: MouseEvent) => {
      const defaultDelay = 200
      const delay = event && event.type === 'mouseenter' ? defaultDelay : 0
      // 如果指定 visible='auto', 则只有超长时，才显示tip。
      if (props.visible === 'auto') {
        const { clientWidth, scrollWidth } = state.referenceElm
        if (scrollWidth <= clientWidth) {
          return
        }
      }
      api.setExpectedState(true)
      api.handleShowPopper(delay)
    }

export const hide = (api: ITooltipApi) => () => {
  api.setExpectedState(false)
  api.debounceClose()
}

export const handleFocus =
  ({ api, state }: Pick<ITooltipRenderlessParams, 'api' | 'state'>) =>
    () => {
      state.focusing = true
      api.show()
    }
export const handleBlur =
  ({ api, state }: Pick<ITooltipRenderlessParams, 'api' | 'state'>) =>
    () => {
      state.focusing = false
      api.hide()
    }

export const removeFocusing =
  ({ api, state }: Pick<ITooltipRenderlessParams, 'api' | 'state'>) =>
    () => {
      state.focusing = false
      api.show()
    }

export const handleShowPopper =
  ({ props, state }: Pick<ITooltipRenderlessParams, 'state' | 'props'>) =>
    (delay: number) => {
      if (!state.expectedState || props.manual) {
        return
      }

      clearTimeout(state.timeout)

      state.timeout = window.setTimeout(() => {
        state.showPopper = true
      }, props.openDelay || delay)

      if (props.hideAfter > 0) {
        state.timeoutPending = window.setTimeout(() => {
          state.showPopper = false
        }, props.hideAfter)
      }
    }

export const handleClosePopper =
  ({ api, props, state }: Pick<ITooltipRenderlessParams, 'api' | 'state' | 'props'>) =>
    () => {
      if ((props.enterable && state.expectedState) || props.manual) {
        return
      }

      clearTimeout(state.timeout)

      if (state.timeoutPending) {
        clearTimeout(state.timeoutPending)
      }

      state.showPopper = false

      if (props.disabled) {
        api.doDestroy()
      }
    }

/* istanbul ignore next */
export const handleDocumentClick =
  ({ props, api, state, popperVmRef }: Pick<ITooltipRenderlessParams, 'api' | 'state' | 'props' | 'popperVmRef'>) =>
    (event: MouseEvent) => {
      if (props.manual) return

      const reference = state.referenceElm
      const $el = popperVmRef.popper

      if (
        !$el ||
        !reference ||
        $el.contains(event.target as HTMLElement) ||
        reference.contains(event.target as HTMLElement)
      ) {
        return
      }

      if (state.showPopper) {
        api.setExpectedState(false)
        api.debounceClose()
      }
    }

export const setExpectedState =
  ({ state }: Pick<ITooltipRenderlessParams, 'state'>) =>
    (value: boolean) => {
      if (state.expectedState === false) {
        clearTimeout(state.timeoutPending)
      }

      state.expectedState = value
    }

/* istanbul ignore next */
export const destroyed =
  ({ state, api }: Pick<ITooltipRenderlessParams, 'state' | 'api'>) =>
    () => {
      const reference = state.referenceElm

      state.showPopper = false

      if (reference && reference.nodeType === 1) {
        off(document, 'click', api.handleDocumentClick)
        off(reference, 'mouseenter', api.show)
        off(reference, 'mouseleave', api.hide)
        off(reference, 'focus', api.focusHandler)
        off(reference, 'blur', api.handleBlur)
        off(reference, 'click', api.removeFocusing)
      }
    }

export const debounceClose = ({ api, props }: Pick<ITooltipRenderlessParams, 'api' | 'props'>) =>
  debounce(props.closeDelay, () => {
    api.handleClosePopper()
  })

/* istanbul ignore next */
export const watchFocusing = (state: ITooltipState) => (value: boolean) => {
  if (value) {
    addClass(state.referenceElm, 'focusing')
  } else {
    removeClass(state.referenceElm, 'focusing')
  }
}

export const focusHandler =
  ({ slots, api }: Pick<ITooltipRenderlessParams, 'slots' | 'api'>) =>
    () => {
      if (!slots.default || !slots.default().length) {
        api.handleFocus()
        return
      }

      let instance = slots.default()[0]

      // vue2 vnode.elm ，vue3 vnode.el
      instance = instance.elm || instance.el

      if (instance && instance.focus) {
        instance.focus()
      } else {
        api.handleFocus()
      }
    }

export const bindEvent =
  ({ api, state, vm }: Pick<ITooltipRenderlessParams, 'api' | 'state' | 'vm'>) =>
    (reference: HTMLElement) => {
      let referenceElm: HTMLElement = null as any
      console.log(vm, vm.$el, 'vm el')
      if (vm.$el?.nodeType === 8) {
        referenceElm = reference
      } else if (vm.$el?.nodeType === 1) {
        referenceElm = vm.$el
      }

      if (!referenceElm || referenceElm.nodeType === 8 || state.referenceElm) {
        return
      }

      state.referenceElm = referenceElm
      referenceElm.setAttribute('aria-describedby', state.tooltipId)
      referenceElm.setAttribute('tabindex', state.tabindex.toString())

      on(document, 'click', api.handleDocumentClick)
      on(referenceElm, 'mouseenter', api.show)
      on(referenceElm, 'mouseleave', api.hide)
      on(referenceElm, 'focus', api.focusHandler)
      on(referenceElm, 'blur', api.handleBlur)
      on(referenceElm, 'click', api.removeFocusing)
    }

export const observeCallback =
  ({ state, popperVmRef }: Pick<ITooltipRenderlessParams, 'state' | 'popperVmRef'>) =>
    (mutationsList: any) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'x-placement') {
          state.xPlacement = popperVmRef.popper.getAttribute('x-placement') || 'bottom'
        }
      }
    }

export const bindPopper =
  ({ vm, nextTick, popperVmRef }: Pick<ITooltipRenderlessParams, 'vm' | 'nextTick' | 'popperVmRef'>) =>
    (el?: Element) => {
      nextTick(() => vm.bindEvent(el))

      // vm.popperVM 是一个get 方法，所以必须缓存下来，不能频繁访问
      let popperVM = vm.popperVM
      if (!vm.$refs.popper) {
        popperVmRef.popper = popperVM.$el
      } else {
        popperVmRef.popper = vm.$refs.popper
      }

      // vm.$refs是只读的，不允许添加popper。 原来是refs.popper， 为什么要保存这个refs.popper
      // vm.$refs.popper || (vm.$refs.popper = popperVM.$el)

      nextTick(() => {
        if (vm.modelValue) {
          vm.updatePopper()
        }
      })
    }
