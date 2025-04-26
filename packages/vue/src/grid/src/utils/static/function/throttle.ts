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

/**
 * 创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数
 *
 * @param {Function} callback 回调
 * @param {Number} wait 多少秒毫
 * @param {Object} options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
 * @return {Function}
 */
function throttle(callback, wait, options) {
  let args
  let context
  let ops = options || {}
  let flag = false
  let timeout = 0
  let optLeading = 'leading' in ops ? ops.leading : true
  let optTrailing = 'trailing' in ops ? ops.trailing : false
  let endFn

  const runFn = function () {
    flag = true
    callback.apply(context, args)
    timeout = setTimeout(endFn, wait)
  }

  endFn = function () {
    timeout = 0

    if (!flag && optTrailing === true) {
      runFn()
    }
  }

  const cancelFn = function () {
    let rest = timeout !== 0

    clearTimeout(timeout)
    flag = false
    timeout = 0

    return rest
  }

  const throttled = function () {
    args = arguments
    context = this
    flag = false

    if (timeout === 0) {
      if (optLeading === true) {
        runFn()
      } else if (optTrailing === true) {
        timeout = setTimeout(endFn, wait)
      }
    }
  }

  throttled.cancel = cancelFn

  return throttled
}

export default throttle
