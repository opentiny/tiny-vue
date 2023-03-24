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
import Fullscreen from './src/index.vue'
import FullscreenApi from '@opentiny/vue-renderless/common/deps/fullscreen/apis'
import '@opentiny/vue-theme/fullscreen/index.less'
import { version } from './package.json'

const apis = ['exit', 'enter', 'element', 'getState', 'isEnabled', 'isFullscreen', 'options', 'request', 'support', 'toggle']

apis.forEach((api) => {
  if (FullscreenApi[api] && !Fullscreen[api]) {
    Fullscreen[api] = FullscreenApi[api]
  }
})

/* istanbul ignore next */
Fullscreen.install = function (Vue) {
  Vue.component(Fullscreen.name, Fullscreen)
}

Fullscreen.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Fullscreen.install(window.Vue)
  }
}

export default Fullscreen
