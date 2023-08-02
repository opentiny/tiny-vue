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
import { createComponent, emitter } from '@opentiny/vue-common'
import TopBoxConstructor from './src/index.js'
import '@opentiny/vue-theme/top-box/index.less'
import { version } from './package.json'

let instances = []
let seed = 1

const handleTopBoxMounted = ({ instance, options }) => {
  instance.$el.style.zIndex = instance.getZindex()

  let { state } = instance

  for (let key in options) {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = options[key]
    }
  }

  let verticalOffset = options.offset || 20

  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16
  })

  state.verticalOffset = verticalOffset
  state.visible = true

  if (state.buttons && state.buttons.length) {
    state.buttons.map((button, key) => {
      if (key === 0) {
        !button.type && (button.type = 'primary')
        !button.onClick &&
          (button.onClick = () => {
            instance.close()
          })
      } else {
        !button.onClick &&
          (button.onClick = () => {
            // do nothing
          })
      }

      return button
    })
  }

  instance.startTimer()
}

const TopBox = function (options) {
  const _emitter = emitter()
  options = options || {}

  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let id = 'message_' + seed++
  let userOnClose = options.onClose

  options.onClose = function () {
    TopBox.close(id, userOnClose)
  }

  options.emitter = _emitter

  let instance = createComponent({
    el: document.createElement('div'),
    propsData: options,
    component: TopBoxConstructor
  })

  instance.id = id

  document.body.appendChild(instance.$el)
  instances.push(instance)

  _emitter.on('TopBoxMounted', () => {
    handleTopBoxMounted({ instance, options })
  })

  return instance
}

const topBox = TopBox

const types = ['success', 'warning', 'info', 'error', 'help']

types.forEach((type) => {
  TopBox[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }

    options.type = type

    return topBox(options)
  }
})

const findRemove = ({ id, len, userOnClose }) => {
  let index = -1
  let removedHeight = 0
  let instance

  for (let i = 0; i < len; i++) {
    let tmp = instances[i]
    if (tmp.id === id) {
      index = i
      removedHeight = tmp.$el.offsetHeight
      instance = tmp
      break
    }
  }

  if (instance) {
    typeof userOnClose === 'function' && userOnClose(instance)
    instances.splice(index, 1)
  }

  return { index, removedHeight }
}

const adjustTopOther = ({ index, len, removedHeight }) => {
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].$el
    dom.style.top = parseInt(dom.style.top, 10) - removedHeight - 16 + 'px'
  }
}

TopBox.close = function (id, userOnClose) {
  let len = instances.length
  let { index, removedHeight } = findRemove({ id, len, userOnClose })

  if (len <= 1 || index === -1 || index > instances.length - 1) return
  // removedHeight = instances[index].$el.offsetHeight
  adjustTopOther({ index, len, removedHeight })
}

TopBox.closeAll = function () {
  let copys = instances.slice(0)

  copys = copys.reverse()
  copys.forEach((instance) => {
    instance.close()
  })
}

TopBox.version = version

export default TopBox
