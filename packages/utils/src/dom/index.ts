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

import { hasOwn, isNull } from '../type'
import { globalConfig } from '../globalConfig'
import { isServer } from '../globalConfig'

const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

/**
 * 将字符串转换为驼峰格式
 * 处理style的名字，把 moz : - _ 等位置，转换为大写驼峰格式
 * 例如：camelCase("moz:moz_abc:def-hjk_lmnOpqRst") = MozMozAbcDefHjkLmnOpqRst
 * @param name 需要转换的字符串
 * @returns 转换后的驼峰格式字符串
 */
const camelCase = (name: string): string =>
  name
    .replace(SPECIAL_CHARS_REGEXP, (_: string, separator: string, letter: string, offset: number) =>
      offset ? letter.toUpperCase() : letter
    )
    .replace(MOZ_HACK_REGEXP, 'Moz$1')

/**
 * 为元素绑定事件监听器
 * @param el 目标DOM元素
 * @param event 事件名称
 * @param handler 事件处理函数
 * @param options 事件选项，默认为false
 */
export const on = (
  el: EventTarget,
  event: string,
  handler: (this: HTMLElement, ev: Event) => any,
  options: boolean | AddEventListenerOptions = false
): void => {
  if (el && event && handler) {
    el.addEventListener(event, handler, options)
  }
}

/**
 * 移除元素的事件监听器
 * @param el 目标DOM元素
 * @param event 事件名称
 * @param handler 事件处理函数
 * @param options 事件选项，默认为false
 */
export const off = (
  el: EventTarget,
  event: string,
  handler: (this: HTMLElement, ev: Event) => any,
  options: boolean | EventListenerOptions = false
): void => {
  if (el && event) {
    el.removeEventListener(event, handler, options)
  }
}

/**
 * 为元素绑定一次性事件，触发后自动移除
 * @param el 目标DOM元素
 * @param event 事件名称
 * @param fn 事件处理函数
 */
export const once = (el: HTMLElement, event: string, fn: (this: HTMLElement, ev: Event) => any): void => {
  const listener = function (this: HTMLElement, ev: Event): void {
    if (fn) {
      fn.call(this, ev)
    }

    off(el, event, listener)
  }

  on(el, event, listener)
}

/**
 * 判断元素是否包含指定的类名
 * 只能查询单个类名，且不能有空格
 * @param el 目标DOM元素
 * @param clazz 要检查的类名
 * @returns 如果元素包含该类名则返回true，否则返回false
 */
export const hasClass = (el: HTMLElement, clazz: string): boolean => {
  if (!el || !clazz) {
    return false
  }

  if (clazz.includes(' ')) {
    throw new Error('className should not contain space.')
  }

  if (el.classList) {
    return el.classList.contains(clazz)
  }

  return false
}

/**
 * 为元素添加一个或多个类名
 * clazz允许为用空格分隔的多个类名
 * @param el 目标DOM元素
 * @param clazz 要添加的类名，多个类名用空格分隔
 */
export const addClass = (el: HTMLElement, clazz = ''): void => {
  if (!el) {
    return
  }

  const classes: string[] = clazz.split(' ').filter((name: string) => name)

  classes.forEach((clsName: string) => el.classList.add(clsName))
}

/**
 * 从元素移除一个或多个类名
 * clazz允许为用空格分隔的多个类名
 * @param el 目标DOM元素
 * @param clazz 要移除的类名，多个类名用空格分隔
 */
export const removeClass = (el: HTMLElement, clazz: string): void => {
  if (!el || !clazz) {
    return
  }

  const classes: string[] = clazz.split(' ').filter((name: string) => name)

  classes.forEach((clsName: string) => el.classList.remove(clsName))
}

/**
 * 获取元素的样式值
 * 优先查找el.style，找不到则调用getComputedStyle(el)
 * @param el 目标DOM元素
 * @param styleName 样式属性名
 * @returns 样式属性值
 */
