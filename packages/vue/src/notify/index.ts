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

import { createComponent } from '@opentiny/vue-common'
import NotifyConstructor from './src/pc.vue'
import '@opentiny/vue-theme/notify/index.less'
import { IconSuccess, iconError, IconPrompt, iconWarningTriangle } from '@opentiny/vue-icon'

let seed = 1
let instances = []

const IconMap = {
  warning: iconWarningTriangle(),
  error: iconError(),
  info: IconPrompt(),
  success: IconSuccess()
}

const durationMap = {
  info: 5000,
  success: 5000,
  warning: 10000,
  error: 10000
}

const positionList = ['top-right', 'bottom-right']

const debounce = (fn, debounceDelay) => {
  let timer = null

  return async function () {
    if (timer) {
      clearTimeout(timer)
    }

    let instance = null

    await new Promise((resolve) => {
      timer = setTimeout(() => {
        instance = fn.apply(this, arguments)
        timer = null

        resolve()
      }, debounceDelay)
    })

    return instance
  }
}

const notify = (options) => {
  if (!~Object.keys(IconMap).indexOf(options.type)) {
    options.type = 'info'
  }

  options.duration = options.duration ? options.duration : durationMap[options.type]
  options.position = !~positionList.indexOf(options.position) ? 'bottom-right' : options.position
  !options.statusIcon && options.type && (options.statusIcon = IconMap[options.type])

  const id = 'notify_' + seed++
  const userOnClose = options.onClose
  const position = options.position

  options.onClose = function () {
    Notify.close(id, userOnClose)
  }

  const instance = createComponent({
    el: document.createElement('div'),
    propsData: options,
    component: NotifyConstructor
  })
  instance.id = id
  document.body.appendChild(instance.$el)

  let verticalOffset = options.offset || 0

  instances
    .filter((item) => item.state.position === position)
    .forEach((item) => {
      verticalOffset += item.$el.offsetHeight + 16
    })

  verticalOffset += options.verticalOffset ? Number(options.verticalOffset) : 16
  instances.push(instance)

  instance.dom = instance.$el
  instance.dom.style.zIndex = instance.getZindex()
  instance.state.verticalOffset = verticalOffset
  instance.state.visible = true

  if (verticalOffset + instance.$el.offsetHeight > window.innerHeight) {
    instances[0] && instances[0].close(instances[0].id)
  }

  return instance
}

const Notify = (options) => {
  let { debounceDelay } = options

  if (debounceDelay) {
    return debounce(() => notify(options), debounceDelay)
  } else {
    return notify(options)
  }
}
Notify.close = function (id, userOnClose) {
  let index = -1
  let len = instances.length
  let instance

  for (let i = 0; i < len; i++) {
    let tmp = instances[i]
    if (tmp.id === id) {
      index = i
      instance = tmp
      break
    }
  }

  if (!instance) {
    return
  }

  typeof userOnClose === 'function' && userOnClose(instance)
  let lastHeight = instance.$el.offsetHeight
  instance.$el.parentNode.removeChild(instance.$el)
  instances.splice(index, 1)

  if (len <= 1) {
    return
  }

  let removedPosition = instance.position
  let copys = instances.slice(index)
  let verticalOffset = 16

  instances
    .filter((item) => item.state.position === removedPosition)
    .forEach((item) => {
      item.state.verticalOffset = verticalOffset
      verticalOffset += item.$el.offsetHeight + 16
    })

  copys.forEach((copy) => {
    if (copy.position === removedPosition) {
      let height = parseInt(copy.dom.style[instance.state.verticalProperty], 10) - lastHeight - 16
      copy.dom.style[instance.state.verticalProperty] = height + 'px'
    }
  })
}

Notify.closeAll = function () {
  let copys = instances.slice(0)

  copys = copys.reverse()
  copys.forEach((instance) => {
    instance.close()
  })
}

export default Notify
