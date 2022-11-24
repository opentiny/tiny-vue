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
import NotifyConstructor from './src/index.vue'
import '@opentiny/vue-theme/notify/index.css'
import { iconSuccessful, iconError, iconInfoSolid, iconWarning } from '@opentiny/vue-icon'

let seed = 1
let instances = []
const IconMap = {
  warning: iconWarning(),
  error: iconError(),
  info: iconInfoSolid(),
  success: iconSuccessful()
}

const positionList = ['top-right', 'bottom-right']

const Notify = function ({ type, ...options } = {}) {
  options = options || {}
  options.type = type = !~Object.keys(IconMap).indexOf(type) ? 'info' : type
  options.position = !~positionList.indexOf(options.position) ? 'bottom-right' : options.position
  !options.statusIcon && type && (options.statusIcon = IconMap[type])

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

  verticalOffset += 16
  instances.push(instance)

  instance.dom = instance.$el
  instance.dom.style.zIndex = instance.getZindex()
  instance.state.verticalOffset = verticalOffset
  instance.state.visible = true

  return instance
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
  instance.$el.parentNode.removeChild(instance.$el)
  instances.splice(index, 1)

  if (len <= 1) {
    return
  }

  let removedPosition = instance.position
  let removedOffsetHeight = instance.dom.offsetHeight
  let copys = instances.slice(index)

  copys.forEach((copy) => {
    if (copy.position === removedPosition) {
      let height = parseInt(copy.dom.style[instance.verticalProperty], 10) - removedOffsetHeight - 16

      copy.dom.style[instance.verticalProperty] = height + 'px'
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
