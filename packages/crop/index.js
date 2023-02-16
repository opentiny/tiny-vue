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
import Crop from './src/index.vue'
import '@opentiny/vue-theme/crop/index.css'

/* istanbul ignore next */
Crop.install = function (Vue) {
  Vue.component(Crop.name, Crop)
}

Crop.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Crop.install(window.Vue)
  }
}

export default Crop
