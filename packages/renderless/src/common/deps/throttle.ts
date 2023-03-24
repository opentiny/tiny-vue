/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks,
 *                                    values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true,
 *                                    callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified,
 *                                    callback will be executed one final time
 *                                    after the last throttled-function call.
 *                                    (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds.
 *                                    The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin),
 *                                    schedule `clear` to execute after `delay` ms.
 *                                    If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */

export default function (delay, noTrailing, callback, debounceMode) {
  let timeoutID
  let lastExec = 0

  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback
    callback = noTrailing
    noTrailing = undefined
  }

  function wrapper() {
    const me = this
    const elapsed = new Date().valueOf() - lastExec
    const args = arguments

    function exec() {
      lastExec = new Date().valueOf()
      callback.apply(me, args)
    }

    function clear() {
      timeoutID = undefined
    }

    if (debounceMode && !timeoutID) {
      exec()
    }

    if (timeoutID) {
      clearTimeout(timeoutID)
    }

    const isUndMode = debounceMode === undefined

    if (isUndMode && elapsed > delay) {
      exec()
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, isUndMode ? delay - elapsed : delay)
    }
  }

  return wrapper
}
