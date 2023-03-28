/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import browser from '@opentiny/vue-renderless/common/browser'
import { remove } from '../static'

let resizeTimeout
let defaultInterval = 250
const eventStore = []
let eventHandle

const eventListener = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(eventHandle, defaultInterval)
}

eventHandle = () => {
  if (eventStore.length) {
    eventStore.forEach((item) => {
      item.tarList.forEach((el) => {
        const { target, width, heighe } = el
        const clientWidth = target.clientWidth
        const clientHeight = target.clientHeight
        const rWidth = clientWidth && width !== clientWidth
        const rHeight = clientHeight && heighe !== clientHeight

        if (rWidth || rHeight) {
          el.width = clientWidth
          el.heighe = clientHeight
          requestAnimationFrame(item.callback)
        }
      })
    })

    eventListener()
  }
}

class ResizeObserverPolyfill {
  constructor(callback, resizeInterval) {
    this.tarList = []
    this.callback = callback
    defaultInterval = resizeInterval
  }

  observe(targetObj) {
    if (targetObj) {
      if (!this.tarList.includes(targetObj)) {
        this.tarList.push({
          target: targetObj,
          width: targetObj.clientWidth,
          heighe: targetObj.clientHeight
        })
      }

      if (!eventStore.length) {
        eventListener()
      }

      if (!eventStore.includes(this)) {
        eventStore.push(this)
      }
    }
  }

  unobserve(target) {
    remove(eventStore, (item) => ~item.tarList.indexOf(target))
  }

  disconnect() {
    remove(eventStore, (item) => item === this)
  }
}

const Resize = browser.isDoc ? window.ResizeObserver || ResizeObserverPolyfill : ResizeObserverPolyfill

export default Resize
