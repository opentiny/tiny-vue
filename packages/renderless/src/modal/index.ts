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
import { on, off, addClass, hasClass, removeClass } from '@opentiny/vue-renderless/common/deps/dom'
import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'
import { getDomNode } from '@opentiny/vue-renderless/common/deps/dom'

const DragClass = 'is__drag'

const emitZoom = ({ params, parent, emit, event }) => {
  let { $listeners, events = {} } = parent
  if ($listeners.zoom) {
    emit('zoom', params, event)
  } else if (events.zoom) {
    events.zoom.call(parent, params, event)
  }
}

export const MsgQueue = []

export const computedIsMsg = () => (props) => props.type === 'message'

export const watchValue = (api) => (visible) => (visible ? api.open() : api.close('hide'))

export const created = ({ api, props, state }) => () => {
  if (props.modelValue) {
    api.open()
  }

  state.modalZindex = props.zIndex || PopupManager.nextZIndex()
}

export const mounted = ({ api, parent, props }) => () => {
  let modalBoxElem = api.getBox()

  Object.assign(modalBoxElem.style, {
    width: props.width ? (isNaN(props.width) ? props.width : `${props.width}px`) : null,

    height: props.height ? (isNaN(props.height) ? props.height : `${props.height}px`) : null
  })

  if (props.escClosable) {
    on(document, 'keydown', api.handleGlobalKeydownEvent)
  }

  document.body.appendChild(parent.$el)
}

export const beforeUnmouted = ({ api, parent }) => () => {
  off(document, 'keydown', api.handleGlobalKeydownEvent)
  api.removeMsgQueue()

  if (parent.$el.parentNode) {
    parent.$el.parentNode.removeChild(parent.$el)
  }
}

export const selfClickEvent = ({ api, parent, props }) => (event) => {
  if (props.maskClosable && event.target === parent.$el) {
    api.close('mask')
  }
}

export const updateZindex = ({ state, props }) => () => {
  state.modalZindex = props.zIndex || PopupManager.nextZIndex()
}

export const handleEvent = ({ api, emit, parent, props }) => (type, event) => {
  // close,confirm,cancel
  if (~['close', 'confirm', 'cancel'].indexOf(type) && typeof props.beforeClose === 'function' && props.beforeClose(type) === false) {
    return
  }

  const { events = {} } = parent

  const params = {
    type,
    $modal: parent
  }

  emit(type, params, event)
  events[type] && events[type].call(parent, params)
  api.close(type)
}

export const closeEvent = (api) => (event) => {
  api.handleEvent('close', event)
}

export const confirmEvent = (api) => (event) => {
  api.handleEvent('confirm', event)
}

export const cancelEvent = (api) => (event) => {
  api.handleEvent('cancel', event)
}

export const open = ({ api, emit, nextTick, parent, props, state }) => () => {
  let { $listeners, events = {} } = parent

  if (!state.visible) {
    let params = { type: 'show', $modal: parent }

    state.visible = true
    state.contentVisible = false
    api.updateZindex()

    if (!events.show) {
      emit('update:modelValue', true)
      emit('show', params)
    }

    setTimeout(() => {
      state.contentVisible = true

      if (!$listeners.show && events.show) {
        nextTick(() => {
          events.show.call(parent, params)
        })
      }
    }, 10)

    if (state.isMsg) {
      api.addMsgQueue()

      setTimeout(() => {
        api.close(params.type)
      }, parseFloat(props.duration))
    } else {
      nextTick(() => {
        let modalBoxElem = api.getBox()

        let clientVisibleWidth = document.documentElement.clientWidth || document.body.clientWidth

        let clientVisibleHeight = document.documentElement.clientHeight || document.body.clientHeight

        modalBoxElem.style.left = `${clientVisibleWidth / 2 - modalBoxElem.offsetWidth / 2}px`

        if (modalBoxElem.offsetHeight + modalBoxElem.offsetTop + props.marginSize > clientVisibleHeight) {
          modalBoxElem.style.top = `${props.marginSize}px`
        }

        if (props.fullscreen) {
          nextTick(api.maximize)
        }
      })
    }
  }
}

export const addMsgQueue = ({ api, parent }) => () => {
  if (!~MsgQueue.indexOf(parent)) {
    MsgQueue.push(parent)
  }

  api.updateStyle()
}

