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

import { KEY_CODE } from '../index'
import { addClass, removeClass, on } from './dom'

const isServer = typeof window === 'undefined'

const instances = {} as Record<string, any>

const classes = {
  leave: 'v-modal-leave',
  enter: 'v-modal-enter',
  modal: 'v-modal'
}
interface IModalStack {
  id: string
  zIndex: number
  modalClass: string
}
const removeStack = (modalStack: IModalStack[], id: string) => {
  for (let i = modalStack.length - 1; i >= 0; i--) {
    if (modalStack[i].id === id) {
      modalStack.splice(i, 1)
      break
    }
  }
}

/** 判断PopupManager.modalDom 是否有。 没有则创建一个div, 并绑上 touchmove, click */
let getModal: () => HTMLElement

const PopupManager = {
  step: 2,
  zIndex: 2000,
  globalScroll: false, // 是否打开全局滚动监听
  modalFade: true,
  modalStack: [] as IModalStack[],
  modalDom: null as unknown as HTMLElement, // 当前model挂载的div.
  hasModal: false, // 当前是否有Modal
  popLockClass: 'popup-parent--hidden',
  oldBodyBorder: '',
  fixBodyBorder() {
    const barWidth = window.innerWidth - document.documentElement.clientWidth
    if (barWidth) {
      this.oldBodyBorder = document.documentElement.style.borderRight
      document.body.style.borderRight = `${barWidth}px solid transparent`
    }
  },
  resetBodyBorder() {
    document.body.style.borderRight = this.oldBodyBorder
    this.oldBodyBorder = ''
  },
  /** 全局反注册 */
  deregister: (id: string) => {
    if (id) {
      instances[id] = null
      delete instances[id]
    }
  },
  /** 返回全局实例 */
  getInstance: (id: string) => instances[id],
  /** 全局注册   仅vue-popup.ts中使用，instance就是vm, 把vm注册到 vm._popupId 这个键值上 */
  register: (id: string, instance: any) => {
    if (id && instance) {
      instances[id] = instance
    }
  },
  nextZIndex: () => {
    const zIndex = PopupManager.zIndex
    PopupManager.zIndex += PopupManager.step
    return zIndex
  },
  /** 打开遮罩层， 仅vue-popup.ts中使用。 dom = vm.$el 或者 undefined (appendtoBody时)  */
  openModal(id: string, zIndex: number, dom: HTMLElement | undefined, modalClass: string, modalFade: boolean) {
    if (isServer) {
      return
    }
    if (!id || zIndex === undefined) {
      return
    }

    this.modalFade = modalFade

    // 查找stack中，是否已经有id。 有了就直接退出函数
    for (let i = 0, len = this.modalStack.length; i < len; i++) {
      const modal = this.modalStack[i]

      if (modal.id === id) {
        return
      }
    }

    // 查询或创建一个modalDom----遮罩层, 为其赋值所有class ,style
    const modalDom = getModal()

    addClass(modalDom, classes.modal)

    if (this.modalFade && !PopupManager.hasModal) {
      addClass(modalDom, classes.enter)
    }

    if (modalClass) {
      const classArr = modalClass.trim().split(/\s+/)
      classArr.forEach((cls) => addClass(modalDom, cls))
    }

    setTimeout(() => {
      removeClass(modalDom, classes.enter)
    }, 200)

    if (zIndex) {
      modalDom.style.zIndex = zIndex.toString()
    }

    modalDom.style.display = ''
    modalDom.tabIndex = 0

    // 查找父节点，
    let parentNode

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      // fragment = 11
      parentNode = dom.parentNode
    } else {
      parentNode = document.body
    }

    parentNode.appendChild(modalDom)

    this.modalStack.push({ id, zIndex, modalClass })
  },
  /** 点击背景遮罩层时，调用栈顶的popup，调用它的close() */
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
  closeModal(id: string) {
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
          modalDom.style.zIndex = modalStack[stackSize - 1].zIndex.toString()
        }
      } else {
        removeStack(modalStack, id)
      }
    }

    if (modalStack.length === 0) {
      this.modalFade && addClass(modalDom, classes.leave)
      removeClass(document.body, this.popLockClass)
      this.resetBodyBorder()

      setTimeout(() => {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) {
            modalDom.parentNode.removeChild(modalDom)
          }

          modalDom.style.display = 'none'
          PopupManager.modalDom = null as unknown as HTMLElement
        }

        removeClass(modalDom, classes.leave)
      }, 200)
    }
  }
}

getModal = () => {
  if (isServer) {
    return null as unknown as HTMLElement
  }

  let modalDom: HTMLElement = PopupManager.modalDom as any

  if (modalDom) {
    PopupManager.hasModal = true
  } else {
    PopupManager.hasModal = false
    modalDom = document.createElement('div')
    PopupManager.modalDom = modalDom

    // 屏蔽touch,
    modalDom.addEventListener(
      'touchmove',
      (event) => {
        event.preventDefault()
        event.stopPropagation()
      },
      { passive: true }
    )

    on(modalDom, 'click', () => {
      PopupManager.doOnModalClick()
    })
  }

  return modalDom
}

if (!isServer) {
  // 点esc时，关闭栈顶Popup。  也就是说组件内不用关心esc了， 这里统一接管了
  on(window, 'keydown', (event: KeyboardEvent) => {
    if (event.keyCode === KEY_CODE.Escape) {
      const modalStack = PopupManager.modalStack

      if (modalStack.length > 0) {
        const topPopup = modalStack[modalStack.length - 1]
        if (!topPopup) {
          return
        }
        const topPopupVm = PopupManager.getInstance(topPopup.id)

        // 只有Dialog-box有 closeOnPressEscape ， 所以它只是为 Dialog-box 服务
        if (topPopupVm && topPopupVm.closeOnPressEscape) {
          if (topPopupVm.handleClose) {
            topPopupVm.handleClose('esc')
          } else if (topPopupVm.handleAction) {
            topPopupVm.handleAction('cancel')
          } else {
            topPopupVm.close()
          }
        }
      }
    }
  })
}

export default PopupManager
