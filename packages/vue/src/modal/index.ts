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
import type { ComponentPublicInstance } from '@opentiny/vue-common'

// 定义Modal选项接口
interface ModalOptions {
  id?: string
  events?: {
    hide?: (params: any) => void
    confirm?: (params: any) => void
    show?: (params: any) => void
  }
  componentType?: 'alert' | 'confirm' | 'message' | 'popconfirm'
  message?: string
  title?: string
  showFooter?: boolean
  type?: string
  status?: string
  mask?: boolean
  lockView?: boolean
  showHeader?: boolean
  showClose?: boolean
  [key: string]: any
}

// 定义ModalPromise接口，扩展Promise
interface ModalPromise extends Promise<string> {
  vm?: ComponentPublicInstance
}

// 定义TINYModal接口
interface TINYModalInstance extends ComponentPublicInstance {
  version: string
  model: {
    prop: string
    event: string
  }
  tiny_mode?: boolean
  tiny_theme?: string
  installed: boolean
  alert: (message: string | ModalOptions, title?: string, options?: ModalOptions) => ModalPromise
  confirm: (message: string | ModalOptions, title?: string, options?: ModalOptions) => ModalPromise
  message: (message: string | ModalOptions, title?: string, options?: ModalOptions) => ModalPromise
  popconfirm: (message: string | ModalOptions, title?: string, options?: ModalOptions) => ModalPromise
  install: (Vue: any) => void
}

// 定义setupComponent接口
interface SetupComponent {
  TINYModal: {
    install: (Vue: any) => void
    init: (root: any) => void
  }
}

// 扩展TINYModal类型
const TINYModalComponent = TINYModal as unknown as TINYModalInstance

TINYModalComponent.version = version

TINYModalComponent.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

export function Modal(options: ModalOptions): ModalPromise {
  const modalPromise = new Promise<string>((resolve) => {
    if (options && options.id && MsgQueue.some((comp) => comp.id === options.id)) {
      resolve('exist')
    } else {
      let events = options.events || {}
      let $modal: ComponentPublicInstance
      options.events = Object.assign({}, events, {
        hide(params: any) {
          events.hide && events.hide.call(this, params)
          if ($modal && 'beforeUnmouted' in $modal) {
            ;($modal as any).beforeUnmouted()
          }
          resolve(params.type)
        },
        confirm(params: any) {
          events.confirm && events.confirm.call(this, params)
        },
        show(params: any) {
          events.show && events.show.call(this, params)
        }
      })

      $modal = createComponent({
        el: document.createElement('div'),
        propsData: Object.assign(
          {
            'tiny_mode': TINYModalComponent.tiny_mode,
            'tiny_theme': TINYModalComponent.tiny_theme
          },
          options
        ),
        component: options.componentType === 'popconfirm' ? Popconfirm : TINYModalComponent
      })

      const open = $modal[options.componentType === 'popconfirm' ? 'show' : 'open'] as Function
      if (open) {
        open()
      }
      setTimeout(() => {
        ;(modalPromise as ModalPromise).vm = $modal
      }, 0)
    }
  }) as ModalPromise
  return modalPromise
}
const modal = Modal
const types = ['alert', 'confirm', 'message', 'popconfirm'] as const
type ModalType = (typeof types)[number]

const defOpts: Record<ModalType, Partial<ModalOptions>> = {
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
  TINYModalComponent[type] = Modal[type] = function (
    message: string | ModalOptions,
    title?: string,
    options?: ModalOptions
  ): ModalPromise {
    let opts: Partial<ModalOptions> = {}

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

TINYModalComponent.installed = false
;(setupComponent as SetupComponent).TINYModal = {
  install(Vue: any) {
    if (TINYModalComponent.installed) return
    // vue3 或 vue2
    const isVue2 = !!Vue.component
    const tinyMode = isVue2 ? Vue.prototype.tiny_mode : Vue.config.globalProperties.tiny_mode
    const tinyTheme = isVue2 ? Vue.prototype.tiny_theme : Vue.config.globalProperties.tiny_theme
    const specifyPc = typeof process === 'object' ? process.env?.TINY_MODE : null
    TINYModalComponent.tiny_mode = specifyPc || (tinyMode && tinyMode.value)
    TINYModalComponent.tiny_theme = tinyTheme && tinyTheme.value
    TINYModalComponent.installed = true
  },
  init(root: any) {
    let prefix = root.$TinyModalApiPrefix || root.$apiPrefix || '$'

    root[`${prefix}alert`] = (Modal as any).alert
    root[`${prefix}message`] = (Modal as any).message
    root[`${prefix}confirm`] = (Modal as any).confirm
    root[`${prefix}popconfirm`] = (Modal as any).popconfirm
  }
}

TINYModalComponent.install = function (Vue: any) {
  Vue.component(TINYModalComponent.name, TINYModalComponent)
}

export default TINYModalComponent
