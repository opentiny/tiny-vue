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

import { on, off, addClass, removeClass } from '../common/deps/dom'
import { emitEvent } from '../common/event'
import { getDomNode } from '../common/deps/dom'
import type { IDialogBoxRenderlessParams, IDialogBoxStyle } from '@/types'

export const computedAnimationName =
  ({ constants, props }: Pick<IDialogBoxRenderlessParams, 'constants' | 'props'>) =>
  (): string =>
    props.rightSlide ? constants.DIALOG_SLIDER_RIGHT : constants.DIALOG_FADE

export const computedAddUnit = (value: string): string => (isNaN(Number(value)) ? value : value + 'px')

export const computedStyle =
  ({ props, state, designConfig }: Pick<IDialogBoxRenderlessParams, 'props' | 'state' | 'designConfig'>) =>
  (): IDialogBoxStyle => {
    let style = {} as IDialogBoxStyle
    let { width, top, rightSlide, maxHeight } = props

    if (top === undefined) {
      top = rightSlide ? '0' : designConfig?.state?.top ? '' : '15vh'
    }

    width = computedAddUnit(width)
    top = computedAddUnit(top)
    maxHeight = computedAddUnit(maxHeight)

    if (!state.isFull) {
      style.width = width
      style.top = state.top || top
      style.maxHeight = maxHeight

      if (rightSlide) {
        style.right = 0
        style.height = 'calc(100vh - ' + style.top + ')'
      } else {
        style.left = state.left || 'calc((100vw - ' + width + ') / 2)'
      }
    }

    if (state.dragStyle) {
      style = { ...style, ...state.dragStyle }
      if (state.isFull) {
        style = { left: '0px', top: '0px' }
      }
    }

    return style
  }

export const watchVisible =
  ({
    api,
    constants,
    emit,
    nextTick,
    parent,
    props,
    vm,
    state
  }: Pick<
    IDialogBoxRenderlessParams,
    'api' | 'constants' | 'emit' | 'nextTick' | 'parent' | 'props' | 'vm' | 'state'
  >) =>
  (val: boolean): void => {
    const el = parent.$el

    if (props.lockScroll) {
      val ? api.showScrollbar() : api.hideScrollbar()
    }

    state.move = false
    state.isFull = props.fullscreen

    emit('update:visible', val)

    if (val) {
      state.closed = false
      emit('open')
      /* istanbul ignore next */
      on(el, 'scroll', api.updatePopper)

      nextTick(() => {
        vm.$refs.dialog.scrollTop = 0
      })

      if (props.appendToBody) {
        document.body.appendChild(el)
      }
    } else {
      /* istanbul ignore next */
      off(el, 'scroll', api.updatePopper)

      if (!state.closed) {
        state.emitter.emit('boxclose', props.isFormReset)
        emit('close')
      }

      if (props.destroyOnClose) {
        nextTick(() => state.key++)
      }

      if (props.rightSlide) {
        const dialogBoxDom = el.querySelector(constants.DIALOG_BOX_CLASS) || el
        dialogBoxDom.style.left = ''
      }
    }
  }

export const mounted =
  ({ api, parent, props }: Pick<IDialogBoxRenderlessParams, 'api' | 'parent' | 'props'>) =>
  (): void => {
    if (props.lockScroll && props.visible) {
      api.showScrollbar()
    }

    if (props.visible) {
      const el = parent.$el

      api.open()

      if (props.appendToBody) {
        document.body.appendChild(el)
      }
    }
  }

export const unMounted =
  ({ api, parent, props }: Pick<IDialogBoxRenderlessParams, 'api' | 'parent' | 'props'>) =>
  (): void => {
    const el = parent.$el

    api.hideScrollbar()

    if (props.appendToBody && el && el.parentNode) {
      el.parentNode.removeChild(el)
    }
  }

export const useMouseEventDown =
  ({ state }: Pick<IDialogBoxRenderlessParams, 'state'>) =>
  (event: MouseEvent): void => {
    state.mouseDownWrapperFlag = false
    if (/tiny-dialog-box__wrapper/.test(event.target.className) && event.type === 'mousedown') {
      state.mouseDownWrapperFlag = true
    }
  }

export const useMouseEventUp =
  ({ state }: Pick<IDialogBoxRenderlessParams, 'state'>) =>
  (event: MouseEvent): void => {
    state.mouseUpWrapperFlag = false
    if (/tiny-dialog-box__wrapper/.test(event.target.className) && event.type === 'mouseup') {
      state.mouseUpWrapperFlag = true
    }
  }

export const handleWrapperClick =
  ({ api, props, state }: Pick<IDialogBoxRenderlessParams, 'api' | 'props' | 'state'>) =>
  (): void => {
    if (!props.closeOnClickModal) {
      return
    }
    // mouseDownFlag、mouseUpFlag判断是否点击wrapper状态
    if (state.mouseDownWrapperFlag && state.mouseUpWrapperFlag) {
      api.handleClose('mask')
    }
  }

