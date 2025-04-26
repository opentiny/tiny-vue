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

import { toString, each, remove } from '../static'

const toType = (type) => toString(type).replace('_', '').toLowerCase()
const eventTypes = [
  'created',
  'mounted',
  'activated',
  'beforeDestroy',
  'destroyed',
  'event.clearActived',
  'event.clearFilter',
  'event.showMenu',
  'event.keydown'
].map(toType)
const _storeMap = {}

const Interceptor = {
  mixin(map) {
    each(map, (callback, type) => Interceptor.add(type, callback))
    return Interceptor
  },
  get(type) {
    return _storeMap[toType(type)] || []
  },
  add(type, callback) {
    const selfType = toType(type)

    if (callback && ~eventTypes.indexOf(selfType)) {
      _storeMap[selfType] = _storeMap[selfType] ? _storeMap[selfType] : []

      _storeMap[selfType].push(callback)
    }

    return Interceptor
  },
  delete(type, callback) {
    const eList = _storeMap[toType(type)]

    if (eList) {
      remove(eList, (cb) => cb === callback)
    }

    return Interceptor
  }
}

export default Interceptor
