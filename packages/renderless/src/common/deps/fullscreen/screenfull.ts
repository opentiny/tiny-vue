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

import { on, off } from '../dom'

const fullscreenApi = ['fullscreenElement', 'fullscreenEnabled', 'requestFullscreen', 'exitFullscreen', 'fullscreenchange', 'fullscreenerror']

const fullscreenApiMoz = [
  'mozFullScreenElement',
  'mozFullScreenEnabled',
  'mozRequestFullScreen',
  'mozCancelFullScreen',
  'mozfullscreenchange',
  'mozfullscreenerror'
]

const fullscreenApiWebkit = [
  'webkitFullscreenElement',
  'webkitFullscreenEnabled',
  'webkitRequestFullscreen',
  'webkitExitFullscreen',
  'webkitfullscreenchange',
  'webkitfullscreenerror'
]

const fullscreenApiMs = ['msFullscreenElement', 'msFullscreenEnabled', 'msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'MSFullscreenError']

const fullscreenApiMap = [fullscreenApi, fullscreenApiWebkit, fullscreenApiMoz, fullscreenApiMs]

const document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {}

let fullscreenEvents = null

const getFullScreenEvents = () => {
  for (let i = 0, len = fullscreenApiMap.length; i < len; i++) {
    let eventName = fullscreenApiMap[i]

    if (eventName && eventName[1] in document) {
      fullscreenEvents = {}

      for (i = 0; i < eventName.length; i++) {
        fullscreenEvents[fullscreenApiMap[0][i]] = eventName[i]
      }

      return
    }
  }
}

getFullScreenEvents()

const eventNameMap = {
  change: fullscreenEvents && fullscreenEvents.fullscreenchange,
  error: fullscreenEvents && fullscreenEvents.fullscreenerror
}

const screenfull = {
  request(element, options) {
    return new Promise((resolve, reject) => {
      const onFullscreenEntered = () => {
        this.off('change', onFullscreenEntered)
        resolve()
      }

      this.on('change', onFullscreenEntered)

      element = element || document.documentElement

      if (element[fullscreenEvents && fullscreenEvents.requestFullscreen]) {
        const promiseReturn = element[fullscreenEvents && fullscreenEvents.requestFullscreen](options)

        if (promiseReturn instanceof Promise) {
          promiseReturn.then(onFullscreenEntered).catch(reject)
        }
      }
    })
  },
  exit() {
    return new Promise((resolve, reject) => {
      if (!this.isFullscreen) {
        resolve()
        return
      }

      const onFullscreenExit = () => {
        this.off('change', onFullscreenExit)
        resolve()
      }

      this.on('change', onFullscreenExit)

      if (document[fullscreenEvents && fullscreenEvents.exitFullscreen]) {
        const promiseReturn = document[fullscreenEvents && fullscreenEvents.exitFullscreen]()

        if (promiseReturn instanceof Promise) {
          promiseReturn.then(onFullscreenExit).catch(reject)
        }
      }
    })
  },
  toggle(element, options) {
    return this.isFullscreen ? this.exit() : this.request(element, options)
  },
  onchange(callback) {
    this.on('change', callback)
  },
  onerror(callback) {
    this.on('error', callback)
  },
  on(event, callback) {
    const eventName = eventNameMap[event]

    if (eventName) {
      on(document, eventName, callback)
    }
  },
  off(event, callback) {
    const eventName = eventNameMap[event]

    if (eventName) {
      off(document, eventName, callback)
    }
  },
  raw: fullscreenEvents
}

Object.defineProperties(screenfull, {
  isFullscreen: {
    get() {
      return !!document[fullscreenEvents && fullscreenEvents.fullscreenElement]
    }
  },
  element: {
    enumerable: true,
    get() {
      return document[fullscreenEvents && fullscreenEvents.fullscreenElement]
    }
  },
  isEnabled: {
    enumerable: true,
    get() {
      return !!document[fullscreenEvents && fullscreenEvents.fullscreenEnabled]
    }
  }
})

export default screenfull
