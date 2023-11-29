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

import { on, once } from './dom'

export default (el, binding) => {
  // fix issue#919
  const LONG_PRESS_INTERVAL = 200

  let interval = null
  let startTime

  const handler = () => {
    typeof binding.value === 'function' && binding.value.apply()
  }

  const clear = () => {
    if (Date.now() - startTime < LONG_PRESS_INTERVAL) {
      handler()
    }

    clearInterval(interval)
    interval = null
  }

  on(el, 'mousedown', (e) => {
    if (e.button !== 0) {
      return
    }

    startTime = Date.now()
    once(document, 'mouseup', clear)
    clearInterval(interval)
    interval = setInterval(handler, LONG_PRESS_INTERVAL)
  })
}
