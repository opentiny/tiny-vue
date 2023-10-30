let emulated = false
let initiated = false
let eventTarget = null
let mouseTarget = null

const matches = Element.prototype.matches || Element.prototype.webkitMatchesSelector

const closest = (el, s) => {
  do {
    if (matches.call(el, s)) return el
    el = el.parentElement || el.parentNode
  } while (el !== null && el.nodeType === 1)

  return null
}

class Touch {
  constructor(target, identifier, pos, deltaX, deltaY) {
    this.target = target
    this.identifier = identifier

    deltaX = deltaX || 0
    deltaY = deltaY || 0

    this.pageX = pos.pageX + deltaX
    this.pageY = pos.pageY + deltaY
    this.screenX = pos.screenX + deltaX
    this.screenY = pos.screenY + deltaY
    this.clientX = pos.clientX + deltaX
    this.clientY = pos.clientY + deltaY
  }
}

const TouchList = () => {
  const touchList = []

  touchList.item = (index) => touchList[index] || null
  touchList.identifiedTouch = (id) => touchList[id + 1] || null

  return touchList
}

const createTouchList = (mouseEv) => {
  const touchList = TouchList()
  touchList.push(new Touch(eventTarget, 1, mouseEv, 0, 0))
  return touchList
}

const getActiveTouches = (mouseEv) => {
  if (mouseEv.type === 'mouseup') {
    return TouchList()
  }

  return createTouchList(mouseEv)
}

const triggerTouch = (eventName, mouseEv) => {
  const touchEvent = document.createEvent('Event')

  touchEvent.initEvent(eventName, true, true)

  touchEvent.altKey = mouseEv.altKey
  touchEvent.metaKey = mouseEv.metaKey
  touchEvent.ctrlKey = mouseEv.ctrlKey
  touchEvent.shiftKey = mouseEv.shiftKey

  touchEvent.changedTouches = createTouchList(mouseEv)
  touchEvent.targetTouches = getActiveTouches(mouseEv)
  touchEvent.touches = getActiveTouches(mouseEv)
  // 模拟事件标记
  touchEvent.isTinySimulate = true

  eventTarget.dispatchEvent(touchEvent)
}

const onMouse = (touchType) => (ev) => {
  if ('mousedown' === ev.type) {
    initiated = true
  }

  if ('mouseup' === ev.type) {
    initiated = false
  }

  if ('mousemove' === ev.type && !initiated) {
    return
  }

  if ('mousedown' === ev.type || !mouseTarget) {
    mouseTarget = ev.target
  }

  if ((eventTarget = closest(mouseTarget, '[data-tiny-touch-simulate-container]')) && eventTarget.dispatchEvent) {
    triggerTouch(touchType, ev)
  }

  if ('mouseup' === ev.type) {
    eventTarget = null
    mouseTarget = null
  }
}

const touchEmulator = () => {
  window.addEventListener('mousedown', onMouse('touchstart'), true)
  window.addEventListener('mousemove', onMouse('touchmove'), true)
  window.addEventListener('mouseup', onMouse('touchend'), true)
}

const emulate = () => {
  const supportTouch = 'ontouchstart' in window

  if (!emulated && !supportTouch) {
    emulated = true
    touchEmulator()
  }
}

export default emulate
