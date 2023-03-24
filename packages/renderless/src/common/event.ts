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
 * 触发事件，并返回是否在事件中执行了 preventDefault 方法，支持事件传递附加参数。
 *
 *     // 触发事件，返回 false 则退出
 *     if (!emitEvent(emit, 'before', 1)) {
 *       return
 *     }
 *
 *     // @before='before' 定义事件执行的函数
 *     function before(event, value) {
 *       // value: 1
 *       event.preventDefault() // 通知事件宿主停止执行
 *     }
 *
 * @param {Function} emit 触发事件的函数
 * @param {String} name 事件的名称
 * @returns {Boolean}
 */
export const emitEvent = (emit, name, ...args) => {
  let cancel = false

  if (typeof emit === 'function' && typeof name === 'string') {
    const event = document.createEvent('HTMLEvents')

    event.initEvent(name, false, true)
    event.preventDefault = () => {
      cancel = true
    }

    args.unshift(event)
    args.unshift(name)
    emit.apply(null, args)
  }

  return !cancel
}
