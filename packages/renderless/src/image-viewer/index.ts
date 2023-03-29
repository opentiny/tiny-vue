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

import { on, off } from '@opentiny/vue-renderless/common/deps/dom'
import { KEY_CODE } from '@opentiny/vue-renderless/common'
import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'

const isFirefox = () => !!window.navigator.userAgent.match(/firefox/i)

const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel'

export const rafThrottle = (fn) => {
  let locked = false

  return function (...args) {
    if (locked) {
      return
    }

    locked = true

    window.requestAnimationFrame(() => {
      fn.apply(this, args)
      locked = false
    })
  }
}

export const hide = ({ props, api }) => () => {
  api.deviceSupportUninstall()
  props.onClose()
}

export const deviceSupportInstall = ({ state, api }) => () => {
  state._keyDownHandler = rafThrottle((event) => {
    const keyCode = event.keyCode

    switch (keyCode) {
      case KEY_CODE.Escape:
        api.hide()
        break
      case KEY_CODE.Space:
        api.toggleMode()
        break
      case KEY_CODE.ArrowLeft:
        api.prev()
        break
      case KEY_CODE.ArrowUp:
        api.handleActions('zoomIn')
        break
      case KEY_CODE.ArrowRight:
        api.next()
        break
      case KEY_CODE.ArrowDown:
        api.handleActions('zoomOut')
        break
      default:
        break
    }
  })

  state._mouseWheelHandler = rafThrottle((event) => {
    const delta = event.wheelDelta ? event.wheelDelta : -event.detail

    if (delta > 0) {
      api.handleActions('zoomIn', {
        zoomRate: 0.015,
        enableTransition: false
      })
    } else {
      api.handleActions('zoomOut', {
        zoomRate: 0.015,
        enableTransition: false
      })
    }
  })

  on(document, 'keydown', state._keyDownHandler)
  on(document, mousewheelEventName, state._mouseWheelHandler)
}

export const deviceSupportUninstall = (state) => () => {
  off(document, 'keydown', state._keyDownHandler)
  off(document, mousewheelEventName, state._mouseWheelHandler)

  state._keyDownHandler = null
  state._mouseWheelHandler = null
}

export const handleImgLoad = (state) => () => (state.loading = false)

export const handleImgError = ({ state, t }) => (event) => {
  state.loading = false
  event.target.alt = t('ui.imageViewer.loadErrorAlt')
}

export const handleMouseDown = (state) => (event) => {
  if (state.loading || event.button !== 0) {
    return
  }

  const { offsetX, offsetY } = state.transform
  const startX = event.pageX
  const startY = event.pageY

  state._dragHandler = rafThrottle((event) => {
    state.transform.offsetX = offsetX + event.pageX - startX
    state.transform.offsetY = offsetY + event.pageY - startY
  })

  on(document, 'mousemove', state._dragHandler)
  on(document, 'mouseup', () => off(document, 'mousemove', state._dragHandler))

  event.preventDefault()
}

export const reset = (state) => () =>
  (state.transform = {
    scale: 1,
    deg: 0,
    offsetX: 0,
    offsetY: 0,
    enableTransition: false
  })

export const toggleMode = ({ state, constants, api }) => () => {
  if (state.loading) {
    return
  }

  const MODE = constants.MODE
  const modeNames = Object.keys(MODE)
  const modeValues = []

  modeNames.forEach((key) => {
    modeValues.push(MODE[key])
  })

  let index = -1

  modeValues.forEach((item, inx) => {
    if (item.name === state.mode.name) {
      index = inx
    }
  })

  const nextIndex = (index + 1) % modeNames.length

  state.mode = MODE[modeNames[nextIndex]]

  api.reset()
}

export const prev = ({ state, props }) => () => {
  if (state.isFirst && !state.infinite) {
    return
  }

  const len = props.urlList.length

  state.index = (state.index - 1 + len) % len
}

export const next = ({ state, props }) => () => {
  if (state.isLast && !state.infinite) {
    return
  }

  const len = props.urlList.length

  state.index = (state.index + 1) % len
}

export const handleActions = (state) => (action, options = {}) => {
  if (state.loading) {
    return
  }

  const { zoomRate, rotateDeg, enableTransition } = {
    zoomRate: 0.2,
    rotateDeg: 90,
    enableTransition: true,
    ...options
  }
  const { transform } = state

  if (action === 'zoomOut') {
    if (transform.scale > 0.2) {
      transform.scale = parseFloat((transform.scale - zoomRate).toFixed(3))
    }
  } else if (action === 'zoomIn') {
    transform.scale = parseFloat((transform.scale + zoomRate).toFixed(3))
  } else if (action === 'clocelise') {
    transform.deg += rotateDeg
  } else if (action === 'anticlocelise') {
    transform.deg -= rotateDeg
  }

  transform.enableTransition = enableTransition
}

export const computedIsSingle = (props) => () => props.urlList.length <= 1

export const computedIsFirst = (state) => () => state.index === 0

export const computedIsLast = ({ state, props }) => () => state.index === props.urlList.length - 1

export const computedCurrentImg = ({ state, props }) => () => props.urlList[state.index]

export const computedImgStyle = ({ state, constants }) => () => {
  const { offsetX, offsetY, scale, deg, enableTransition } = state.transform
  const transition = enableTransition ? 'transform .3s' : ''

  const style = {
    transform: `scale(${scale}) rotate(${deg}deg)`,
    transition,
    'margin-top': `${offsetY}px`,
    'margin-left': `${offsetX}px`
  }

  if (JSON.stringify(state.mode) === JSON.stringify(constants.MODE.CONTAIN)) {
    style.maxWidth = style.maxHeight = '100%'
  }

  return style
}

