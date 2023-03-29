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
import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'
import { typeOf } from '@opentiny/vue-renderless/common/type'
import { xss } from '@opentiny/vue-renderless/common/xss.js'

const win = window
const positions = ['left', 'right', 'top', 'bottom']
const modifiers = ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']

const DEFAULTS = {
  arrowOffset: 0,
  arrowElement: '[x-arrow]',
  boundariesElement: 'viewport',
  boundariesPadding: 5,
  flipBehavior: 'flip',
  forceAbsolute: false,
  gpuAcceleration: true,
  offset: 0,
  placement: 'bottom',
  preventOverflowOrder: positions,
  modifiers,
  modifiersIgnored: []
}

const getRealElement = (el) => (el.jquery ? el[0] : el)

const setStyle = (el, styles) => {
  const isNumeric = (n) => n !== '' && !isNaN(parseFloat(n)) && isFinite(n)

  Object.keys(styles).forEach((prop) => {
    let unit = ''

    if (~['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) && isNumeric(styles[prop])) {
      unit = 'px'
    }

    el.style[prop] = styles[prop] + unit
  })
}

const getSupportedPropertyName = (property) => {
  let prefixes = ['', 'ms', 'webkit', 'moz', 'o']
  let bodyEl = win.document.body

  for (let i = 0; i < prefixes.length; i++) {
    let toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property

    if (typeof bodyEl.style[toCheck] !== 'undefined') {
      return toCheck
    }
  }

  return null
}

const addClassNames = (el, classNames) => {
  classNames.forEach((className) => {
    el.classList.add(className)
  })
}

const addAttributes = (el, attributes) => {
  attributes.forEach((attribute) => {
    const attrs = attribute.split(':')

    el.setAttribute(attrs[0], attrs[1] || '')
  })
}

const getOffsetParent = (el) => {
  let offsetParent = el.offsetParent

  return offsetParent === win.document.body || !offsetParent ? win.document.documentElement : offsetParent
}

const getStyleComputedProperty = (el, property) => {
  if (!el || el.nodeType !== 1) {
    return
  }

  let css = win.getComputedStyle(el, null)

  return css[property]
}

const isFixed = (el) => {
  if (el === win.document.body) {
    return false
  }

  if (getStyleComputedProperty(el, 'position') === 'fixed') {
    return true
  }

  return el.parentNode ? isFixed(el.parentNode) : el
}

const getBoundingClientRect = (el) => {
  let rectObj = el.getBoundingClientRect()
  let isIE = navigator.userAgent.includes('MSIE')
  let rectTop = isIE && el.tagName === 'HTML' ? -el.scrollTop : rectObj.top

  return {
    left: rectObj.left,
    top: rectTop,
    right: rectObj.right,
    bottom: rectObj.bottom,
    width: rectObj.right - rectObj.left,
    height: rectObj.bottom - rectTop
  }
}

// 判断el的overflow是不是可能滚动的
const isScrollElement = (el) => {
  const scrollTypes = ['scroll', 'auto']

  return (
    scrollTypes.includes(getStyleComputedProperty(el, 'overflow')) ||
    scrollTypes.includes(getStyleComputedProperty(el, 'overflow-x')) ||
    scrollTypes.includes(getStyleComputedProperty(el, 'overflow-y'))
  )
}

// 查找滚动元素，只找第一个就返回
export const getScrollParent = (el) => {
  let parent = el.parentNode

  if (!parent) {
    return el
  }

  if (parent === win.document) {
    if (win.document.body.scrollTop || win.document.body.scrollLeft) {
      return win.document.body
    }
    return win.document.documentElement
  }

  if (isScrollElement(parent)) {
    return parent
  }

  return getScrollParent(el.parentNode)
}

const getOffsetRectRelativeToCustomParent = (el, parent, fixed) => {
  let { top, left, width, height } = getBoundingClientRect(el)
  let parentRect = getBoundingClientRect(parent)

  if (fixed) {
    let { scrollTop, scrollLeft } = getScrollParent(parent)
    parentRect.top += scrollTop
    parentRect.bottom += scrollTop
    parentRect.left += scrollLeft
    parentRect.right += scrollLeft
  }

  let rect = {
    top: top - parentRect.top,
    left: left - parentRect.left,
    bottom: top - parentRect.top + height,
    right: left - parentRect.left + width,
    width,
    height
  }

  return rect
}

const getScrollTopValue = (el) => (el == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : el.scrollTop)

const getScrollLeftValue = (el) => (el == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : el.scrollLeft)

const getMaxWH = (body, html) => {
  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
  const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)
  return { width, height }
}

