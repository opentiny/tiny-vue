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
import type { IPopoverRenderlessParams, IPopoverState } from 'types/popover.type'
import { on, off, addClass, removeClass } from '../common/deps/dom'
import { guid } from '../common/string'
import { KEY_CODE } from '../common'

const processTrigger = ({
  api,
  state,
  props,
  nextTick
}: Pick<IPopoverRenderlessParams, 'api' | 'state' | 'props' | 'nextTick'>) => {
  const { referenceElm, popperElm } = state

  if (props.trigger === 'click') {
    on(referenceElm, 'click', api.doToggle)
    on(document, 'click', api.handleDocumentClick)
  } else if (props.trigger === 'hover') {
    on(referenceElm, 'mouseenter', api.handleMouseEnter)
    on(popperElm, 'mouseenter', api.handleMouseEnter)
    on(referenceElm, 'mouseleave', api.handleMouseLeave)
    on(popperElm, 'mouseleave', api.handleMouseLeave)
  } else if (props.trigger === 'focus') {
    if (referenceElm.querySelector('input, textarea')) {
      on(referenceElm, 'focusin', api.doShow)
      on(referenceElm, 'focusout', api.doClose)
    } else {
      on(referenceElm, 'mousedown', api.doShow)
      on(referenceElm, 'mouseup', api.doClose)
    }
  } else if (props.trigger === 'manual') {
    // 手动模式，且用户初始modelValue=true,要触发show
    if (props.modelValue) {
      nextTick(api.doShow)
    }
  }
}

/* istanbul ignore next */
export const mounted =
  ({
    api,
    state,
    constants,
    props,
    nextTick,
    mode
  }: Pick<IPopoverRenderlessParams, 'api' | 'state' | 'props' | 'nextTick' | 'mode'> & {
    constants: { IDPREFIX: string }
  }) =>
  () => {
    state.mounted = true

    const { referenceElm, popperElm, tooltipId } = state

    if (referenceElm) {
      if (mode !== 'mobile-first') {
        addClass(referenceElm, `${constants.IDPREFIX}__reference`)
      }

      referenceElm.setAttribute('aria-describedby', tooltipId)
      referenceElm.setAttribute('tabindex', props.tabindex.toString())
      popperElm.setAttribute('tabindex', 0)

      if (props.trigger !== 'click') {
        on(referenceElm, 'focusin', () => {
          api.handleFocus()

          // 仅vue2有 __vue__
          const instance = referenceElm.__vue__

          if (instance && typeof instance.focus === 'function') {
            instance.focus()
          }
        })

        on(popperElm, 'focusin', api.handleFocus)
        on(referenceElm, 'focusout', api.handleBlur)
        on(popperElm, 'focusout', api.handleBlur)
      }

      on(referenceElm, 'keydown', api.handleKeydown)
      on(referenceElm, 'click', api.handleClick)
    }

    processTrigger({ api, state, props, nextTick })
  }

export const doToggle = (state: IPopoverState) => () => {
  state.showPopper = !state.showPopper
}

export const doShow = (state: IPopoverState) => () => {
  state.showPopper = true
}

export const doClose = (state: IPopoverState) => () => {
  state.showPopper = false
}

export const handleFocus =
  ({ props, state }: Pick<IPopoverRenderlessParams, 'state' | 'props'>) =>
  () => {
    addClass(state.referenceElm, 'focusing')

    if (props.trigger === 'click' || props.trigger === 'focus') {
      state.showPopper = true
    }
  }

/* istanbul ignore next */
export const handleClick = (state: IPopoverState) => (event: MouseEvent) => {
  const popperElm = state.popperElm
  // 在webcomponents环境中，在事件传播到document之前对正确的target进行缓存
  if (event?.target && popperElm) {
    state.webCompEventTarget = event.target as HTMLElement
  }
  removeClass(state.referenceElm, 'focusing')
}

export const handleBlur =
  ({ props, state }: Pick<IPopoverRenderlessParams, 'state' | 'props'>) =>
  () => {
    removeClass(state.referenceElm, 'focusing')

    if (props.trigger === 'click' || props.trigger === 'focus') {
      state.showPopper = false
    }
  }

export const handleMouseEnter =
  ({ props, state }: Pick<IPopoverRenderlessParams, 'state' | 'props'>) =>
  () => {
    clearTimeout(state.timer)

    if (props.openDelay) {
      state.timer = window.setTimeout(() => {
        state.showPopper = true
      }, props.openDelay)
    } else {
      state.showPopper = true
    }
  }

