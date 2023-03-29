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

import hasOwn from './hasOwnProp'
import staticHGKeyRE from '../static/staticHGKeyRE'
import helperGetHGSKeys from './helperGetHGSKeys'

const formatterArgs = (matchs, rest, isHas) => {
  let arrIndex = matchs[1]
  let objProp = matchs[2]

  if (arrIndex) {
    if (rest[arrIndex]) {
      if (hasOwn(rest[arrIndex], objProp)) {
        isHas = true
        rest = rest[arrIndex][objProp]
      }
    }
  } else {
    if (hasOwn(rest, objProp)) {
      isHas = true
      rest = rest[objProp]
    }
  }

  return { isHas, rest }
}

const has = (obj, property) => {
  if (!obj) {
    return
  }

  const compare = (property) => {
    let prop, matchs, rest, isHas
    let props = helperGetHGSKeys(property)
    let index = 0
    let len = props.length
    let flag = false

    for (rest = obj; index < len; index++) {
      isHas = false
      prop = props[index]
      matchs = prop ? prop.match(staticHGKeyRE) : ''

      if (matchs) {
        const args = formatterArgs(matchs, rest, isHas)

        isHas = args.isHas
        rest = args.rest
      } else {
        hasOwn(rest, prop) && ((isHas = true), (rest = rest[prop]))
      }

      if (isHas) {
        index === len - 1 && (flag = true)
      } else {
        break
      }
    }

    return flag
  }

  if (hasOwn(obj, property)) {
    return true
  } else {
    return compare(property)
  }
}

export default has
