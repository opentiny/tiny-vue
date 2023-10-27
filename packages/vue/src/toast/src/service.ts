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
import Toast from './index'

const defaults = {
  type: 'text'
}

export default (configs = {}) => {
  configs = { ...defaults, ...configs }
  let parent = document.body
  let instance = createComponent({
    component: Toast,
    propsData: {},
    el: document.createElement('div')
  })

  for (const key in configs) {
    if (Object.prototype.hasOwnProperty.call(configs, key)) {
      instance.state[key] = configs[key]
    }
  }

  parent.appendChild(instance.$el)

  setTimeout(() => {
    parent.removeChild(instance.$el)
  }, instance.state.time)

  return instance
}
