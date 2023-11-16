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

import { on, off } from '../common/deps/dom'
import { KEY_CODE } from '../common'
import PopupManager from '../common/deps/popup-manager'
import { xss } from '../common/xss'

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

export const hide =
  ({ props, api, state }) =>
  () => {
    api.deviceSupportUninstall()
    props.onClose()
    state.showImageViewer = false
  }

export const deviceSupportInstall =
  ({ state, api, mode }) =>
  () => {
    on(window, 'resize', api.initPage)

    state.urlList = state.urlList.map((subItem) => {
      return xss.filterUrl(subItem)
    })

    state.urlList = state.urlList.map((subItem) => {
      let subItemObj = {}
      let lastSlashIndex = ''

      if (typeof subItem === 'string') {
        subItem = xss.filterUrl(subItem)
        if (state.isThumbnail || state.isMenuView) {
          lastSlashIndex = subItem.lastIndexOf('/')
          state.fileName = subItem.substring(lastSlashIndex + 1)

          subItemObj.url = subItem
          subItemObj.name = state.fileName

          return subItemObj
        } else {
          lastSlashIndex = subItem.lastIndexOf('/')
          state.fileName = subItem.substring(lastSlashIndex + 1)

          return { url: subItem, name: state.fileName }
        }
      } else if (typeof subItem === 'object' && subItem !== null) {
        if (!subItem.name) {
          lastSlashIndex = subItem.url.lastIndexOf('/')
          state.fileName = subItem.url.substring(lastSlashIndex + 1)

          subItem.name = state.fileName
        }
        return subItem
      }
    })

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
    mode !== 'mobile-first' && on(document, mousewheelEventName, state._mouseWheelHandler)
  }

export const deviceSupportUninstall =
  ({ state, mode }) =>
  () => {
    off(document, 'keydown', state._keyDownHandler)
    mode !== 'mobile-first' && off(document, mousewheelEventName, state._mouseWheelHandler)

    state._keyDownHandler = null
    state._mouseWheelHandler = null
  }

export const handleImgLoad = (state) => () => (state.loading = false)