export const removeMsgQueue = ({ api, parent }) => () => {
  const index = MsgQueue.indexOf(parent)

  if (~index) {
    MsgQueue.splice(index, 1)
  }

  api.updateStyle()
}

export const updateStyle = (nextTick) => () => {
  nextTick(() => {
    let offsetTop = 0

    MsgQueue.forEach((comp) => {
      offsetTop += parseFloat(comp.top)
      comp.state.modalTop = offsetTop

      const modalBox = comp.$el.querySelector('.tiny-modal__box')

      offsetTop += modalBox.clientHeight
    })
  })
}

export const close = ({ emit, parent, props, state }) => (type) => {
  // esc,hide,mask,show,...
  if (!~['close', 'confirm', 'cancel'].indexOf(type) && typeof props.beforeClose === 'function' && props.beforeClose(type) === false) {
    return
  }

  let { events = {} } = parent

  state.emitter.emit('boxclose', props.isFormReset)

  if (state.visible) {
    state.contentVisible = false

    setTimeout(() => {
      state.visible = false

      let params = { type, $modal: parent }

      if (events.hide) {
        events.hide.call(parent, params)
      } else {
        emit('update:modelValue', false)
        emit('hide', params)
      }
    }, 200)
  }
}

export const handleGlobalKeydownEvent = (api) => (event) => {
  if (event.keyCode === KEY_CODE.Escape) {
    api.close('esc')
  }
}

export const getBox = (refs) => () => refs.modalBox

export const maximize = ({ api, nextTick, props, state }) => () =>
  nextTick().then(() => {
    if (!state.zoomLocat) {
      let marginSize = props.marginSize
      let modalBoxElement = api.getBox()
      let { visibleHeight, visibleWidth } = getDomNode()

      state.zoomLocat = {
        top: modalBoxElement.offsetTop,
        left: modalBoxElement.offsetLeft,
        width: modalBoxElement.clientWidth,
        height: modalBoxElement.clientHeight
      }

      Object.assign(modalBoxElement.style, {
        width: `${visibleWidth - marginSize * 2}px`,
        height: `${visibleHeight - marginSize * 2}px`,
        top: `${marginSize}px`,
        left: `${marginSize}px`
      })

      state.emitter.emit('boxdrag')
    }
  })

export const revert = ({ api, nextTick, state }) => () =>
  nextTick().then(() => {
    let zoomLocat = state.zoomLocat

    if (zoomLocat) {
      let modalBoxElement = api.getBox()

      state.zoomLocat = null

      Object.assign(modalBoxElement.style, {
        width: `${zoomLocat.width}px`,
        height: `${zoomLocat.height}px`,
        top: `${zoomLocat.top}px`,
        left: `${zoomLocat.left}px`
      })

      state.emitter.emit('boxdrag')
    }
  })

export const toggleZoomEvent = ({ api, emit, parent, state }) => (event) => {
  let params = { type: state.zoomLocat ? 'min' : 'max', $modal: parent }
  const callback = state.zoomLocat ? api.revert : api.maximize

  return callback().then(() => {
    emitZoom({ params, parent, emit, event })
  })
}

function getEventTargetNode(event, container, queryCls) {
  let targetElem
  let target = event.target

  while (target && target.nodeType && target !== document) {
    if (queryCls && hasClass(target, queryCls)) {
      targetElem = target
    } else if (target === container) {
      return {
        flag: queryCls ? !!targetElem : true,
        container,
        targetElem
      }
    }

    target = target.parentNode
  }

  return { flag: false }
}

