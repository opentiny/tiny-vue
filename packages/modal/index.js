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

TINYModal.version = process.env.COMPONENT_VERSION

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

export let alert = Modal.alert
export let message = Modal.message
export let confirm = Modal.confirm

TINYModal.installed = false
setupComponent.TINYModal = {
  install(Vue) {
    if (TINYModal.installed) return

    Vue.component(TINYModal.name, TINYModal)

    TINYModal.installed = true
  },
  init(root) {
    root.$alert = Modal.alert
    root.$message = Modal.message
    root.$confirm = Modal.confirm
  }
}

TINYModal.install = function (Vue) {
  setupComponent.TINYModal.install(Vue)
}

export default TINYModal
