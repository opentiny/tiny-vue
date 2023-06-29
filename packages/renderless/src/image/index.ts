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

import { on, off, getScrollContainer, isInContainer } from '../common/deps/dom'
import { typeOf } from '../common/type'
import '../common/deps/requestAnimationFrame'
import { rafThrottle } from '../image-viewer'

const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined

const isHtmlElement = (node) => node && node.nodeType === Node.ELEMENT_NODE

export const computedGetImageStyle =
  ({ props, api }) =>
  () => {
    const { fit } = props

    if (fit) {
      return isSupportObjectFit() ? { 'object-fit': fit } : api.getImageStyle(fit)
    }

    return {}
  }

export const computedGetAlignCenter =
  ({ props, constants }) =>
  () =>
    !isSupportObjectFit() && props.fit !== constants.FILL

export const computedGetPreview = (props) => () =>
  Array.isArray(props.previewSrcList) && props.previewSrcList.length > 0

export const loadImage =
  ({ state, api, attrs, props }) =>
  () => {
    state.loading = true
    state.error = false

    const img = new Image()

    img.onload = (event) => api.handleLoad(event, img)
    img.onerror = api.handleError

    Object.keys(attrs).forEach((key) => {
      if (key !== 'onError' && key !== 'onLoad') {
        const value = attrs[key]
        img.setAttribute(key, value)
      }
    })

    img.src = props.src
  }

export const handleLoad =
  ({ state, emit }) =>
  (event, img) => {
    state.imageWidth = img.width
    state.imageHeight = img.height
    state.loading = false

    emit('load', event)
  }

export const deleteHander = (emit) => (event) => {
  emit('delete', event)
}

export const handleError =
  ({ state, emit }) =>
  (event) => {
    state.loading = false
    state.error = true

    emit('error', event)
  }

export const handleLazyLoad =
  ({ state, api, vm, nextTick }) =>
  () => {
    if (isInContainer(vm.$el, state._scrollContainer)) {
      nextTick(() => (state.show = true))
      api.removeLazyLoadListener()
    }
  }

export const addLazyLoadListener =
  ({ props, state, api, vm }) =>
  () => {
    const { scrollContainer } = props
    let _scrollContainer = null

    if (isHtmlElement(scrollContainer)) {
      _scrollContainer = scrollContainer
    } else if (typeOf(scrollContainer) === 'string') {
      _scrollContainer = document.querySelector(scrollContainer)
    } else {
      _scrollContainer = getScrollContainer(vm.$el)
    }

    if (_scrollContainer) {
      state._scrollContainer = _scrollContainer
      state._lazyLoadHandler = rafThrottle(api.handleLazyLoad)
      on(_scrollContainer, 'scroll', state._lazyLoadHandler)
      api.handleLazyLoad()
    }
  }

export const removeLazyLoadListener = (state) => () => {
  const { _scrollContainer, _lazyLoadHandler } = state

  if (!_scrollContainer || !_lazyLoadHandler) {
    return
  }

  off(_scrollContainer, 'scroll', _lazyLoadHandler)
  state._scrollContainer = null
  state._lazyLoadHandler = null
}

/**
 * simulate object-fit behavior to compatible with IE11 and other browsers which not support object-fit
 */
export const getImageStyle =
  ({ state, vm, constants }) =>
  (fit) => {
    const { imageWidth, imageHeight } = state
    const { clientWidth: containerWidth, clientHeight: containerHeight } = vm.$el

    if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) {
      return {}
    }

    const vertical = imageWidth / imageHeight < 1

    if (fit === constants.SCALE_DOWN) {
      const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight
      fit = isSmaller ? constants.NONE : constants.CONTAIN
    }

    if (fit === constants.NONE) {
      return { width: 'auto', height: 'auto' }
    }

    if (fit === constants.CONTAIN) {
      return vertical ? { width: 'auto' } : { height: 'auto' }
    }

    if (fit === constants.COVER) {
      return vertical ? { height: 'auto' } : { width: 'auto' }
    }

    return {}
  }

export const clickHandler = (state) => () => (state.showViewer = true)

export const closeViewer = (state) => () => (state.showViewer = false)

export const mounted =
  ({ props, api }) =>
  () => {
    if (props.lazy) {
      api.addLazyLoadListener()
    } else {
      api.loadImage()
    }
  }
