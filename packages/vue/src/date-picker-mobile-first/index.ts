import DatePickerMobile from './src/mobile-first.vue'
import { version } from './package.json'

DatePickerMobile.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
DatePickerMobile.install = function (Vue) {
  Vue.component(DatePickerMobile.name, DatePickerMobile)
}

DatePickerMobile.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    DatePickerMobile.install(window.Vue)
  }
}

export default DatePickerMobile
