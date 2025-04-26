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

import helperDeleteProperty from './helperDeleteProperty'
import isFunction from './isFunction'
import each from './each'
import arrayEach from '../array/arrayEach'
import lastEach from './lastEach'
import clear from './clear'
import eqNull from './eqNull'

const pluckProperty = (name) => (obj, key) => key === name

const remove = (obj, iterate, context) => {
  if (obj) {
    if (!eqNull(iterate)) {
      let removeIndexs = []
      let rest = []

      if (!isFunction(iterate)) {
        iterate = pluckProperty(iterate)
      }

      each(obj, (item, index, rest) => {
        if (iterate.call(context, item, index, rest)) {
          removeIndexs.push(index)
        }
      })

      if (Array.isArray(obj)) {
        lastEach(removeIndexs, (item) => {
          rest.push(obj[item])
          obj.splice(item, 1)
        })
      } else {
        rest = {}
        arrayEach(removeIndexs, (key) => {
          rest[key] = obj[key]
          helperDeleteProperty(obj, key)
        })
      }

      return rest
    }

    return clear(obj)
  }

  return obj
}

export default remove
