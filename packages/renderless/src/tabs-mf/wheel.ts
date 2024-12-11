export const getAddWheelListener = (window, document) => {
  const { addApiName, removeApiName, prefix } = detectEventModel(window)
  const support = detectAvailableWheelEvent(document)

  const params = { addApiName, removeApiName, prefix, support, window }
  const { add, remove } = getWheelListener(params)

  return {
    addWheelListener: (elem, callback, useCapture) => {
      support === 'DOMMouseScroll'
        ? add(elem, 'MozMousePixelScroll', callback, useCapture)
        : add(elem, support, callback, useCapture)
    },
    removeWheelListener: (elem, callback, useCapture) => {
      support === 'DOMMouseScroll'
        ? remove(elem, 'MozMousePixelScroll', callback, useCapture)
        : remove(elem, support, callback, useCapture)
    }
  }
}

const detectEventModel = (window) => {
  const flag = window.addEventListener

  const addApiName = flag ? 'addEventListener' : 'attachEvent'
  const removeApiName = flag ? 'removeEventListener' : 'detachEvent'
  const prefix = flag ? '' : 'on'

  return { addApiName, removeApiName, prefix }
}

const detectAvailableWheelEvent = (document) => {
  let support

  if ('onwheel' in document.createElement('div')) {
    support = 'wheel'
  } else if (document.onmousewheel !== undefined) {
    support = 'mousewheel'
  } else {
    support = 'DOMMouseScroll'
  }

  return support
}

const elemCbMap = new WeakMap()

const getWheelListener = ({ addApiName, removeApiName, prefix, support, window }) => ({
  add: (elem, eventName, callback, useCapture) => {
    let cb = callback

    if (support !== 'wheel') {
      cb = (oEvent) => {
        !oEvent && (oEvent = window.event)

        const event = {
          originalEvent: oEvent,
          target: oEvent.target || oEvent.srcElement,
          type: 'wheel',
          deltaMode: oEvent.type === 'MozMousePixelScroll' ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: () => {
            oEvent.preventDefault ? oEvent.preventDefault() : (oEvent.returnValue = false)
          }
        }

        if (support === 'mousewheel') {
          event.deltaY = (-1 / 40) * oEvent.wheelDelta
          oEvent.wheelDeltaX && (event.deltaX = (-1 / 40) * oEvent.wheelDeltaX)
        } else {
          event.deltaY = oEvent.detail
        }

        return callback(event)
      }
    }

    elemCbMap.set(elem, cb)

    elem[addApiName](prefix + eventName, cb, useCapture || false)
  },
  remove: (elem, eventName, callback, useCapture) => {
    const cb = elemCbMap.get(elem)

    elem[removeApiName](prefix + eventName, cb, useCapture || false)
    elemCbMap.delete(elem)
  }
})