export const mousedownEvent = ({ api, nextTick, props, state, emit }) => (event) => {
  let modalBoxElement = api.getBox()
  if (!state.zoomLocat && event.button === 0 && !getEventTargetNode(event, modalBoxElement, 'trigger__btn').flag) {
    event.preventDefault()
    let demMousemove = document.onmousemove
    let demMouseup = document.onmouseup
    let disX = event.clientX - modalBoxElement.offsetLeft
    let disY = event.clientY - modalBoxElement.offsetTop
    let { visibleHeight, visibleWidth } = getDomNode()
    document.onmousemove = (event) => {
      event.preventDefault()
      state.emitter.emit('boxdrag')
      let offsetWidth = modalBoxElement.offsetWidth
      let offsetHeight = modalBoxElement.offsetHeight
      let minX = props.marginSize
      let maxX = visibleWidth - offsetWidth - props.marginSize
      let minY = props.marginSize
      let maxY = visibleHeight - offsetHeight - props.marginSize
      let left = event.clientX - disX
      let top = event.clientY - disY
      if (left < minX) {
        left = minX
      }
      if (left > maxX) {
        left = maxX
      }
      if (top < minY) {
        top = minY
      }
      if (top > maxY) {
        top = maxY
      }
      modalBoxElement.style.left = `${left}px`
      modalBoxElement.style.top = `${top}px`
      addClass(modalBoxElement, DragClass)
      emit('custom-mousemove', event)
    }

    document.onmouseup = (event) => {
      document.onmousemove = demMousemove
      document.onmouseup = demMouseup
      nextTick(() => {
        removeClass(modalBoxElement, DragClass)
      })
      emit('custom-mouseup', event)
    }
    emit('custom-mousedown', event)
  }
}

const computeLeft = ({ width, offsetWidth, x, minWidth, temp, offsetLeft, marginSize, left }) => {
  width = offsetWidth - x
  width = width < minWidth ? minWidth : width
  temp = offsetLeft + offsetWidth - marginSize
  width = width > temp ? temp : width
  left = offsetLeft + offsetWidth - width

  return { width, left }
}

const computeTop = ({ height, offsetHeight, y, minHeight, temp, offsetTop, marginSize, top }) => {
  height = offsetHeight - y
  height = height < minHeight ? minHeight : height
  temp = offsetTop + offsetHeight - marginSize
  height = height > temp ? temp : height
  top = offsetTop + offsetHeight - height

  return { height, top }
}

const computeRight = ({ width, offsetWidth, x, minWidth, temp, visibleWidth, offsetLeft, marginSize }) => {
  width = offsetWidth + x
  width = width < minWidth ? minWidth : width
  temp = visibleWidth - offsetLeft - marginSize
  width = width > temp ? temp : width

  return { width }
}

const computeBottom = ({ height, offsetHeight, y, minHeight, temp, visibleHeight, offsetTop, marginSize }) => {
  height = offsetHeight + y
  height = height < minHeight ? minHeight : height
  temp = visibleHeight - offsetTop - marginSize
  height = height > temp ? temp : height

  return { height }
}

const updateModalBox = ({ ret: { width, left, height, top }, modalBoxElem: modalBoxElement }) => {
  if (width) {
    modalBoxElement.style.width = `${width}px`
  }

  if (left) {
    modalBoxElement.style.left = `${left}px`
  }

  if (height) {
    modalBoxElement.style.height = `${height}px`
  }

  if (top) {
    modalBoxElement.style.top = `${top}px`
  }
}

const updateWl = ({ width, offsetWidth, x, minWidth, temp, offsetLeft, marginSize, left, modalBoxElem }) => {
  updateModalBox({
    ret: computeLeft({
      width,
      offsetWidth,
      x,
      minWidth,
      temp,
      offsetLeft,
      marginSize,
      left
    }),
    modalBoxElem
  })
}

const updateWr = ({ width, offsetWidth, x, minWidth, temp, visibleWidth, offsetLeft, marginSize, modalBoxElem }) => {
  updateModalBox({
    ret: computeRight({
      width,
      offsetWidth,
      x,
      minWidth,
      temp,
      visibleWidth,
      offsetLeft,
      marginSize
    }),
    modalBoxElem
  })
}

const updateSt = ({ height, offsetHeight, y, minHeight, temp, offsetTop, marginSize, top, modalBoxElem }) => {
  updateModalBox({
    ret: computeTop({
      height,
      offsetHeight,
      y,
      minHeight,
      temp,
      offsetTop,
      marginSize,
      top
    }),
    modalBoxElem
  })
}

const updateSb = ({ height, offsetHeight, y, minHeight, temp, visibleHeight, offsetTop, marginSize, modalBoxElem }) => {
  updateModalBox({
    ret: computeBottom({
      height,
      offsetHeight,
      y,
      minHeight,
      temp,
      visibleHeight,
      offsetTop,
      marginSize
    }),
    modalBoxElem
  })
}

