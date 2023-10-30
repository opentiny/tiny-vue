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

import { createComponent, setupComponent } from '@opentiny/vue-common'
import { MsgQueue } from '@opentiny/vue-renderless/modal'
import TINYModal from './src/index'
import Popconfirm from '@opentiny/vue-popconfirm'
import { version } from './package.json'

TINYModal.version = version

TINYModal.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

export function Modal(options) {
  const modalPromise = new Promise((resolve) => {
    if (options && options.id && MsgQueue.some((comp) => comp.id === options.id)) {
      resolve('exist')
    } else {
      let events = options.events || {}
      let $modal

      options.events = {
        ...events,
        hide(params) {
          events.hide && events.hide.call(this, params)
          if ($modal.beforeUnmouted) {
            $modal.beforeUnmouted()
          }
          resolve(params.type)
        },
        confirm(params) {
          events.confirm && events.confirm.call(this, params)
        },
        show(params) {
          events.show && events.show.call(this, params)
        }
      }

      $modal = createComponent({
        el: document.createElement('div'),
        propsData: Object.assign(
          {
            'tiny_mode': TINYModal.tiny_mode,
            'tiny_theme': TINYModal.tiny_theme
          },
          options
        ),
        component: options.componentType === 'popconfirm' ? Popconfirm : TINYModal
      })

      const open = $modal[options.componentType === 'popconfirm' ? 'show' : 'open']
      if (open) {
        open()
      }
      setTimeout(() => (modalPromise.vm = $modal), 0)
    }
  })

  return modalPromise
}

const modal = Modal

const types = ['alert', 'confirm', 'message', 'popconfirm']

const defOpts = {
  alert: {
    showFooter: true,
    type: 'alert'
  },
  confirm: {
    showFooter: true,
    status: 'question',
    type: 'confirm'
  },
  message: {
    mask: false,
    lockView: false,
    showHeader: false,
    showClose: false,
    type: 'message'
  },
  popconfirm: {}
}

types.forEach((type) => {
  TINYModal[type] = Modal[type] = function (message, title, options) {
    let opts

    if (typeof message === 'object' && message !== null) {
      opts = message
    } else if (title) {
      opts = { title }
    }

    if (message === undefined || message === null) {
      message = ''
    }

    return modal({
      message: message.toString(),
      ...defOpts[type],
      ...opts,
      ...options,
      componentType: type
    })
  }
})

export const alert = (Modal as any).alert
export const message = (Modal as any).message
export const confirm = (Modal as any).confirm
export const popconfirm = (Modal as any).popconfirm

TINYModal.installed = false
setupComponent.TINYModal = {
  install(Vue) {
    if (TINYModal.installed) return
    // vue3 或 vue2
    const isVue2 = !!Vue.component
    const tinyMode = isVue2 ? Vue.prototype.tiny_mode : Vue.config.globalProperties.tiny_mode
    const tinyTheme = isVue2 ? Vue.prototype.tiny_theme : Vue.config.globalProperties.tiny_theme
    TINYModal.tiny_mode = process.env.TINY_MODE || (tinyMode && tinyMode.value)
    TINYModal.tiny_theme = tinyTheme && tinyTheme.value

    TINYModal.installed = true
  },
  init(root) {
    let prefix = root.$TinyModalApiPrefix || '$'

    root[`${prefix}alert`] = (Modal as any).alert
    root[`${prefix}message`] = (Modal as any).message
    root[`${prefix}confirm`] = (Modal as any).confirm
    root[`${prefix}popconfirm`] = (Modal as any).popconfirm
  }
}

TINYModal.install = function (Vue) {
  Vue.component(TINYModal.name, TINYModal)
}

export default TINYModal
