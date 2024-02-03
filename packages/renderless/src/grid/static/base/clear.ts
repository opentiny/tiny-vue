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

import isNull from './isNull'
import isObject from './isObject'
import assign from '../object/assign'
import isPlainObject from './isPlainObject'
import objectEach from '../object/objectEach'
import helperDeleteProperty from './helperDeleteProperty'

const clear = function (obj, defs, assigns) {
  if (!obj) {
    return obj
  }
  let isDefs = arguments.length > 1 && (isNull(defs) || !isObject(defs))
  let extds = isDefs ? assigns : defs

  if (isPlainObject(obj)) {
    let eachCallback

    if (isDefs) {
      eachCallback = (val, key) => {
        obj[key] = defs
      }
    } else {
      eachCallback = (val, key) => {
        helperDeleteProperty(obj, key)
      }
    }

    objectEach(obj, eachCallback)

    if (extds) {
      assign(obj, extds)
    }
  } else if (Array.isArray(obj)) {
    if (isDefs) {
      let len = obj.length

      while (len > 0) {
        len--
        obj[len] = defs
      }
    } else {
      obj.length = 0
    }

    if (extds) {
      obj.push.apply(obj, extds)
    }
  }

  return obj
}

export default clear
