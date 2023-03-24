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

import { merge } from '@opentiny/vue-renderless/common/object'
import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'
import getScrollBarWidth from '@opentiny/vue-renderless/common/deps/scrollbar-width'
import { getStyle, addClass, removeClass, hasClass } from '@opentiny/vue-renderless/common/deps/dom'

let idSeed = 1
let scrollBarWidth
const isServer = typeof window === 'undefined'
const popLockClass = 'tiny-popup-parent--hidden'

const setWatchFn = ({ onMounted, onBeforeUnmount, watch, vm, api, props, state, nextTick }) => {
  onMounted(() => {
    vm._popupId = `popup-${idSeed++}`
    PopupManager.register(vm._popupId, vm)
  })

  onBeforeUnmount(() => {
    PopupManager.deregister(vm._popupId)
    PopupManager.closeModal(vm._popupId)

    api.restoreBodyStyle()
  })

  watch(
    () => props.visible,
    (val) => {
      if (val) {
        if (vm._opening) {
          return
        }
        if (state.rendered) {
          api.open()
        } else {
          state.rendered = true
          nextTick(() => {
            api.open()
          })
        }
      } else {
        api.close()
      }
    }
  )
}

const modifyBodyStyle = ({ bodyHasOverflow, bodyOverflowY, state }) => {
  if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && state.withoutHiddenClass) {
    document.body.style.paddingRight = `${state.computedBodyPaddingRight + scrollBarWidth}px`
  }
}

const openFn = (state, vm, api) => (options) => {
  if (!state.rendered) {
    state.rendered = true
  }

  const props = merge({}, vm.$props || vm, options)

  if (vm._closeTimer) {
    clearTimeout(vm._closeTimer)
    vm._closeTimer = null
  }

  clearTimeout(vm._openTimer)

  const openDelay = Number(props.openDelay)

  if (openDelay > 0) {
    vm._openTimer = setTimeout(() => {
      vm._openTimer = null
      api.doOpen(props)
    }, openDelay)
  } else {
    api.doOpen(props)
  }
}
const modifyStateOnLockScroll = (state) => {
  state.withoutHiddenClass = !hasClass(document.body, popLockClass)

  if (state.withoutHiddenClass) {
    state.bodyPaddingRight = document.body.style.paddingRight

    state.computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10)
  }
}

const doOpenFn = (vm, state, props, api) => (properties) => {
  if (isServer || (vm.willOpen && !vm.willOpen()) || state.opened) {
    return
  }

  vm._opening = true

  const dom = vm.$el
  const modal = properties.modal
  const zIndex = properties.zIndex

  if (zIndex) {
    PopupManager.zIndex = zIndex
  }

  if (modal) {
    if (vm._closing) {
      PopupManager.closeModal(vm._popupId)
      vm._closing = false
    }

    PopupManager.openModal(vm._popupId, PopupManager.nextZIndex(), props.modalAppendToBody ? undefined : dom, properties.modalClass, properties.modalFade)

    if (properties.lockScroll) {
      modifyStateOnLockScroll(state)

      scrollBarWidth = getScrollBarWidth()

      const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight

      const bodyOverflowY = getStyle(document.body, 'overflowY')

      modifyBodyStyle({ bodyHasOverflow, bodyOverflowY, state })

      addClass(document.body, popLockClass)
    }
  }

  if (getComputedStyle(dom).position === 'static') {
    dom.style.position = 'absolute'
  }

  dom.style.zIndex = PopupManager.nextZIndex()
  state.opened = true

  api.onOpen && api.onOpen()
  api.doAfterOpen()
}

const closeFn = (api, vm) => () => {
  if (api.willClose && !api.willClose()) {
    return
  }

  if (vm._openTimer !== null) {
    clearTimeout(vm._openTimer)
    vm._openTimer = null
  }

  clearTimeout(vm._closeTimer)

  const closeDelay = Number(vm.closeDelay)

  if (closeDelay > 0) {
    vm._closeTimer = setTimeout(() => {
      vm._closeTimer = null
      api.doClose()
    }, closeDelay)
  } else {
    api.doClose()
  }
}

export default ({ api, nextTick, onBeforeUnmount, onMounted, props, reactive, toRefs, vm, watch }) => {
  const state = reactive({ opened: false, rendered: false, bodyPaddingRight: null, withoutHiddenClass: true, computedBodyPaddingRight: 0 })

  setWatchFn({ onMounted, onBeforeUnmount, watch, vm, api, props, state, nextTick })

  const open = openFn(state, vm, api)
  const doOpen = doOpenFn(vm, state, props, api)
  const doAfterOpen = () => {
    vm._opening = false
  }
  const close = closeFn(api, vm)
  const doClose = () => {
    vm._closing = true
    api.onClose && api.onClose()

    if (props.lockScroll) {
      setTimeout(api.restoreBodyStyle, 200)
    }

    state.opened = false
    api.doAfterClose()
  }

  const doAfterClose = () => {
    PopupManager.closeModal(vm._popupId)
    vm._closing = false
  }

  const restoreBodyStyle = () => {
    if (props.modal && state.withoutHiddenClass) {
      document.body.style.paddingRight = state.bodyPaddingRight
      removeClass(document.body, popLockClass)
    }

    state.withoutHiddenClass = true
  }

  return { open, close, doOpen, doClose, doAfterOpen, doAfterClose, PopupManager, restoreBodyStyle, ...toRefs(state) }
}