const adjustArrowStyle = (arrowStyle, side, arrowRect, popperRect, popperOptions) => {
  let params = popperOptions.placement.split('-')
  if (popperOptions.adjustArrow && ~['top', 'bottom'].indexOf(params[0]) && side === 'left') {
    if (params[1] === 'start') {
      arrowStyle.left = 8
    } else if (!params[1]) {
      arrowStyle.left = (popperRect.width - arrowRect.width) / 2
    }
  }
  return arrowStyle
}

const getOuterSizes = (el) => {
  let _display = el.style.display
  let _visibility = el.style.visibility

  el.style.display = 'block'
  el.style.visibility = 'hidden'

  let styles = win.getComputedStyle(el)
  let x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
  let y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight)
  let result = { width: el.offsetWidth + y, height: el.offsetHeight + x }

  el.style.display = _display
  el.style.visibility = _visibility

  return result
}

const getOppositePlacement = (placement) => {
  let hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }

  return placement.replace(/left|right|bottom|top/g, (matched) => hash[matched])
}

const getPopperClientRect = (popperOffsets) => {
  let offsets = { ...popperOffsets }

  offsets.right = offsets.left + offsets.width
  offsets.bottom = offsets.top + offsets.height

  return offsets
}

const getArrayKeyIndex = (arr, keyToFind) => {
  let i = 0

  for (let value of arr) {
    if (value === keyToFind) {
      return i
    }

    i++
  }

  return null
}

export const getAllScrollParents = (el, parents = []) => {
  const parent = el.parentNode

  if (parent) {
    isScrollElement(parent) && parents.push(parent)
    return getAllScrollParents(parent, parents)
  }

  return parents
}

const getOffsetRect = (el) => {
  let elementRect = {
    width: el.offsetWidth,
    height: el.offsetHeight,
    left: el.offsetLeft,
    top: el.offsetTop
  }

  elementRect.right = elementRect.left + elementRect.width
  elementRect.bottom = elementRect.top + elementRect.height

  return elementRect
}

function Popper(reference, popper, options) {
  this._reference = getRealElement(reference)
  this.state = {}

  let isNotDefined = typeof popper === 'undefined' || popper === null
  let isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]'

  if (isNotDefined || isConfig) {
    this._popper = this.parse(isConfig ? popper : {})
  } else {
    this._popper = getRealElement(popper)
  }

  this._options = { ...DEFAULTS, ...options }

  this._options.modifiers = this._options.modifiers.map((modifier) => {
    if (~this._options.modifiersIgnored.indexOf(modifier)) {
      return undefined
    }

    if (modifier === 'applyStyle') {
      this._popper.setAttribute('x-placement', this._options.placement)
    }

    return this.modifiers[modifier] || modifier
  })

  this.state.position = this._getPosition(this._popper, this._reference)

  setStyle(this._popper, { position: this.state.position, top: 0 })

  this.update()
  this._setupEventListeners()
  this._oldreference = this._reference
  this._oldreference._popper = this._popper.style || {}

  return this
}

Popper.prototype.destroy = function () {
  this._popper.removeAttribute('x-placement')

  const popperStyle = (this._reference === this._oldreference && this._oldreference._popper) || {}

  this._popper.style.position = ''
  this._popper.style.top = popperStyle.top || ''
  this._popper.style.left = popperStyle.left || ''
  this._popper.style[getSupportedPropertyName('transform')] = ''
  this._removeEventListeners()

  this._options.removeOnDestroy && this._popper.remove()

  return this
}

Popper.prototype.onCreate = function (callback) {
  callback(this)
  return this
}

Popper.prototype.onUpdate = function (callback) {
  this.state.updateCallback = callback
  return this
}

Popper.prototype.update = function () {
  let data = { instance: this, styles: {} }

  this.popperOuterSize = null
  data.placement = data._originalPlacement = this._options.placement
  data.offsets = this._getOffsets(this._popper, this._reference, data.placement)

  data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement)

  data = this.runModifiers(data, this._options.modifiers)

  typeof this.state.updateCallback === 'function' && this.state.updateCallback(data)
}

