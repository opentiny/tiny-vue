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
import CalendarView from './src/index'
import '@opentiny/vue-theme/calendar-view/index.less'
import { version } from './package.json'

CalendarView.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}
/* istanbul ignore next */
CalendarView.install = function (Vue) {
  Vue.component(CalendarView.name, CalendarView)
}

CalendarView.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    CalendarView.install(window.Vue)
  }
}

export default CalendarView