export const handleKeydown =
  ({ api, props }: Pick<IPopoverRenderlessParams, 'api' | 'props'>) =>
  (event: KeyboardEvent) => {
    if (event.keyCode === KEY_CODE.Escape && props.trigger !== 'manual') {
      api.doClose()
    }
  }

export const handleMouseLeave =
  ({ props, state }: Pick<IPopoverRenderlessParams, 'state' | 'props'>) =>
  () => {
    clearTimeout(state.timer)

    if (props.closeDelay) {
      state.timer = window.setTimeout(() => {
        state.showPopper = false
      }, props.closeDelay)
    } else {
      state.showPopper = false
    }
  }

/* istanbul ignore next */
export const handleDocumentClick =
  ({ vm, state }: Pick<IPopoverRenderlessParams, 'state' | 'vm'>) =>
  (event: MouseEvent) => {
    const reference = state.referenceElm
    const popperElm = state.popperElm
    const $el = vm.$refs.root
    let target = event.target as HTMLElement

    // 解决组件在webcomponents中触发document的click事件，但是e.target始终是webcomponents自定义标签，从而引起的判断失效的bug
    if (target?.shadowRoot && popperElm) {
      target = state.webCompEventTarget as HTMLElement
    }

    if (
      !$el ||
      !reference ||
      $el.contains(target) ||
      reference.contains(target) ||
      !popperElm ||
      popperElm.contains(target)
    ) {
      return false
    } else {
      state.showPopper = false
      return true
    }

    state.showPopper = false
  }

export const handleAfterEnter = (emit: IPopoverRenderlessParams['emit']) => () => {
  emit('after-enter')
}

export const handleAfterLeave = (emit: IPopoverRenderlessParams['emit']) => () => {
  emit('after-leave')
}

/** mobile.vue中，给listData项的点击事件 */
export const handleItemClick =
  ({ emit, state }: Pick<IPopoverRenderlessParams, 'state' | 'emit'>) =>
  (item) => {
    state.showPopper = false
    emit('item-click', item)
  }

export const cleanup =
  ({ props, state }: Pick<IPopoverRenderlessParams, 'state' | 'props'>) =>
  () => {
    if (props.openDelay) {
      clearTimeout(state.timer)
    }
  }

/* istanbul ignore next */
export const destroyed =
  ({ state, api }: Pick<IPopoverRenderlessParams, 'state' | 'api'>) =>
  () => {
    const { referenceElm, popperElm } = state

    // 原来
    off(referenceElm, 'click', api.doToggle)
    off(referenceElm, 'mouseup', api.doClose)
    off(referenceElm, 'mousedown', api.doShow)
    off(referenceElm, 'focusin', api.doShow)
    off(referenceElm, 'focusout', api.doClose)
    off(referenceElm, 'mouseleave', api.handleMouseLeave)
    off(referenceElm, 'mouseenter', api.handleMouseEnter)
    off(document, 'click', api.handleDocumentClick)

    // 同步补充
    off(popperElm, 'focusin', api.handleFocus) //
    off(popperElm, 'focusout', api.handleBlur)
    off(popperElm, 'mouseenter', api.handleMouseEnter)
    off(popperElm, 'mouseleave', api.handleMouseLeave)
    off(referenceElm, 'click', api.handleClick)
    off(referenceElm, 'focusout', api.handleBlur)
    off(referenceElm, 'keydown', api.handleKeydown)
  }

export const computedTooltipId = (constants: { IDPREFIX: string }) => () => `${constants.IDPREFIX}-${guid('', 4)}`

export const wrapMounted =
  ({ api, props, vm, state }: Pick<IPopoverRenderlessParams, 'state' | 'api' | 'props' | 'vm'>) =>
  () => {
    const { reference, popper, wrapper } = vm.$refs
    const referenceElm = (state.referenceElm = props.reference || reference)

    state.popperElm = state.popperElm || popper

    if (!referenceElm && wrapper.children) {
      state.referenceElm = wrapper.children[0] || wrapper
    }

    state.referenceElm && api.mounted()
  }

export const observeCallback =
  ({ state, vm }: Pick<IPopoverRenderlessParams, 'state' | 'vm'>) =>
  (mutationsList: any) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'x-placement') {
        state.xPlacement = vm.$refs.popper.getAttribute('x-placement') || 'bottom'
      }
    }
  }
