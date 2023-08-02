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

import hasOwnProp from '../base/hasOwnProp'

const handle = ({ useArray, obj, iterate, context, matchValue, restIndex }) => {
  let value
  let flag = 0

  if (useArray && Array.isArray(obj)) {
    for (let index = 0, len = obj.length; index < len; index++) {
      if (!!iterate.call(context, obj[index], index, obj) === matchValue) {
        value = [true, false, index, obj[index]][restIndex]
        flag = 1
        break
      }
    }
  } else {
    for (let key of Object.keys(obj)) {
      if (hasOwnProp(obj, key)) {
        if (!!iterate.call(context, obj[key], key, obj) === matchValue) {
          value = [true, false, key, obj[key]][restIndex]
          flag = 2
          break
        }
      }
    }
  }

  return { value, flag }
}

const helperCreateIterateHandle = (prop, useArray, restIndex, matchValue, defaultValue) => (obj, iterate, context) => {
  if (!obj || !iterate) {
    return defaultValue
  }
  if (prop && obj[prop]) {
    return obj[prop](iterate, context)
  } else {
    const ret = handle({
      useArray,
      obj,
      iterate,
      context,
      matchValue,
      restIndex
    })

    if (ret.flag) {
      return ret.value
    }
  }

  return defaultValue
}

export default helperCreateIterateHandle