export const getStyle = (el: HTMLElement, styleName: string): string | null | undefined => {
  if (isServer) {
    return undefined
  }
  if (!el || !styleName) {
    return null
  }

  styleName = camelCase(styleName)

  if (styleName === 'float') {
    styleName = 'cssFloat'
  }

  try {
    if (el.style[styleName as any]) {
      return el.style[styleName as any]
    }

    const computed: CSSStyleDeclaration = window.getComputedStyle(el)
    return computed ? computed[styleName as any] : null
  } catch (e) {
    return el.style[styleName as any]
  }
}

/**
 * 设置元素的样式
 * @param el 目标DOM元素
 * @param name 样式属性名或样式对象。当它是对象时，遍历所有属性；当它是字符串时，需要传入第3个参数value
 * @param value 样式属性值，当name为字符串时使用
 */
export const setStyle = (el: HTMLElement, name: string | Record<string, any>, value?: any): void => {
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

    el.style[name as any] = value
  }
}

/**
 * 判断元素是否有滚动样式
 * @param el 目标DOM元素
 * @param vertical true时只判断overflow-y属性；false时只判断overflow-x属性；不传入时只判断overflow属性
 * @returns 如果元素有滚动样式则返回匹配结果，否则返回null或undefined
 */
export const isScroll = (el: HTMLElement, vertical?: boolean): RegExpMatchArray | null | undefined => {
  if (isServer) {
    return undefined
  }

  /**
   * 是否需要判断方向
   * 它的值为false: 当vertical = null / undefinded
   * 它的值为true: 当vertical = true / false
   */
  const determinedDirection = !isNull(vertical)
  let overflow: string | null | undefined

  if (determinedDirection) {
    overflow = vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x')
  } else {
    overflow = getStyle(el, 'overflow')
  }

  return overflow ? overflow.match(/(scroll|auto)/) : null
}

/**
 * 查找离元素最近的可滚动父元素
 * @param el 目标DOM元素
 * @param vertical true时只判断overflow-y属性；false时只判断overflow-x属性；不传入时只判断overflow属性
 * @returns 最近的可滚动父元素，如果没有则返回元素自身
 */
export const getScrollContainer = (el: HTMLElement, vertical?: boolean): Window | HTMLElement | undefined => {
  if (isServer) {
    return
  }

  let parent: HTMLElement | Window | Node = el

  while (parent) {
    if (~[window, document, document.documentElement].indexOf(parent as any)) {
      return window
    }

    if (isScroll(parent as HTMLElement, vertical)) {
      return parent as HTMLElement
    }

    parent = (parent as HTMLElement).parentNode as any
  }

  return parent as HTMLElement
}

/**
 * 判断元素是否完全在容器内部
 * 四个边有重合都不行，必须完全在里面
 * @param el 目标DOM元素
 * @param container 容器元素
 * @returns 如果元素完全在容器内部则返回true，否则返回false
 */
