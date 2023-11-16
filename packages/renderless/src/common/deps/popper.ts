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
import PopupManager from './popup-manager'
import globalConfig from '../global'
import { typeOf } from '../type'

const positions = ['left', 'right', 'top', 'bottom']
const modifiers = ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']

const DEFAULTS = {
  arrowOffset: 0,
  arrowElement: '[x-arrow]',
  boundariesElement: 'viewport',
  boundariesPadding: 5,
  flipBehavior: 'flip', // 全局没有修改过它，所以它一直是flip
  forceAbsolute: false,
  gpuAcceleration: true, // 这个用不到了，默认使用tranform3d
  offset: 0,
  placement: 'bottom',
  preventOverflowOrder: positions,
  modifiers // 此处是string数组， 构造函数调用之后转为函数数组
}

/** 用 styles 对象赋值el.style */
const setStyle = (el: HTMLElement, styles: object) => {
  const isNumeric = (n) => n !== '' && !isNaN(parseFloat(n)) && isFinite(n)

  Object.keys(styles).forEach((prop) => {
    let unit = ''

    if (~['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) && isNumeric(styles[prop])) {
      unit = 'px'
    }

    el.style[prop] = styles[prop] + unit
  })
}

/** 查找el的 offsetParent ,找不到则默认为 <html> */
const getOffsetParent = (el: HTMLElement) => {
  let offsetParent = el.offsetParent as HTMLElement

  return offsetParent === window.document.body || !offsetParent ? window.document.documentElement : offsetParent
}

/** 查找基本元素的计算属性值 */
const getStyleComputedProperty = (el: HTMLElement, property: string) => {
  if (!el || el.nodeType !== 1) {
    return
  }

  let css = window.getComputedStyle(el, null)

  return css[property]
}

/** 向上查找，判断是不是某一层级有fixed */
const isFixed = (el: HTMLElement) => {
  if (el === window.document.body) {
    return false
  }

  if (getStyleComputedProperty(el, 'position') === 'fixed') {
    return true
  }

  return el.parentNode ? isFixed(el.parentNode as HTMLElement) : false
}

/** 在页面上的相对视口位置。 也就是说滚动条会影响它的值 */
const getBoundingClientRect = (el: HTMLElement) => {
  let rect = el.getBoundingClientRect()

  return {
    left: rect.left,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }
}

/** 判断el的overflow是不是可能滚动的 */
const isScrollElement = (el: HTMLElement) => {
  const scrollTypes = ['scroll', 'auto']

  return (
    scrollTypes.includes(getStyleComputedProperty(el, 'overflow')) ||
    scrollTypes.includes(getStyleComputedProperty(el, 'overflow-x')) ||
    scrollTypes.includes(getStyleComputedProperty(el, 'overflow-y'))
  )
}

/** 查找滚动父元素，只找第一个就返回 */
export const getScrollParent: (el: HTMLElement) => HTMLElement = (el) => {
  let parent = el.parentNode

  if (!parent) {
    return el
  }

  if (parent === window.document) {
    if (window.document.body.scrollTop || window.document.body.scrollLeft) {
      return window.document.body as HTMLElement
    }
    return window.document.documentElement
  }

  if (isScrollElement(parent as any)) {
    return parent as HTMLElement
  }

  return getScrollParent(parent as any)
}

/** 计算 el 在父元素中的定位 */
const getOffsetRectRelativeToCustomParent = (el: HTMLElement, parent: HTMLElement, fixed: boolean) => {
  let { top, left, width, height } = getBoundingClientRect(el)

  // 如果是fixed定位，直接返回相对视口位置
  if (fixed) {
    return {
      top: top,
      left: left,
      bottom: top + height,
      right: left + width,
      width,
      height
    }
  }

  let parentRect = getBoundingClientRect(parent)
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

const getScrollTopValue = (el: HTMLElement) =>
  el === document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : el.scrollTop

const getScrollLeftValue = (el: HTMLElement) =>
  el === document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : el.scrollLeft

const getMaxWH = (body, html) => {
  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
  const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)
  return { width, height }
}

/** 计算元素的margin盒子的大小 */
const getOuterSizes = (el: HTMLElement) => {
  let _display = el.style.display
  let _visibility = el.style.visibility

  el.style.display = 'block'
  el.style.visibility = 'hidden'

  let styles = window.getComputedStyle(el)
  let x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
  let y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight)
  let result = { width: el.offsetWidth + y, height: el.offsetHeight + x }

  el.style.display = _display
  el.style.visibility = _visibility

  return result
}