Popper.prototype.parse = function (config) {
  let defaultConfig = {
    attributes: [],
    arrowTagName: 'div',
    arrowClassNames: ['popper__arrow'],
    arrowAttributes: ['x-arrow'],
    classNames: ['popper'],
    content: '',
    contentType: 'text',
    parent: win.document.body,
    tagName: 'div'
  }
  config = { ...defaultConfig, ...config }
  const { tagName, classNames, attributes, contentType, content, arrowTagName } = config
  let docEl = win.document
  let popper = docEl.createElement(tagName)
  addClassNames(popper, classNames)
  addAttributes(popper, attributes)
  if (contentType === 'node') {
    popper.appendChild(getRealElement(content))
  } else if (contentType === 'html') {
    popper.innerHTML = xss.filterHtml(content)
  } else {
    popper.textContent = content
  }

  if (arrowTagName) {
    let arrow = docEl.createElement(arrowTagName)
    addClassNames(arrow, config.arrowClassNames)
    addAttributes(arrow, config.arrowAttributes)
    popper.appendChild(arrow)
  }
  let parent = getRealElement(config.parent)
  if (typeof parent === 'string') {
    parent = docEl.querySelectorAll(config.parent)
    if (parent && parent.length) {
      parent = parent[0]
    } else {
      throw new Error('ERROR: the given `parent` does not exists!')
    }
  }
  if (parent.length > 1 && parent instanceof Element === false) {
    parent = parent[0]
  }
  parent.appendChild(popper)

  return popper
}

Popper.prototype._getPosition = function (popper, reference) {
  let container = getOffsetParent(reference)

  if (this._options.forceAbsolute) {
    return 'absolute'
  }

  let isParentFixed = isFixed(reference, container)
  return isParentFixed ? 'fixed' : 'absolute'
}

Popper.prototype._getOffsets = function (popper, reference, placement) {
  placement = placement.split('-')[0]

  let popperOffsets = {}
  popperOffsets.position = this.state.position

  let isParentFixed = popperOffsets.position === 'fixed'
  let referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed)

  // 利用 popperOuterSize 来减少一次outerSize的计算
  let { width, height } = this.popperOuterSize ? this.popperOuterSize : (this.popperOuterSize = getOuterSizes(popper))

  if (~['right', 'left'].indexOf(placement)) {
    popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - height / 2

    if (placement === 'left') {
      popperOffsets.left = referenceOffsets.left - width
    } else {
      popperOffsets.left = referenceOffsets.right
    }
  } else {
    popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - width / 2

    if (placement === 'top') {
      popperOffsets.top = referenceOffsets.top - height
    } else {
      popperOffsets.top = referenceOffsets.bottom
    }
  }

  popperOffsets.width = width
  popperOffsets.height = height

  return {
    popper: popperOffsets,
    reference: referenceOffsets
  }
}

Popper.prototype._setupEventListeners = function () {
  this.state.updateBound = this.update.bind(this)

  on(win, 'resize', this.state.updateBound)

  if (this._options.boundariesElement !== 'window') {
    let target = getScrollParent(this._reference)

    if (target === win.document.body || target === win.document.documentElement) {
      target = win
    }
    this.state.scrollTarget = target

    // 只有bubbling时，才启用所有祖先监听，根源在此。 getAll..Parents函数只有这一处调用
    if (this._options.bubbling || PopupManager.globalScroll) {
      let targets = getAllScrollParents(this._reference)

      this.state.scrollTargets = targets || []
      targets.forEach((target) => {
        on(target, 'scroll', this.state.updateBound)
      })
    } else {
      on(target, 'scroll', this.state.updateBound)
    }
  }
}

