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

import staticStrUndefined from '../static/staticStrUndefined'
import staticDocument from '../static/staticDocument'
import staticWindow from '../static/staticWindow'
import assign from '../object/assign'
import arrayEach from '../array/arrayEach'

function isBrowseStorage(storage) {
  try {
    let testKey = '__tiny_t'

    storage.setItem(testKey, 1)
    storage.removeItem(testKey)

    return true
  } catch (e) {
    return false
  }
}

function isBrowseType(type) {
  return navigator.userAgent.includes(type)
}

/**
 * 获取浏览器内核
 * @return Object
 */
function browse() {
  let $body, isChrome, isEdge
  let isMobile = false
  let result = {
    isNode: false,
    isMobile,
    isPC: false,
    isDoc: !!staticDocument
  }

  if (!staticWindow && typeof process !== staticStrUndefined) {
    result.isNode = true
  } else {
    isEdge = isBrowseType('Edge')
    isChrome = isBrowseType('Chrome')
    isMobile = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent)

    if (result.isDoc) {
      $body = staticDocument.body || staticDocument.documentElement
      arrayEach(['webkit', 'khtml', 'moz', 'ms', 'o'], (core) => {
        result['-' + core] = !!$body[core + 'MatchesSelector']
      })
    }

    assign(result, {
      edge: isEdge,
      firefox: isBrowseType('Firefox'),
      msie: !isEdge && result['-ms'],
      safari: !isChrome && !isEdge && isBrowseType('Safari'),
      isMobile,
      isPC: !isMobile,
      isLocalStorage: isBrowseStorage(staticWindow.localStorage),
      isSessionStorage: isBrowseStorage(staticWindow.sessionStorage)
    })
  }

  return result
}

export default browse
