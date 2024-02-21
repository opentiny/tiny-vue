import Amount from './src/index'
import '@opentiny/vue-theme/amount/index.less'
import { version } from './package.json'

Amount.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Amount.install = function (Vue) {
  Vue.component(Amount.name, Amount)
}

Amount.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Amount.install(window.Vue)
  }
}

export default Amount
