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
import CheckboxGroup from './src/index'
import { version } from './package.json'

CheckboxGroup.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
CheckboxGroup.install = function (Vue) {
  Vue.component(CheckboxGroup.name, CheckboxGroup)
}

CheckboxGroup.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    CheckboxGroup.install(window.Vue)
  }
}

export default CheckboxGroup