export const watchVisible = (state) => (value) => (state.previewVisible = value)

export const handleVisible = ({ state, emit, props }) => () => {
  state.transform.scale = 1
  state.transform.deg = 0

  setTimeout(() => {
    if (props.startPosition !== 0) {
      state.index = (props.startPosition - 1 + state.urlList.length) % state.urlList.length
      state.imageTransform = state.index * state.imageItemWidth
      state.imageTransformSize = -state.index * state.imageItemWidth
    } else {
      state.index = 0
      state.imageTransform = state.index * state.imageItemWidth
      state.imageTransformSize = -state.index * state.imageItemWidth
    }
  }, 300)

  emit('update:preview-visible', false)
  emit('close', state.index, state.urlList[state.index])
}

export const getImageWidth = ({ state, parent, props }) => () => {
  let imageW = 0
  const len = state.urlList.length

  imageW = parent.$el.querySelector('.tiny-mobile-image-viewer__canvas').offsetWidth

  state.imageList = parent.$el.querySelectorAll('.tiny-mobile-image-viewer__item')

  state.imageItemWidth = imageW
  state.iamgeAllWidth = state.urlList.length * imageW

  if (props.startPosition !== 0) {
    state.index = props.startPosition
    state.imageTransition = 0

    const transformX = state.index * state.imageItemWidth

    state.imageTransform = transformX
    state.imageTransformSize = -transformX
  }

  if (state.index === 0 && props.deleteButton && state.delete) {
    state.imageTransition = 0

    const transformX = state.index * state.imageItemWidth

    state.imageTransform = transformX
    state.imageTransformSize = -transformX
  }

  setTimeout(() => {
    state.imageTransition = 300
  }, 0)

  if (props.startPosition === 0) {
    state.arrowStyle = 'N'
  }

  if (props.startPosition === len - 1) {
    state.arrowStyle = 'Y'
  }
}

export const swipeLeft = ({ state, emit }) => () => {
  if (state.isLast && !state.infinite) {
    return
  }

  const len = state.urlList.length

  if (state.index >= state.urlList.length - 2) {
    state.arrowStyle = 'Y'
  } else {
    state.arrowStyle = null
  }

  if (state.imageTransform === state.iamgeAllWidth) {
    state.imageTransformSize = state.imageTransform = 0
    state.imageList[0].style.transform = null

    return
  }

  if (state.imageTransform == state.iamgeAllWidth - state.imageItemWidth && state.index == state.urlList.length - 1) {
    return
  }

  state.index = (state.index + 1) % len

  const transformX = state.index * state.imageItemWidth

  state.imageTransform = transformX
  state.imageTransformSize = -transformX

  emit('change', state.index, state.urlList[state.index])
}

export const swipeRight = ({ state, emit }) => () => {
  if (state.isFirst && !state.infinite) {
    return
  }

  const len = state.urlList.length

  if (state.index <= 1) {
    state.arrowStyle = 'N'
  } else {
    state.arrowStyle = null
  }

  if (state.imageTransform == 0 && state.index == 0) {
    return
  }

  state.index = (state.index - 1 + len) % len

  const transformX = state.index * state.imageItemWidth

  state.imageTransform = transformX
  state.imageTransformSize = -transformX

  emit('change', state.index, state.urlList[state.index])
}

export const handleDelete = ({ api, emit, state }) => () => {
  if (state.urlList.length <= 1) {
    state.delete = false
    return
  }

  state.delete = true

  const currenIndex = state.index
  const urlList = state.urlList

  urlList.splice(currenIndex, 1)
  state.urlList = urlList
  state.index = 0

  api.getImageWidth()

  emit('newImageList', state.urlList, currenIndex)
}

const preventDefault = (event, isStopPropagation) => {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    event.stopPropagation()
  }
}

export const touchstart = (state) => (e) => {
  const touches = e.touches
  const events = touches[0]
  const events2 = touches[1]

  preventDefault(e)

  state.pageX = events.pageX
  state.pageY = events.pageY
  state.moveable = true

  if (events2) {
    state.pageX2 = events2.pageX
    state.pageY2 = events2.pageY
  }

  state.originScale = state.scale || 1
}

export const touchmove = (state) => (event) => {
  if (!state.moveable) {
    return
  }

  preventDefault(event)

  const touches = event.touches
  const events = touches[0]
  const events2 = touches[1]

  if (events2) {
    if (!state.pageX2) {
      state.pageX2 = events2.pageX
    }

    if (!state.pageY2) {
      state.pageY2 = events2.pageY
    }

    const getDistance = (start, stop) => Math.hypot(stop.x - start.x, stop.y - start.y)

    const zoom =
      getDistance(
        {
          x: events.pageX,
          y: events.pageY
        },
        {
          x: events2.pageX,
          y: events2.pageY
        }
      ) /
      getDistance(
        {
          x: state.pageX,
          y: state.pageY
        },
        {
          x: state.pageX2,
          y: state.pageY2
        }
      )

    let newScale = state.originScale * zoom

    if (newScale > 3) {
      newScale = 3
    }

    state.scale = newScale
    state.transform.scale = newScale
  }
}

export const touchend = (state) => () => {
  state.moveable = false
  state.pageX2 = 0
  state.pageY2 = 0
}

export const computeZIndex = ({ constants, props }) => () =>
  props.zIndex === constants.DEFAULT_POPPER_ZINDEX || props.zIndex < 1 ? PopupManager.nextZIndex() : props.zIndex
