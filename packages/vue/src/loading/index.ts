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
import type { App } from '@opentiny/vue-common'
import type { ILoadingState } from '@opentiny/vue-renderless/types/loading.type'

// 定义LoadingConfig接口
interface LoadingConfig {
  text?: string | null
  body?: boolean
  lock?: boolean
  customClass?: string
  fullscreen?: boolean
  iconSize?: string
  target?: HTMLElement | string
  size?: string
  loadingImg?: string
  tiny_mode?: string
}

// 定义LoadingInstance接口
interface LoadingInstance {
  state: ILoadingState
  $el: HTMLElement
  originalPosition?: string
  originalOverflow?: string
}

// 定义Loading服务的类型
type LoadingService = (config?: LoadingConfig) => LoadingInstance

// 定义LoadingPlugin接口
interface LoadingPlugin {
  install: (app: App) => void
  service: LoadingService
  directive: any
  version: string
}

// 定义Root接口
interface Root {
  $apiPrefix?: string
  [key: string]: any
}

// 向setupComponent添加TINYLoading属性
// @ts-expect-error setupComponent上没有TINYLoading属性，但是在运行时会添加这个属性
setupComponent.TINYLoading = {
  init(root: Root) {
    let prefix = root.$apiPrefix || '$'
    root[`${prefix}loading`] = service
  }
}

const Loadings: LoadingPlugin = {
  install(app: App) {
    app.directive('loading', directive)
  },
  service,
  directive,
  version
}

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    // @ts-expect-error window.Vue可能是Vue2或Vue3实例，类型兼容性在运行时处理
    Loadings.install(window.Vue)
  }
}

export default Loadings
