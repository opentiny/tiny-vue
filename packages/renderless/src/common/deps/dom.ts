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

import { hasOwn, isObject, isNull } from '../type'

const isServer = typeof window === 'undefined'
const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/
const ieVersion = isServer ? 0 : Number(document.documentMode)

const trim = (string) => (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')

const camelCase = (name) =>
  name.replace(SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => (offset ? letter.toUpperCase() : letter)).replace(MOZ_HACK_REGEXP, 'Moz$1')

export const on = (() => {
  if (!isServer) {
    return (el, event, handler) => {
      if (el && event && handler) {
        el.addEventListener(event, handler, false)
      }
    }
  } else {
    return (el, event, handler) => {
      if (el && event && handler) {
        el.attachEvent('on' + event, handler)
      }
    }
  }
})()

export const off = (() => {
  if (!isServer) {
    return (el, event, handler) => {
      if (el && event) {
        el.removeEventListener(event, handler, false)
      }
    }
  } else {
    return (el, event, handler) => {
      if (el && event) {
        el.detachEvent('on' + event, handler)
      }
    }
  }
})()

export const once = (el, event, fn) => {
  const listener = function () {
    if (fn) {
      fn.apply(this, arguments)
    }

    off(el, event, listener)
  }

  on(el, event, listener)
}

export const hasClass = (el, clazz) => {
  if (!el || !clazz) {
    return false
  }

  if (clazz.includes(' ')) {
    throw new Error('className should not contain space.')
  }

  if (el.classList) {
    return el.classList.contains(clazz)
  }

  return (' ' + el.className + ' ').includes(' ' + clazz + ' ')
}

export const addClass = (el, clazz) => {
  if (!el) {
    return
  }

  const classes = (clazz || '').split(' ')
  let curClass = el.className

  for (let i = 0, len = classes.length; i < len; i++) {
    const clsName = classes[i]

    if (clsName) {
      if (el.classList) {
        el.classList.add(clsName)
      } else if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }

  if (!el.classList) {
    el.className = curClass
  }
}

export const removeClass = (el, clazz) => {
  if (!el || !clazz) {
    return
  }

  const classes = clazz.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, len = classes.length; i < len; i++) {
    const clsName = classes[i]

    if (clsName) {
      if (el.classList) {
        el.classList.remove(clsName)
      } else if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }

  if (!el.classList) {
    el.className = trim(curClass)
  }
}

export const getStyle = (el, styleName) => {
  if (isServer) {
    return
  }
  if (!el || !styleName) {
    return null
  }

  styleName = camelCase(styleName)

  if (styleName === 'float') {
    styleName = 'cssFloat'
  }

  try {
    const computed = document.defaultView.getComputedStyle(el, '')

    return el.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return el.style[styleName]
  }
}

export const setStyle = (el, name, value) => {
  if (!el || !name) {
    return
  }

  if (typeof name === 'object') {
    for (const prop in name) {
      if (hasOwn.call(name, prop)) {
        setStyle(el, prop, name[prop])
      }
    }
  } else {
    name = camelCase(name)

    if (name === 'opacity' && ieVersion < 9) {
      el.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
    } else {
      el.style[name] = value
    }
  }
}

export const isScroll = (el, vertical) => {
  if (isServer) {
    return
  }

  const determinedDirection = !isNull(vertical)
  let overflow

  if (determinedDirection) {
    overflow = vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x')
  } else {
    overflow = getStyle(el, 'overflow')
  }

  return overflow.match(/(scroll|auto)/)
}

export const getScrollContainer = (el, vertical) => {
  if (isServer) {
    return
  }

  let parent = el

  while (parent) {
    if (~[window, document, document.documentElement].indexOf(parent)) {
      return window
    }

    if (isScroll(parent, vertical)) {
      return parent
    }

    parent = parent.parentNode
  }

  return parent
}

export const isInContainer = (el, container) => {
  if (isServer || !el || !container) {
    return false
  }

  const elRect = el.getBoundingClientRect()
  let containerRect

  if (~[window, document, document.documentElement].indexOf(container) || isNull(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    }
  } else {
    containerRect = container.getBoundingClientRect()
  }

  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right
}

export const isVNode = (node) => node !== null && isObject(node) && hasOwn.call(node, 'componentOptions')

export const getDomNode = () => {
  let documentElement = document.documentElement
  let bodyElem = document.body

  return {
    scrollTop: documentElement.scrollTop || bodyElem.scrollTop,
    scrollLeft: documentElement.scrollLeft || bodyElem.scrollLeft,
    visibleHeight: documentElement.clientHeight || bodyElem.clientHeight,
    visibleWidth: documentElement.clientWidth || bodyElem.clientWidth
  }
}