const setModalBoxStyle = ({ params, delta: { x, y } }) => {
  const { visibleHeight, visibleWidth, modalBoxElem, type, props } = params
  const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = modalBoxElem
  const { minWidth, minHeight, marginSize } = props
  const [width, left, temp, height, top] = [0, 0, 0, 0, 0]

  switch (type) {
    case 'wl':
      updateWl({ offsetWidth, width, minWidth, x, offsetLeft, temp, marginSize, left, modalBoxElem })
      break
    case 'wr':
      updateWr({ width, offsetWidth, x, minWidth, temp, visibleWidth, offsetLeft, marginSize, modalBoxElem })
      break
    case 'st':
      updateSt({ height, offsetHeight, y, minHeight, temp, offsetTop, marginSize, top, modalBoxElem })
      break
    case 'sb':
      updateSb({ height, offsetHeight, y, minHeight, temp, visibleHeight, offsetTop, marginSize, modalBoxElem })
      break
    case 'swst':
      updateWl({ width, offsetWidth, x, minWidth, temp, offsetLeft, marginSize, left, modalBoxElem })
      updateSt({ height, offsetHeight, y, minHeight, temp, offsetTop, marginSize, top, modalBoxElem })
      break
    case 'sest':
      updateWr({ offsetWidth, width, x, temp, minWidth, marginSize, visibleWidth, offsetLeft, modalBoxElem })
      updateSt({ height, offsetHeight, y, minHeight, temp, offsetTop, marginSize, top, modalBoxElem })
      break
    case 'swlb':
      updateWl({ width, offsetWidth, minWidth, x, temp, marginSize, offsetLeft, modalBoxElem, left })
      updateSb({ height, offsetHeight, y, minHeight, temp, visibleHeight, offsetTop, marginSize, modalBoxElem })
      break
    case 'selb':
      updateWr({ width, offsetWidth, minWidth, x, visibleWidth, offsetLeft, marginSize, temp, modalBoxElem })
      updateSb({ height, offsetHeight, y, minHeight, temp, visibleHeight, offsetTop, marginSize, modalBoxElem })
      break
    default:
      break
  }
}
const updateDelta = ({ event, delta, state }) => {
  if (state.prevEvent) {
    delta.x += event.screenX - state.prevEvent.screenX
    delta.y += event.screenY - state.prevEvent.screenY
  }
  state.prevEvent = event
}

function _findFormComponent(vm, formList) {
  const children = vm.$children

  if (children && children.length === 0) {
    return
  }

  children.forEach((child) => {
    const tag = child.$options.componentName

    if (/^Form$/.test(tag)) {
      formList.push(child)
    }

    _findFormComponent(child, formList)
  })
}

function findFormComponent(vm) {
  const formList = []
  _findFormComponent(vm, formList)
  return formList
}

export const updateFormTip = (parent) => {
  const formList = findFormComponent(parent)

  if (formList.length > 0) {
    formList.forEach((form) => {
      form.updateTip()
    })
  }
}

export const dragEvent = ({ api, emit, parent, props, state }) => (event) => {
  event.preventDefault()

  const delta = { x: 0, y: 0 }
  const { visibleHeight, visibleWidth } = getDomNode()
  const modalBoxElem = api.getBox()
  const demMousemove = document.onmousemove
  const demMouseup = document.onmouseup

  const params = {
    props,
    offsetTop: modalBoxElem.offsetTop,
    offsetLeft: modalBoxElem.offsetLeft,
    visibleWidth,
    modalBoxElem,
    visibleHeight,
    disX: event.clientX,
    disY: event.clientY,
    type: event.target.dataset.type
  }

  document.onmousemove = (event) => {
    updateFormTip(parent)
    updateDelta({ event, delta, state })
    setModalBoxStyle({ params, delta })

    delta.x = delta.y = 0

    addClass(modalBoxElem, DragClass)

    emitZoom({
      params: { type: 'resize', $modal: parent },
      parent,
      emit,
      event
    })
  }

  document.onmouseup = () => {
    state.zoomLocat = null
    document.onmousemove = demMousemove
    document.onmouseup = demMouseup

    setTimeout(() => {
      removeClass(modalBoxElem, DragClass)
      state.prevEvent = null
    }, 50)
  }
}

export const resetFormTip = (parent, isFormReset = true) => {
  const formList = findFormComponent(parent)

  if (formList.length > 0) {
    formList.forEach((form) => {
      isFormReset ? form.resetFields() : form.clearValidate()
    })
  }
}