Popper.prototype._removeEventListeners = function () {
  off(win, 'resize', this.state.updateBound)

  if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
    off(this.state.scrollTarget, 'scroll', this.state.updateBound)
    this.state.scrollTarget = null

    // 移除祖先监听
    if (this._options.bubbling || PopupManager.globalScroll) {
      let targets = this.state.scrollTargets || []

      targets.forEach((target) => {
        off(target, 'scroll', this.state.updateBound)
      })
      this.state.scrollTargets = null
    }
  }

  this.state.updateBound = null
}

Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
  let boundaries = {}

  if (boundariesElement === 'window') {
    let body = win.document.body
    let html = win.document.documentElement
    let { width, height } = getMaxWH(body, html)

    boundaries = { top: 0, right: width, bottom: height, left: 0 }
  } else if (boundariesElement === 'viewport') {
    let offsetParent = getOffsetParent(this._popper)
    let scrollParent = getScrollParent(this._popper)
    let offsetParentRect = getOffsetRect(offsetParent)
    let isFixed = data.offsets.popper.position === 'fixed'
    let scrollTop = isFixed ? 0 : getScrollTopValue(scrollParent)
    let scrollLeft = isFixed ? 0 : getScrollLeftValue(scrollParent)

    boundaries = {
      top: 0 - (offsetParentRect.top - scrollTop),
      right: win.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
      bottom: win.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
      left: 0 - (offsetParentRect.left - scrollLeft)
    }
  } else {
    if (getOffsetParent(this._popper) === boundariesElement) {
      const { clientWidth, clientHeight } = boundariesElement

      boundaries = {
        right: clientWidth,
        bottom: clientHeight,
        top: 0,
        left: 0
      }
    } else {
      boundaries = getOffsetRect(boundariesElement)
    }
  }

  boundaries.right -= padding
  boundaries.left += padding
  boundaries.bottom = boundaries.bottom - padding
  boundaries.top = boundaries.top + padding

  return boundaries
}

Popper.prototype.isModifierRequired = function (requesting, requested) {
  let index = getArrayKeyIndex(this._options.modifiers, requesting)

  return !!this._options.modifiers.slice(0, index).filter((modifier) => modifier === requested).length
}

Popper.prototype.runModifiers = function (data, modifiers, ends) {
  let modifiersToRun = modifiers.slice()
  const _options = this._options

  if (ends !== undefined) {
    modifiersToRun = _options.modifiers.slice(0, getArrayKeyIndex(_options.modifiers, ends))
  }

  modifiersToRun.forEach((modifier) => {
    if (typeOf(modifier) === 'function') {
      data = modifier.call(this, data)
    }
  })

  return data
}

Popper.prototype.modifiers = {}

Popper.prototype.modifiers.applyStyle = function (data) {
  let styles = { position: data.offsets.popper.position }
  let left = Math.round(data.offsets.popper.left)
  let top = Math.round(data.offsets.popper.top)
  let prefixedProperty

  if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
    styles[prefixedProperty] = `translate3d(${left}px, ${top}px, 0)`
    Object.assign(styles, { top: 0, left: 0 })
  } else {
    Object.assign(styles, { top, left })
  }

  Object.assign(styles, data.styles)

  setStyle(this._popper, styles)

  this._popper.setAttribute('x-placement', data.placement)

  const modifiers = this.modifiers

  if (this.isModifierRequired(modifiers.applyStyle, modifiers.arrow) && data.offsets.arrow) {
    setStyle(data.arrowElement, data.offsets.arrow)
  }

  return data
}

Popper.prototype.modifiers.shift = function (data) {
  let placement = data.placement
  let basePlacement = placement.split('-')[0]
  let shiftVariation = placement.split('-')[1]

  if (shiftVariation) {
    let { top, left, height, width } = data.offsets.reference
    let popper = getPopperClientRect(data.offsets.popper)

    let shiftOffsets = {
      y: {
        start: { top },
        end: { top: top + height - popper.height }
      },
      x: {
        start: { left },
        end: { left: left + width - popper.width }
      }
    }

    let axis = ~['bottom', 'top'].indexOf(basePlacement) ? 'x' : 'y'

    data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation])
  }

  return data
}

Popper.prototype.modifiers.preventOverflow = function (data) {
  let order = this._options.preventOverflowOrder
  let popper = getPopperClientRect(data.offsets.popper)

  let check = {
    top: () => {
      let { top } = popper

      if (top < data.boundaries.top) {
        top = Math.max(top, data.boundaries.top)
      }

      return { top }
    },
    right: () => {
      let { left } = popper

      if (popper.right > data.boundaries.right) {
        left = Math.min(left, data.boundaries.right - popper.width)
      }

      return { left }
    },
    bottom: () => {
      let { top } = popper

      if (popper.bottom > data.boundaries.bottom) {
        top = Math.min(top, data.boundaries.bottom - popper.height)
      }

      return { top }
    },
    left: () => {
      let { left } = popper

      if (popper.left < data.boundaries.left) {
        left = Math.max(left, data.boundaries.left)
      }

      return { left }
    }
  }

  order.forEach((direction) => {
    data.offsets.popper = Object.assign(popper, check[direction]())
  })
  return data
}

