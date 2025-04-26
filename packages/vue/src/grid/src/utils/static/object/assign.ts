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

import arrayEach from '../array/arrayEach'
import keys from '../base/keys'
import clone from '../base/clone'

let objectAssignFns = Object.assign

const handleAssign = (destination, args, isClone) => {
  let len = args.length

  for (let source, index = 1; index < len; index++) {
    source = args[index]

    let eachCallback

    if (isClone) {
      eachCallback = (key) => {
        destination[key] = clone(source[key], isClone)
      }
    } else {
      eachCallback = (key) => {
        destination[key] = source[key]
      }
    }

    arrayEach(keys(args[index]), eachCallback)
  }

  return destination
}

const assign = function (target) {
  if (target) {
    let args = arguments

    if (target === true) {
      if (args.length > 1) {
        target = Array.isArray(target[1]) ? [] : {}
        return handleAssign(target, args, true)
      }
    } else {
      return objectAssignFns ? objectAssignFns.apply(Object, args) : handleAssign(target, args)
    }
  }

  return target
}

export default assign
