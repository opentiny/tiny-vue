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
import { extend } from '@opentiny/vue-renderless/common/object'
import { $prefix } from '@opentiny/vue-common'

const TimeSelect = extend(
  true,
  { props: { componentName: { type: String, default: 'TimeSelect' } } },
  Picker,
  {
    props: {
      type: {
        type: String,
        default: 'time'
      }
    },
    name: $prefix + 'TimeSelect'
  }
)

/* istanbul ignore next */
TimeSelect.install = function (Vue) {
  Vue.component(TimeSelect.name, TimeSelect)
}

TimeSelect.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    TimeSelect.install(window.Vue)
  }
}

export default TimeSelect