Popper.prototype.modifiers.keepTogether = function (data) {
  let popper = getPopperClientRect(data.offsets.popper)
  let reference = data.offsets.reference

  if (popper.right < Math.floor(reference.left)) {
    data.offsets.popper.left = Math.floor(reference.left) - popper.width
  }

  if (popper.left > Math.floor(reference.right)) {
    data.offsets.popper.left = Math.floor(reference.right)
  }

  if (popper.bottom < Math.floor(reference.top)) {
    data.offsets.popper.top = Math.floor(reference.top) - popper.height
  }

  if (popper.top > Math.floor(reference.bottom)) {
    data.offsets.popper.top = Math.floor(reference.bottom)
  }

  return data
}

Popper.prototype.modifiers.flip = function (data) {
  if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
    return data
  }

  if (data.flipped && data.placement === data._originalPlacement) {
    return data
  }

  const placements = data.placement.split('-')
  let placement = placements[0]
  let placementOpposite = getOppositePlacement(placement)
  let variation = placements[1] || ''
  let flipOrderArr = []

  if (this._options.flipBehavior === 'flip') {
    flipOrderArr = [placement, placementOpposite]
  } else {
    flipOrderArr = this._options.flipBehavior
  }

  flipOrderArr.forEach((step, index) => {
    if (placement !== step || flipOrderArr.length === index + 1) {
      return
    }

    placement = data.placement.split('-')[0]
    placementOpposite = getOppositePlacement(placement)

    let popperOffsets = getPopperClientRect(data.offsets.popper)
    let a = ~['right', 'bottom'].indexOf(placement)
    let p = Math.floor(data.offsets.reference[placement])
    let po = Math.floor(popperOffsets[placementOpposite])

    if ((a && p > po) || (!a && p < po)) {
      data.flipped = true
      data.placement = flipOrderArr[index + 1]

      if (variation) {
        data.placement += `-${variation}`
      }

      data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper

      data = this.runModifiers(data, this._options.modifiers, this._flip)
    }
  })
  return data
}

Popper.prototype.modifiers.offset = function (data) {
  let offset = this._options.offset
  let popper = data.offsets.popper

  if (~data.placement.indexOf('left')) {
    popper.top -= offset
  } else if (~data.placement.indexOf('right')) {
    popper.top += offset
  } else if (~data.placement.indexOf('top')) {
    popper.left -= offset
  } else if (~data.placement.indexOf('bottom')) {
    popper.left += offset
  }

  return data
}

Popper.prototype.modifiers.arrow = function (data) {
  let arrow = this._options.arrowElement
  let arrowOffset = this._options.arrowOffset

  if (typeof arrow === 'string') {
    arrow = this._popper.querySelector(arrow)
  }

  if (!arrow || !this._popper.contains(arrow) || !this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
    return data
  }

  let arrowStyle = {}
  let placement = data.placement.split('-')[0]
  let popper = getPopperClientRect(data.offsets.popper)
  let reference = data.offsets.reference
  let isVertical = ~['left', 'right'].indexOf(placement)
  let len = isVertical ? 'height' : 'width'
  let opSide = isVertical ? 'bottom' : 'right'
  let altSide = isVertical ? 'left' : 'top'
  let side = isVertical ? 'top' : 'left'

  let popperRect = this.popperOuterSize ? this.popperOuterSize : (this.popperOuterSize = getOuterSizes(this._popper))
  let arrowRect = getOuterSizes(arrow)
  let arrowSize = arrowRect[len]

  if (reference[opSide] - arrowSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize)
  }

  if (reference[side] + arrowSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide]
  }

  let center = reference[side] + (arrowOffset || reference[len] / 2 - arrowSize / 2)
  let sideValue = center - popper[side]

  sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8)

  arrowStyle[side] = sideValue
  arrowStyle[altSide] = ''
  data.offsets.arrow = adjustArrowStyle(arrowStyle, side, arrowRect, popperRect, this._options)
  data.arrowElement = arrow

  return data
}

export default Popper
