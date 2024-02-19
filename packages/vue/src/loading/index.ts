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
import service from './src/service'
import directive from './src/directive'
import { setupComponent } from '@opentiny/vue-common'
import { version } from './package.json'

const Loadings: any = {
  install(app) {
    app.directive('loading', directive)
  },
  service,
  directive,
  version
}

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Loadings.install(window.Vue)
  }
}

setupComponent.TINYLoading = {
  init(root) {
    let prefix = root.$apiPrefix || '$'
    root[`${prefix}loading`] = service
  }
}

export default Loadings
