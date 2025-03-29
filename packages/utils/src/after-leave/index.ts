/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-spread */
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
 * 事件名称常量
 */
const AfterLave = 'after-leave'

/**
 * 默认过渡速度（毫秒）
 */
const Speed = 300

/**
 * 在实例上注册"after-leave"事件并设置超时回调
 * @param instance - 需要注册事件的实例对象，必须支持$on或$once方法
 * @param callback - 事件触发或超时后执行的回调函数
 * @param speed - 过渡动画的速度，单位为毫秒
 * @param once - 是否只监听一次事件
 *
 * 该函数用于处理元素过渡结束后的回调，并添加超时保障机制
 * 确保回调函数只会被执行一次
 */
export function afterLeave(
  instance: { $once: (event: string, callback: Function) => void; $on: (event: string, callback: Function) => void },
  callback: Function,
  speed: number = Speed,
  once = false
): void {
  if (!instance || !callback) {
    throw new Error('instance & callback is required')
  }

  let called = false

  const eventCallback = function (): void {
    if (called) {
      return
    }

    called = true

    if (typeof callback === 'function') {
      callback.apply(null, arguments)
    }
  }

  if (once) {
    instance.$once(AfterLave, eventCallback)
  } else {
    instance.$on(AfterLave, eventCallback)
  }

  // 设置超时保障，确保即使过渡事件没触发，回调也会在指定时间后执行
  setTimeout(eventCallback, speed + 100)
}
