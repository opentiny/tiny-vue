import CalendarBar from './src/index'
import { version } from './package.json'

CalendarBar.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
CalendarBar.install = function (Vue) {
  Vue.component(CalendarBar.name, CalendarBar)
}

CalendarBar.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    CalendarBar.install(window.Vue)
  }
}

export default CalendarBar
