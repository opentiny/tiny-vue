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

import { on, off, addClass, removeClass } from '@opentiny/vue-renderless/common/deps/dom'
import { emitEvent } from '@opentiny/vue-renderless/common/event'
import { getDomNode } from '@opentiny/vue-renderless/common/deps/dom'

export const computedAnimationName =
  ({ constants, props }) =>
    () =>
      props.rightSlide ? constants.DIALOG_SLIDER_RIGHT : constants.DIALOG_FADE

export const computedAddUnit = (value) => (isNaN(Number(value)) ? value : value + 'px')

export const computedStyle =
  ({ props, state }) =>
    () => {
      const style = {}
      let { width, top, rightSlide } = props

      if (top === undefined) {
        top = rightSlide ? '0' : '15vh'
      }

      width = computedAddUnit(width)
      top = computedAddUnit(top)

      if (!state.isFull) {
        style.width = width
        style.top = top

        if (rightSlide) {
          style.right = 0
          style.height = 'calc(100vh - ' + style.top + ')'
        } else {
          style.left = 'calc((100vw - ' + width + ') / 2)'
        }
      }

      return style
    }

export const watchVisible =
  ({ api, constants, emit, nextTick, parent, props, refs, state }) =>
    (val) => {
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
          refs.dialog.scrollTop = 0
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
  ({ api, parent, props }) =>
    () => {
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
  ({ api, parent, props }) =>
    () => {
      const el = parent.$el

      api.hideScrollbar()

      if (props.appendToBody && el && el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }

export const handleWrapperClick =
  ({ api, props }) =>
    () => {
      if (!props.closeOnClickModal) {
        return
      }

      api.handleClose('mask')
    }

export const handleClose =
  ({ api, constants, emit, parent, props }) =>
    (type = 'close') => {
      if (typeof props.beforeClose === 'function' && props.beforeClose(type) === false) {
        return
      }

      const el = parent.$el

      if (props.rightSlide) {
        const dialogBoxDom = el.querySelector(constants.DIALOG_BOX_CLASS) || el
        dialogBoxDom.style.left = ''
      }

      if (!emitEvent(emit, 'before-close', api.hide)) {
        return
      }

      api.hide()
    }

export const hide =
  ({ api, emit, state, props }) =>
    (cancel) => {
      if (cancel !== false) {
        state.emitter.emit('boxclose', props.isFormReset)

        emit('update:visible', false)
        emit('change', false)
        emit('close')

        state.closed = true
        api.hideScrollbar()
      }
    }

export const handleConfirm =
  ({ api, emit }) =>
    () => {
      emit('confirm')
      api.handleClose()
    }

export const handleCancel =
  ({ api, emit }) =>
    () => {
      emit('cancel')
      api.handleClose()
    }

export const updatePopper =
  ({ api, constants }) =>
    () => {
      api.broadcast(constants.SELECT_DROPDOWN, 'updatePopper')
      api.broadcast(constants.DROPDOWN_MENU, 'updatePopper')
    }

export const afterEnter = (emit) => () => {
  emit('opened')
}

export const afterLeave = (emit) => () => {
  emit('closed')
}

const findPopoverComponent = ({ vm, componentList }) => {
  const children = vm.$children

  if (!children || children.length === 0) {
    return
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

const closeAllPopover = (parent) => {
  findPopoverComponent({ vm: parent, componentList: [] }).forEach((component) => {
    component.state.visible = false
  })
}

export const handleDrag =
  ({ parent, props, state, emit }) =>
    (event) => {
      if (!props.draggable) {
        return
      }

      let modalBoxElem = parent.$el.querySelector('.tiny-dialog-box')
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
        let maxX = visibleWidth - offsetWidth
        let maxY = visibleHeight - offsetHeight
        let left = event.clientX - disX
        let top = event.clientY - disY

        left = left < 0 ? 0 : left > maxX ? maxX : left
        top = top < 0 ? 0 : top > maxY ? maxY : top

        modalBoxElem.style.left = `${left}px`
        modalBoxElem.style.top = `${top}px`
        state.style.left = `${left}px`
        state.style.top = `${top}px`

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

export const showScrollbar = (lockScrollClass) => () => {
  addClass(document.body, lockScrollClass)
}

export const hideScrollbar = (lockScrollClass) => () => {
  removeClass(document.body, lockScrollClass)
}
