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

import { on, off } from './dom'
import { isBrowser } from '../browser'

const MapShim = (function () {
  if (typeof Map !== 'undefined') {
    return Map
  }

  const getIndex = (arr, key) => {
    let result = -1

    arr.some((entry, index) => {
      if (entry[0] === key) {
        result = index
        return true
      }

      return false
    })

    return result
  }

  return (function () {
    function obClass() {
      this.__entries__ = []
    }

    Object.defineProperty(obClass.prototype, 'size', {
      get() {
        return this.__entries__.length
      },
      enumerable: true,
      configurable: true
    })

    obClass.prototype.get = function (key) {
      const index = getIndex(this.__entries__, key)
      const entry = this.__entries__[index]

      return entry && entry[1]
    }

    obClass.prototype.set = function (key, value) {
      const index = getIndex(this.__entries__, key)

      if (~index) {
        this.__entries__[index][1] = value
      } else {
        this.__entries__.push([key, value])
      }
    }

    obClass.prototype.delete = function (key) {
      const entries = this.__entries__
      const index = getIndex(entries, key)

      if (~index) {
        entries.splice(index, 1)
      }
    }

    obClass.prototype.clear = function () {
      this.__entries__.splice(0)
    }

    obClass.prototype.has = function (key) {
      return !!~getIndex(this.__entries__, key)
    }

    obClass.prototype.forEach = function (callback, ctx) {
      if (ctx === void 0) {
        ctx = null
      }

      for (let _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        const entry = _a[_i]

        callback.call(ctx, entry[1], entry[0])
      }
    }

    return obClass
  })()
})()

const func = isBrowser ? window.Function : global.Function

const global$1 = (function () {
  const isMath = (val) => val.Math === Math

  if (typeof global !== 'undefined' && isMath(global)) {
    return global
  }

  if (typeof self !== 'undefined' && isMath(self)) {
    return self
  }

  if (typeof window !== 'undefined' && isMath(window)) {
    return window
  }
  return func('return this')()
})()

const requestAnimationFrame$1 = (function () {
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame.bind(global$1)
  }

  return function (callback) {
    return setTimeout(() => callback(Date.now()), 1000 / 60)
  }
})()

let trailingTimeout = 2

function throttle(callback, delayTime) {
  let leading = false
  let trailing = false
  let lastCallTime = 0
  let proxy

  const resolvePending = () => {
    if (leading) {
      leading = false
      callback()
    }

    trailing && proxy()
  }

  const timeoutCallback = () => {
    requestAnimationFrame$1(resolvePending)
  }

  proxy = () => {
    const timeStamps = Date.now()

    if (leading) {
      if (timeStamps - lastCallTime < trailingTimeout) {
        return
      }

      trailing = true
    } else {
      leading = true
      trailing = false

      setTimeout(timeoutCallback, delayTime)
    }

    lastCallTime = timeStamps
  }

  return proxy
}

