import Country from './src/index'
import '@opentiny/vue-theme/country/index.less'
import { version } from './package.json'

Country.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Country.install = function (Vue) {
  Vue.component(Country.name, Country)
}

Country.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Country.install(window.Vue)
  }
}

export default Country