/** 把字符串位置替换为反方向， 例如： left替换为right */
const getOppositePlacement = (placement: string) => {
  let hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }

  return placement.replace(/left|right|bottom|top/g, (matched) => hash[matched])
}

/** 克隆popperOffsets，并补上 right,bottom的值  */
const getPopperClientRect = (popperOffsets: PopperOffsets) => {
  let offsets = { ...popperOffsets }

  offsets.right = offsets.left + offsets.width
  offsets.bottom = offsets.top + offsets.height

  return offsets
}

/** 收集所有的带scroll的父元素到一个数组中 */
const getAllScrollParents: (el: HTMLElement, parents?: HTMLElement[]) => HTMLElement[] = (
  el: HTMLElement,
  parents = [] as HTMLElement[]
) => {
  const parent = el.parentNode as HTMLElement

  if (parent) {
    isScrollElement(parent) && parents.push(parent)
    // 如果祖先元素是fixed，则不再继续往上查找
    if (getStyleComputedProperty(parent, 'position') === 'fixed') {
      return parents
    }
    return getAllScrollParents(parent, parents) as HTMLElement[]
  }

  return parents
}

/** 返回当前元素的offset值 */
const getOffsetRect = (el: HTMLElement) => {
  const elementRect = {
    width: el.offsetWidth,
    height: el.offsetHeight,
    left: el.offsetLeft,
    top: el.offsetTop,
    right: 0,
    bottom: 0
  }

  elementRect.right = elementRect.left + elementRect.width
  elementRect.bottom = elementRect.top + elementRect.height

  return elementRect
}

interface PopperOptions {
  arrowOffset: number
  arrowElement: string
  boundariesElement: string | HTMLElement
  boundariesPadding: number
  flipBehavior: string
  forceAbsolute: boolean
  gpuAcceleration: boolean
  offset: number
  placement: string
  preventOverflowOrder: string[]
  modifiers: string[]
  modifierFns: Function[] // 区分2个modifiers变量
  removeOnDestroy?: boolean // destory时，是否移除popper dom
  bubbling?: boolean // 是否给所有祖先的scroll都监听上
  adjustArrow?: boolean // 是否校正。 只有tooltip使用它个属性了
}
interface PopperState {
  position: 'absolute' | 'fixed'
  updateCallback?: (data: UpdateData) => void
  scrollTarget: HTMLElement | null
  scrollTargets: HTMLElement[] | null
  updateBoundFn: () => void
}

interface ReferenceOffsets {
  top: number
  left: number
  bottom: number
  right: number
  width: number
  height: number
}
interface PopperOffsets {
  position: 'absolute' | 'fixed'
  top: number
  left: number
  bottom: number
  right: number
  width: number
  height: number
}
interface arrowOffsets {
  top: number
  left: number
}
/** update时的data变量 */
interface UpdateData {
  instance: Popper
  styles: {}
  placement: string
  _originalPlacement: string

  offsets: {
    popper: PopperOffsets
    reference: ReferenceOffsets
    arrow?: arrowOffsets
  }
  arrowElement: HTMLElement

  boundaries: {
    right: number
    left: number
    top: number
    bottom: number
  }
  flipped?: boolean
}
/** Popper 类是用于处理 reference 和 popper 两个dom，让popper悬浮的功能
 * 调用后就popper就'absolute' | 'fixed' 定位，并立即计算一次popper后的位置，并绑定scroll 和 resize事件！
 */
class Popper {
  _reference: HTMLElement
  _popper: HTMLElement
  state: PopperState
  _options: PopperOptions
  modifiers: Record<string, Function> = {}
  /** 每次update, 计算popper的大小并缓存 */
  popperOuterSize = null as unknown as { width: number; height: number }