export const handleClose =
  ({
    api,
    constants,
    emit,
    parent,
    props
  }: Pick<IDialogBoxRenderlessParams, 'api' | 'constants' | 'emit' | 'parent' | 'props'>) =>
  (type = 'close') => {
    if (typeof props.beforeClose === 'function' && props.beforeClose(type) === false) {
      return
    }

    const el = parent.$el

    if (props.rightSlide) {
      const dialogBoxDom = (el.querySelector(constants.DIALOG_BOX_CLASS) || el) as HTMLElement
      dialogBoxDom.style.left = ''
    }

    if (!emitEvent(emit, 'before-close', api.hide)) {
      return
    }

    api.hide(type)
  }

export const hide =
  ({ api, emit, state, props }: Pick<IDialogBoxRenderlessParams, 'api' | 'emit' | 'state' | 'props'>) =>
  (cancel?: boolean): void => {
    if (cancel !== false) {
      state.emitter.emit('boxclose', props.isFormReset)

      emit('update:visible', false)
      emit('change', false)
      emit('close', cancel)

      state.closed = true
      api.hideScrollbar()
    }
  }

export const handleConfirm =
  ({ api, emit }: Pick<IDialogBoxRenderlessParams, 'api' | 'emit'>) =>
  (): void => {
    emit('confirm')
    api.handleClose('confirm')
  }

export const handleCancel =
  ({ api, emit }: Pick<IDialogBoxRenderlessParams, 'api' | 'emit'>) =>
  (): void => {
    emit('cancel')
    api.handleClose('cancel')
  }

export const updatePopper =
  ({ api, constants }: Pick<IDialogBoxRenderlessParams, 'api' | 'constants'>) =>
  (): void => {
    api.broadcast(constants.SELECT_DROPDOWN, 'updatePopper')
    api.broadcast(constants.DROPDOWN_MENU, 'updatePopper')
  }

export const afterEnter = (emit: IDialogBoxRenderlessParams['emit']) => (): void => {
  emit('opened')
}

export const afterLeave = (emit: IDialogBoxRenderlessParams['emit']) => (): void => {
  emit('closed')
}

const findPopoverComponent = ({
  vm,
  componentList
}: {
  vm: IDialogBoxRenderlessParams['vm']
  componentList: IDialogBoxRenderlessParams['vm'][]
}): IDialogBoxRenderlessParams['vm'][] => {
  const children = vm.$children

  if (!children || children.length === 0) {
    return []
  }

  children.forEach((child) => {
    const tag = child.$options.componentName

    if (tag === 'Select') {
      componentList.push(child)
    }

    findPopoverComponent({ vm: child, componentList })
  })

  return componentList
}

const closeAllPopover = (parent: IDialogBoxRenderlessParams['parent']) => {
  findPopoverComponent({ vm: parent, componentList: [] }).forEach((component) => {
    component.state.visible = false
  })
}

export const handleDrag =
  ({
    parent,
    props,
    state,
    emit,
    vm
  }: Pick<IDialogBoxRenderlessParams, 'parent' | 'props' | 'state' | 'emit' | 'vm'>) =>
  (event: MouseEvent): void => {
    if (!props.draggable) {
      return
    }

    // tiny 修改： 根据ref访问元素
    let modalBoxElem = vm.$refs.dialog as HTMLDivElement
    event.preventDefault()

    let demMousemove = document.onmousemove
    let demMouseup = document.onmouseup
    let disX = event.clientX - modalBoxElem.offsetLeft
    let disY = event.clientY - modalBoxElem.offsetTop
    let { visibleHeight, visibleWidth } = getDomNode()

    document.onmousemove = (event) => {
      event.preventDefault()

      if (!state.move) {
        emit('drag-start', event)
        closeAllPopover(parent)
        state.move = true
      }

      let offsetWidth = modalBoxElem.offsetWidth
      let offsetHeight = modalBoxElem.offsetHeight
      let left: number
      let top: number
      if (!props.dragOutsideWindow) {
        let maxX = Math.max(visibleWidth - offsetWidth, 0)
        let maxY = Math.max(visibleHeight - offsetHeight, 0)
        left = event.clientX - disX
        top = event.clientY - disY

        left = left < 0 ? 0 : left > maxX ? maxX : left
        top = top < 0 ? 0 : top > maxY ? maxY : top
      } else {
        let maxX = visibleWidth - 10
        let maxY = visibleHeight - 10
        left = event.clientX - disX
        top = event.clientY - disY

        left = event.clientX < 0 ? -disX : left > maxX ? maxX : left
        top = event.clientY < 0 ? -disY : top > maxY ? maxY : top
      }
      if (!state.isFull) {
        state.dragStyle = { left: `${left}px`, top: `${top}px` }
      }

      state.left = `${left}px`
      state.top = `${top}px`

      state.emitter.emit('boxdrag')
      emit('drag-move', event)
    }

    document.onmouseup = () => {
      document.onmousemove = demMousemove
      document.onmouseup = demMouseup
      state.move = false
      props.draggable && emit('drag-end', event)
    }
  }

export const showScrollbar = (lockScrollClass: string) => (): void => {
  addClass(document.body, lockScrollClass)
}

export const hideScrollbar = (lockScrollClass: string) => (): void => {
  removeClass(document.body, lockScrollClass)
}

// tiny 新增
export const toggleFullScreen =
  ({ state, emit, nextTick, vm }) =>
  (isFull: boolean): void => {
    state.isFull = isFull
    nextTick(() => {
      emit('resize', { fullscreen: isFull, dialog: vm.$refs.dialog })
    })
  }
