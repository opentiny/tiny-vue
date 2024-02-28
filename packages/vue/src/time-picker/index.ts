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
import Picker from '@opentiny/vue-picker'
import '@opentiny/vue-theme/time-picker/index.less'
import { extend } from '@opentiny/vue-renderless/common/object'
import { $prefix, $props } from '@opentiny/vue-common'
import { version } from './package.json'

const TimePicker = extend(true, { props: { componentName: { type: String, default: 'TimePicker' } } }, Picker, {
  props: {
    ...$props,
    type: {
      type: String,
      default: 'time'
    }
  },
  name: $prefix + 'TimePicker'
})

/* istanbul ignore next */
TimePicker.install = function (Vue) {
  Vue.component(TimePicker.name, TimePicker)
}

TimePicker.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    TimePicker.install(window.Vue)
  }
}

export default TimePicker
