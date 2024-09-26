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

import { createComponent, appProperties, hooks } from '@opentiny/vue-common'
import Drawer from './index'
import { $constants } from './index'

// 默认 props
export const defaultConfigs = {
  customClass: null,
  placement: 'right',
  width: null,
  height: null,
  title: '',
  showClose: true,
  showHeader: true,
  showFooter: false,
  mask: true,
  maskClosable: true,
  dragable: false,
  lockScroll: true,
  flex: false,
  zIndex: 2000,
  beforeClose: null,
  tipsProps: null
}

export default (configs = {}) => {
  const events = {
    onOpen: (params: unknown) => {
      if (typeof configs.events?.open === 'function') {
        configs.events.open(params)
      }
    },
    onClose: (params: unknown) => {
      if (typeof configs.events?.close === 'function') {
        configs.events.close(params)
      }
    },
    onConfirm: (params: unknown) => {
      if (typeof configs.events?.confirm === 'function') {
        configs.events.confirm(params)
      }
    }
  }
  const options = {
    ...defaultConfigs,
    ...configs,
    ...events
  }

  const instance = createComponent({
    component: Drawer,
    propsData: {
      ...options,
      _constants: $constants,
      tiny_mode: configs.tiny_mode || appProperties().tiny_mode?.value
    },
    el: document.createElement('div')
  })
  const parent = document.body
  parent.appendChild(instance.$el)
  hooks.nextTick(() => {
    instance.open()
  })

  return instance
}
