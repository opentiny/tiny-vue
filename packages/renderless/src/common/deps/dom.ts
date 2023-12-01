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
import globalConfig from '../global'

export const isServer = typeof window === 'undefined'
const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

/** 处理style的名字。
 * 把 moz : - _ 等位置，转换为大写驼峰格式, 比如 ：camelCase("moz:moz_abc:def-hjk_lmnOpqRst") = MozMozAbcDefHjkLmnOpqRst
 */
const camelCase = (name: string) =>
  name
    .replace(SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => (offset ? letter.toUpperCase() : letter))
    .replace(MOZ_HACK_REGEXP, 'Moz$1')

/** 绑定事件 */
export const on = (
  el: EventTarget,
  event: any,
  handler: (this: HTMLElement, ev: any) => any,
  options: boolean = false
) => {
  if (el && event && handler) {
    el.addEventListener(event, handler, options)
  }
}
/** 移除事件 */
export const off = (
  el: EventTarget,
  event: any,
  handler: (this: HTMLElement, ev: any) => any,
  options: boolean = false
) => {
  window.document
  if (el && event) {
    el.removeEventListener(event, handler, options)
  }
}

/** 执行一次就立即移除事件 */
export const once = (el: HTMLElement, event: any, fn: (this: HTMLElement, ev: any) => any) => {
  const listener = function () {
    if (fn) {
      fn.apply(this, arguments)
    }

    off(el, event, listener)
  }

  on(el, event, listener)
}

/** 判断是否有class,  只能查询单个类名， 且不能有空格 */
export const hasClass = (el: HTMLElement, clazz: string) => {
  if (!el || !clazz) {
    return false
  }

  if (clazz.includes(' ')) {
    throw new Error('className should not contain space.')
  }

  if (el.classList) {
    return el.classList.contains(clazz)
  }
}

/** 给el添加一组classes,  clazz 允许为用空格分隔的多个类名  */
export const addClass = (el: HTMLElement, clazz = '') => {
  if (!el) {
    return
  }

  const classes = clazz.split(' ').filter((name) => name)

  classes.forEach((clsName) => el.classList.add(clsName))
}

/** 移除el上的classes， clazz 允许为用空格分隔的多个类名  */
export const removeClass = (el: HTMLElement, clazz: string) => {
  if (!el || !clazz) {
    return
  }

  const classes = clazz.split(' ').filter((name) => name)

  classes.forEach((clsName) => el.classList.remove(clsName))
}

/** 查询元素的style的值。 优先找el.style, 找不到则调用getComputedStyle(el)  */
export const getStyle = (el: HTMLElement, styleName: string) => {
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
    if (el.style[styleName]) {
      return el.style[styleName]
    }

    const computed = window.getComputedStyle(el)
    return computed ? computed[styleName] : null
  } catch (e) {
    return el.style[styleName]
  }
}

/** 给元素赋值style。
 * @param name  当它是对象时，遍历所有属性；当它是字符串时，需要传入第3个参数 value
 */
export const setStyle = (el: HTMLElement, name: string | object, value?: any) => {
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

    el.style[name as string] = value
  }
}

/** 判断元素是否有滚动的style TINY_NO_USED
 * @param vertical  true时，只判断overflow-y属性；  false时，只判断overflow-x属性；  不传入时，只判断overflow属性！
 */
export const isScroll = (el: HTMLElement, vertical?: boolean) => {
  if (isServer) {
    return
  }

  /** 是否需要判断方向
   * 它的值为false: 当vertical = null / undefinded。
   * 它的值为 true: 当vertical =true /false
   */
  const determinedDirection = !isNull(vertical)
  let overflow

  if (determinedDirection) {
    overflow = vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x')
  } else {
    overflow = getStyle(el, 'overflow')
  }

  return overflow.match(/(scroll|auto)/)
}

/** 查找离元素最近的父级滚动元素
 * @param vertical  true时，只判断overflow-y属性；  false时，只判断overflow-x属性；  不传入时，只判断overflow属性！
 */
export const getScrollContainer = (el: HTMLElement, vertical?: boolean) => {
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

    parent = parent.parentNode as any
  }

  return parent
}

/** 判断是否 el 完全在  container 中。  四个边有重合都不行，必须完全在里面。 */
export const isInContainer = (el: HTMLElement, container: HTMLElement) => {
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

  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  )
}

/** 是否为虚拟节点   TINY-NO-USED ⭐ 全局未使用
 * ⭐ 仅能判断vue2的节点。  vue3的节点没有 componentOptions 属性。
 */
export const isVNode = (node: any) => node !== null && isObject(node) && hasOwn.call(node, 'componentOptions')

/** 查询页面的位置和尺寸
 * @returns scrollTop ： document 或 body的滚动位置
 * @returns scrollLeft ： document 或 body的滚动位置
 * @returns visibleHeight ： 可视区高度 （不含滚动条）
 * @returns visibleWidth ： 可视区宽度（不含滚动条）
 */
export const getDomNode = () => {
  const viewportWindow = globalConfig.viewportWindow || window
  let documentElement = viewportWindow.document.documentElement
  let bodyElem = viewportWindow.document.body

  return {
    scrollTop: documentElement.scrollTop || bodyElem.scrollTop,
    scrollLeft: documentElement.scrollLeft || bodyElem.scrollLeft,
    visibleHeight: documentElement.clientHeight || bodyElem.clientHeight,
    visibleWidth: documentElement.clientWidth || bodyElem.clientWidth
  }
}

export const getScrollTop = (el) => {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset
  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0)
}

export const stopPropagation = (event) => event.stopPropagation()

export const preventDefault = (event, isStopPropagation) => {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    stopPropagation(event)
  }
}

const overflowScrollReg = /scroll|auto|overlay/i
const defaultRoot = isServer ? void 0 : window

const isElement = (node) => node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1

export const getScrollParent = (el, root = defaultRoot) => {
  let node = el

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node)

    if (overflowScrollReg.test(overflowY)) {
      return node
    }

    node = node.parentNode
  }

  return root
}