export const isInContainer = (el: HTMLElement, container: HTMLElement): boolean => {
  if (isServer || !el || !container) {
    return false
  }

  const elRect: DOMRect = el.getBoundingClientRect()
  let containerRect: { top: number; right: number; bottom: number; left: number }

  if (~[window, document, document.documentElement].indexOf(container as any) || isNull(container)) {
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

/**
 * 获取页面的位置和尺寸信息
 * @returns 包含滚动位置和可视区域尺寸的对象
 * - scrollTop: document或body的垂直滚动位置
 * - scrollLeft: document或body的水平滚动位置
 * - visibleHeight: 可视区高度（不含滚动条）
 * - visibleWidth: 可视区宽度（不含滚动条）
 */
export const getDomNode = (): {
  scrollTop: number
  scrollLeft: number
  visibleHeight: number
  visibleWidth: number
} => {
  const viewportWindow: Window = globalConfig.viewportWindow || window
  let documentElement: HTMLElement = viewportWindow.document.documentElement
  let bodyElem: HTMLElement = viewportWindow.document.body

  return {
    scrollTop: documentElement.scrollTop || bodyElem.scrollTop,
    scrollLeft: documentElement.scrollLeft || bodyElem.scrollLeft,
    visibleHeight: documentElement.clientHeight || bodyElem.clientHeight,
    visibleWidth: documentElement.clientWidth || bodyElem.clientWidth
  }
}

/**
 * 获取元素的垂直滚动位置
 * 处理iOS滚动反弹导致的负scrollTop值
 * @param el 目标DOM元素
 * @returns 元素的垂直滚动位置，最小为0
 */
export const getScrollTop = (el: HTMLElement | Window): number => {
  const top: number = 'scrollTop' in el ? (el as HTMLElement).scrollTop : (el as Window).pageYOffset
  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0)
}

/**
 * 阻止事件冒泡
 * @param event 事件对象
 */
export const stopPropagation = (event: Event): void => event.stopPropagation()

/**
 * 阻止事件默认行为
 * @param event 事件对象
 * @param isStopPropagation 是否同时阻止事件冒泡
 */
export const preventDefault = (event: Event, isStopPropagation?: boolean): void => {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    stopPropagation(event)
  }
}

const overflowScrollReg = /scroll|auto|overlay/i
const defaultRoot: Window | undefined = isServer ? undefined : window

/**
 * 判断节点是否为元素节点
 * @param node DOM节点
 * @returns 如果是元素节点则返回true，否则返回false
 */
const isElement = (node: Node): boolean => {
  const element = node as Element
  return element.tagName !== 'HTML' && element.tagName !== 'BODY' && node.nodeType === 1
}

/**
 * 获取元素的可滚动父元素
 * @param el 目标DOM元素
 * @param root 根元素，默认为window
 * @returns 可滚动的父元素，如果没有则返回root
 */
export const getScrollParent = (
  el: HTMLElement,
  root: Window | HTMLElement | undefined = defaultRoot
): Window | HTMLElement | null => {
  let node: Node | null = el

  while (node && node !== root && isElement(node)) {
    const { overflowY }: CSSStyleDeclaration = window.getComputedStyle(node as HTMLElement)

    if (overflowScrollReg.test(overflowY)) {
      return node as HTMLElement
    }

    node = node.parentNode
  }

  return root || null
}

interface Hooks {
  onMounted: (callback: () => void) => void
  ref: <T>() => { value?: T }
  watch: <T>(source: { value?: T }, callback: () => void) => void
}

/**
 * 创建一个用于获取元素可滚动父元素的组合式函数
 * @param hooks 包含onMounted、ref和watch的对象
 * @returns 返回一个函数，该函数接收元素引用和根元素，返回可滚动父元素的ref
 */
export const useScrollParent =
  ({ onMounted, ref, watch }: Hooks) =>
  <T extends HTMLElement>(elRef: { value?: T }, root: Window | HTMLElement | undefined = defaultRoot) => {
    const scrollParent = ref<Window | HTMLElement | null>()
    const setScrollParent = (): void => {
      scrollParent.value = elRef.value ? getScrollParent(elRef.value, root) : null
    }

    watch(elRef, setScrollParent)
    onMounted(() => elRef.value && setScrollParent())

    return scrollParent
  }

/**
 * 判断元素是否处于隐藏状态
 * 递归检查元素及其父元素的display和position属性
 * @param elm 目标DOM元素
 * @returns 如果元素处于隐藏状态则返回true，否则返回false
 */
export const isDisplayNone = (elm: HTMLElement | null): boolean => {
  if (isServer) return false

  if (elm) {
    const computedStyle: CSSStyleDeclaration = getComputedStyle(elm)

    if (computedStyle.getPropertyValue('position') === 'fixed') {
      if (computedStyle.getPropertyValue('display') === 'none') {
        return true
      } else if (elm.parentNode !== document.body) {
        return isDisplayNone(elm.parentNode as HTMLElement)
      }
    } else {
      return elm.offsetParent === null
    }
  }

  return false
}