const REFRESH_DELAY = 20
const transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']
const mutationObserverSupported = typeof MutationObserver !== 'undefined'
const ResizeObserverController = (function () {
  function ResizeObserverController() {
    this.observers_ = []
    this.connected_ = false
    this.mutationEventsAdded_ = false
    this.mutationsObserver_ = null
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY)
  }

  ResizeObserverController.prototype.addObserver = function (observer) {
    !~this.observers_.indexOf(observer) && this.observers_.push(observer)
    !this.connected_ && this.connect_()
  }

  ResizeObserverController.prototype.removeObserver = function (observer) {
    const observers = this.observers_
    const index = observers.indexOf(observer)

    ~index && observers.splice(index, 1)

    if (!observers.length && this.connected_) {
      this.disconnect_()
    }
  }

  ResizeObserverController.prototype.refresh = function () {
    const changesDetected = this.updateObservers_()

    changesDetected && this.refresh()
  }

  ResizeObserverController.prototype.updateObservers_ = function () {
    const activeObservers = this.observers_.filter((observer) => {
      observer.gatherActive()
      return observer.hasActive()
    })

    activeObservers.forEach((observer) => observer.broadcastActive())

    return activeObservers.length > 0
  }

  ResizeObserverController.prototype.connect_ = function () {
    if (!isBrowser || this.connected_) {
      return
    }

    on(document, 'transitionend', this.onTransitionEnd_)
    on(window, 'resize', this.refresh)

    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh)

      const options = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      }

      this.mutationsObserver_.observe(document, options)
    } else {
      on(document, 'DOMSubtreeModified', this.refresh)
      this.mutationEventsAdded_ = true
    }

    this.connected_ = true
  }

  ResizeObserverController.prototype.disconnect_ = function () {
    if (!isBrowser || !this.connected_) {
      return
    }

    off(document, 'transitionend', this.onTransitionEnd_)
    off(window, 'resize', this.refresh)

    this.mutationsObserver_ && this.mutationsObserver_.disconnect()

    if (this.mutationEventsAdded_) {
      off(document, 'DOMSubtreeModified', this.refresh)
    }

    this.mutationsObserver_ = null
    this.mutationEventsAdded_ = false
    this.connected_ = false
  }

  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    const _b = _a.propertyName
    const propertyName = _b === void 0 ? '' : _b
    const isReflowProperty = transitionKeys.some((key) => !!~propertyName.indexOf(key))

    isReflowProperty && this.refresh()
  }

  ResizeObserverController.getInstance = function () {
    if (!this._instance) {
      this._instance = new ResizeObserverController()
    }

    return this._instance
  }

  ResizeObserverController._instance = null
  return ResizeObserverController
})()

const defineConfigurable = function (target, props) {
  for (let i = 0, a = Object.keys(props); i < a.length; i++) {
    const key = a[i]

    Object.defineProperty(target, key, {
      value: props[key],
      configurable: true,
      writable: false,
      enumerable: false
    })
  }

  return target
}

const createRectInit = function (x, y, width, height) {
  return { x, y, width, height }
}

const getWindowOf = function (target) {
  const ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView
  return ownerGlobal || global$1
}

const emptyRect = createRectInit(0, 0, 0, 0)
const toFloat = (value) => parseFloat(value) || 0

const getBordersSize = function (styles) {
  let positions = []

  for (let i = 1; i < arguments.length; i++) {
    positions[i - 1] = arguments[i]
  }

  return positions.reduce((size, position) => {
    const value = styles[`border-${position}-width`]

    return size + toFloat(value)
  }, 0)
}

const getPaddings = function (styles) {
  const positions = ['top', 'right', 'bottom', 'left']
  let paddings = {}

  for (let i = 0, pos = positions; i < pos.length; i++) {
    const position = pos[i]
    const value = styles[`padding-${position}`]

    paddings[position] = toFloat(value)
  }

  return paddings
}

const getSVGContentRect = function (target) {
  const bbox = target.getBBox()
  return createRectInit(0, 0, bbox.width, bbox.height)
}

const isDocumentElement = function (target) {
  return target === getWindowOf(target).document.documentElement
}

const getHTMLElementContentRect = function (target) {
  const clientWidth = target.clientWidth
  const clientHeight = target.clientHeight

  if (!clientHeight && !clientWidth) {
    return emptyRect
  }

  const styles = getWindowOf(target).getComputedStyle(target)
  const paddings = getPaddings(styles)

  const vertPad = paddings.top + paddings.bottom
  const horizPad = paddings.left + paddings.right

  let width = toFloat(styles.width)
  let height = toFloat(styles.height)

  if (styles.boxSizing === 'border-box') {
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad
    }

    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad
    }
  }

  if (!isDocumentElement(target)) {
    const horizScrollbar = Math.round(height + vertPad) - clientHeight
    const vertScrollbar = Math.round(width + horizPad) - clientWidth

    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar
    }

    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar
    }
  }

  return createRectInit(paddings.left, paddings.top, width, height)
}

