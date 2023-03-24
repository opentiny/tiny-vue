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

import { KEY_CODE } from '@opentiny/vue-renderless/common'
import { addClass, removeClass, on } from '@opentiny/vue-renderless/common/deps/dom'

let hasModal = false
const isServer = typeof window === 'undefined'

const instances = {}

const classes = {
  leave: 'v-modal-leave',
  enter: 'v-modal-enter',
  modal: 'v-modal'
}

const removeStack = (modalStack, id) => {
  for (let i = modalStack.length - 1; i >= 0; i--) {
    if (modalStack[i].id === id) {
      modalStack.splice(i, 1)
      break
    }
  }
}

let getModal

const PopupManager = {
  step: 2,
  zIndex: 2000,
  globalScroll: false, // 是否打开全局滚动监听
  modalFade: true,
  modalStack: [],
  deregister: (id) => {
    if (id) {
      instances[id] = null
      delete instances[id]
    }
  },
  getInstance: (id) => instances[id],
  register: (id, instance) => {
    if (id && instance) {
      instances[id] = instance
    }
  },
  nextZIndex: () => {
    const zIndex = PopupManager.zIndex
    PopupManager.zIndex += PopupManager.step
    return zIndex
  },
  openModal(id, zIndex, dom, modalClass, modalFade) {
    if (isServer) {
      return
    }
    if (!id || zIndex === undefined) {
      return
    }

    this.modalFade = modalFade
    const modalStack = this.modalStack

    for (let i = 0, len = modalStack.length; i < len; i++) {
      const modal = modalStack[i]

      if (modal.id === id) {
        return
      }
    }

    const modalDom = getModal()

    addClass(modalDom, classes.modal)

    if (this.modalFade && !hasModal) {
      addClass(modalDom, classes.enter)
    }

    if (modalClass) {
      const classArr = modalClass.trim().split(/\s+/)
      classArr.forEach((cls) => addClass(modalDom, cls))
    }

    setTimeout(() => {
      removeClass(modalDom, classes.enter)
    }, 200)

    let parentNode

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      parentNode = dom.parentNode
    } else {
      parentNode = document.body
    }

    parentNode.appendChild(modalDom)

    if (zIndex) {
      modalDom.style.zIndex = zIndex
    }

    modalDom.style.display = ''
    modalDom.tabIndex = 0

    this.modalStack.push({ id, zIndex, modalClass })
  },
  doOnModalClick: () => {
    const modalStack = PopupManager.modalStack
    const topPopup = modalStack[modalStack.length - 1]
    if (!topPopup) {
      return
    }

    const instance = PopupManager.getInstance(topPopup.id)
    if (instance && instance.closeOnClickModal) {
      typeof instance.close === 'function' && instance.close()
    }
  },
  closeModal(id) {
    const modalStack = this.modalStack
    const modalDom = getModal()

    if (modalStack.length > 0) {
      const topPopup = modalStack[modalStack.length - 1]

      if (topPopup.id === id) {
        if (topPopup.modalClass) {
          const classArr = topPopup.modalClass.trim().split(/\s+/)
          classArr.forEach((cls) => removeClass(modalDom, cls))
        }

        modalStack.pop()

        const stackSize = modalStack.length

        if (stackSize > 0) {
          modalDom.style.zIndex = modalStack[stackSize - 1].zIndex
        }
      } else {
        removeStack(modalStack, id)
      }
    }

    if (modalStack.length === 0) {
      this.modalFade && addClass(modalDom, classes.leave)

      setTimeout(() => {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) {
            modalDom.parentNode.removeChild(modalDom)
          }

          modalDom.style.display = 'none'
          PopupManager.modalDom = undefined
        }

        removeClass(modalDom, classes.leave)
      }, 200)
    }
  }
}

getModal = () => {
  if (isServer) {
    return
  }

  let modalDom = PopupManager.modalDom

  if (modalDom) {
    hasModal = true
  } else {
    hasModal = false
    modalDom = document.createElement('div')
    PopupManager.modalDom = modalDom

    modalDom.addEventListener(
      'touchmove',
      (event) => {
        event.preventDefault()
        event.stopPropagation()
      },
      { passive: true }
    )

    on(modalDom, 'click', () => {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick()
    })
  }

  return modalDom
}

const getTopPopup = () => {
  if (isServer) {
    return
  }

  const modalStack = PopupManager.modalStack

  if (modalStack.length > 0) {
    const topPopup = modalStack[modalStack.length - 1]
    if (!topPopup) {
      return
    }

    const instance = PopupManager.getInstance(topPopup.id)
    return instance
  }
}

if (!isServer) {
  // handle `esc` key when the popup is shown
  on(window, 'keydown', (event) => {
    if (event.keyCode === KEY_CODE.Escape) {
      const topPopup = getTopPopup()

      if (topPopup && topPopup.closeOnPressEscape) {
        if (topPopup.handleClose) {
          topPopup.handleClose('esc')
        } else {
          topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close()
        }
      }
    }
  })
}

export default PopupManager
