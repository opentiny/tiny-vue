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
import { version } from './package.json'

TINYModal.version = version

TINYModal.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

export function Modal(options) {
  return new Promise((resolve) => {
    if (options && options.id && MsgQueue.some((comp) => comp.id === options.id)) {
      resolve('exist')
    } else {
      let events = options.events || {}
      let $modal

      options.events = {
        ...events,
        hide(params) {
          events.hide && events.hide.call(this, params)

          $modal.beforeUnmouted()
          resolve(params.type)
        }
      }

      $modal = createComponent({
        el: document.createElement('div'),
        propsData: options,
        component: TINYModal
      })

      $modal.open()
    }
  })
}

const modal = Modal

const types = ['alert', 'confirm', 'message']

types.forEach((type, index) => {
  let defOpts = { showFooter: true }

  if (index === 2) {
    defOpts = {
      mask: false,
      lockView: false,
      showHeader: false
    }
  }

  defOpts.type = type

  if (index === 1) {
    defOpts.status = 'question'
  }

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
      type,
      ...defOpts,
      ...opts,
      ...options
    })
  }
})

export const alert = (Modal as any).alert
export const message = (Modal as any).message
export const confirm = (Modal as any).confirm

TINYModal.installed = false
setupComponent.TINYModal = {
  install(Vue) {
    if (TINYModal.installed) return
    // vue3 或 vue2
    const isVue2 = !!Vue.component
    const tinyMode = isVue2 ? Vue.prototype.tiny_mode : Vue.config.globalProperties.tiny_mode
    TINYModal.tiny_mode = process.env.TINY_MODE || (tinyMode && tinyMode.value)
    TINYModal.installed = true
  },
  init(root) {
    let prefix = root.$TinyModalApiPrefix || '$'

    root[`${prefix}alert`] = (Modal as any).alert
    root[`${prefix}message`] = (Modal as any).message
    root[`${prefix}confirm`] = (Modal as any).confirm
  }
}

TINYModal.install = function (Vue) {
  Vue.component(TINYModal.name, TINYModal)
}

export default TINYModal
