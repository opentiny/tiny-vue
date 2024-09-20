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

import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'
import { getStyle, addClass } from '@opentiny/vue-renderless/common/deps/dom'
import { createComponent, hooks, appProperties } from '@opentiny/vue-common'
import Loading from './index'

export const defaults = {
  text: null,
  body: false,
  lock: false,
  customClass: '',
  fullscreen: true,
  iconSize: ''
}

let fullscreenLoading = null

export const constants = {
  TEXT_ATTR: 'tiny-loading__text',
  IS_FULLSCREEN_CLS: 'is-fullscreen',
  TEXT_SPINNER: 'tiny-loading__spinner',
  TEXT_BACKGROUND: 'tiny-loading__background',
  TEXT_CUSTOM_CLS: 'tiny-loading__custom-class',
  PARENT_HIDDEN_CLS: 'tiny-loading__parent-hidden',
  PARENT_RELATIVE_CLS: 'tiny-loading__parent-relative',
  LOAD_ICON_TEXT: 'ui.load.dot'
}
const addStyle = (options, parent, instance) => {
  let maskStyle = {}

  if (options.fullscreen) {
    instance.originalPosition = getStyle(document.body, 'position')
    instance.originalOverflow = getStyle(document.body, 'overflow')
    maskStyle.zIndex = PopupManager.nextZIndex()
  } else if (options.body) {
    const clientRect = options.target.getBoundingClientRect()

    instance.originalPosition = getStyle(document.body, 'position')

    const direction = ['top', 'left']

    direction.forEach((property) => {
      let scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'

      maskStyle[property] = clientRect[property] + document.body[scroll] + document.documentElement[scroll] + 'px'
    })

    const size = ['height', 'width']

    size.forEach((property) => {
      maskStyle[property] = clientRect[property] + 'px'
    })
  } else {
    instance.originalPosition = getStyle(parent, 'position')
  }

  Object.keys(maskStyle).forEach((property) => {
    instance.$el.style[property] = maskStyle[property]
  })
}

export default (configs = {}) => {
  configs = { ...defaults, ...configs }

  if (typeof configs.target === 'string') {
    configs.target = document.querySelector(configs.target)
  }

  configs.target = configs.target || document.body

  if (configs.target !== document.body) {
    configs.fullscreen = false
  } else {
    configs.body = true
  }

  if (configs.fullscreen && fullscreenLoading && !fullscreenLoading.state.closed) {
    return fullscreenLoading
  }

  let parent = configs.body ? document.body : configs.target

  const loadingEl = parent.querySelector(':scope > [data-tag="tiny-loading"]')

  loadingEl && parent.removeChild(loadingEl)

  let instance = createComponent({
    component: Loading,
    propsData: {
      _constants: constants,
      size: configs.size,
      loadingImg: configs.loadingImg,
      tiny_mode: configs.tiny_mode || appProperties().tiny_mode?.value
    },
    el: document.createElement('div')
  })

  for (const key in configs) {
    if (Object.prototype.hasOwnProperty.call(configs, key)) {
      instance.state[key] = configs[key]
    }
  }

  addStyle(configs, parent, instance)

  if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
    addClass(parent, constants.PARENT_RELATIVE_CLS)
  }

  if (configs.fullscreen && configs.lock) {
    addClass(parent, constants.PARENT_HIDDEN_CLS)
  }

  parent.appendChild(instance.$el)

  hooks.nextTick(() => {
    instance.state.visible = true
  })

  if (configs.fullscreen) {
    fullscreenLoading = instance
  }

  return instance
}