  constructor(reference: HTMLElement, popper: HTMLElement, options: PopperOptions) {
    this._reference = reference
    this._popper = popper
    this.state = {} as PopperState

    this._options = { ...DEFAULTS, ...options } as any

    this._options.modifierFns = modifiers.map((modifier) => {
      return this[modifier]
    })
    this._popper.setAttribute('x-placement', this._options.placement)

    this.state.position = this._getPopperPositionByRefernce(this._reference)

    setStyle(this._popper, { position: this.state.position, top: 0 })

    this.update()
    this._setupEventListeners()
  }

  destroy() {
    this._popper.removeAttribute('x-placement')

    // 记录 _oldreference 就是为了保留之前的top,left, 但必要性并不大，因为此时强行把popper给display:none了。
    // 它的位置也并不重要了。 所以 _oldreference  TINY_NO_NEED
    // const popperStyle = (this._reference === this._oldreference && this._oldreference._popper) || {}

    this._popper.style.display = 'none'
    // this._popper.style.position = ''
    // this._popper.style.top = popperStyle.top || ''
    // this._popper.style.left = popperStyle.left || ''
    // this._popper.style.transform = ''
    this._removeEventListeners()

    /** 只有示例中，用到这个属性了。 由于8个组件默认值没有用，所以默认popper是display:none的状态，留在了页面上 */
    this._options.removeOnDestroy && this._popper.remove()

    return this
  }
  onUpdate(callback) {
    this.state.updateCallback = callback
    return this
  }
  update() {
    let data = { instance: this, styles: {} } as unknown as UpdateData

    this.popperOuterSize = null as unknown as { width: number; height: number }
    data.placement = data._originalPlacement = this._options.placement
    data.offsets = this._getRefPopOffsets(this._popper, this._reference, data.placement)

    data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement)

    data = this.runModifiers(data, this._options.modifierFns)

