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

import { throttle } from '../throttle'

/**
 * 定义带有 _cancel 方法的防抖函数类型
 */
export interface DebounceFunction extends Function {
  _cancel?: () => void
}

/**
 * 防抖函数 - 将多次触发的函数执行延迟到最后一次触发后的指定时间才执行
 *
 * 仅允许设置在开始，或者在结尾执行一次的防抖行为，若需要首尾均执行一次，请使用 `debounceBoth` 函数
 *
 * @param {number} delay - 延迟时间（毫秒）
 * @param {boolean | Function} atBegin - 如果为布尔值，指定是否在延迟开始前执行；如果为函数，则作为回调函数
 * @param {Function} [callback] - 需要防抖的回调函数
 * @returns {DebounceFunction} 返回一个经过防抖处理的函数
 */
export function debounce(delay: number, atBegin: boolean | Function, callback?: Function): DebounceFunction {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false)
}

/** 防抖函数 - 允许在延迟时间段的首尾均执行一次 */
export function debounceBoth(delay: number, callback: Function) {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debounced = function (this: any, ...args: any[]) {
    const context = this

    const later = function () {
      timeout = null
      callback.apply(context, args)
    }

    const callNow = !timeout
    clearTimeout(timeout!)
    timeout = setTimeout(later, delay)

    if (callNow) {
      callback.apply(context, args)
    }
  } as DebounceFunction

  debounced._cancel = function () {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return debounced
}
