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
import service from './src/service.js'
import directive from './src/directive.js'
import '@opentiny/vue-theme/loading/index.less'
import { setupComponent } from '@opentiny/vue-common'
import { version } from './package.json'

let Loadings = {}

/* istanbul ignore next */
Loadings.install = function (app) {
  app.directive('loading', directive)
}

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Loadings.install(window.Vue)
  }
}

setupComponent.TINYLoading = {
  init(root) {
    root.$loading = service
  }
}

Loadings.service = service
Loadings.directive = directive
Loadings.version = version

export default Loadings
