import Country from './src/index'
import '@opentiny/vue-theme/country/index.css'

Country.model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
Country.install = function (Vue) {
  Vue.component(Country.name, Country)
}

Country.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Country.install(window.Vue)
  }
}

export default Country
