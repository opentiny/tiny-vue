import Currency from './src/index'
import '@opentiny/vue-theme/currency/index.less'
import { version } from './package.json'

Currency.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Currency.install = function (Vue) {
  Vue.component(Currency.name, Currency)
}

Currency.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Currency.install(window.Vue)
  }
}

export default Currency