export const handleImgError =
  ({ state, t }) =>
  (event) => {
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

  state._removeDrag = () => off(document, 'mousemove', state._dragHandler)

  if (state._clearMouse) {
    state._clearMouse()
    state._clearMouse = void 0
  }

  on(document, 'mouseup', state._removeDrag)
  on(document, 'mouseleave', state._removeDrag)

  state._clearMouse = () => {
    off(document, 'mouseup', state._removeDrag)
    off(document, 'mouseleave', state._removeDrag)
  }

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

export const toggleMode =
  ({ state, constants, api }) =>
  () => {
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

export const prev =
  ({ state, api, vm }) =>
  () => {
    if (state.isFirst && !state.infinite) {
      return
    }

    const len = state.urlList.length
    let prevElement = ''

    state.index = (state.index - 1 + len) % len

    api.activeItems(state.index)
    if (state.isThumbnail) {
      prevElement = vm.$refs[`isThumbnail_${state.index}`][0] || vm.$refs[`isThumbnail_${state.index}`]
    } else if (state.isMenuView) {
      prevElement = vm.$refs[`isMenuView_${state.index}`][0] || vm.$refs[`isMenuView_${state.index}`]
    }

    switch (state.index) {
      case 1:
        state.isThumbnail && vm.$refs.isThumbnailContent && (vm.$refs.isThumbnailContent.scrollTop = 0)
        state.isMenuView && vm.$refs.isMenuViewContent && (vm.$refs.isMenuViewContent.scrollTop = 0)
        state.scrollTop = 0
        break
      case state.urlList.length - 1:
        api.getLastPrev(prevElement)
        break
      case state.urlList.length - 2:
        break
      case state.urlList.length - 3:
        state.scrollTop = prevElement.offsetHeight
        break
      default:
        api.getDefaultPrev(prevElement)
        break
    }
  }

export const getLastPrev =
  ({ state, vm }) =>
  (prevElement) => {
    state.isThumbnail && vm.$refs.isThumbnailContent && (vm.$refs.isThumbnailContent.scrollTop = prevElement.offsetTop)
    state.isMenuView && vm.$refs.isMenuViewContent && (vm.$refs.isMenuViewContent.scrollTop = prevElement.offsetTop)
    state.scrollTop = prevElement.offsetTop
  }

export const getDefaultPrev =
  ({ state, vm }) =>
  (prevElement) => {
    if (state.scrollTop <= prevElement.offsetHeight) {
      state.scrollTop =
        prevElement.offsetTop - state.scrollTop - (state.isThumbnail ? state.thumbnailTop : state.menuTop)
    } else {
      state.scrollTop =
        state.scrollTop - prevElement.offsetHeight - (state.isThumbnail ? state.thumbnailTop : state.menuTop)
    }
    state.isThumbnail && vm.$refs.isThumbnailContent && (vm.$refs.isThumbnailContent.scrollTop = state.scrollTop)
    state.isMenuView && vm.$refs.isMenuViewContent.scrollTop && (vm.$refs.isMenuViewContent.scrollTop = state.scrollTop)
  }

export const next =
  ({ state, api, vm }) =>
  () => {
    if (state.isLast && !state.infinite) {
      return
    }

    const len = state.urlList.length
    let element = ''

    state.index = (state.index + 1) % len

    api.activeItems(state.index)
    if (state.isThumbnail) {
      element = vm.$refs[`isThumbnail_${state.index}`][0] || vm.$refs[`isThumbnail_${state.index}`]
    } else if (state.isMenuView) {
      element = vm.$refs[`isMenuView_${state.index}`][0] || vm.$refs[`isMenuView_${state.index}`]
    }

    const rect = element && element.getBoundingClientRect()

    const top = rect.height

    switch (state.index) {
      case 0:
        state.isThumbnail && vm.$refs.isThumbnailContent && (vm.$refs.isThumbnailContent.scrollTop = 0)
        state.isMenuView && vm.$refs.isMenuViewContent && (vm.$refs.isMenuViewContent.scrollTop = 0)
        state.scrollTop = 0
        break
      case 1:
        break
      case 2:
        break
      case 3:
        state.scrollTop = top
        break
      default:
        if (state.isThumbnail) {
          vm.$refs.isThumbnailContent && (vm.$refs.isThumbnailContent.scrollTop = state.scrollTop)
          state.scrollTop = state.scrollTop + element.offsetHeight + state.thumbnailTop
        } else if (state.isMenuView) {
          vm.$refs.isMenuViewContent && (vm.$refs.isMenuViewContent.scrollTop = state.scrollTop)
          state.scrollTop = state.scrollTop + element.offsetHeight + state.menuTop
        }
        break
    }
  }

export const handleActions =
  (state, props, emit) =>
  (action, options = {}) => {
    const { zoomRate, rotateDeg, enableTransition } = {
      zoomRate: 0.2,
      rotateDeg: 90,
      enableTransition: true,
      ...options
    }
    const { transform } = state
    let lastSlashIndex = ''
    let imageUrl = []

    lastSlashIndex = state.currentImg.lastIndexOf('/')
    let cutName = state.currentImg.substring(lastSlashIndex + 1)

    if (action === 'delImage') {
      if (typeof state.urlList[0] === 'string') {
        imageUrl = state.urlList
      } else if (typeof state.urlList[0] === 'object' && state.urlList[0] !== null) {
        cutName = state.urlList[state.index].name

        state.urlList.forEach((item) => {
          imageUrl.push(item.url)
        })
      }

      if (imageUrl.includes(state.currentImg)) {
        if (state.index === state.urlList.length - 1) {
          state.urlList.splice(state.index, 1)
          state.index = state.urlList.length - 1
        } else {
          state.urlList.splice(state.index, 1)
        }
      }

      state.imageName = cutName

      emit('delete', state.imageName)
    }

    if (state.loading) {
      return
    }

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

export const computedIsLast =
  ({ state, props }) =>
  () =>
    state.index === props.urlList.length - 1

export const computedCurrentImg = (state) => () => {
  if (typeof state.urlList[0] === 'string') {
    return state.urlList[state.index]
  } else if (typeof state.urlList[0] === 'object' && state.urlList[0] !== null) {
    return state.urlList[state.index].url
  }
}

export const computedImgStyle =
  ({ state, constants }) =>
  () => {
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

export const handleVisible =
  ({ state, emit, props }) =>
  () => {
    state.transform.scale = 1
    state.transform.deg = 0

    setTimeout(() => {
      if (props.startPosition > 0) {
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

export const getImageWidth =
  ({ state, parent, props, vm, mode }) =>
  () => {
    let imageW = 0
    const len = state.urlList.length

    if (mode === 'mobile-first') {
      if (state.isThumbnail && state.isImagePreview) {
        imageW = vm.$refs.thumbnailCanvasBox.offsetWidth
      } else {
        imageW = vm.$refs.canvasBox && vm.$refs.canvasBox.offsetWidth
      }

      state.imageList = vm.$refs.viewerItem
    } else if (mode === 'mobile') {
      imageW = parent.$el.querySelector('.tiny-mobile-image-viewer__canvas').offsetWidth

      state.imageList = parent.$el.querySelectorAll('.tiny-mobile-image-viewer__item')
    } else {
      imageW = parent.$el.querySelector('.tiny-image-viewer__canvas').offsetWidth

      state.imageList = parent.$el.querySelectorAll('.tiny-image-viewer__img')
    }

    state.imageItemWidth = imageW
    state.imageAllWidth = state.urlList.length * imageW

    if (mode !== 'mobile-first') {
      if (props.startPosition > 0) {
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

export const swipeLeft =
  ({ state, emit }) =>
  () => {
    if (state.isLast && !state.infinite) {
      return
    }

    const len = state.urlList.length

    if (state.index >= state.urlList.length - 2) {
      state.arrowStyle = 'Y'
    } else {
      state.arrowStyle = null
    }

    if (state.imageTransform === state.imageAllWidth) {
      state.imageTransformSize = state.imageTransform = 0
      state.imageList[0].style.transform = null

      return
    }

    if (
      state.imageTransform === state.imageAllWidth - state.imageItemWidth &&
      state.index === state.urlList.length - 1
    ) {
      return
    }

    state.index = (state.index + 1) % len

    const transformX = state.index * state.imageItemWidth

    state.imageTransform = transformX
    state.imageTransformSize = -transformX

    emit('change', state.index, state.urlList[state.index])
  }

export const swipeRight =
  ({ state, emit }) =>
  () => {
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

export const handleDelete =
  ({ api, emit, state }) =>
  () => {
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

export const langClick = (state) => () => {
  if (window.navigator.msSaveOrOpenBlob) {
    let bstr = atob(state.currentImg.split(',')[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    let blob = new Blob([u8arr])
    window.navigator.msSaveOrOpenBlob(blob, 'img' + '.' + 'png')
  } else {
    const a = document.createElement('a')
    a.href = state.currentImg
    a.setAttribute('download', 'img')
    a.click()
  }
}

export const touchstart =
  ({ state, mode, api }) =>
  (e) => {
    state.firstX = e.targetTouches[0].clientX

    if (mode === 'mobile-first') {
      state.time = setTimeout(() => {
        if (!state.isImagePreview) {
          api.langClick()
        } else {
          state.boxVisibility = true
        }
      }, 1000)
    }

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

const preventDefault = (event, isStopPropagation) => {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    event.stopPropagation()
  }
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

  clearTimeout(state.time)
}

export const touchend = (state) => (e) => {
  var moveX = 0
  state.endX = e.changedTouches[0].clientX
  moveX = state.endX - state.firstX

  if (!state.boxVisibility) {
    if (moveX === 0) {
      state.isImagePreview = false
      state.hiddenThumbnail = false
    }
  }

  state.moveable = false
  state.pageX2 = 0
  state.pageY2 = 0

  clearTimeout(state.time)
}

export const computeZIndex =
  ({ constants, props }) =>
  () =>
    props.zIndex === constants.DEFAULT_POPPER_ZINDEX || props.zIndex < 1 ? PopupManager.nextZIndex() : props.zIndex

export const activeItems = (state) => (i) => {
  state.index = i
  state.currentIndex = i
}

export const imagePreview = (state) => (i) => {
  state.index = i

  state.mobileCurrentIndex && (state.isImagePreview = true)
}

export const initPage =
  ({ state, nextTick, api }) =>
  () => {
    state.isImagePreview = false
    state.hiddenThumbnail = false
    nextTick(() => {
      api.getImageWidth()
    })
  }

export const beforeDestroy =
  ({ api, state }) =>
  () => {
    off(window, 'resize', api.initPage)

    if (state._clearMouse) {
      state._clearMouse()
      state._clearMouse = void 0
    }

    if (state._dragHandler) {
      state._dragHandler = void 0
    }

    if (state._removeDrag) {
      state._removeDrag = void 0
    }
  }

export const itemClick =
  ({ state, vm, nextTick }) =>
  (itemData) => {
    if (state.isThumbnail) {
      state.showFlag = 1
    } else if (state.isMenuView) {
      state.showFlag = 2
    }

    switch (itemData) {
      case '1':
        state.isThumbnail = false
        state.isMenuView = false
        break
      case '2':
        state.isThumbnail = true
        state.isMenuView = false
        nextTick(() => {
          state.currentIndex = 0
          state.index = 0
          vm.$refs.isThumbnailContent.scrollTop = 0
        })

        break
      case '3':
        state.isThumbnail = false
        state.isMenuView = true
        nextTick(() => {
          state.currentIndex = 0
          state.index = 0
          vm.$refs.isMenuViewContent.scrollTop = 0
        })

        break
      case '4':
        if (state.showFlag === 1) {
          state.isThumbnail = true
        } else if (state.showFlag === 2) {
          state.isMenuView = true
        }
        break
      default:
        break
    }
  }

export const selectOption =
  ({ state, api }) =>
  (item, index) => {
    switch (index) {
      case 0:
        api.langClick()
        break
      case 1:
        state.isThumbnail = true
        state.isImagePreview = false
        break
      case 2:
        api.handleActions('delImage')
        api.getImageWidth()
        break
      default:
        break
    }
  }
