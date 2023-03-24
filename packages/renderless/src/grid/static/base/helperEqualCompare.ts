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

import { isDate, isRegExp } from '@opentiny/vue-renderless/common/type'
import isNumber from './isNumber'
import isString from './isString'
import isBoolean from './isBoolean'
import isUndefined from './isUndefined'
import keys from './keys'
import every from '../array/every'

let equalVal

const helperEqualCompare = ({ val1, val2, compare, func, key, obj1, obj2 }) => {
  if (val1 === val2) {
    return true
  }

  if (val1 && val2 && !isNumber(val1) && !isNumber(val2) && !isString(val1) && !isString(val2)) {
    if (isRegExp(val1)) {
      return compare(String(val1), String(val2), key, obj1, obj2)
    }

    if (isDate(val1) || isBoolean(val1)) {
      return compare(Number(val1), Number(val2), key, obj1, obj2)
    }

    return equalVal(val1, val2, func, key, compare)
  }

  return compare(val1, val2, key, obj1, obj2)
}

equalVal = (val1, val2, func, key, compare) => {
  let result, val1Keys, val2Keys
  let isObj1Arr = Array.isArray(val1)
  let isObj2Arr = Array.isArray(val2)

  if (isObj1Arr || isObj2Arr ? isObj1Arr && isObj2Arr : val1.constructor === val2.constructor) {
    val1Keys = keys(val1)
    val2Keys = keys(val2)

    if (func) {
      result = func(val1, val2, key)
    }

    if (val1Keys.length === val2Keys.length) {
      if (isUndefined(result)) {
        return every(
          val1Keys,
          (key, index) =>
            key === val2Keys[index] &&
            helperEqualCompare({
              val1: val1[key],
              val2: val2[val2Keys[index]],
              compare,
              func,
              key: isObj1Arr || isObj2Arr ? index : key,
              obj1: val1,
              obj2: val2
            })
        )
      }

      return !!result
    }

    return false
  }
}

export default helperEqualCompare