    typeof this.state.updateCallback === 'function' && this.state.updateCallback(data)
  }
  /** 按顺序执行Modifiers， 如果传入终点modifier,则执行到指定位置 */
  runModifiers(data: UpdateData, modifiers: Function[], ends?: Function) {
    let modifiersToRun = modifiers.slice()
    const _options = this._options

    if (ends !== undefined) {
      modifiersToRun = this._options.modifierFns.slice(
        0,
        _options.modifierFns.findIndex((m) => m == ends)
      )
    }

    modifiersToRun.forEach((modifier) => {
      if (typeOf(modifier) === 'function') {
        data = modifier.call(this, data)
      }
    })

    return data
  }
  // 此时才把offsets.popper 赋值给popper dom,  offsets.array赋值给array dom
  applyStyle(data: UpdateData) {
    let styles: any = { position: data.offsets.popper.position }
    let left = Math.round(data.offsets.popper.left)
    let top = Math.round(data.offsets.popper.top)

    // 始终使用 translate3d
    styles.transform = `translate3d(${left}px, ${top}px, 0)`
    Object.assign(styles, { top: 0, left: 0 })

    Object.assign(styles, data.styles)

    setStyle(this._popper, styles)

    this._popper.setAttribute('x-placement', data.placement)

    if (data.offsets.arrow) {
      setStyle(data.arrowElement, data.offsets.arrow)
    }

    return data
  }
  // 判断 placement是不是2段式的，是则处理一下偏移。 修改data.offsets.popper的值
  shift(data: UpdateData) {
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
  // 校正popper的位置在boundaries 的内部
  preventOverflow(data: UpdateData) {
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
  // 校正popper的位置在reference的边上。 如果2个分离了，重新调整popper的位置。 可能是担心 modifiers.offset 带来的副作用吧
  keepTogether(data: UpdateData) {
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
  // 根据flip的策略，计算当前应该显示的位置。 空间不够要计算出flip的位置。 可能是担心preventOverflow 时，造成pop, reference会重叠。 重叠了就要flip一下
  flip(data: UpdateData) {
    // 只翻转一次，避免重复的flip
    if (data.flipped && data.placement === data._originalPlacement) {
      return data
    }

    const placements = data.placement.split('-')
    let placement = placements[0]
    let placementOpposite = getOppositePlacement(placement)
    let variation = placements[1] || ''
    let flipOrderArr = [placement, placementOpposite]

    flipOrderArr.forEach((step, index) => {
      if (placement !== step || flipOrderArr.length === index + 1) {
        return
      }

      placement = data.placement.split('-')[0]
      placementOpposite = getOppositePlacement(placement)

      let popperOffsets = getPopperClientRect(data.offsets.popper)
      // 变量起名不佳。 此处分2种情况： placement是right', 'bottom 或 left,top
      let a = ~['right', 'bottom'].indexOf(placement)
      let p = Math.floor(data.offsets.reference[placement])
      let po = Math.floor(popperOffsets[placementOpposite])

      // 如果right，  ref.right > pop.left
      //     bottom,  ref.bottom > pop.top
      //     left,    ref.left < pop.left
      //     top,     ref.top < pop.bottom
      // 则进行flip
      if ((a && p > po) || (!a && p < po)) {
        data.flipped = true
        data.placement = flipOrderArr[index + 1]

        if (variation) {
          data.placement += `-${variation}`
        }

        data.offsets.popper = this._getRefPopOffsets(this._popper, this._reference, data.placement).popper

        data = this.runModifiers(data, this._options.modifierFns, this.flip)
      }
    })
    return data
  }
  // 根据入参option上的offset, 给data.offset.popper进行校正
  offset(data: UpdateData) {
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
  // 计算arrow的位置,保存在data.offsets.arrow ={top,left}
  arrow(data: UpdateData) {
    let arrow: string | HTMLElement = this._options.arrowElement // 小三角的dom
    let arrowOffset = this._options.arrowOffset // 入参里的值，可能为 Infinity

    if (typeof arrow === 'string') {
      arrow = this._popper.querySelector(arrow) as HTMLElement
    }

    if (!arrow || !this._popper.contains(arrow)) {
      return data
    }

    let arrowStyle = {} as arrowOffsets
    let placement = data.placement.split('-')[0] //             以下以 placement = right 为例
    let popper = getPopperClientRect(data.offsets.popper) //    整个popper的dom屏幕尺寸。（popper到底是right-start还是right-end，此时已经计算好了的。所以最后那里不需要校正）
    let reference = data.offsets.reference //                   tiny-form-item__content 元素的屏幕尺寸。 不包含label
    let isVertical = ~['left', 'right'].indexOf(placement) //   true
    let calcProp = isVertical ? 'height' : 'width' //           calcProp:height
    let opSide = isVertical ? 'bottom' : 'right' //              opSide:bottom
    let altSide = isVertical ? 'left' : 'top' //                 altSide:left       left是无用的那个值
    let side = isVertical ? 'top' : 'left' //                    side:top

    let popperRect = this.popperOuterSize ? this.popperOuterSize : (this.popperOuterSize = getOuterSizes(this._popper)) // popper的大小
    let arrowRect = getOuterSizes(arrow) //                      arrow的大小 {height: 11，width: 5}
    let arrowSize = arrowRect[calcProp] //                       11

    // 如果reference 比 popper 更靠上，则popper上移到 ref.bottom - arrowSize （上边缘对齐）
    if (reference[opSide] - arrowSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize)
    }
    // 如果reference 比 popper 更靠下，则popper下移到 ref.bottom + arrowSize（下边缘对齐）
    if (reference[side] + arrowSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide]
    }
    // 如果arrowOffset有值，则center为ref的上边+arrowOffset。  此例arrowOffset为Infinity，  center也为无穷大。
    let center = reference[side] + (arrowOffset || reference[calcProp] / 2 - arrowSize / 2)
    let sideValue = center - popper[side]

    // 猜测是上下边距留下8px的距离。 确保箭头不太靠顶靠底。
    // 此时sideValue为“popper的顶- 箭头 - 8px” 的位置。
    sideValue = Math.max(Math.min(popper[calcProp] - arrowSize - 8, sideValue), 8)
    arrowStyle[side] = sideValue
    arrowStyle[altSide] = ''

    // adjustArrow此处还要校正一下，但不明白为什么只校正left, 不校正top的位置？
    const params = this._options.placement.split('-')
    if (this._options.adjustArrow && ~['top', 'bottom'].indexOf(params[0]) && side === 'left') {
      if (params[1] === 'start') {
        arrowStyle.left = 8
      } else if (!params[1]) {
        arrowStyle.left = (popperRect.width - arrowRect.width) / 2
      }
    }

    data.offsets.arrow = arrowStyle
    data.arrowElement = arrow

    return data
  }

  /** 判断 reference 的 offsetParent 元素是fix还是abs, 这个值会赋值给popper 的dom */
  _getPopperPositionByRefernce(reference: HTMLElement) {
    if (this._options.forceAbsolute) {
      return 'absolute'
    }

    let isParentFixed = isFixed(reference)
    return isParentFixed ? 'fixed' : 'absolute'
  }
  /** 实时计算一下popper, reference的 位置信息， 用于 */
  _getRefPopOffsets(popper, reference, placement) {
    placement = placement.split('-')[0]
    let popperOffsets = { position: this.state.position } as PopperOffsets

    let isParentFixed = popperOffsets.position === 'fixed'
    let referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed)

    // 利用 popperOuterSize 来减少一次outerSize的计算
    const { width, height } = this.popperOuterSize
      ? this.popperOuterSize
      : (this.popperOuterSize = getOuterSizes(popper))

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
  _setupEventListeners() {
    this.state.updateBoundFn = this.update.bind(this)

    on(window, 'resize', this.state.updateBoundFn)

    if (this._options.boundariesElement !== 'window') {
      let target: HTMLElement = getScrollParent(this._reference)

      if (target === window.document.body || target === window.document.documentElement) {
        target = window as any
      }
      this.state.scrollTarget = target

      // 只有bubbling时，才启用所有祖先监听，根源在此。 getAll..Parents函数只有这一处调用
      if (this._options.bubbling || PopupManager.globalScroll) {
        let targets = getAllScrollParents(this._reference)

        this.state.scrollTargets = targets || []
        targets.forEach((target) => {
          on(target, 'scroll', this.state.updateBoundFn)
        })
      } else {
        on(target, 'scroll', this.state.updateBoundFn)
      }
    }
  }
  _removeEventListeners() {
    off(window, 'resize', this.state.updateBoundFn)

    if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
      off(this.state.scrollTarget, 'scroll', this.state.updateBoundFn)
      this.state.scrollTarget = null

      // 移除祖先监听
      if (this._options.bubbling || PopupManager.globalScroll) {
        let targets = this.state.scrollTargets || []

        targets.forEach((target) => {
          off(target, 'scroll', this.state.updateBoundFn)
        })
        this.state.scrollTargets = null
      }
    }

    this.state.updateBoundFn = null as any
  }
  /** 实时计算一下Boundary的位置 */
  _getBoundaries(data: UpdateData, padding: number, boundariesElement: string | HTMLElement) {
    let boundaries = { right: 0, left: 0, top: 0, bottom: 0 }

    if (boundariesElement === 'window' || boundariesElement === 'body') {
      let body = window.document.body
      let html = window.document.documentElement
      let { width, height } = getMaxWH(body, html)

      boundaries = { top: 0, right: width, bottom: height, left: 0 }
    } else if (boundariesElement === 'viewport') {
      let offsetParent = getOffsetParent(this._popper)
      let scrollParent = getScrollParent(this._popper)
      let offsetParentRect = getOffsetRect(offsetParent)
      let isFixed = data.offsets.popper.position === 'fixed'
      let scrollTop = isFixed ? 0 : getScrollTopValue(scrollParent)
      let scrollLeft = isFixed ? 0 : getScrollLeftValue(scrollParent)

      // PopupManager.viewportWindow是为了兼容之前已经采用此方法兼容微前端的用户，后续需要采用globalConfig.viewportWindow
      const viewportWindow = globalConfig.viewportWindow || PopupManager.viewportWindow || window
      boundaries = {
        top: 0 - (offsetParentRect.top - scrollTop),
        right: viewportWindow.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
        bottom: viewportWindow.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
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
        boundaries = getOffsetRect(boundariesElement as HTMLElement)
      }
    }

    boundaries.right -= padding
    boundaries.left += padding
    boundaries.bottom = boundaries.bottom - padding
    boundaries.top = boundaries.top + padding

    return boundaries
  }
}

export default Popper
