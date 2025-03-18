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
 * @param {number} delay - 延迟时间（毫秒）
 * @param {boolean | Function} atBegin - 如果为布尔值，指定是否在延迟开始前执行；如果为函数，则作为回调函数
 * @param {Function} [callback] - 需要防抖的回调函数
 * @returns {DebounceFunction} 返回一个经过防抖处理的函数
 */
export function debounce(delay: number, atBegin: boolean | Function, callback?: Function): DebounceFunction {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false)
}
