import throttle from './throttle'

const CONTEXT_KEY = '@@infinitescrollContext'
const OBSERVER_CHECK_INTERVAL = 50
const ATTR_DEFAULT_DELAY = 200
const ATTR_DEFAULT_DISTANCE = 0

const attrs = {
  delay: { type: Number, default: ATTR_DEFAULT_DELAY },
  disabled: { type: Boolean, default: false },
  distance: { type: Number, default: ATTR_DEFAULT_DISTANCE },
  immediate: { type: Boolean, default: true }
}

const isNull = (val) => val === null

const parseAttrValue = (attrVal, type, defaultVal) => {
  if (isNull(attrVal)) return defaultVal

  if (type === Boolean) {
    return attrVal !== 'false'
  } else if (type === Number) {
    return Number(attrVal)
  }
}

const computeScrollOptions = (el, instance) =>
  Object.entries(attrs).reduce((accumulator, [name, option]) => {
    const { type, default: defaultValue } = option
    const attrKey = `infinite-scroll-${name}`
    const $attrValue = instance.$el.getAttribute(attrKey)
    const attrValue = el.getAttribute(attrKey)
    let value

    if ((isNull(attrValue) && isNull($attrValue)) || !isNull(attrValue)) {
      value = parseAttrValue(attrValue, type, defaultValue)
    }

    if (isNull(attrValue) && !isNull($attrValue)) {
      value = parseAttrValue($attrValue, type, defaultValue)
    }

    accumulator[name] = Number.isNaN(value) ? defaultValue : value

    return accumulator
  }, {})

const stopObserver = (el) => {
  const { observer } = el[CONTEXT_KEY]

  if (observer) {
    observer.disconnect()
    delete el[CONTEXT_KEY].observer
  }
}

const accumOffsetTop = (el) => {
  let totalOffset = 0
  let parent = el

  while (parent) {
    totalOffset += parent.offsetTop
    parent = parent.offsetParent
  }

  return totalOffset
}

const distanceOffsetTop = (el, containerEl) => Math.abs(accumOffsetTop(el) - accumOffsetTop(containerEl))

const scroller = (el, cb) => {
  const { container, containerEl, instance, observer, lastScrollTop } = el[CONTEXT_KEY]
  const { disabled, distance } = computeScrollOptions(el, instance)
  const { clientHeight, scrollHeight, scrollTop } = containerEl
  const deltaTop = scrollTop - lastScrollTop

  el[CONTEXT_KEY].lastScrollTop = scrollTop

  if (observer || disabled || deltaTop < 0) return

  let isTrigger = false

  if (container === el) {
    isTrigger = scrollHeight - (clientHeight + scrollTop) <= distance
  } else {
    const { clientTop, scrollHeight: height } = el
    const offsetTop = distanceOffsetTop(el, containerEl)

    isTrigger = scrollTop + clientHeight >= offsetTop + clientTop + height - distance
  }

  if (isTrigger) {
    cb.call(instance)
  }
}

function observerChecker(el, cb) {
  const { containerEl, instance } = el[CONTEXT_KEY]
  const { disabled } = computeScrollOptions(el, instance)

  if (disabled || containerEl.clientHeight === 0) return

  if (containerEl.scrollHeight <= containerEl.clientHeight) {
    cb.call(instance)
  } else {
    stopObserver(el)
  }
}

const cached = (fn) => {
  const cache = Object.create(null)
  return (str) => cache[str] || (cache[str] = fn(str))
}

const camelizeRE = /-(\w)/g

const camelize = cached((str) => str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : '')))

/** TINY_DUP  dom.ts */
const getElementStyle = (elem, styleKey) => {
  if (!elem || !styleKey) return ''

  let key = camelize(styleKey)

  if (key === 'float') key = 'cssFloat'

  try {
    const styleValue = elem.style[key]

    if (styleValue) return styleValue

    const computedStyle = document.defaultView ? document.defaultView.getComputedStyle(elem, '') : null

    return computedStyle ? computedStyle[key] : ''
  } catch (e) {
    return elem.style[key]
  }
}
/** TINY_DUP  dom.ts */
const canScroll = (el, isVertical) => {
  const overflowKey = { undefined: 'overflow', true: 'overflow-y', false: 'overflow-x' }[String(isVertical)]
  const overflowVal = getElementStyle(el, overflowKey)
  return ['scroll', 'auto', 'overlay'].some((s) => overflowVal.includes(s))
}
/** TINY_DUP  dom.ts */
export const getScrollContainer = (el, isVertical) => {
  let parentEl = el

  while (parentEl) {
    if ([window, document, document.documentElement].includes(parentEl)) return window

    if (canScroll(parentEl, isVertical)) return parentEl

    parentEl = parentEl.parentNode
  }

  return parentEl
}

const bind = (el, binding, vnode) => {
  const instance = binding.instance || vnode.context
  const { value: cb } = binding

  if (typeof cb !== 'function') {
    throw new TypeError('[TINY Error][InfiniteScroll] "v-infinite-scroll" binding value must be a function')
  }

  instance.$nextTick(() => {
    const { delay, immediate } = computeScrollOptions(el, instance)
    const container = getScrollContainer(el, true)
    const containerEl = container === window ? document.documentElement : container
    const onScroll = throttle(delay, scroller.bind(null, el, cb))

    if (!container) return

    el[CONTEXT_KEY] = { instance, container, containerEl, delay, cb, onScroll, lastScrollTop: containerEl.scrollTop }

    if (immediate) {
      const observer = new MutationObserver(throttle(OBSERVER_CHECK_INTERVAL, observerChecker.bind(null, el, cb)))

      el[CONTEXT_KEY].observer = observer

      observer.observe(el, { childList: true, subtree: true })

      observerChecker(el, cb)
    }

    container.addEventListener('scroll', onScroll)
  })
}

const update = (el, binding, vnode) => {
  if (!el[CONTEXT_KEY]) {
    const instance = binding.instance || vnode.context

    return instance.$nextTick()
  } else {
    const { containerEl, cb, observer } = el[CONTEXT_KEY]

    if (containerEl.clientHeight && observer) {
      observerChecker(el, cb)
    }
  }
}

const unbind = (el) => {
  const { container, onScroll } = el[CONTEXT_KEY]

  if (container) container.removeEventListener('scroll', onScroll)

  stopObserver(el)
}

const InfiniteScroll = {
  bind,
  update,
  unbind,
  beforeMount: bind,
  updated: update,
  unmounted: unbind
}

export default InfiniteScroll
