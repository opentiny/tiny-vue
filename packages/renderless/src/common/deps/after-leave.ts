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

const AfterLave = 'after-leave'
const Speed = 300

export default (instance, callback, speed = Speed, once = false) => {
  if (!instance || !callback) {
    throw new Error('instance & callback is required')
  }

  let called = false

  const eventCallback = function () {
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

  setTimeout(eventCallback, speed + 100)
}
