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
import MultiSelect from './src/index'
import '@opentiny/vue-theme-mobile/multi-select/index.css'

/* istanbul ignore next */
MultiSelect.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

MultiSelect.install = function (Vue) {
  Vue.component(MultiSelect.name, MultiSelect)
}

MultiSelect.version = process.env.COMPONENT_VERSION

if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    MultiSelect.install(window.Vue)
  }
}

export default MultiSelect
