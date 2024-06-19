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
import Picker from './src/index'
import '@opentiny/vue-theme/picker/index.less'
import '@opentiny/vue-theme/input/index.less'
import { version } from './package.json'
import PickerPc from './src/pc.vue'

Picker.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Picker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
}

Picker.version = version

// 区别aui，pc层应为单层组件，需要导出pc.vue给date-picker使用
export { PickerPc }

export default Picker
