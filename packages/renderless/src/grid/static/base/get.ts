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

import eqNull from './eqNull'
import hasOwnProp from './hasOwnProp'
import isUndefined from './isUndefined'
import helperGetHGSKeys from './helperGetHGSKeys'
import staticHGKeyRE from '../static/staticHGKeyRE'

const valGet = (obj, key) => {
  const matchs = key ? key.match(staticHGKeyRE) : ''

  return matchs ? (matchs[1] ? (obj[matchs[1]] ? obj[matchs[1]][matchs[2]] : undefined) : obj[matchs[2]]) : obj[key]
}

const pathGet = (obj, property) => {
  if (!obj) {
    return
  }

  let rest
  let index = 0

  const getRest = (len, props) => {
    for (rest = obj; index < len; index++) {
      rest = valGet(rest, props[index])

      if (eqNull(rest)) {
        return
      }
    }
  }

  if (obj[property] || hasOwnProp(obj, property)) {
    return obj[property]
  } else {
    const props = helperGetHGSKeys(property)
    const len = props.length

    if (len) {
      getRest(len, props)
    }

    return rest
  }
}

const get = (obj, property, defaultValue) => {
  if (eqNull(obj)) {
    return defaultValue
  }

  const result = pathGet(obj, property)

  return isUndefined(result) ? defaultValue : result
}

export default get
