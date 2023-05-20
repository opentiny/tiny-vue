import TimePickerMobile from './src/mobile-first.vue'
import { version } from './package.json'

TimePickerMobile.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
TimePickerMobile.install = function (Vue) {
  Vue.component(TimePickerMobile.name, TimePickerMobile)
}

TimePickerMobile.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    TimePickerMobile.install(window.Vue)
  }
}

export default TimePickerMobile