const isSVGGraphicsElement = (function () {
  if (typeof SVGGraphicsElement !== 'undefined') {
    return (target) => target instanceof getWindowOf(target).SVGGraphicsElement
  }

  return (target) => target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'
})()

const getContentRect = function (target) {
  if (!isBrowser) {
    return emptyRect
  }

  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target)
  }

  return getHTMLElementContentRect(target)
}

const createReadOnlyRect = function (_a) {
  const x = _a.x
  const y = _a.y
  const width = _a.width
  const height = _a.height
  const Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object
  const rect = Object.create(Constr.prototype)

  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  })

  return rect
}

const ResizeObservation = (function () {
  function ResizeObservation(target) {
    this.broadcastWidth = 0
    this.broadcastHeight = 0
    this.contentRect_ = createRectInit(0, 0, 0, 0)
    this.target = target
  }

  ResizeObservation.prototype.broadcastRect = function () {
    const rect = this.contentRect_
    this.broadcastWidth = rect.width
    this.broadcastHeight = rect.height

    return rect
  }

  ResizeObservation.prototype.isActive = function () {
    const rect = getContentRect(this.target)
    this.contentRect_ = rect

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight
  }

  return ResizeObservation
})()

const ResizeObserverEntry = (function () {
  function ResizeObserverEntry(target, rectInit) {
    const contentRect = createReadOnlyRect(rectInit)

    defineConfigurable(this, { target, contentRect })
  }

  return ResizeObserverEntry
})()

const ResizeObserverSPI = (function () {
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    this.observations_ = new MapShim()
    this.activeObservations_ = []

    if (typeof callback !== 'function') {
      throw new TypeError('[TINY-Resize] The callback provided as parameter 1 is not a function.')
    }

    this.callback_ = callback
    this.controller_ = controller
    this.callbackCtx_ = callbackCtx
  }

  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('[TINY-Resize] 1 argument required, but only 0 present.')
    }

    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('[TINY-Resize] parameter 1 is not of type "Element".')
    }

    const obserVations = this.observations_

    if (obserVations.has(target)) {
      return
    }

    obserVations.set(target, new ResizeObservation(target))

    this.controller_.addObserver(this)
    this.controller_.refresh()
  }

  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('[TINY-Resize]1 argument required, but only 0 present.')
    }

    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('[TINY-Resize] parameter 1 is not of type "Element".')
    }

    const obserVations = this.observations_

    if (!obserVations.has(target)) {
      return
    }

    obserVations.delete(target)

    !obserVations.size && this.controller_.removeObserver(this)
  }

  ResizeObserverSPI.prototype.gatherActive = function () {
    const me = this
    this.clearActive()

    this.observations_.forEach((observation) => {
      observation.isActive() && me.activeObservations_.push(observation)
    })
  }

  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive()
    this.observations_.clear()
    this.controller_.removeObserver(this)
  }

  ResizeObserverSPI.prototype.broadcastActive = function () {
    if (!this.hasActive()) {
      return
    }

    const ctx = this.callbackCtx_
    const entries = this.activeObservations_.map((observation) => new ResizeObserverEntry(observation.target, observation.broadcastRect()))

    this.callback_.call(ctx, entries, ctx)
    this.clearActive()
  }

  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0
  }

  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0)
  }

  return ResizeObserverSPI
})()

const observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim()

const ResizeObserver = (function () {
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('[TINY-Resize] Cannot call a class as a function.')
    }

    if (!arguments.length) {
      throw new TypeError('[TINY-Resize] 1 argument required, but only 0 present.')
    }

    const controller = ResizeObserverController.getInstance()
    const observer = new ResizeObserverSPI(callback, controller, this)

    observers.set(this, observer)
  }

  return ResizeObserver
})();
['observe', 'unobserve', 'disconnect'].forEach((method) => {
  ResizeObserver.prototype[method] = function () {
    let _a

    return (_a = observers.get(this))[method].apply(_a, arguments)
  }
})

const index = (function () {
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver
  }

  return ResizeObserver
})()

export default index
